'use client';

import Link from 'next/link';
import {
  BookOpen, Award, CheckCircle2, ArrowRight, ShieldCheck,
  Cpu, Terminal, Sparkles, ChevronRight, Briefcase,
  Globe, Code2, GraduationCap, Star, Layers, Check
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
    tag: 'Placement Ready',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    icon: Briefcase,
    iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    description: 'Master on-campus and off-campus recruitment rounds for Indian product companies, tech giants, and high-growth startups.',
    highlights: [
      'Coding assessment rounds & LeetCode patterns',
      'Technical interview viva & system design fundamentals',
      'Resume-worthy project guidance & GitHub portfolio',
      'Aptitude & quantitative problem-solving strategies'
    ],
    badge: 'Tier-1 & Tier-2 Placement Ready'
  },
  {
    id: 'core-subjects',
    title: 'Core Subjects (OS, DBMS, Networks, OOP)',
    tag: 'University + GATE',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    icon: Cpu,
    iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    description: 'Score top SGPA in semester exams and confidently answer technical viva questions asked by tech recruiters.',
    highlights: [
      'Operating Systems: Processes, CPU scheduling, paging & virtual memory',
      'DBMS: SQL queries, relational algebra, ACID & normalization',
      'Computer Networks: OSI & TCP/IP stack, routing protocols, sockets',
      'OOP: Inheritance, polymorphism, and design principles in C++/Java'
    ],
    badge: 'Matches AKTU, VTU, Anna Univ & JNTU Syllabi'
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms (DSA)',
    tag: 'Problem Solving',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    icon: Terminal,
    iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    description: 'Build unshakeable intuition in data structures and algorithmic complexity to solve tough coding problems.',
    highlights: [
      'Arrays, Strings, Linked Lists, Stacks & Queues',
      'Binary Trees, BST, Graphs, BFS/DFS & Dijkstra',
      'Dynamic Programming, Recursion & Greedy Algorithms',
      'Optimized implementations in C++, Java, and Python'
    ],
    badge: '100+ Curated Placement Problems'
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    tag: 'Modern Tech Stack',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    icon: Globe,
    iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    description: 'Go from frontend fundamentals to scalable backend architecture. Build production apps recruiters love.',
    highlights: [
      'Modern JavaScript (ES6+), TypeScript & HTML/CSS responsive design',
      'React & Next.js frontend architecture with modern state management',
      'Node.js, Express, REST APIs & authentication workflows',
      'PostgreSQL, MongoDB, Supabase & cloud production deployment'
    ],
    badge: 'Ship 3 Full-Stack Capstones'
  },
  {
    id: 'ai-learning',
    title: 'AI Learning & Machine Learning',
    tag: 'Cutting-Edge',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    icon: Sparkles,
    iconColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    description: 'Code-first AI education built for CSE undergraduates. Master mathematical foundations and modern generative AI.',
    highlights: [
      'Python for AI & Data Science: NumPy, Pandas & Matplotlib',
      'Machine Learning: Regression, classification, clustering & Scikit-learn',
      'Deep Learning & Neural Networks: CNNs, transformers & PyTorch basics',
      'Generative AI: LLM prompting, embeddings, and RAG pipelines'
    ],
    badge: 'Build Intelligent AI Apps'
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
      'description': p.description,
      'provider': {
        '@type': 'Organization',
        'name': 'Vyat',
        'sameAs': 'https://vyat-v3.vercel.app'
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />

      {/* ── TOP NAVIGATION ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070913]/85 border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <BookOpen size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Vyat
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 -mt-1">
                Courses for CSE
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#curriculum" className="hover:text-white transition-colors">Courses &amp; Pillars</a>
            <a href="#engineering-context" className="hover:text-white transition-colors">Why Engineering Students</a>
            <a href="#advantages" className="hover:text-white transition-colors">1 Video / Day Habit</a>
            <a href="#credentials" className="hover:text-white transition-colors">Verified Credentials</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" id="nav-login-btn">
              <button className="px-4 py-2.5 text-sm font-bold text-slate-200 hover:text-white rounded-xl hover:bg-white/5 transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/explore" id="nav-explore-btn">
              <button className="px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]">
                Explore Catalog
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── HERO SECTION (SEO H1 & CORE INTENT) ── */}
        <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
          {/* Ambient lighting glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46rem] h-[28rem] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-12 right-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            {/* National Target Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-blue-300 backdrop-blur-md mb-8 animate-fade-in shadow-sm">
              <span className="text-base leading-none">🇮🇳</span>
              <span>#1 Learning Platform for CSE &amp; Engineering Students in India</span>
            </div>

            {/* Targeted SEO Primary H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.12] mb-6">
              Courses for CSE:{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Placements, Core Subjects, DSA, Web Dev &amp; AI Learning
              </span>
            </h1>

            {/* Lead Keyword-Rich Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 font-medium">
              Built specifically for Indian B.Tech / BE engineering students. Fast-track campus placements and semester exams with structured daily drip lessons in <strong className="text-white">Core Subjects (OS, DBMS, Networks)</strong>, <strong className="text-white">DSA</strong>, <strong className="text-white">Full-Stack Web Dev</strong>, and <strong className="text-white">AI Learning</strong>.
            </p>

            {/* Interactive Pillar Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-amber-300">
                <Briefcase size={13} /> Campus Placements
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-blue-300">
                <Cpu size={13} /> Core Subjects (OS, DBMS, CN)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-emerald-300">
                <Terminal size={13} /> DSA in C++ / Java / Python
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-cyan-300">
                <Globe size={13} /> Full-Stack Web Dev
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-violet-300">
                <Sparkles size={13} /> AI &amp; Machine Learning
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/explore" className="w-full sm:w-auto" id="hero-cta-explore">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2 text-base">
                  Browse All CSE Courses
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/login" className="w-full sm:w-auto" id="hero-cta-login">
                <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-base">
                  Student Sign In
                </button>
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-16 pt-10 border-t border-white/10 w-full max-w-4xl text-left">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">5 Pillars</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">Placements, Core, DSA, Web &amp; AI</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-400">1 Video/Day</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">Drip Habit Learning</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400">Semester + Job</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">Dual Syllabus Coverage</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">Verified</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">Anti-Cheat Credentials</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── 5 DEDICATED CURRICULUM PILLARS SECTION ── */}
        <section id="curriculum" className="py-24 bg-[#0a0d1d] relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-black tracking-widest uppercase text-blue-400 mb-3">
                Comprehensive CSE Curriculums
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                5 Essential Pillars Every CSE Student Must Master
              </p>
              <p className="text-slate-400 mt-4 text-base">
                Whether you are aiming for high-paying product company campus placements or scoring top SGPA in semester exams, Vyat covers the entire Computer Science Engineering roadmap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CURRICULUM_PILLARS.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <article
                    key={pillar.id}
                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${pillar.iconColor} group-hover:scale-110 transition-transform`}>
                          <IconComponent size={28} />
                        </div>
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${pillar.tagColor}`}>
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                        {pillar.description}
                      </p>

                      <ul className="space-y-2.5 text-xs font-semibold text-slate-300 mb-6">
                        {pillar.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <span className="block text-[11px] font-bold text-slate-400 mb-4">
                        {pillar.badge}
                      </span>
                      <Link
                        href="/explore"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors"
                      >
                        Explore Pillar Modules <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}

              {/* Special 6th Card: All-in-One Catalog Invitation */}
              <article className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/30 via-indigo-950/20 to-purple-900/20 border border-blue-500/20 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                    <GraduationCap size={28} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 inline-block mb-3">
                    Full B.Tech Roadmap
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Start Your Complete CSE Journey
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Unlock all courses, practice questions, daily video drips, and verified certificates designed to make you top 1% engineer in your batch.
                  </p>
                  <ul className="space-y-2 text-xs font-semibold text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-blue-400" /> 1 Video a day habit system
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-blue-400" /> Interactive quizzes &amp; MCQs
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-blue-400" /> LinkedIn verifiable credentials
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6">
                  <Link href="/explore">
                    <button className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">
                      Explore All Courses Catalog
                    </button>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── DESIGNED FOR INDIAN ENGINEERING STUDENTS ── */}
        <section id="engineering-context" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-black tracking-widest uppercase text-blue-400 mb-3">
                The Indian College Reality
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Engineering Students Across India Choose Vyat
              </p>
              <p className="text-slate-400 mt-4 text-base">
                College lectures and traditional online courses fail Indian engineering students in two predictable ways: outdated syllabi and unmanageable 60-hour video dumps. Vyat was built differently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                <div className="text-3xl font-extrabold text-blue-400 mb-3">01</div>
                <h3 className="text-xl font-bold text-white mb-2">College Timetable Friendly</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Indian engineering colleges enforce 75% mandatory attendance, long lab sessions, and internal assignments. Vyat&apos;s <strong className="text-white">1 lesson/day rhythm (15–25 mins)</strong> fits seamlessly into your evening routine without burnout.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                <div className="text-3xl font-extrabold text-indigo-400 mb-3">02</div>
                <h3 className="text-xl font-bold text-white mb-2">Semester GPA + Placement Tests</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  You don&apos;t have to sacrifice your university marks to prepare for tech companies. Our courses cover both university semester theoretical deep-dives (OS/DBMS/CN) and rigorous LeetCode-style coding questions.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                <div className="text-3xl font-extrabold text-emerald-400 mb-3">03</div>
                <h3 className="text-xl font-bold text-white mb-2">Modern Tech: Web Dev &amp; AI</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  College syllabi rarely teach modern Next.js, TypeScript, cloud deployments, or Generative AI. Vyat brings the latest industry technologies directly to your screen with hands-on projects you can show off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY VYAT ADVANTAGES ── */}
        <section id="advantages" className="py-24 bg-[#0a0d1d] relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-black tracking-widest uppercase text-blue-400 mb-3">
                Engineered for Long-Term Retention
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How Daily Drip Learning Guarantees Mastery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg text-white mb-2">1 Video Per Day</h3>
                <p className="text-sm text-slate-400">
                  New video lessons release daily. Prevents bingeing and forgetting, building rock-solid recall for viva and interviews.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Placement Coding Rounds</h3>
                <p className="text-sm text-slate-400">
                  Step-by-step problem breakdowns that mimic the exact coding rounds used by leading tech recruiters.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Interactive MCQs</h3>
                <p className="text-sm text-slate-400">
                  Instant checkpoints and concept tests after every lesson to verify your understanding immediately.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold mb-4">
                  4
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Verified Credentials</h3>
                <p className="text-sm text-slate-400">
                  Tamper-proof verifiable certificates issued only when the full planned curriculum has been completed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VERIFIED CERTIFICATE SPOTLIGHT ── */}
        <section id="credentials" className="py-24 bg-gradient-to-b from-[#0a0d1d] to-[#070913] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-blue-900/40 via-indigo-950/30 to-purple-950/20 border border-white/15 backdrop-blur-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-4">
                  <Award size={14} /> Resume &amp; LinkedIn Verified
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  Earn Credentials That Prove Practical Competency
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Unlike platforms that give certificates after skipping videos, Vyat unlocks certificates only when all lessons in the curriculum have been watched and verified. Share your verified link on LinkedIn and your resume with 100% authenticity.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-300">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                    <CheckCircle2 size={16} className="text-emerald-400" /> Unique Credential ID
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                    <CheckCircle2 size={16} className="text-emerald-400" /> Public Verification URL
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                    <CheckCircle2 size={16} className="text-emerald-400" /> Anti-Fraud Guaranteed
                  </div>
                </div>
              </div>

              {/* Certificate Mockup Visual */}
              <div className="w-full lg:w-96 rounded-2xl bg-white p-6 shadow-2xl text-slate-900 border border-amber-300/40 transform lg:rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                      V
                    </div>
                    <span className="font-extrabold text-sm tracking-tight text-slate-800">Vyat</span>
                  </div>
                  <Award size={24} className="text-amber-500" />
                </div>
                <div className="py-6 text-center">
                  <p className="text-[11px] uppercase tracking-widest font-black text-amber-600">Certificate of Completion</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-2">Aarav Patel</p>
                  <p className="text-xs text-slate-500 mt-1">has successfully mastered</p>
                  <p className="text-sm font-bold text-indigo-700 mt-1">Data Structures &amp; Algorithms</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>ID: VYAT-2026-CSE-84920</span>
                  <span className="text-emerald-600 font-bold">✓ Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION (SEO FAQ RICH SNIPPET READY) ── */}
        <section id="faq" className="py-24 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-black tracking-widest uppercase text-blue-400 mb-3">
                Got Questions?
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Frequently Asked Questions for CSE Students
              </p>
              <p className="text-slate-400 mt-3 text-sm">
                Everything you need to know about Vyat courses, placements, and learning format.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 open:border-blue-500/30 transition-colors"
                >
                  <summary className="flex items-center justify-between font-bold text-base sm:text-lg text-white cursor-pointer list-none">
                    <span>{faq.q}</span>
                    <ChevronRight size={18} className="text-slate-400 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                  </summary>
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CALL TO ACTION ── */}
        <section className="py-20 text-center relative overflow-hidden border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to Accelerate Your CSE Career?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
              Join thousands of engineering students across India mastering core computer science, DSA, Web Dev, and AI to secure top engineering placements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/explore">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-105 flex items-center gap-2">
                  Explore All CSE Courses <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/login">
                <button className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl border border-white/15 transition-all">
                  Sign In to Dashboard
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-[#05070f] py-12 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="font-bold text-white text-base">Vyat</span>
            <span className="text-xs text-slate-600">· Courses for CSE &amp; Engineering Students in India</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-400">
            <Link href="/explore" className="hover:text-white transition-colors">All Courses</Link>
            <a href="#curriculum" className="hover:text-white transition-colors">Placements &amp; Core CS</a>
            <a href="#engineering-context" className="hover:text-white transition-colors">Why Engineering</a>
            <Link href="/login" className="hover:text-white transition-colors">Student Login</Link>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Vyat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
