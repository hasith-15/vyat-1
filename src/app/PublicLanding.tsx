'use client';

import Link from 'next/link';
import {
  BookOpen, Award, CheckCircle2, ArrowRight,
  Cpu, Terminal, Sparkles, ChevronRight, Briefcase,
  Globe, GraduationCap
} from 'lucide-react';

interface Props {
  branches: any[];
  skillsCount: number;
  coursesCount: number;
}

const FAQS = [
  {
    q: 'What courses are available for CSE students on Vyat?',
    a: 'Vyat provides specialized curriculums covering Campus Placement Preparation, Core CS Subjects (Operating Systems, DBMS, Computer Networks), Data Structures & Algorithms (DSA), Full-Stack Web Development, and AI & Machine Learning. Every track is built specifically for Indian B.Tech / BE Computer Science students.'
  },
  {
    q: 'How does Vyat prepare Indian engineering students for campus placements?',
    a: 'Vyat bridges the gap between university theory and competitive hiring. Students learn high-frequency placement coding questions (LeetCode patterns), technical viva questions for core subjects, aptitude fundamentals, and how to build resume-worthy Full-Stack and AI projects.'
  },
  {
    q: 'Which core computer science subjects are covered for semester exams & interviews?',
    a: 'Vyat covers Operating Systems (concurrency, scheduling, memory management), Database Management Systems (SQL, normalization, ACID, indexing), Computer Networks (TCP/IP stack, routing, sockets), and Object-Oriented Programming (OOP in C++ and Java) matching Indian university syllabi (AKTU, VTU, Anna University, JNTU, SPPU) and placement interviews.'
  },
  {
    q: 'Are DSA (Data Structures & Algorithms) and Web Development included?',
    a: 'Yes. The DSA track covers Arrays, Linked Lists, Trees, Graphs, and Dynamic Programming with time-complexity analysis. The Web Development track teaches modern Full-Stack engineering using JavaScript, TypeScript, React, Next.js, Node.js, and databases to build real-world applications.'
  },
  {
    q: 'How does the AI Learning track help CSE students stand out to recruiters?',
    a: 'The AI Learning track teaches practical Python for data science, NumPy, Pandas, Scikit-learn, Neural Networks, and Generative AI applications. Rather than just theory, students build AI-powered applications that directly showcase modern engineering skills on their resumes and GitHub.'
  },
  {
    q: 'How does the daily drip video format fit an engineering student\'s timetable?',
    a: 'Engineering students in India balance 8 AM–4 PM college lectures, mandatory 75% attendance, and lab submissions. Vyat releases 1 focused lesson (15–25 mins) per day. This prevents binge burnout, builds consistent coding habits, and ensures steady progress throughout the semester.'
  },
  {
    q: 'Are Vyat certificates verified and accepted on resumes and LinkedIn?',
    a: 'Yes. Every Vyat certificate is tamper-proof with a unique verification ID and a public link. Unlike other platforms where users can skip videos to get certificates, Vyat strictly unlocks credentials only after every lesson and checkpoint in the curriculum has been completed.'
  }
];

