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
    icon: Briefcase,
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
    icon: Cpu,
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
    icon: Terminal,
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
    icon: Globe,
    description: 'Go from frontend fundamentals to scalable backend architecture. Build production apps recruiters love.',
    highlights: [
      'Modern JavaScript (ES6+), TypeScript & responsive UI design',
      'React & Next.js frontend architecture with modern state management',
      'Node.js, Express, REST APIs & secure authentication workflows',
      'PostgreSQL, MongoDB, Supabase & cloud production deployment'
    ],
    badge: 'Ship 3 Full-Stack Capstones'
  },
  {
    id: 'ai-learning',
    title: 'AI Learning & Machine Learning',
    tag: 'Cutting-Edge',
    icon: Sparkles,
    description: 'Code-first AI education built for CSE undergraduates. Master mathematical foundations and modern generative AI.',
    highlights: [
      'Python for AI & Data Science: NumPy, Pandas & Matplotlib',
      'Machine Learning: Regression, classification, clustering & Scikit-learn',
      'Deep Learning & Neural Networks: CNNs, transformers & PyTorch',
      'Generative AI: LLM prompting, embeddings, and RAG pipelines'
    ],
    badge: 'Build Intelligent AI Apps'
  },
  {
    id: 'systems-scale',
    title: 'Full B.Tech Roadmap & Scale',
    tag: 'Systems & Scale',
    icon: GraduationCap,
    description: 'All-in-one comprehensive engineering track designed to take you from foundational CS concepts to industry-grade software.',
    highlights: [
      '1 Video a day habit system with zero binge burnout',
      'Interactive quizzes & concept checkpoints for every module',
      'System design, Docker containerization & microservices',
      'LinkedIn verifiable credentials accepted by tech recruiters'
    ],
    badge: 'Complete 4-Year B.Tech Journey'
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
    <div className="min-h-screen w-full bg-[#07090e] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200 flex flex-col antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />

      {/* ── TOP NAVIGATION ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/90 border-b border-slate-800/80 transition-colors w-full">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <BookOpen size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-100">
                Vyat
              </span>
              <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-slate-400 -mt-1">
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
              <button className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/explore" id="nav-explore-btn">
              <button className="px-5 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]">
                Explore Catalog
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="w-full min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center">
        {/* ── HERO SECTION (SEO H1 & CORE INTENT) ── */}
        <section className="w-full border-b border-slate-800/60 py-20 lg:py-28 relative overflow-hidden">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center flex flex-col items-center">
            
            {/* National Target Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-800/80 border border-slate-700 text-slate-300 mb-8 shadow-sm">
              <span className="text-base leading-none">🇮🇳</span>
              <span>#1 Learning Platform for CSE &amp; Engineering Students in India</span>
            </div>

            {/* Targeted SEO Primary H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 max-w-5xl leading-[1.15] mb-6">
              Courses for CSE:{' '}
              <span className="text-slate-100">
                Placements, Core Subjects, DSA, Web Dev &amp; AI Learning
              </span>
            </h1>

            {/* Lead Keyword-Rich Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed mb-8 font-normal">
              Built specifically for Indian B.Tech / BE engineering students. Fast-track campus placements and semester exams with structured daily drip lessons in <strong className="text-slate-200">Core Subjects (OS, DBMS, Networks)</strong>, <strong className="text-slate-200">DSA</strong>, <strong className="text-slate-200">Full-Stack Web Dev</strong>, and <strong className="text-slate-200">AI Learning</strong>.
            </p>

            {/* Interactive Pillar Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase bg-slate-800/80 border border-slate-700 text-slate-300">
                <Briefcase size={13} className="text-slate-400" /> Campus Placements
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase bg-slate-800/80 border border-slate-700 text-slate-300">
                <Cpu size={13} className="text-slate-400" /> Core Subjects (OS, DBMS, CN)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase bg-slate-800/80 border border-slate-700 text-slate-300">
                <Terminal size={13} className="text-slate-400" /> DSA in C++ / Java / Python
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase bg-slate-800/80 border border-slate-700 text-slate-300">
                <Globe size={13} className="text-slate-400" /> Full-Stack Web Dev
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase bg-slate-800/80 border border-slate-700 text-slate-300">
                <Sparkles size={13} className="text-slate-400" /> AI &amp; Machine Learning
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/explore" className="w-full sm:w-auto" id="hero-cta-explore">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Browse All CSE Courses
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/login" className="w-full sm:w-auto" id="hero-cta-login">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                  Student Sign In
                </button>
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-16 pt-10 border-t border-slate-800/80 w-full max-w-4xl text-left">
              <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-mono">5 Pillars</p>
                <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Placements, Core, DSA, Web &amp; AI</p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-mono">1 Video/Day</p>
                <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Drip Habit Learning</p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-mono">Semester + Job</p>
                <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Dual Syllabus Coverage</p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-mono">Verified</p>
                <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Anti-Cheat Credentials</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── 5 DEDICATED CURRICULUM PILLARS SECTION ── */}
        <section id="curriculum" className="w-full border-b border-slate-800/60 py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                Comprehensive CSE Curriculums
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                5 Essential Pillars Every CSE Student Must Master
              </p>
              <p className="text-slate-400 mt-4 text-base">
                Whether you are aiming for high-paying product company campus placements or scoring top SGPA in semester exams, Vyat covers the entire Computer Science Engineering roadmap.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {CURRICULUM_PILLARS.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <article
                    key={pillar.id}
                    className="w-full bg-[#0d131f] border border-slate-800 hover:border-slate-700 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-200 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <IconComponent size={24} />
                        </div>
                        <span className="px-2.5 py-1 text-xs font-mono uppercase bg-slate-800 text-slate-300 border border-slate-700 rounded-md">
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2 leading-snug">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                        {pillar.description}
                      </p>

                      <ul className="space-y-2.5 text-xs font-medium text-slate-300 mb-6">
                        {pillar.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="text-slate-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {pillar.badge}
                      </span>
                      <Link
                        href="/explore"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        Explore <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── DESIGNED FOR INDIAN ENGINEERING STUDENTS ── */}
        <section id="engineering-context" className="w-full border-b border-slate-800/60 py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                The Indian College Reality
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Why Engineering Students Across India Choose Vyat
              </p>
              <p className="text-slate-400 mt-4 text-base">
                College lectures and traditional online courses fail Indian engineering students in two predictable ways: outdated syllabi and unmanageable 60-hour video dumps. Vyat was built differently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d131f] border border-slate-800">
                <div className="text-2xl font-bold font-mono text-slate-400 mb-3">01</div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">College Timetable Friendly</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Indian engineering colleges enforce 75% mandatory attendance, long lab sessions, and internal assignments. Vyat&apos;s <strong className="text-slate-200">1 lesson/day rhythm (15–25 mins)</strong> fits seamlessly into your evening routine without burnout.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d131f] border border-slate-800">
                <div className="text-2xl font-bold font-mono text-slate-400 mb-3">02</div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Semester GPA + Placement Tests</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  You don&apos;t have to sacrifice your university marks to prepare for tech companies. Our courses cover both university semester theoretical deep-dives (OS/DBMS/CN) and rigorous LeetCode-style coding questions.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d131f] border border-slate-800">
                <div className="text-2xl font-bold font-mono text-slate-400 mb-3">03</div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Modern Tech: Web Dev &amp; AI</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  College syllabi rarely teach modern Next.js, TypeScript, cloud deployments, or Generative AI. Vyat brings the latest industry technologies directly to your screen with hands-on projects you can show off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY VYAT ADVANTAGES ── */}
        <section id="advantages" className="w-full border-b border-slate-800/60 py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                Engineered for Long-Term Retention
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                How Daily Drip Learning Guarantees Mastery
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center font-mono font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg text-slate-100 mb-2">1 Video Per Day</h3>
                <p className="text-sm text-slate-400">
                  New video lessons release daily. Prevents bingeing and forgetting, building rock-solid recall for viva and interviews.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center font-mono font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg text-slate-100 mb-2">Placement Coding Rounds</h3>
                <p className="text-sm text-slate-400">
                  Step-by-step problem breakdowns that mimic the exact coding rounds used by leading tech recruiters.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center font-mono font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg text-slate-100 mb-2">Interactive MCQs</h3>
                <p className="text-sm text-slate-400">
                  Instant checkpoints and concept tests after every lesson to verify your understanding immediately.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center font-mono font-bold mb-4">
                  4
                </div>
                <h3 className="font-bold text-lg text-slate-100 mb-2">Verified Credentials</h3>
                <p className="text-sm text-slate-400">
                  Tamper-proof verifiable certificates issued only when the full planned curriculum has been completed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VERIFIED CERTIFICATE SPOTLIGHT ── */}
        <section id="credentials" className="w-full border-b border-slate-800/60 py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#0d131f] border border-slate-800 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <span className="px-2.5 py-1 text-xs font-mono uppercase bg-slate-800 text-slate-300 border border-slate-700 rounded-md inline-flex items-center gap-1.5 mb-4">
                  <Award size={14} className="text-slate-300" /> Resume &amp; LinkedIn Verified
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4 leading-tight">
                  Earn Credentials That Prove Practical Competency
                </h2>
                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  Unlike platforms that issue certificates after skipping videos, Vyat unlocks certificates only when all lessons in the curriculum have been completed and verified. Share your authenticated verification link on your resume and LinkedIn with total confidence.
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-slate-300">
                    <CheckCircle2 size={15} className="text-slate-400" /> Unique Credential ID
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-slate-300">
                    <CheckCircle2 size={15} className="text-slate-400" /> Public Verification URL
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-slate-300">
                    <CheckCircle2 size={15} className="text-slate-400" /> Anti-Fraud Guaranteed
                  </div>
                </div>
              </div>

              {/* Certificate Mockup Visual */}
              <div className="w-full max-w-md bg-[#0f172a] text-slate-100 border border-slate-700 shadow-2xl rounded-2xl p-6 sm:p-8 relative overflow-hidden shrink-0">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      V
                    </div>
                    <span className="font-bold text-sm tracking-tight text-slate-100">Vyat Engineering</span>
                  </div>
                  <Award size={22} className="text-slate-400" />
                </div>
                <div className="py-8 text-center">
                  <p className="text-xs uppercase tracking-widest font-mono text-slate-400 font-semibold">Certificate of Completion</p>
                  <p className="text-2xl font-bold text-slate-100 mt-3">Aarav Patel</p>
                  <p className="text-xs text-slate-400 mt-2">has demonstrated proficiency in</p>
                  <p className="text-base font-semibold text-slate-200 mt-1">Data Structures &amp; Algorithms</p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>ID: VYAT-2026-CSE-84920</span>
                  <span className="px-2.5 py-1 text-xs font-mono uppercase bg-slate-800 text-slate-300 border border-slate-700 rounded-md">✓ Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION (SEO FAQ RICH SNIPPET READY) ── */}
        <section id="faq" className="w-full border-b border-slate-800/60 py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                Got Questions?
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
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
                  className="group p-6 rounded-2xl bg-[#0d131f] border border-slate-800 open:border-slate-700 transition-colors"
                >
                  <summary className="flex items-center justify-between font-semibold text-base sm:text-lg text-slate-100 cursor-pointer list-none">
                    <span>{faq.q}</span>
                    <ChevronRight size={18} className="text-slate-400 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                  </summary>
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CALL TO ACTION ── */}
        <section className="w-full border-b border-slate-800/60 py-16 sm:py-24 text-center relative overflow-hidden">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-6">
              Ready to Accelerate Your CSE Career?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
              Join thousands of engineering students across India mastering core computer science, DSA, Web Dev, and AI to secure top engineering placements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/explore">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                  Explore All CSE Courses <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/login">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all text-sm sm:text-base">
                  Sign In to Dashboard
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#05070a] border-t border-slate-800/80 py-12 text-sm text-slate-500">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="font-bold text-slate-200 text-base">Vyat</span>
            <span className="text-xs text-slate-500">· Courses for CSE &amp; Engineering Students in India</span>
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
