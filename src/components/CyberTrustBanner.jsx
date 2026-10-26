import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, AlertCircle, ArrowRight } from 'lucide-react';
import CyberBannerFrame from './CyberBannerFrame';

export default function CyberTrustBanner({ responsibleDisclosure }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="relative group transition-all duration-300 w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Cyber Circuit HUD Frame */}
      <CyberBannerFrame isHovered={isHovered} />

      {/* 2. Content Container (Safe Inset Zone) */}
      <div className="relative z-10 px-8 sm:px-12 py-9 sm:py-12 text-center">
        {/* Glowing Lock Icon */}
        <div className="inline-flex relative p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/40 text-[#00F0FF] mb-4 group-hover:border-[#00F0FF] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
          <span 
            className="absolute inset-0 rounded-xl bg-[#00F0FF]/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
            style={{ animationDuration: '2.5s' }} 
            aria-hidden="true"
          />
          <Lock className="w-5 h-5 text-[#00F0FF] relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]" />
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold font-royal text-white mb-4 group-hover:text-[#00F0FF] transition-colors">
          Trust Is Part of the Research
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          {responsibleDisclosure.statement}
        </p>

        {/* Safety Boundary Box */}
        <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/30 max-w-2xl mx-auto text-xs text-amber-200/90 font-mono mb-8 text-left flex items-start gap-3 group-hover:border-amber-500/50 transition-colors">
          <AlertCircle className="w-4 h-4 text-[#FFA439] shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed">
            <strong className="text-[#FFA439] block mb-0.5 uppercase tracking-wider font-bold">
              STRICT SAFETY BOUNDARY:
            </strong>
            <span>We operate strictly under authorized testing permissions and synthetic datasets. Testing RedKross or third-party systems without permission is strictly prohibited.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/responsible-disclosure"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs font-mono font-bold text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black hover:border-[#00F0FF] transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            <span>Responsible Vulnerability Disclosure</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/trust"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-[1.02]"
          >
            <span>Ethics &amp; Data Minimization</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