const CURRICULUM_PILLARS = [
  {
    id: 'placements',
    title: 'Campus Placements & Interview Prep',
    hook: 'Master high-yield coding rounds and viva interviews for Indian product companies and top recruiters.',
    category: 'Placement Ready',
    badgeType: 'yellow',
    icon: Briefcase,
    highlights: [
      'High-frequency LeetCode interview problem patterns',
      'Technical viva questions & core system design fundamentals',
      'Resume project walkthroughs & GitHub portfolio guidance'
    ],
    tag: 'Tier-1 Placements'
  },
  {
    id: 'core-subjects',
    title: 'Core Subjects (OS, DBMS, Networks, OOP)',
    hook: 'Score top SGPA in semester exams and master fundamental theory tested in tech interview viva rounds.',
    category: 'University + GATE',
    badgeType: 'sky',
    icon: Cpu,
    highlights: [
      'OS: Process scheduling, paging & virtual memory',
      'DBMS: SQL queries, normalization, ACID properties & indexing',
      'Networks & OOP: TCP/IP stack & C++/Java design patterns'
    ],
    tag: 'AKTU · VTU · JNTU Syllabi'
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms (DSA)',
    hook: 'Build unshakeable intuition in algorithmic complexity and problem-solving patterns.',
    category: 'Problem Solving',
    badgeType: 'sky',
    icon: Terminal,
    highlights: [
      'Linear & non-linear structures: Trees, Graphs & Heaps',
      'Dynamic Programming, Greedy & Recursion blueprints',
      'Optimized implementations in C++, Java, and Python'
    ],
    tag: '100+ Curated Problems'
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    hook: 'Go from frontend fundamentals to scalable backend architecture with production-grade code.',
    category: 'Modern Tech Stack',
    badgeType: 'yellow',
    icon: Globe,
    highlights: [
      'Modern TypeScript, React 19 & Next.js App Router',
      'Node.js, Express, REST APIs & JWT authentication',
      'PostgreSQL, Supabase & cloud production deployments'
    ],
    tag: 'Ship Production Apps'
  },
  {
    id: 'ai-learning',
    title: 'Applied AI & Machine Learning',
    hook: 'Code-first AI curriculum built for CSE undergraduates from Python math to modern LLMs.',
    category: 'Cutting-Edge',
    badgeType: 'sky',
    icon: Sparkles,
    highlights: [
      'Python for AI: NumPy, Pandas, Scikit-learn & data pipelines',
      'Neural networks, Deep Learning & PyTorch foundations',
      'Generative AI: Embeddings, Vector DBs & RAG pipelines'
    ],
    tag: 'Build Intelligent Apps'
  },
  {
    id: 'systems-scale',
    title: 'Full B.Tech 4-Year Roadmap',
    hook: 'The complete structured roadmap designed to make you a top 1% engineer in your batch.',
    category: 'Systems & Scale',
    badgeType: 'yellow',
    icon: GraduationCap,
    highlights: [
      '1 Video a day habit system with zero binge burnout',
      'Interactive concept checkpoints for every single lesson',
      'LinkedIn verifiable credentials with anti-cheat protection'
    ],
    tag: 'Complete 4-Year Journey'
  }
];

