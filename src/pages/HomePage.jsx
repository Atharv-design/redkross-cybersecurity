import React, { useState } from 'react';
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
import ArcCarousel from '../components/ui/arc-carousel';

export default function HomePage() {
  const { identity, focusAreas, projects, howWeWork, collegePartnerships } = CYBER_DATA;
  const [activeIndex, setActiveIndex] = useState(0);

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
        return 'bg-cyan-500/15 text-[#00F0FF] border-cyan-500/40';
      case 'Evaluated / validated':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      default:
        return 'bg-gray-500/15 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <div className="pt-24 pb-20 select-none overflow-hidden">
      
      {/* 1. HERO SECTION (Verbatim from Specification) */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 max-w-7xl mx-auto">
        {/* Cyan Ambient Background Bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-[#00F0FF]/[0.05] rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Division Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
            <span>REDKROSS RESEARCH FOUNDATION // CYBERSECURITY DIVISION</span>
          </motion.div>

          {/* Headline with 3D SplitText Support */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-royal tracking-tight mb-6 leading-[1.1] split-heading"
            style={{ perspective: '1000px' }}
          >
            Cybersecurity Research. <br className="hidden sm:inline" />
            <span className="text-[#00F0FF]">
              Practical Learning.
            </span> <br className="hidden sm:inline" />
            Safer Digital Systems.
          </h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We explore cybersecurity challenges through applied research, carefully scoped technical projects and accessible learning. Discover our focus areas, review verified work or collaborate with RedKross.
          </motion.p>

          {/* 3 Call-To-Action Buttons from Spec */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
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

      {/* 2. INTRODUCTION & PARENT FOUNDATION RELATIONSHIP */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/20 p-8 sm:p-10 shadow-[0_0_40px_rgba(0,240,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
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
        </motion.div>
      </section>

      {/* 3. FOCUS AREAS (6 Research Tracks - Staggered Scroll-Linked Reveal) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>SPECIALIST INQUIRY // 6 RESEARCH TRACKS</span>
          </motion.div>
          <h2 
            className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading"
            style={{ perspective: '1000px' }}
          >
            Cybersecurity <span className="text-[#00F0FF]">Focus Areas</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base text-gray-400 font-sans"
          >
            We focus on practical, evidence-led domains where defensibility and student capability can be measurably improved.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((fa, idx) => {
            const IconComponent = iconMap[fa.icon] || ShieldCheck;
            return (
              <motion.div 
                key={fa.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (idx % 3) * 0.12, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
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
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#00F0FF] hover:underline cursor-pointer"
                  >
                    <span>Read Focus Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. SELECTED WORK & VERIFIED PROJECTS — RAINBOW ARCH WHEEL CAROUSEL */}
      <section className="py-24 relative border-t border-white/5 overflow-hidden">
        {/* Background Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[340px] bg-[#00F0FF]/[0.05] rounded-full blur-[180px] pointer-events-none" />

        <div className="text-center max-w-4xl mx-auto mb-8 px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>VERIFIED PORTFOLIO // ZERO FABRICATIONS</span>
            <span className="text-gray-500 hidden sm:inline">&bull; 4 LAB-VERIFIED INITIATIVES</span>
          </motion.div>

          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-royal split-heading"
            style={{ perspective: '1000px' }}
          >
            Verified Technical <span className="text-[#00F0FF]">Projects</span>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Drag, scroll, or rotate cards along our continuous verification arch. Each technical project communicates its core challenge, engineering method, architecture, and documented limitations.
          </motion.p>
        </div>

        {/* Continuous Arc Carousel (Drag, Wheel, Snap, Auto-play) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative my-2"
        >
          <ArcCarousel
            items={projects}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
            cardWidth={340}
            cardHeight={500}
            radius={1100}
            renderItem={(project, { isApex, angle, index }) => {
              const isAmber = index % 2 === 1;
              const primaryColor = isAmber ? '#FFA439' : '#00F0FF';
              const glowBorder = isApex 
                ? (isAmber 
                    ? 'border-[#FFA439] shadow-[0_0_40px_rgba(255,164,57,0.35)]' 
                    : 'border-[#00F0FF] shadow-[0_0_40px_rgba(0,240,255,0.35)]')
                : 'border-white/10 hover:border-white/30';

              return (
                <div 
                  className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl relative overflow-hidden border ${glowBorder} ${
                    isApex 
                      ? (isAmber 
                          ? 'bg-gradient-to-b from-[#181108] via-[#0d0a0d] to-[#04060a]' 
                          : 'bg-gradient-to-b from-[#041620] via-[#070e17] to-[#03060b]') 
                      : 'bg-[#070b13]/95'
                  }`}
                >
                  {/* Cyber Reticles & Corner Tags */}
                  <div className="absolute top-2.5 left-3.5 text-[9px] font-mono text-gray-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor }} />
                    <span>[ + ] NODE 0{index + 1}</span>
                  </div>
                  <div className="absolute top-2.5 right-3.5 text-[9px] font-mono text-gray-400">
                    CYBER SPEC
                  </div>

                  {/* Top Section */}
                  <div className="pt-3">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span 
                        className="text-[10px] font-mono px-2.5 py-1 rounded-lg border font-semibold truncate max-w-[190px]"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          borderColor: `${primaryColor}40`,
                          color: primaryColor
                        }}
                      >
                        {project.category}
                      </span>

                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${getStatusBadge(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1 font-royal tracking-tight leading-tight">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <div 
                      className="text-xs font-mono font-medium mb-3 line-clamp-1"
                      style={{ color: primaryColor }}
                    >
                      {project.tools.slice(0, 3).join(' • ')}
                    </div>

                    {/* Core Problem */}
                    <div className="mb-3">
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                        Core Challenge:
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 font-sans">
                        {project.problem}
                      </p>
                    </div>

                    {/* Architecture Specification Box */}
                    <div className="p-3 rounded-xl bg-black/60 border border-white/5 mb-3">
                      <div className="text-[10px] font-mono text-gray-300 uppercase font-bold flex items-center gap-1.5 mb-1">
                        <Terminal className="w-3 h-3 text-[#00F0FF]" />
                        <span>Approach &amp; Method:</span>
                      </div>
                      <p className="text-[11px] text-gray-400 font-mono leading-relaxed line-clamp-2">
                        {project.approach}
                      </p>
                    </div>

                    {/* Documented Limitation Notice */}
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-200/90 flex items-start gap-1.5 mb-3">
                      <AlertCircle className="w-3 h-3 text-[#FFA439] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">
                        <strong>Limitation:</strong> {project.limitations}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section: Tool Chips & Dossier Link */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span 
                          key={tool}
                          className="px-2 py-0.5 rounded bg-black/50 border border-white/10 text-[9px] font-mono text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold hover:underline group"
                        style={{ color: primaryColor }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>Open Project Dossier</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>

                      <span className="text-[9px] font-mono text-gray-400">
                        {project.lastUpdated}
                      </span>
                    </div>
                  </div>

                </div>
              );
            }}
          />
        </motion.div>

        {/* Directory CTA */}
        <div className="text-center mt-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-cyan-300 hover:text-white transition-all shadow-md"
          >
            <span>Explore All Filterable Projects in Full Directory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. HOW WE WORK — 5-STEP RESEARCH LOOP (Staggered Scroll-Linked Reveal) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>REPEATABLE SCIENTIFIC STANDARD</span>
          </motion.div>
          <h2 
            className="text-3xl sm:text-4xl font-black text-white font-royal tracking-tight mb-4 split-heading"
            style={{ perspective: '1000px' }}
          >
            How We <span className="text-[#00F0FF]">Work</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-gray-400 font-sans"
          >
            Every technical initiative follows a repeatable loop designed to guarantee reproducibility, safety, and peer review.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {howWeWork.map((step, sIdx) => (
            <motion.div 
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: sIdx * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="rounded-2xl bg-[#090e1a]/60 border border-white/10 p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-md"
            >
              <div>
                <span className="text-2xl font-black font-royal text-[#00F0FF] block mb-2">{step.step}</span>
                <h4 className="text-sm font-bold font-royal text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">{step.description}</p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-cyan-400/80">
                &bull; {step.deliverable}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. COLLEGE PARTNERSHIPS PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-r from-[#0a1224] via-[#080d1a] to-[#040810] border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC INSTITUTIONS &amp; FACULTY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-royal mb-4 split-heading">
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
        </motion.div>
      </section>

      {/* 7. TRUST & RESPONSIBLE DISCLOSURE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-4">
            <Lock className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>ETHICS &amp; SAFEGUARDS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-royal text-white mb-3 split-heading">
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
        </motion.div>
      </section>

    </div>
  );
}
