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
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  FolderGit2,
  Lock,
  Compass,
  GraduationCap
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function HomePage() {
  const { identity, focusAreas, projects, howWeWork, opportunities, collegePartnerships } = CYBER_DATA;

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
        return 'bg-amber-500/15 text-[#FFA439] border-amber-500/40';
      case 'In development':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40';
      case 'Evaluated / validated':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      default:
        return 'bg-gray-500/15 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <div className="pt-24 pb-20 select-none overflow-hidden">
      
      {/* 1. HERO SECTION (Section 3 - Exact Copy Mandate) */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 max-w-7xl mx-auto">
        {/* Cyan Ambient Background Bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-[#00F0FF]/[0.05] rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Division Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
            <span>REDKROSS RESEARCH FOUNDATION // CYBERSECURITY DIVISION</span>
          </motion.div>

          {/* Headline verbatim from Specification Page 3 */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-royal tracking-tight mb-6 leading-[1.1]"
          >
            Cybersecurity Research. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent">
              Practical Learning.
            </span> <br className="hidden sm:inline" />
            Safer Digital Systems.
          </motion.h1>

          {/* Subtitle verbatim from Specification Page 3 */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We explore cybersecurity challenges through applied research, carefully scoped technical projects and accessible learning. Discover our focus areas, review verified work or collaborate with RedKross.
          </motion.p>

          {/* 3 Call-To-Action Buttons from Spec */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/research"
              className="px-6 py-3.5 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase tracking-wider hover:bg-[#5CF7FF] transition-all hover:scale-105 shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              Explore Research
            </Link>

            <Link
              to="/projects"
              className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-cyan-500/50 transition-all hover:scale-105 backdrop-blur-md"
            >
              View Projects
            </Link>

            <Link
              to="/college-partnerships"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-royal font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              Partner with Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION & PARENT FOUNDATION RELATIONSHIP (Section 3.2) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/20 p-8 sm:p-10 shadow-[0_0_40px_rgba(0,240,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>INSTITUTIONAL SCOPE &amp; BOUNDARIES</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2">
              The Dedicated Technical Wing of RedKross Research Foundation
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              This subdomain focuses strictly on cybersecurity engineering, isolated laboratory models, and practical student workshops. For institutional governance, incorporation documents, board profiles, or psychology initiatives, visit our canonical parent portal.
            </p>
          </div>

          <a 
            href={identity.parentOrg.url}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:border-[#00F0FF]/50 text-xs font-mono font-semibold whitespace-nowrap transition-all group shrink-0"
          >
            <span>Visit Parent Foundation</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. FOCUS AREAS (Section 3.3 & 4.3-4.8) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
            <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>SPECIALIST INQUIRY // 6 RESEARCH TRACKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
            Cybersecurity <span className="text-[#00F0FF]">Focus Areas</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans">
            We focus on practical, evidence-led domains where defensibility and student capability can be measurably improved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((fa, idx) => {
            const IconComponent = iconMap[fa.icon] || ShieldCheck;
            return (
              <div 
                key={fa.id}
                className="rounded-2xl bg-[#090e1a]/80 border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.03] rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/[0.08] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-cyan-500/30 text-cyan-300 bg-cyan-950/40">
                      {fa.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-[#00F0FF]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {fa.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">
                    {fa.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-500">Track 0{idx + 1}</span>
                  <Link 
                    to={`/research/${fa.id}`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#00F0FF] hover:underline"
                  >
                    <span>Read Focus Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SELECTED WORK & VERIFIED PROJECTS (Section 3.4) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>ZERO FABRICATIONS POLICY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-royal tracking-tight">
              Verified Technical <span className="text-[#00F0FF]">Projects</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F0FF] hover:underline"
          >
            <span>View All Projects in Directory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((proj) => (
            <div 
              key={proj.slug}
              className="rounded-2xl bg-[#080d18] border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-gray-400 uppercase">{proj.category}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-medium ${getStatusBadge(proj.status)}`}>
                    {proj.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {proj.title}
                </h3>
                
                <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">
                  {proj.problem}
                </p>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-4 text-[11px] font-sans text-gray-400">
                  <span className="text-[10px] font-mono text-cyan-400 block mb-0.5 uppercase tracking-wider">Method:</span>
                  {proj.approach}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">Updated: {proj.lastUpdated}</span>
                <Link
                  to={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-1 text-[#00F0FF] hover:underline"
                >
                  <span>Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW WE WORK — 5-STEP LOOP (Section 3.5 & 4.2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>REPEATABLE SCIENTIFIC STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-royal tracking-tight mb-4">
            How We <span className="text-[#00F0FF]">Work</span>
          </h2>
          <p className="text-sm text-gray-400 font-sans">
            Every technical initiative follows a repeatable loop designed to guarantee reproducibility, safety, and peer review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {howWeWork.map((step) => (
            <div 
              key={step.step}
              className="rounded-2xl bg-[#090e1a]/60 border border-white/10 p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
            >
              <div>
                <span className="text-2xl font-black font-royal text-[#00F0FF] block mb-2">{step.step}</span>
                <h4 className="text-sm font-bold font-royal text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">{step.description}</p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-cyan-400/80">
                &bull; {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COLLEGE PARTNERSHIPS PREVIEW (Section 3.7 & 4.14) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="rounded-3xl bg-gradient-to-r from-[#0a1224] via-[#080d1a] to-[#040810] border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC INSTITUTIONS &amp; FACULTY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-royal mb-4">
              College &amp; University Collaboration
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
              We partner with engineering colleges to deliver practical defensive workshops, faculty-aligned capstone cohorts, and disposable cyber lab training.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/college-partnerships"
                className="px-6 py-3 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all"
              >
                Request College Proposal
              </Link>
              <Link
                to="/academy"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-royal font-bold text-xs uppercase hover:bg-white/10 transition-all"
              >
                Inspect Academy Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUST & RESPONSIBLE DISCLOSURE (Section 3.9 & 4.17) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-4">
          <Lock className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>ETHICS &amp; SAFEGUARDS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-royal text-white mb-3">
          Trust Is Part of the Research
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          We operate strictly under authorized testing permissions, synthetic datasets, and coordinated vulnerability disclosure. Testing RedKross or third-party systems without permission is strictly prohibited.
        </p>
        <Link
          to="/responsible-disclosure"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#00F0FF] hover:underline"
        >
          <span>Read Responsible Vulnerability Disclosure Guidelines</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </section>

    </div>
  );
}
