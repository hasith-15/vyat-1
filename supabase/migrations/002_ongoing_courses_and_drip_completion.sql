-- Migration: 002_ongoing_courses_and_drip_completion.sql
-- Description: Add curriculum completion status and total planned lessons to skills,
-- and update completion trigger so ongoing/daily upload courses don't prematurely complete.

-- 1. Add columns to skills table
ALTER TABLE skills 
ADD COLUMN IF NOT EXISTS is_curriculum_complete BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE skills 
ADD COLUMN IF NOT EXISTS total_planned_lessons INTEGER DEFAULT NULL;

-- 2. Update completion check function to guard against premature completion
CREATE OR REPLACE FUNCTION check_skill_completion()
RETURNS TRIGGER AS $$
DECLARE
  v_skill_id UUID;
  v_total_required INTEGER;
  v_completed INTEGER;
  v_requirements JSONB;
  v_min_pct NUMERIC;
  v_quiz_required BOOLEAN;
  v_min_quiz_pct NUMERIC;
  v_best_quiz_score NUMERIC;
  v_is_curriculum_complete BOOLEAN;
  v_total_planned_lessons INTEGER;
  v_is_complete BOOLEAN := false;
BEGIN
  IF NEW.is_completed = true AND (OLD.is_completed IS NULL OR OLD.is_completed = false) THEN
    v_skill_id := NEW.skill_id;

    -- Fetch skill configuration
    SELECT 
      completion_requirements, 
      COALESCE(is_curriculum_complete, false),
      total_planned_lessons
    INTO 
      v_requirements, 
      v_is_curriculum_complete,
      v_total_planned_lessons
    FROM skills WHERE id = v_skill_id;

    -- GUARD 1: If curriculum is still ongoing (daily upload in progress), do NOT auto-complete or unlock certificates!
    IF NOT v_is_curriculum_complete THEN
      RETURN NEW;
    END IF;

    v_min_pct := COALESCE((v_requirements->>'min_lessons_completed_pct')::numeric, 100);
    v_quiz_required := COALESCE((v_requirements->>'quiz_required')::boolean, false);
    v_min_quiz_pct := (v_requirements->>'min_quiz_score_pct')::numeric;

    -- Count actual required active lessons uploaded
    SELECT COUNT(*) INTO v_total_required
    FROM lessons WHERE skill_id = v_skill_id AND is_required = true AND is_active = true;

    -- GUARD 2: If admin specified total planned lessons (e.g. 30 lessons planned), use the higher target
    IF v_total_planned_lessons IS NOT NULL AND v_total_planned_lessons > v_total_required THEN
      v_total_required := v_total_planned_lessons;
    END IF;

    -- Count lessons completed by this student
    SELECT COUNT(*) INTO v_completed
    FROM lesson_progress lp
    JOIN lessons l ON l.id = lp.lesson_id
    WHERE lp.student_id = NEW.student_id
      AND lp.skill_id = v_skill_id
      AND lp.is_completed = true
      AND l.is_required = true
      AND l.is_active = true;

    IF v_total_required > 0 AND (v_completed::numeric / v_total_required * 100) >= v_min_pct THEN
      v_is_complete := true;
    ELSIF v_total_required = 0 THEN
      v_is_complete := true;
    END IF;

    -- Optional quiz evaluation
    IF v_is_complete AND v_quiz_required AND v_min_quiz_pct IS NOT NULL THEN
      SELECT MAX(
        CASE WHEN total_marks > 0 THEN (score::numeric / total_marks * 100) ELSE 0 END
      ) INTO v_best_quiz_score
      FROM quiz_attempts
      WHERE student_id = NEW.student_id AND skill_id = v_skill_id AND completed_at IS NOT NULL;

      IF v_best_quiz_score IS NULL OR v_best_quiz_score < v_min_quiz_pct THEN
        v_is_complete := false;
      END IF;
    END IF;

    -- Grant completion and unlock certificate only when truly complete
    IF v_is_complete THEN
      UPDATE student_skill_access
      SET status = 'completed',
          completion_date = now(),
          access_expiry_date = now() + interval '6 months'
      WHERE student_id = NEW.student_id
        AND skill_id = v_skill_id
        AND status = 'active';

      UPDATE certificates
      SET status = 'unlocked',
          issued_at = now()
      WHERE student_id = NEW.student_id
        AND skill_id = v_skill_id
        AND status = 'generated';
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Function to handle when an admin finalizes a skill's curriculum
-- Automatically unlocks certificate for students who have already completed all lessons
CREATE OR REPLACE FUNCTION finalize_skill_curriculum(target_skill_id UUID)
RETURNS void AS $$
DECLARE
  v_rec RECORD;
  v_total_required INTEGER;
BEGIN
  -- Count total required lessons
  SELECT COUNT(*) INTO v_total_required
  FROM lessons WHERE skill_id = target_skill_id AND is_required = true AND is_active = true;

  -- Update skill status
  UPDATE skills 
  SET is_curriculum_complete = true 
  WHERE id = target_skill_id;

  -- Find students who completed all required lessons
  FOR v_rec IN 
    SELECT ssa.student_id, COUNT(lp.id) as completed_count
    FROM student_skill_access ssa
    JOIN lesson_progress lp ON lp.student_id = ssa.student_id AND lp.skill_id = target_skill_id AND lp.is_completed = true
    JOIN lessons l ON l.id = lp.lesson_id AND l.is_required = true AND l.is_active = true
    WHERE ssa.skill_id = target_skill_id
    GROUP BY ssa.student_id
    HAVING COUNT(lp.id) >= v_total_required
  LOOP
    UPDATE student_skill_access
    SET status = 'completed',
        completion_date = now(),
        access_expiry_date = now() + interval '6 months'
    WHERE student_id = v_rec.student_id AND skill_id = target_skill_id;

    UPDATE certificates
    SET status = 'unlocked',
        issued_at = now()
    WHERE student_id = v_rec.student_id AND skill_id = target_skill_id AND status = 'generated';
  END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Clean up any premature unlocks on skills that are still ongoing (not complete)
UPDATE student_skill_access
SET status = 'active', completion_date = NULL
WHERE skill_id IN (SELECT id FROM skills WHERE is_curriculum_complete = false)
  AND status = 'completed';

UPDATE certificates
SET status = 'generated', issued_at = NULL
WHERE skill_id IN (SELECT id FROM skills WHERE is_curriculum_complete = false)
  AND status = 'unlocked';
