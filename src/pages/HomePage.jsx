import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Terminal, 
  Search, 
  Cpu, 
  Radio, 
  Users, 
  ArrowUpRight, 
  ExternalLink,
  Sparkles, 
  AlertCircle,
  FolderGit2,
  Lock,
  Compass,
  GraduationCap,
  Briefcase,
  BookOpen,
  Clock,
  Calendar,
  CheckCircle2,
  FileCode2,
  ArrowRight
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function HomePage() {
  const { 
    identity, 
    focusAreas, 
    projects, 
    howWeWork, 
    academy, 
    collegePartnerships, 
    opportunities, 
    responsibleDisclosure 
  } = CYBER_DATA;

  const iconMap = {
    Cpu: Cpu,
    ShieldAlert: Terminal,
    Search: Search,
    Radar: Compass,
    Radio: Radio,
    Users: Users
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Prototype':
        return 'bg-amber-500/10 text-[#FFA439] border border-amber-500/30';
      case 'In development':
        return 'bg-cyan-500/10 text-[#00F0FF] border border-cyan-500/30';
      case 'Evaluated / validated':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';
      default:
        return 'bg-white/5 text-slate-400 border border-white/10';
    }
  };

  return (
    <div className="relative pt-24 pb-20 select-none overflow-hidden min-h-screen">
      
      {/* Background Ambient Lighting (Refined & Restrained) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#00F0FF]/[0.05] rounded-full blur-[160px]" />
        <div className="absolute top-[40%] -right-32 w-[550px] h-[550px] bg-[#2563EB]/[0.04] rounded-full blur-[180px]" />
        <div className="absolute top-[75%] -left-32 w-[500px] h-[500px] bg-[#00F0FF]/[0.03] rounded-full blur-[160px]" />
        <div className="absolute inset-0 cyber-grid opacity-25" />
      </div>

      <div className="relative z-10">
        
        {/* =========================================================================
            SECTION 1: HERO
            Requirements: Headline, short explanation and 2–3 actions.
            Exact copy from spec:
            "Cybersecurity Research. Practical Learning. Safer Digital Systems."
            "We explore cybersecurity challenges through applied research, carefully
             scoped technical projects and accessible learning. Discover our focus
             areas, review verified work or collaborate with RedKross."
            Buttons: "Explore Research" → /research; "View Projects" → /projects;
                     "Partner with Us" → /college-partnerships.
           ========================================================================= */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Division Identity Beacon */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-8 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>REDKROSS RESEARCH FOUNDATION &bull; CYBERSECURITY DIVISION</span>
            </motion.div>

            {/* Headline (No gradient text, pure typographic weight & contrast) */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-royal tracking-tight mb-6 leading-[1.08] split-heading"
              style={{ perspective: '1000px' }}
            >
              Cybersecurity Research. <br className="hidden sm:inline" />
              <span className="text-[#00F0FF]">
                Practical Learning.
              </span> <br className="hidden sm:inline" />
              Safer Digital Systems.
            </h1>

            {/* Subtitle (Optimal measure 65-75ch) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed mb-10"
            >
              We explore cybersecurity challenges through applied research, carefully scoped technical projects and accessible learning. Discover our focus areas, review verified work or collaborate with RedKross.
            </motion.p>

            {/* 3 Call-To-Action Buttons (Clear visual hierarchy) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/research"
                className="px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase tracking-wider hover:bg-[#5CF7FF] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(0,240,255,0.3)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00F0FF]"
              >
                Explore Research
              </Link>

              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all hover:scale-[1.02] backdrop-blur-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                View Projects
              </Link>

              <Link
                to="/college-partnerships"
                className="px-6 py-3 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-200 font-royal font-bold text-xs uppercase tracking-wider hover:bg-blue-600/30 hover:border-blue-400/60 transition-all hover:scale-[1.02] backdrop-blur-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
              >
                Partner with Us
              </Link>
            </motion.div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 2: INTRODUCTION
            Requirements: Explain this is RedKross Research Foundation’s cybersecurity
            division; link to the parent foundation.
           ========================================================================= */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="surface-card p-7 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300"
          >
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-2">
                Division Scope &amp; Institutional Boundaries
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 leading-tight">
                The Dedicated Technical Wing of RedKross Research Foundation
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                This subdomain focuses strictly on cybersecurity engineering, isolated laboratory models, and practical student workshops. This division does not claim separate legal incorporation. For institutional governance, incorporation documents, leadership profiles, or psychology initiatives, visit our canonical parent portal.
              </p>
            </div>

            <a 
              href={identity.parentOrg.url}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 shrink-0"
            >
              <span>Visit Parent Foundation</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </motion.div>
        </section>


        {/* =========================================================================
            SECTION 3: FOCUS AREAS
            Requirements: Cards for AI security, defensive security, digital forensics,
            threat intelligence, cloud/IoT and human-centred security. Mark aspirational
            areas honestly.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading"
              style={{ perspective: '1000px' }}
            >
              Cybersecurity <span className="text-[#00F0FF]">Focus Areas</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              We focus on practical, evidence-led domains where defensibility and student capability can be measurably improved. Aspirational themes are marked honestly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((fa, idx) => {
              const IconComponent = iconMap[fa.icon] || ShieldCheck;
              return (
                <motion.div 
                  key={fa.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (idx % 3) * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="surface-card p-6 flex flex-col justify-between transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-cyan-500/30 text-cyan-300 bg-cyan-950/40">
                        {fa.badge}
                      </span>
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                        <IconComponent className="w-4 h-4 text-[#00F0FF]" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                      {fa.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                      {fa.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Track 0{idx + 1}</span>
                    <Link 
                      to={`/research/${fa.id}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#00F0FF] hover:underline"
                    >
                      <span>Read focus scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* =========================================================================
            SECTION 4: SELECTED WORK
            Requirements: Three or four verified projects at most, with status labels
            and repository/details links.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-royal split-heading"
              style={{ perspective: '1000px' }}
            >
              Selected Technical <span className="text-[#00F0FF]">Projects</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Three verified laboratory initiatives. Each technical project communicates its core challenge, engineering method, architecture, and documented limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (idx % 3) * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="surface-card p-6 flex flex-col justify-between transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium ${getStatusBadge(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {project.problem}
                  </p>

                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 mb-4 text-[11px] font-mono text-slate-300">
                    <span className="text-[10px] font-mono text-[#00F0FF] block mb-1 uppercase tracking-wider font-semibold">
                      Method:
                    </span>
                    {project.approach}
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-500/[0.08] border border-amber-500/25 text-[10px] text-amber-200/90 flex items-start gap-1.5 mb-4">
                    <AlertCircle className="w-3.5 h-3.5 text-[#FFA439] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      <strong className="text-[#FFA439]">Limitation:</strong> {project.limitations}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[11px]">Updated: {project.lastUpdated}</span>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00F0FF] hover:underline"
                  >
                    <span>Full dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400/60 text-white font-royal font-bold text-xs uppercase tracking-wider transition-all hover:bg-white/[0.08]"
            >
              <span>Explore All Projects in Interactive Directory</span>
              <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
            </Link>
          </div>
        </section>


        {/* =========================================================================
            SECTION 5: HOW WE WORK
            Requirements: Research question → safe lab/dataset → evaluation →
            documentation → responsible sharing.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-black text-white font-royal tracking-tight mb-4 split-heading"
              style={{ perspective: '1000px' }}
            >
              How We <span className="text-[#00F0FF]">Work</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Every technical initiative follows a repeatable 5-step loop designed to guarantee reproducibility, safety, and peer review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {howWeWork.map((step, sIdx) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: sIdx * 0.08, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="surface-card p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-royal text-[#00F0FF] block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold font-royal text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-cyan-300">
                  &bull; {step.deliverable}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* =========================================================================
            SECTION 6: LEARNING AND STUDENT DEVELOPMENT
            Requirements: Only describe workshops or project cohorts that are genuinely
            ready to deliver. Label future Academy work.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-black text-white font-royal tracking-tight mb-4 split-heading"
              style={{ perspective: '1000px' }}
            >
              Learning &amp; <span className="text-[#00F0FF]">Student Development</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              We deliver practical student training with real telemetry and defensive tooling. Future Academy programmes are clearly labelled as under development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Active / Ready to Deliver: Workshops & Capstone Cohorts */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="surface-card p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-emerald-500/40 text-emerald-400 bg-emerald-950/30">
                    Ready to Deliver
                  </span>
                  <span className="text-xs font-mono text-slate-400">Live Delivery Formats</span>
                </div>
                <h3 className="text-xl font-bold font-royal text-white mb-2">
                  Hands-On Workshops &amp; Supervised Cohorts
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                  Engineered for college students and emerging practitioners. We run targeted 2–3 day bootcamps on Linux security and packet triage, as well as semester-long research capstone cohorts with structured milestones.
                </p>
                <ul className="space-y-3 text-xs font-sans text-slate-300 mb-6">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Practical defensive labs with disposable virtual environments</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Linux command-line fundamentals &amp; forensic evidence collection</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Faculty-aligned milestone reviews and peer code auditing</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/college-partnerships"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00F0FF] hover:underline pt-4 border-t border-white/10"
              >
                <span>Explore workshop delivery options</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Labelled Future Academy Work */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="surface-card p-7 flex flex-col justify-between border-amber-500/25"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-amber-500/40 text-[#FFA439] bg-amber-950/30">
                    {academy.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Curriculum Roadmapping</span>
                </div>
                <h3 className="text-xl font-bold font-royal text-white mb-2">
                  RedKross Academy (Future Learning Paths)
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                  {academy.disclaimer}
                </p>

                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {academy.plannedTracks.slice(0, 4).map(tr => (
                    <div key={tr.track} className="p-3 rounded-lg bg-black/40 border border-white/10 text-[11px]">
                      <div className="text-[10px] font-mono text-amber-300 font-bold">{tr.track} &bull; {tr.level}</div>
                      <div className="text-slate-300 font-sans truncate">{tr.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/academy"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FFA439] hover:underline pt-4 border-t border-white/10"
              >
                <span>Review Academy roadmap &amp; principles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 7: COLLEGE PARTNERSHIPS
            Requirements: Benefits, delivery formats, pilot enquiry and link to
            /college-partnerships.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="surface-card p-8 sm:p-11 border-cyan-500/25"
          >
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-2">
                Institutional Collaboration
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-royal mb-4 split-heading">
                College &amp; University Partnerships
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
                {collegePartnerships.overview}
              </p>

              {/* Delivery Formats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {collegePartnerships.formats.slice(0, 3).map((f, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs">
                    <div className="font-royal font-bold text-white mb-1">{f.title}</div>
                    <div className="text-[10px] font-mono text-[#00F0FF] mb-1.5">{f.format}</div>
                    <p className="text-[11px] text-slate-300 font-sans leading-relaxed">{f.scope}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/college-partnerships"
                  className="px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase tracking-wider hover:bg-[#5CF7FF] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  Submit Pilot Enquiry
                </Link>
                <Link
                  to="/college-partnerships"
                  className="px-6 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] transition-all hover:scale-[1.02]"
                >
                  Inspect Full Partnership Scope
                </Link>
              </div>
            </div>
          </motion.div>
        </section>


        {/* =========================================================================
            SECTION 8: OPPORTUNITIES
            Requirements: Real, approved openings only; include supervisor, scope,
            eligibility and deadline.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-black text-white font-royal tracking-tight mb-4 split-heading"
              style={{ perspective: '1000px' }}
            >
              Research <span className="text-[#00F0FF]">Opportunities</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              We list only approved research positions with identified supervisors, defined tasks, and clear eligibility requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {opportunities.map((opp, idx) => (
              <motion.div
                key={opp.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="surface-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                      {opp.domain}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-emerald-500/40 text-emerald-400 bg-emerald-950/30">
                      Status: {opp.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-royal text-white mb-3 leading-snug">
                    {opp.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 mb-4 bg-black/40 p-3 rounded-lg border border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate"><strong>Lead:</strong> {opp.supervisor.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span><strong>Hours:</strong> {opp.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span><strong>Type:</strong> {opp.delivery}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span><strong>Term:</strong> {opp.duration}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 font-sans mb-3">
                    <span className="text-[10px] font-mono text-slate-400 block mb-1 uppercase font-bold">Eligibility:</span>
                    <p className="line-clamp-2 leading-relaxed">{opp.eligibility}</p>
                  </div>

                  <div className="text-xs text-slate-300 font-sans mb-4">
                    <span className="text-[10px] font-mono text-slate-400 block mb-1 uppercase font-bold">Key Scope:</span>
                    <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
                      {opp.tasks.slice(0, 2).map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">Deadline: Rolling Cohort</span>
                  <Link
                    to={`/opportunities/${opp.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00F0FF] hover:underline"
                  >
                    <span>Role scope &amp; apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 hover:border-cyan-500/40 text-xs font-mono text-cyan-300 hover:text-white transition-all"
            >
              <span>View all approved opportunities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>


        {/* =========================================================================
            SECTION 9: TRUST AND RESPONSIBILITY
            Requirements: Ethics, authorised testing, privacy and responsible disclosure.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="surface-card p-8 sm:p-11 text-center"
          >
            <div className="inline-flex p-3 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[#00F0FF] mb-4">
              <Lock className="w-5 h-5" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-royal text-white mb-4 split-heading">
              Trust Is Part of the Research
            </h2>

            <p className="text-sm text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
              {responsibleDisclosure.statement}
            </p>

            <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/30 max-w-2xl mx-auto text-xs text-amber-200/90 font-mono mb-8 text-left flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#FFA439] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#FFA439] block mb-1">STRICT SAFETY BOUNDARY:</strong>
                We operate strictly under authorized testing permissions and synthetic datasets. Testing RedKross or third-party systems without permission is strictly prohibited.
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/responsible-disclosure"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] hover:bg-cyan-500/20 transition-all"
              >
                <span>Responsible Vulnerability Disclosure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/trust"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <span>Ethics &amp; Data Minimization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* SECTION 10: FOOTER IS RENDERED GLOBALLY BY CyberFooter.jsx */}

      </div>
    </div>
  );
}
