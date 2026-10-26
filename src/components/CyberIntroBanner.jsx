import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import CyberBannerFrame from './CyberBannerFrame';

export default function CyberIntroBanner({ parentOrgUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative group transition-all duration-300 w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Cyber Circuit HUD Frame */}
      <CyberBannerFrame isHovered={isHovered} />

      {/* 2. Banner Content Container (Safe Inset Zone) */}
      <div className="relative z-10 px-8 sm:px-12 py-8 sm:py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-cyan-300 bg-cyan-950/70 group-hover:border-cyan-400 group-hover:bg-cyan-900/60 transition-colors uppercase">
              Division Scope &amp; Institutional Boundaries
            </span>
            <span className="text-[10px] font-mono text-cyan-400/60 hidden sm:inline">
              SYS // CANONICAL
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-royal text-white mb-2 leading-tight group-hover:text-[#00F0FF] transition-colors">
            The Dedicated Technical Wing of RedKross Research Foundation
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            This subdomain focuses strictly on cybersecurity engineering, isolated laboratory models, and practical student workshops. This division does not claim separate legal incorporation. For institutional governance, incorporation documents, leadership profiles, or psychology initiatives, visit our canonical parent portal.
          </p>

          {/* Animated Progress Trace Divider on banner */}
          <div className="relative w-full max-w-xl h-[1px] mt-4 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            
            {/* Luminous laser packet */}
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2.5 h-[2px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_8px_#FFFFFF]" />
          </div>
        </div>

        {/* Right CTA / Action Button */}
        <div className="shrink-0 self-start md:self-center flex flex-col items-end gap-2">
          <a 
            href={parentOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-white hover:text-black hover:bg-[#00F0FF] hover:border-[#00F0FF] text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-[0_0_15px_rgba(0,240,255,0.15)] group-hover:border-cyan-400"
          >
            <span>Visit Parent Foundation</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:text-black transition-colors" />
          </a>
          <span className="text-[10px] font-mono text-slate-400 tracking-wider">
            EXTERNAL REGISTRY // 01
          </span>
        </div>
      </div>
    </motion.div>
  );
}
