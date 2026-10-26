import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  HelpCircle, 
  Layers 
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

export default function FocusAreaPage() {
  const { focusArea } = useParams();
  const { focusAreas, projects, identity } = CYBER_DATA;

  const [questionHovered, setQuestionHovered] = useState(false);
  const [scopeHovered, setScopeHovered] = useState(false);
  const [methodHovered, setMethodHovered] = useState(false);
  const [defenseHovered, setDefenseHovered] = useState(false);
  const [humanHovered, setHumanHovered] = useState(false);

  const area = focusAreas.find(fa => fa.id === focusArea);

  if (!area) {
    return <Navigate to="/research" replace />;
  }

  const relatedProjects = projects.filter(p => 
    p.category.toLowerCase().includes(area.id.replace('-', ' ')) ||
    p.domain.toLowerCase().includes(area.id.replace('-', ' ')) ||
    (area.id === 'ai-security' && p.slug === 'deepscan-ai') ||
    (area.id === 'cloud-iot' && p.slug === 'firmstrike') ||
    (area.id === 'defensive-security' && p.slug === 'appsec-orchestrator') ||
    (area.id === 'threat-intelligence' && p.slug === 'risklens-ai')
  );

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none relative">
      
      {/* Back Link */}
      <Link 
        to="/research"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00F0FF] mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>&larr; Back to Research Overview</span>
      </Link>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <span>FOCUS TRACK</span>
          <span className="text-slate-500">&bull;</span>
          <span>{area.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          {area.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
          {area.summary}
        </p>
      </motion.div>

      {/* Primary Research Question (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-10 select-none"
        onMouseEnter={() => setQuestionHovered(true)}
        onMouseLeave={() => setQuestionHovered(false)}
      >
        <CyberBannerFrame isHovered={questionHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                Central Research Question
              </span>
            </div>
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center shrink-0">
              <HelpCircle className="w-4 h-4 text-[#00F0FF]" />
            </div>
          </div>

          <blockquote className="text-lg sm:text-xl font-medium text-white italic font-sans leading-snug">
            &ldquo;{area.researchQuestion}&rdquo;
          </blockquote>
        </div>
      </motion.div>

      {/* Scope & Methodology (Cyber HUD Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Technical Scope Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="relative group transition-all duration-300 select-none min-h-[220px] flex flex-col justify-between"
          onMouseEnter={() => setScopeHovered(true)}
          onMouseLeave={() => setScopeHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={scopeHovered} />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Technical Scope</span>
                </span>
                <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                  <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {area.scope}
              </p>
            </div>

            <div className="mt-4 pt-3 relative">
              <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${scopeHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investigative Methodology Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="relative group transition-all duration-300 select-none min-h-[220px] flex flex-col justify-between"
          onMouseEnter={() => setMethodHovered(true)}
          onMouseLeave={() => setMethodHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={methodHovered} />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Investigative Methodology</span>
                </span>
                <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                  <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {area.methodology}
              </p>
            </div>

            <div className="mt-4 pt-3 relative">
              <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${methodHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Defensive Guidance & Mitigations (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-12 select-none"
        onMouseEnter={() => setDefenseHovered(true)}
        onMouseLeave={() => setDefenseHovered(false)}
      >
        <CyberBannerFrame isHovered={defenseHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-emerald-500/40 text-emerald-400 bg-emerald-950/70 uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Recommended Defensive Guidance</span>
              </span>
            </div>
            <div className="relative p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/35 group-hover:border-emerald-400 transition-all flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {area.defensiveGuidance}
          </p>
        </div>
      </motion.div>

      {/* Special Mandate for Human-Centred Security (Cyber HUD Banner with Amber Accent) */}
      {area.id === 'human-centred-security' && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="relative group transition-all duration-300 mb-12 select-none"
          onMouseEnter={() => setHumanHovered(true)}
          onMouseLeave={() => setHumanHovered(false)}
        >
          <CyberBannerFrame isHovered={humanHovered} />

          <div className="relative z-10 px-8 sm:px-12 py-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-amber-500/40 text-[#FFA439] bg-amber-950/70 uppercase">
                  Interdisciplinary Psychology Convergence
                </span>
              </div>
              <div className="relative p-1.5 rounded-lg bg-amber-950/40 border border-amber-500/35 group-hover:border-[#FFA439] transition-all flex items-center justify-center shrink-0">
                <ExternalLink className="w-4 h-4 text-[#FFA439]" />
              </div>
            </div>

            <h3 className="text-xl font-bold font-royal text-white mb-2 leading-tight">
              Human-Centred Research Links to Psychology Subdomain
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 max-w-3xl">
              Research into user susceptibility, cognitive bias, and behavioral deception is conducted jointly with the RedKross Psychology Subdomain. For participant counselling, cognitive assessments, and mental wellbeing resources, visit the dedicated platform.
            </p>

            <a
              href={identity.psychologyDomain}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/15 border border-amber-500/40 hover:border-amber-400 text-[#FFA439] font-royal font-bold text-xs uppercase tracking-wider hover:bg-amber-500/25 transition-all shadow-[0_0_20px_rgba(255,164,57,0.25)]"
            >
              <span>Visit Psychology Platform</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FFA439]" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Status Note */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="p-6 rounded-2xl bg-[#050c1a]/80 border border-cyan-500/20 mb-12"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
          Current Research Status:
        </span>
        <p className="text-xs text-cyan-300 font-sans">
          {area.statusNote}
        </p>
      </motion.div>

      {/* Related Projects if any */}
      {relatedProjects.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-cyan-500/20"
        >
          <h3 className="text-xl font-bold font-royal text-white mb-6">
            Associated Engineering Initiatives
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((p, idx) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <Link 
                  to={`/projects/${p.slug}`}
                  className="p-5 rounded-2xl bg-[#081224]/80 border border-cyan-500/25 hover:border-cyan-400/60 transition-all group flex items-center justify-between shadow-md hover:shadow-[0_0_18px_rgba(0,240,255,0.25)]"
                >
                  <div>
                    <h4 className="text-sm font-bold font-royal text-white group-hover:text-[#00F0FF] transition-colors">{p.title}</h4>
                    <span className="text-[10px] font-mono text-slate-400">{p.status} &bull; {p.category}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#00F0FF] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );
}