export default function PublicLanding({ branches, skillsCount, coursesCount }: Props) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map((faq) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  };

  const courseListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': CURRICULUM_PILLARS.map((p, index) => ({
      '@type': 'Course',
      'position': index + 1,
      'name': p.title,
      'description': p.hook,
      'provider': {
        '@type': 'Organization',
        'name': 'Vyat',
        'sameAs': 'https://vyat-v3.vercel.app'
      }
    }))
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-slate-900 font-sans selection:bg-sky-500/20 selection:text-sky-900 flex flex-col antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />

      {/* ── 1. NAVBAR (EXPANSIVE GLASSMORPHISM) ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-slate-200/80 transition-all w-full">
        <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group" id="nav-brand-logo">
            <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-sm shadow-sky-600/25 group-hover:scale-105 transition-transform">
              <BookOpen size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#0F172A]">
                Vyat
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 -mt-1">
                Courses for CSE
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-600">
            <a href="#curriculum" className="hover:text-sky-600 transition-colors">Courses &amp; Pillars</a>
            <a href="#engineering-context" className="hover:text-sky-600 transition-colors">Why Engineering Students</a>
            <a href="#advantages" className="hover:text-sky-600 transition-colors">1 Video / Day Habit</a>
            <a href="#credentials" className="hover:text-sky-600 transition-colors">Verified Credentials</a>
            <a href="#faq" className="hover:text-sky-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" id="nav-login-btn">
              <button className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/explore" id="nav-explore-btn">
              <button className="px-6 py-2.5 text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-xl shadow-sm hover:shadow transition-all hover:scale-[1.02]">
                Explore Catalog
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="w-full flex flex-col items-center">
        {/* ── 2. HERO SECTION (EXPANSIVE STRETCHED LAYOUT) ── */}
        <section className="w-full pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] relative overflow-hidden">
          <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 text-center flex flex-col items-center">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FEF08A] border border-amber-300 text-amber-950 shadow-sm mb-6">
              <span>⚡</span>
              <span>#1 Learning Platform for CSE Students in India</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] max-w-5xl mx-auto leading-[1.12] mb-6">
              Master Computer Science.
              <span className="block mt-2 text-sky-600">Ace Placements &amp; Semester Exams.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
              Built specifically for Indian B.Tech / BE engineering students. Fast-track campus placements and university exams with structured daily drip lessons in Core CS, DSA, Web Dev, and AI.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Link href="/explore" className="w-full sm:w-auto" id="hero-cta-explore">
                <button className="w-full sm:w-auto px-9 py-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl shadow-md shadow-sky-600/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-base">
                  Browse All CSE Courses
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/login" className="w-full sm:w-auto" id="hero-cta-login">
                <button className="w-full sm:w-auto px-9 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2 text-base">
                  Student Sign In
                </button>
              </Link>
            </div>

            {/* ── GAP (2) ABOVE METRICS BAR & STRETCHED METRICS BAR (1) ── */}
            <div className="w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto mt-24 sm:mt-32 lg:mt-36 mb-16 sm:mb-24 lg:mb-28 p-8 sm:p-10 lg:p-12 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-left">
                <div className="md:border-r border-slate-100 last:border-r-0 pr-4">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">5 Pillars</p>
                  <p className="text-sm sm:text-base text-slate-500 font-medium mt-1.5">Placements, DSA, OS, Web &amp; AI</p>
                </div>
                <div className="md:border-r border-slate-100 last:border-r-0 pr-4">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-600 tracking-tight">1 Video/Day</p>
                  <p className="text-sm sm:text-base text-slate-500 font-medium mt-1.5">Drip habit without burnout</p>
                </div>
                <div className="md:border-r border-slate-100 last:border-r-0 pr-4">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">Dual Syllabus</p>
                  <p className="text-sm sm:text-base text-slate-500 font-medium mt-1.5">Semester marks + Viva prep</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-600 tracking-tight">100% Verified</p>
                  <p className="text-sm sm:text-base text-slate-500 font-medium mt-1.5">Tamper-proof credentials</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. PILLAR CARDS SECTION ("5 ESSENTIAL PILLARS") (WITH BIG GAP 3 ABOVE) ── */}
        <section id="curriculum" className="w-full pt-24 pb-24 sm:pt-32 sm:pb-32 lg:pt-36 lg:pb-36 bg-white border-b border-slate-200/80 relative">
          <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
                Comprehensive CSE Curriculums
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                5 Essential Pillars Every CSE Student Must Master
              </p>
              <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
                Whether you are aiming for high-paying product company campus placements or scoring top SGPA in semester exams, Vyat covers the entire Computer Science Engineering roadmap.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
              {CURRICULUM_PILLARS.map((pillar) => {
                const IconComponent = pillar.icon;
                const isYellow = pillar.badgeType === 'yellow';

                return (
                  <article
                    key={pillar.id}
                    className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:scale-105 group-hover:border-sky-300 transition-all">
                          <IconComponent size={24} className="text-sky-600" />
                        </div>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                            isYellow
                              ? 'bg-amber-50 text-amber-900 border-amber-200'
                              : 'bg-sky-50 text-sky-800 border-sky-200'
                          }`}
                        >
                          {pillar.category}
                        </span>
                      </div>

                      {/* Title & Sub-hook */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 leading-snug">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                        {pillar.hook}
                      </p>

                      {/* 3-Point Checklist */}
                      <ul className="space-y-3 text-sm font-medium text-slate-700 mb-8">
                        {pillar.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-sky-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono font-medium text-slate-400">
                        {pillar.tag}
                      </span>
                      <Link
                        href="/explore"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                      >
                        Explore Track <ArrowRight size={15} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. WHY ENGINEERING STUDENTS CHOOSE VYAT (BENTO CARDS) ── */}
        <section id="engineering-context" className="w-full py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-b border-slate-200/80 relative">
          <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
                The Indian College Reality
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Why Engineering Students Across India Choose Vyat
              </p>
              <p className="text-slate-600 mt-4 text-base sm:text-lg">
                College lectures and traditional online courses fail Indian engineering students in predictable ways: outdated syllabi and unmanageable 60-hour video dumps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Obsidian Dark Contrast Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#0F172A] text-white border border-slate-800 shadow-md flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-[#FEF08A]/15 text-[#FEF08A] border border-[#FEF08A]/30 mb-5">
                    01 · College Timetable Friendly
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">1 Daily Lesson Fits Your Schedule</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Indian engineering colleges enforce 75% mandatory attendance, long lab sessions, and internal assignments. Vyat’s <strong className="text-white">1 lesson/day rhythm (15–25 mins)</strong> fits seamlessly into your evening routine without late-night burnout.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800 mt-8 text-xs text-slate-400 font-medium">
                  ✓ Zero binge burnout · Consistent daily progress
                </div>
              </div>

              {/* Card 2: Light Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-sky-50 text-sky-800 border border-sky-200 mb-5">
                    02 · Dual Syllabus Coverage
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">Semester GPA + Placement Coding</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    You don’t have to sacrifice university marks to prepare for tech companies. Our courses cover both university semester theoretical deep-dives (OS, DBMS, Computer Networks) and rigorous LeetCode coding patterns.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-8 text-xs text-slate-500 font-medium">
                  ✓ Matches AKTU, VTU, Anna Univ &amp; JNTU syllabi
                </div>
              </div>

              {/* Card 3: Light Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-amber-50 text-amber-900 border border-amber-200 mb-5">
                    03 · Modern Industry Tech
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">Full-Stack &amp; Generative AI</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    College syllabi rarely teach modern Next.js, TypeScript, cloud deployments, or Generative AI. Vyat brings production engineering directly to your screen with hands-on projects recruiters love.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-8 text-xs text-slate-500 font-medium">
                  ✓ 3 Full-stack &amp; AI portfolio capstones
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. 1 VIDEO / DAY HABIT ENGINE ── */}
        <section id="advantages" className="w-full py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-200/80 relative">
          <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
                Engineered for Long-Term Retention
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                How Daily Drip Learning Guarantees Mastery
              </p>
              <p className="text-slate-600 mt-4 text-base sm:text-lg">
                Consistency beats 40-hour weekend marathons every single time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-7 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-5 text-sm">
                  1
                </div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">1 Video Per Day</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  New video lessons release daily. Prevents bingeing and forgetting, building rock-solid recall for viva and interviews.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-5 text-sm">
                  2
                </div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">Placement Coding Rounds</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Step-by-step problem breakdowns that mimic the exact coding rounds used by leading tech recruiters.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-5 text-sm">
                  3
                </div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">Interactive MCQs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Instant checkpoints and concept tests after every lesson to verify your understanding immediately.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-5 text-sm">
                  4
                </div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">Verified Credentials</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tamper-proof verifiable certificates issued only when the full planned curriculum has been completed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. VERIFIED CERTIFICATE SPOTLIGHT ── */}
        <section id="credentials" className="w-full py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-b border-slate-200/80 relative">
          <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
            <div className="rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 bg-[#0F172A] text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF08A]/15 text-[#FEF08A] border border-[#FEF08A]/30 mb-5">
                  <Award size={14} className="text-[#FEF08A]" /> Verified Anti-Cheat Credential
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
                  Earn Credentials That Prove Practical Competency
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                  Unlike platforms where users skip videos to get a badge, Vyat strictly unlocks credentials only after every lesson and checkpoint in the curriculum has been completed. Share your authentic verification link on LinkedIn and your resume with total confidence.
                </p>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-xl text-slate-300">
                    <CheckCircle2 size={16} className="text-sky-400" /> Unique Credential ID
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-xl text-slate-300">
                    <CheckCircle2 size={16} className="text-sky-400" /> Public Verification URL
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-xl text-slate-300">
                    <CheckCircle2 size={16} className="text-sky-400" /> Anti-Fraud Guaranteed
                  </div>
                </div>
              </div>

              {/* Realistic Certificate Mockup Visual */}
              <div className="w-full max-w-md bg-white text-slate-900 border border-slate-200 shadow-2xl rounded-2xl p-7 sm:p-9 relative shrink-0">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      V
                    </div>
                    <span className="font-bold text-sm tracking-tight text-slate-900">Vyat Engineering</span>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200 rounded-full">
                    Anti-Cheat Verified
                  </span>
                </div>
                <div className="py-8 text-center">
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-400">Certificate of Completion</p>
                  <p className="text-2xl font-extrabold text-slate-900 mt-2">Aarav Patel</p>
                  <p className="text-xs text-slate-500 mt-1">has demonstrated practical mastery in</p>
                  <p className="text-base font-bold text-sky-700 mt-1">Data Structures &amp; Algorithms</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>ID: VYAT-2026-CSE-84920</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} /> Authenticated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FAQ SECTION ── */}
        <section id="faq" className="w-full py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-200/80 relative">
          <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
                Got Questions?
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Frequently Asked Questions for CSE Students
              </p>
              <p className="text-slate-600 mt-4 text-base sm:text-lg">
                Everything you need to know about Vyat courses, placements, and learning format.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm open:border-sky-300 transition-colors"
                >
                  <summary className="flex items-center justify-between font-semibold text-base sm:text-lg text-slate-900 cursor-pointer list-none">
                    <span>{faq.q}</span>
                    <ChevronRight size={18} className="text-slate-400 group-open:rotate-90 group-open:text-sky-600 transition-transform shrink-0 ml-4" />
                  </summary>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-3 border-t border-slate-200/60">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. PRE-FOOTER CTA BANNER ── */}
        <section className="w-full py-20 sm:py-28 lg:py-32 bg-[#0F172A] text-center relative overflow-hidden border-b border-slate-800">
          <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">
            <p className="text-[#FEF08A] text-xs font-semibold tracking-wider uppercase mb-3">
              ⚡ Accelerate Your Career
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
              Ready to Master Computer Science?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of engineering students across India mastering core computer science, DSA, Web Dev, and AI to secure top engineering placements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/explore">
                <button className="w-full sm:w-auto px-9 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2 text-base">
                  Explore All CSE Courses <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/login">
                <button className="w-full sm:w-auto px-9 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all text-base">
                  Sign In to Dashboard
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── 9. FOOTER (EXPANSIVE STRETCHED LAYOUT) ── */}
      <footer className="w-full bg-[#0B0F17] border-t border-slate-800/80 py-14 text-sm text-slate-400">
        <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">
              V
            </div>
            <span className="font-bold text-slate-100 text-base">Vyat</span>
            <span className="text-xs text-slate-500">· Courses for CSE &amp; Engineering Students in India</span>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-xs sm:text-sm font-semibold text-slate-400">
            <Link href="/explore" className="hover:text-white transition-colors">All Courses</Link>
            <a href="#curriculum" className="hover:text-white transition-colors">Placements &amp; Core CS</a>
            <a href="#engineering-context" className="hover:text-white transition-colors">Why Engineering</a>
            <Link href="/login" className="hover:text-white transition-colors">Student Login</Link>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Vyat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
