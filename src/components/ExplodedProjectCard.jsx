import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  AlertCircle, 
  Cpu, 
  Radio, 
  Terminal, 
  ShieldCheck, 
  ShieldAlert, 
  Compass, 
  Search, 
  FileText, 
  Code2, 
  Globe2,
  FolderGit2,
  ExternalLink
} from 'lucide-react';
import CyberProjectCircuitFrame from './CyberProjectCircuitFrame';

export default function ExplodedProjectCard({ project, idx = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic icon mapping across all 10 verified technical projects
  const getProjectIcon = () => {
    const slug = (project.slug || '').toLowerCase();
    if (slug.includes('deepscan')) return Cpu;
    if (slug.includes('firmstrike')) return Radio;
    if (slug.includes('appsec')) return Terminal;
    if (slug.includes('risklens')) return Compass;
    if (slug.includes('ztna') || slug.includes('zero-trust')) return ShieldCheck;
    if (slug.includes('soc') || slug.includes('email-mobile')) return ShieldAlert;
    if (slug.includes('osint')) return Search;
    if (slug.includes('ocr') || slug.includes('pii')) return FileText;
    if (slug.includes('api')) return Code2;
    if (slug.includes('threat') || slug.includes('map')) return Globe2;
    return ShieldCheck;
  };

  const IconComponent = getProjectIcon();

  const getStatusBadge = (status) => {
    const s = status?.toLowerCase() || '';
    if (s.includes('evaluated') || s.includes('completed') || s.includes('active')) {
      return 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40';
    }
    if (s.includes('prototype')) {
      return 'bg-amber-950/70 text-[#FFA439] border-amber-500/40';
    }
    return 'bg-cyan-950/70 text-cyan-300 border-cyan-500/40';
  };

  const isLeft = idx % 2 === 0;
  // Left card appears first (0.04s), right card follows after (0.22s) so left is ALWAYS first
  const staggerDelay = isLeft ? 0.04 : 0.22;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, x: isLeft ? -14 : 14 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ 
        duration: 0.48, 
        delay: staggerDelay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="h-full flex"
    >
      <div 
        className="relative group transition-all duration-300 w-full h-full flex flex-col justify-between select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* 1. DITTO SCI-FI CYBER HUD CIRCUIT FRAME (Exact Focus Area card aesthetic) */}
      <CyberProjectCircuitFrame isHovered={isHovered} />

      {/* 2. CARD CONTENT CONTAINER (Safe Inset Zone within HUD Plate) */}
      <div className="relative z-10 px-9 sm:px-10 pt-7 pb-6 flex flex-col justify-between h-full">
        <div>
          {/* Header Row: Category Badge & Top-Right Cyber Icon Box */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-cyan-300 bg-cyan-950/70 group-hover:border-cyan-400 group-hover:bg-cyan-900/60 transition-colors">
                {project.category}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${getStatusBadge(project.status)}`}>
                {project.status}
              </span>
            </div>

            {/* Glowing Icon Box matching Focus Area cards */}
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
              <span 
                className="absolute inset-0 rounded-lg bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
                style={{ animationDuration: '2.5s' }} 
                aria-hidden="true"
              />
              <IconComponent className="w-4 h-4 text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:animate-subtle-icon transition-all duration-300 relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.85)]" />
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold font-royal text-white mb-1.5 group-hover:text-[#00F0FF] transition-colors leading-tight">
            {project.title}
          </h3>

          {/* Direct Verified GitHub Repository Path Link */}
          {project.repoUrl && (
            <div className="mb-2.5">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300/80 hover:text-[#00F0FF] hover:underline transition-colors max-w-full truncate group/repo"
                title={`Open repository: ${project.repoUrl}`}
              >
                <FolderGit2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                <span className="truncate">{project.repoUrl.replace('https://', '')}</span>
                <ExternalLink className="w-2.5 h-2.5 text-cyan-400 opacity-60 group-hover/repo:opacity-100 shrink-0" />
              </a>
            </div>
          )}

          {/* Problem Narrative */}
          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
            {project.problem}
          </p>

          {/* Engineering Methodology Box */}
          <div className="p-3 rounded-lg bg-black/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors mb-2.5">
            <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider font-bold block mb-1">
              Engineering Method:
            </span>
            <p className="text-xs font-mono text-slate-200 leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Documented Limitation Box (Full unclipped text) */}
          <div className="p-2.5 rounded-lg bg-amber-500/[0.07] border border-amber-500/30 text-amber-200/90 flex items-start gap-2 mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-[#FFA439] shrink-0 mt-0.5" />
            <div className="text-[11px] leading-relaxed">
              <strong className="text-[#FFA439] font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                Documented Limitation:
              </strong>
              <span>{project.limitations}</span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-slate-300 border border-white/10 group-hover:border-cyan-500/30 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Divider & Footer Row */}
        <div className="mt-3">
          {/* Animated Progress Trace Divider */}
          <div className="relative w-full h-[1px] mb-2.5 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            
            {/* Luminous progress trace sweeping across on hover */}
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2.5 h-[2px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_8px_#FFFFFF]" />
          </div>

          {/* Footer: Direct GitHub Repo Link & Dossier Action Link */}
          <div className="flex items-center justify-between text-[11px] font-mono pt-1">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-[#00F0FF] hover:bg-cyan-900/70 transition-all shadow-[0_0_12px_rgba(0,240,255,0.18)]"
              title={`Direct repository: ${project.repoUrl}`}
            >
              <FolderGit2 className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>

            <Link
              to={`/projects/${project.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-royal font-bold text-white hover:text-[#00F0FF] uppercase tracking-wider transition-colors"
            >
              <span>Full Dossier</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  );
}
