import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  Layers, 
  FolderGit2,
  Calendar,
  UserCheck
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { projects } = CYBER_DATA;

  const [problemHovered, setProblemHovered] = useState(false);
  const [purposeHovered, setPurposeHovered] = useState(false);
  const [archHovered, setArchHovered] = useState(false);
  const [evalHovered, setEvalHovered] = useState(false);
  const [limitHovered, setLimitHovered] = useState(false);
  const [safetyHovered, setSafetyHovered] = useState(false);

  const normalizedSlug = (slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const proj = projects.find(p => {
    const pSlug = (p.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return p.slug === slug || pSlug === normalizedSlug || pSlug.includes(normalizedSlug) || normalizedSlug.includes(pSlug);
  });

  if (!proj) {
    return <Navigate to="/projects" replace />;
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Prototype':
        return 'bg-amber-500/15 text-[#FFA439] border-amber-500/40';
      case 'In development':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40';
      case 'Evaluated / validated':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      default:
        return 'bg-slate-500/15 text-slate-400 border-slate-500/40';
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none relative">
      
      {/* Back to Directory */}
      <Link 
        to="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00F0FF] mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>&larr; Back to Projects Directory</span>
      </Link>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{proj.category}</span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border font-medium ${getStatusBadge(proj.status)}`}>
            {proj.status}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Last Verified: {proj.lastUpdated}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          {proj.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
            <UserCheck className="w-4 h-4 text-[#00F0FF]" />
            <span>Approved Technical Lead: {proj.approvedOwner}</span>
          </div>

          <a
            href={proj.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/70 border border-cyan-500/40 hover:border-[#00F0FF] text-[#00F0FF] hover:text-white font-mono text-xs transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:bg-cyan-900/60"
            title={`Direct GitHub repository for ${proj.title}`}
          >
            <FolderGit2 className="w-4 h-4 text-[#00F0FF]" />
            <span>{proj.repoUrl.replace('https://', '')}</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>
      </motion.div>

      {/* Problem & Purpose HUD Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="relative group transition-all duration-300 select-none min-h-[200px] flex flex-col justify-between"
          onMouseEnter={() => setProblemHovered(true)}
          onMouseLeave={() => setProblemHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={problemHovered} />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                  01 / The Problem
                </span>
                <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                  <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {proj.problem}
              </p>
            </div>

            <div className="mt-4 pt-3 relative">
              <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${problemHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group transition-all duration-300 select-none min-h-[200px] flex flex-col justify-between"
          onMouseEnter={() => setPurposeHovered(true)}
          onMouseLeave={() => setPurposeHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={purposeHovered} />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                  02 / Technical Purpose
                </span>
                <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                  <Cpu className="w-3.5 h-3.5 text-[#00F0FF]" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {proj.purpose}
              </p>
            </div>

            <div className="mt-4 pt-3 relative">
              <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${purposeHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Architecture & Stack HUD Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-10 select-none"
        onMouseEnter={() => setArchHovered(true)}
        onMouseLeave={() => setArchHovered(false)}
      >
        <CyberBannerFrame isHovered={archHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture &amp; Pipeline Design</span>
              </span>
            </div>
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-[#00F0FF]" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
            {proj.architecture}
          </p>

          <div>
            <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold">Core Technical Stack:</span>
            <div className="flex flex-wrap gap-2">
              {proj.tools.map(tool => (
                <span key={tool} className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Evaluation & Limitations HUD Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Empirical Evaluation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="relative group transition-all duration-300 select-none min-h-[200px] flex flex-col justify-between"
          onMouseEnter={() => setEvalHovered(true)}
          onMouseLeave={() => setEvalHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={evalHovered} />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-emerald-500/40 text-emerald-400 bg-emerald-950/70 uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Empirical Evaluation</span>
                </span>
                <div className="relative p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/35 group-hover:border-emerald-400 transition-all flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {proj.evaluation}
              </p>
            </div>

            <div className="mt-4 pt-3 relative">
              <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${evalHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documented Limitations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group transition-all duration-300 select-none min-h-[200px] flex flex-col justify-between"
          onMouseEnter={() => setLimitHovered(true)}
          onMouseLeave={() => setLimitHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={limitHovered} />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-amber-500/40 text-[#FFA439] bg-amber-950/70 uppercase flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Documented Limitations</span>
                </span>
                <div className="relative p-1.5 rounded-lg bg-amber-950/40 border border-amber-500/35 group-hover:border-[#FFA439] transition-all flex items-center justify-center shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-[#FFA439]" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {proj.limitations}
              </p>
            </div>

            <div className="mt-4 pt-3 relative">
              <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${limitHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Safety & Responsible Boundaries HUD Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-12 select-none"
        onMouseEnter={() => setSafetyHovered(true)}
        onMouseLeave={() => setSafetyHovered(false)}
      >
        <CyberBannerFrame isHovered={safetyHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Safety &amp; Ethical Boundary</span>
              </span>
            </div>
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {proj.safetyBoundaries}
          </p>
        </div>
      </motion.div>

      {/* Repository / Demo Link */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-cyan-500/20"
      >
        <div>
          <span className="text-xs font-mono text-slate-400 block mb-0.5">Repository Status: Public Open-Source Research</span>
          <span className="text-[11px] font-mono text-cyan-400/80">{proj.repoUrl}</span>
        </div>
        <a
          href={proj.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-[#00F0FF] text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)]"
        >
          <FolderGit2 className="w-4 h-4 text-[#00F0FF]" />
          <span>Inspect Repository on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
        </a>
      </motion.div>

    </div>
  );
}
