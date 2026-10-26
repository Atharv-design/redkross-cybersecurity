import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, ArrowRight, CheckCircle2, Lock, Cpu, Terminal, Compass, AlertCircle } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

export default function AboutCyberPage() {
  const { identity } = CYBER_DATA;
  const [legalHovered, setLegalHovered] = useState(false);
  const [missionHovered, setMissionHovered] = useState(false);
  const [audienceHovered, setAudienceHovered] = useState(false);
  const [boundaryHovered, setBoundaryHovered] = useState(false);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none relative">
      
      {/* Page Header with Cyber Telemetry */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>INSTITUTIONAL DIVISION PROFILE // STATUTORY IDENTITY</span>
        </div>

        <h1 
          className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading"
          style={{ perspective: '1000px' }}
        >
          About RedKross <span className="text-[#00F0FF]">Cybersecurity</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          The specialist technical, laboratory and security engineering division of RedKross Research Foundation.
        </p>
      </motion.div>

      {/* 1. Legal Status Notice (Cyber Circuit HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 w-full mb-12 select-none"
        onMouseEnter={() => setLegalHovered(true)}
        onMouseLeave={() => setLegalHovered(false)}
      >
        <CyberBannerFrame isHovered={legalHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8 sm:py-9">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                Legal Status &amp; Foundation Boundary
              </span>
              <span className="text-[10px] font-mono text-cyan-400/60 hidden sm:inline">
                CIN: U85499HR2026NPL144741
              </span>
            </div>

            {/* Glowing Lock Icon */}
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
              <span 
                className="absolute inset-0 rounded-lg bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
                style={{ animationDuration: '2.5s' }} 
                aria-hidden="true"
              />
              <Lock className="w-4 h-4 text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:animate-subtle-icon transition-all duration-300 relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.85)]" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 leading-tight group-hover:text-[#00F0FF] transition-colors">
            Statutory Foundation Boundary
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 max-w-3xl">
            RedKross Cybersecurity is an operational technical division of <strong className="text-white">RedKross Research Foundation</strong>, a legally incorporated Section 8 non-profit research company under the Ministry of Corporate Affairs, Government of India (CIN: <span className="font-mono text-cyan-300">U85499HR2026NPL144741</span>). This subdomain is not a separate commercial entity.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href={`${identity.parentOrg.url}/#about`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400/60 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] transition-all"
            >
              <span>Parent About &amp; Legal Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00F0FF]" />
            </a>
            <a 
              href={`${identity.parentOrg.url}/#team`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400/60 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] transition-all"
            >
              <span>Confirmed Board &amp; Leadership</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00F0FF]" />
            </a>
            <a 
              href={`${identity.parentOrg.url}/#governance`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400/60 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] transition-all"
            >
              <span>Foundation Governance</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00F0FF]" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 2. Scope & Principles (Side-by-Side Cyber HUD Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
        
        {/* Applied Mission Card */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="relative group transition-all duration-300 w-full h-full flex flex-col justify-between select-none"
          onMouseEnter={() => setMissionHovered(true)}
          onMouseLeave={() => setMissionHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={missionHovered} />

          <div className="relative z-10 px-8 sm:px-10 pt-7 pb-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-cyan-300 bg-cyan-950/70 uppercase">
                  MANDATE // 01
                </span>
                
                {/* Glowing Terminal Icon */}
                <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
                  <span 
                    className="absolute inset-0 rounded-lg bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
                    style={{ animationDuration: '2.5s' }} 
                    aria-hidden="true"
                  />
                  <Terminal className="w-4 h-4 text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:animate-subtle-icon transition-all duration-300 relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.85)]" />
                </div>
              </div>

              <h3 className="text-xl font-bold font-royal text-white mb-2.5 group-hover:text-[#00F0FF] transition-colors leading-tight">
                Our Applied Mission
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                Our mission is to bridge academic computer science curricula with practical, ethical security engineering. We conduct scoped research into digital threats, author open-source defensive tools, and create isolated lab models where students learn without endangering operational infrastructure.
              </p>
            </div>

            {/* Bottom Progress Trace Divider */}
            <div className="mt-4">
              <div className="relative w-full h-[1px] mb-2.5 overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                ETHICAL RESEARCH &bull; REPRODUCIBILITY FIRST
              </span>
            </div>
          </div>
        </motion.div>

        {/* Target Audiences Card */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="relative group transition-all duration-300 w-full h-full flex flex-col justify-between select-none"
          onMouseEnter={() => setAudienceHovered(true)}
          onMouseLeave={() => setAudienceHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={audienceHovered} />

          <div className="relative z-10 px-8 sm:px-10 pt-7 pb-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-cyan-300 bg-cyan-950/70 uppercase">
                  COHORTS // 02
                </span>
                
                {/* Glowing Cpu Icon */}
                <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
                  <span 
                    className="absolute inset-0 rounded-lg bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
                    style={{ animationDuration: '2.5s' }} 
                    aria-hidden="true"
                  />
                  <Cpu className="w-4 h-4 text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:animate-subtle-icon transition-all duration-300 relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.85)]" />
                </div>
              </div>

              <h3 className="text-xl font-bold font-royal text-white mb-2.5 group-hover:text-[#00F0FF] transition-colors leading-tight">
                Target Audiences
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans mb-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Engineering Students:</strong> Hands-on defensive skills, Linux triage, and verified capstone cohorts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Colleges &amp; Universities:</strong> Structured workshops, syllabus alignment, and faculty collaboration.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Researchers &amp; Fellows:</strong> Scoped, reproducible vulnerability studies and open-source tooling.</span>
                </li>
              </ul>
            </div>

            {/* Bottom Progress Trace Divider */}
            <div className="mt-4">
              <div className="relative w-full h-[1px] mb-2.5 overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                ACADEMIC &bull; INSTITUTIONAL &bull; RESEARCH
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 3. Boundaries: Current Work vs Future Plans (Cyber Circuit HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 w-full mb-12 select-none"
        onMouseEnter={() => setBoundaryHovered(true)}
        onMouseLeave={() => setBoundaryHovered(false)}
      >
        <CyberBannerFrame isHovered={boundaryHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8 sm:py-9">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-cyan-300 bg-cyan-950/70 uppercase">
              Operational Transparency
            </span>
            <span className="text-[10px] font-mono text-cyan-400/60 hidden sm:inline">
              ETHICS // HORIZON SCAN
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 leading-tight group-hover:text-[#00F0FF] transition-colors">
            Boundary Between Current Work &amp; Future Roadmaps
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
            To preserve complete institutional trust, we clearly distinguish our live validated activities from planned curriculum roadmaps:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-black/50 border border-emerald-500/40 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 font-mono font-bold block mb-1">
                WHAT IS ACTIVE TODAY:
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                Open-source prototype tools (DeepScan AI, AppSec Orchestrator), College workshop delivery, synthetic forensics workbench research, and zero-trust lab architecture specifications.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-amber-500/40 hover:border-amber-400 transition-colors">
              <span className="text-[#FFA439] font-mono font-bold block mb-1">
                WHAT IS PLANNED / IN ROADMAP:
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                Public self-service cyber range enclaves (currently private nodes only) and accredited multi-semester Academy certifications.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom Centered Action CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <Link
          to="/research"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400/60 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] transition-all"
        >
          <span>Explore Our Research Overview</span>
          <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
        </Link>
      </motion.div>

    </div>
  );
}
