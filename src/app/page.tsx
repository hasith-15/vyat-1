import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import PublicLanding from './PublicLanding';

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // If authenticated user visits home, route to their relevant dashboard
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role === 'admin') {
      redirect('/admin/dashboard');
    }

    redirect('/dashboard');
  }

  // Unauthenticated guests and Search Engine Crawlers see the high-converting SEO landing page
  const [{ data: branches }, { count: skillsCount }, { count: coursesCount }] = await Promise.all([
    supabase.from('branches').select('*').eq('is_active', true).order('sort_order'),
    supabase.from('skills').select('*', { count: 'exact', head: true }).eq('is_active', true),
    supabase.from('courses').select('*', { count: 'exact', head: true }).eq('is_active', true),
  ]);

  return (
    <PublicLanding
      branches={branches || []}
      skillsCount={skillsCount || 24}
      coursesCount={coursesCount || 6}
    />
  );
}
