import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, ExternalLink } from 'lucide-react';
import CyberBannerFrame from './CyberBannerFrame';

export default function CyberPartnershipBanner({ collegePartnerships }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative group transition-all duration-300 w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Cyber Circuit HUD Frame */}
      <CyberBannerFrame isHovered={isHovered} />

      {/* 2. Banner Content Container (Safe Inset Zone) */}
      <div className="relative z-10 px-8 sm:px-12 py-8 sm:py-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-cyan-300 bg-cyan-950/70 group-hover:border-cyan-400 group-hover:bg-cyan-900/60 transition-colors uppercase">
              Institutional Collaboration
            </span>
            <span className="text-[10px] font-mono text-cyan-400/60 hidden sm:inline">
              ACADEMIC // PARTNERSHIPS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white font-royal mb-3 group-hover:text-[#00F0FF] transition-colors leading-tight">
            College &amp; University Partnerships
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
            {collegePartnerships.overview}
          </p>

          {/* Delivery Formats - Mini Cyber Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
            {collegePartnerships.formats.slice(0, 3).map((f, i) => (
              <div 
                key={i} 
                className="p-3.5 rounded-lg bg-black/50 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-950/20 transition-all duration-200 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-royal font-bold text-white mb-1">{f.title}</div>
                  <div className="text-[10px] font-mono text-[#00F0FF] font-semibold mb-1.5">{f.format}</div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">{f.scope}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/college-partnerships"
              className="px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase tracking-wider hover:bg-[#5CF7FF] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(0,240,255,0.35)]"
            >
              Submit Pilot Enquiry
            </Link>
            <Link
              to="/college-partnerships"
              className="px-6 py-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-900/60 hover:border-cyan-400 transition-all hover:scale-[1.02]"
            >
              Inspect Full Partnership Scope
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
