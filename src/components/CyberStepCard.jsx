import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CyberStepCircuitFrame from './CyberStepCircuitFrame';

export default function CyberStepCard({ step, sIdx = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ 
        duration: 0.45, 
        delay: sIdx * 0.08, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative group transition-all duration-300 w-full h-full flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Cyber Circuit HUD Frame */}
      <CyberStepCircuitFrame isHovered={isHovered} />

      {/* 2. Content Container (Safe Inset Zone) */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full">
        <div>
          {/* Top Row: Step Telemetry and Glowing Number */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-black font-royal text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:scale-105 transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
              {step.step}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-cyan-400/70 uppercase">
              PHASE // 0{sIdx + 1}
            </span>
          </div>

          <h3 className="text-sm font-bold font-royal text-white mb-2 leading-snug group-hover:text-[#00F0FF] transition-colors">
            {step.title}
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            {step.description}
          </p>
        </div>

        <div>
          {/* Animated Progress Trace Divider */}
          <div className="relative w-full h-[1px] mb-2.5 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2.5 h-[2px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_8px_#FFFFFF]" />
          </div>

          <div className="text-[10px] font-mono text-cyan-300 font-semibold group-hover:text-white transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />
            <span className="truncate">{step.deliverable}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
