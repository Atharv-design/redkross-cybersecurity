import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Terminal, CheckCircle2, Shield, FileCode2, Share2, Search, Cpu } from 'lucide-react';
import CyberBannerFrame from './CyberBannerFrame';

// Contextual icons for the 5 research loop phases
const STEP_ICONS = {
  '01': Search,
  '02': Shield,
  '03': Cpu,
  '04': FileCode2,
  '05': Share2
};

const STEP_SUBTITLES = {
  '01': 'EVIDENCE & THREAT MODELING',
  '02': 'ISOLATED SANDBOX ARCHITECTURE',
  '03': 'REPRODUCIBLE STRESS BENCHMARK',
  '04': 'ARCHITECTURE DECISION RECORDS',
  '05': 'COORDINATED DISCLOSURE & TOOLS'
};

/**
 * CyberProgressStepCard
 * High-craft adaptation of Framer's "Progress Steps" component:
 * - Left: Giant Cyber font-royal Step Number ("01", "02", ...) + Telemetry Badge
 * - Center: Vertical Luminous Cyber Laser Progress Tube with scroll & hover physics
 * - Right: Spacious Content Zone with Title, Full Description, and Unclipped Deliverable Box
 * - Encased in RedKross Cyber Circuit HUD Plate with traveling perimeter laser pulse.
 */
export default function CyberProgressStepCard({ step, sIdx = 0, totalSteps = 5 }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Scroll-linked progress bar animation matching Framer's onScrollTarget transform
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 85%", "center 45%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001
  });

  const IconComponent = STEP_ICONS[step.step] || Terminal;
  const subtitle = STEP_SUBTITLES[step.step] || `PHASE // ${step.step}`;

  return (
    <motion.div
      ref={cardRef}
      id={`how-we-work-step-${step.step}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ 
        duration: 0.55, 
        delay: sIdx * 0.06, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative group transition-all duration-300 w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Cyber Circuit HUD Outer Frame */}
      <CyberBannerFrame isHovered={isHovered} />

      {/* 2. Main Framer-Style Progress Steps Layout Container */}
      <div className="relative z-10 px-6 sm:px-10 py-7 sm:py-9 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        
        {/* --- LEFT: GIANT STEP NUMBER & TELEMETRY --- */}
        <div className="flex flex-row md:flex-col items-center justify-between md:justify-center w-full md:w-36 shrink-0 gap-2 border-b md:border-b-0 pb-3 md:pb-0 border-white/10">
          <div className="flex items-center gap-3 md:flex-col">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-black font-royal text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:scale-105 transition-all duration-300 drop-shadow-[0_0_18px_rgba(0,240,255,0.7)] leading-none">
              {step.step}
            </span>
            <div className="flex flex-col md:items-center">
              <span className="text-[10px] font-mono tracking-widest text-cyan-300 font-bold uppercase">
                PHASE // {step.step}
              </span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider hidden sm:block">
                STEP {sIdx + 1} OF {totalSteps}
              </span>
            </div>
          </div>

          {/* Inset Glowing Cyber Icon Badge */}
          <div className="relative p-2 rounded-xl bg-cyan-950/50 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
            <span 
              className="absolute inset-0 rounded-xl bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
              style={{ animationDuration: '2.5s' }} 
              aria-hidden="true"
            />
            <IconComponent className="w-4 h-4 text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:animate-subtle-icon transition-all duration-300 relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.85)]" />
          </div>
        </div>

        {/* --- CENTER: THE FRAMER SIGNATURE PROGRESS BAR (Cyber Laser Tube) --- */}
        <div className="hidden md:flex flex-col items-center justify-center self-stretch shrink-0 px-2">
          {/* Top Node */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] mb-1.5 transition-transform group-hover:scale-125" />
          
          {/* Laser Tube Channel */}
          <div className="relative w-1.5 flex-1 min-h-[140px] rounded-full bg-cyan-950/70 border border-cyan-500/30 overflow-hidden shadow-inner">
            {/* Base dim line */}
            <div className="absolute inset-0 bg-white/[0.06]" />

            {/* Scroll-Driven Charged Laser Fill */}
            <motion.div 
              style={{ 
                scaleY: isHovered ? 1 : smoothProgress,
                transformOrigin: 'top center'
              }}
              className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#00F0FF] via-[#5CF7FF] to-white shadow-[0_0_12px_#00F0FF] rounded-full"
            />
          </div>

          {/* Bottom Node */}
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/50 group-hover:bg-[#00F0FF] group-hover:shadow-[0_0_8px_#00F0FF] mt-1.5 transition-colors" />
        </div>

        {/* --- RIGHT: SPACIOUS CONTENT ZONE --- */}
        <div className="flex-1 w-full flex flex-col justify-between">
          <div>
            {/* Header Telemetry Subtitle */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-cyan-300 bg-cyan-950/70 group-hover:border-cyan-400 group-hover:bg-cyan-900/60 transition-colors uppercase">
                {subtitle}
              </span>
              <span className="text-[10px] font-mono text-cyan-400/60 hidden sm:inline">
                REPRODUCIBILITY LOOP
              </span>
            </div>

            {/* Step Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-royal text-white mb-2.5 group-hover:text-[#00F0FF] transition-colors leading-tight">
              {step.title}
            </h3>

            {/* Full Step Description (Unclipped, Crisp Typography) */}
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
              {step.description}
            </p>
          </div>

          {/* Deliverable Box & Bottom Progress Trace */}
          <div className="pt-2">
            {/* Deliverable Artifact Box */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-black/50 border border-cyan-500/25 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all duration-300 flex items-start gap-2.5 mb-3">
              <Terminal className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(0,240,255,0.7)]" />
              <div className="text-xs font-mono leading-relaxed">
                <span className="text-[#00F0FF] uppercase tracking-wider font-bold block text-[10px] mb-0.5">
                  Verified Phase Deliverable:
                </span>
                <span className="text-slate-200 font-medium">{step.deliverable}</span>
              </div>
            </div>

            {/* Animated Luminous Progress Trace Divider */}
            <div className="relative w-full h-[1px] overflow-hidden" aria-hidden="true">
              <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
              
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2.5 h-[2px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_8px_#FFFFFF]" />
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
