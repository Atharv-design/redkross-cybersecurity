import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import CyberCircuitFrame from './CyberCircuitFrame';

// Contextual telemetry chips for each focus area
const FOCUS_TAGS = {
  'ai-security': ['Prompt Injections', 'RAG Guardrails', 'Model Auditing'],
  'defensive-security': ['eBPF Telemetry', 'Sigma Rules', 'Automated IR'],
  'digital-forensics': ['Volatile Memory', 'Artifact Parsing', 'Chain-of-Custody'],
  'threat-intelligence': ['CVE Prioritization', 'EPSS Scoring', 'Adversary Intel'],
  'cloud-iot': ['Firmware Extraction', 'Binary Entropy', 'IaC Hardening'],
  'human-centred-security': ['Cognitive Deception', 'Phishing Defense', 'Security Friction']
};

export default function CircuitTraceCard({ fa, idx = 0, iconMap = {}, showMotion = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = (iconMap && iconMap[fa.icon]) || ShieldCheck;
  const trackNumber = String(idx + 1).padStart(2, '0');
  const tags = FOCUS_TAGS[fa.id] || [];

  const cardContent = (
    <div 
      className="relative group transition-all duration-300 w-full h-full flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. DITTO SCI-FI CYBER HUD CIRCUIT FRAME (Calibrated perimeter lines, zero interior overlap) */}
      <CyberCircuitFrame isHovered={isHovered} />

      {/* 2. CARD CONTENT CONTAINER (Safe Inset Zone: 100% clear of all design lines) */}
      <div className="relative z-10 px-9 sm:px-10 pt-7 pb-6 flex flex-col justify-between h-full">
        <div>
          {/* Header Row: Track Badge (Left) & Compact Cyber Icon (Right) */}
          <div className="flex items-center justify-between mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-cyan-300 bg-cyan-950/70 group-hover:border-cyan-400 group-hover:bg-cyan-900/60 group-hover:shadow-[0_0_10px_rgba(0,240,255,0.25)] transition-all duration-300">
              {fa.badge}
            </span>

            {/* Inset Cyber Icon Badge */}
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden flex items-center justify-center">
              <span 
                className="absolute inset-0 rounded-lg bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
                style={{ animationDuration: '2.5s' }} 
                aria-hidden="true"
              />
              <IconComponent className="w-4 h-4 text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:animate-subtle-icon transition-all duration-300 relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.85)]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-[17px] font-bold font-royal text-white mb-1.5 group-hover:text-[#00F0FF] transition-colors leading-snug">
            {fa.title}
          </h3>

          {/* Summary */}
          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-2.5 line-clamp-2">
            {fa.summary}
          </p>

          {/* Telemetry Chips */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-cyan-200/90 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 3. Divider & Footer Row (Tight, Intentional, Zero Dead Space) */}
        <div className="mt-3">
          {/* Animated Progress Trace Divider */}
          <div className="relative w-full h-[1px] mb-2.5 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            
            {/* Moving laser packet */}
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2.5 h-[2px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_8px_#FFFFFF]" />
          </div>

          {/* Footer: Track Number & Scope Link */}
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-400 group-hover:text-cyan-300 transition-colors tracking-wider">
              Track {trackNumber}
            </span>
            <Link 
              to={`/research/${fa.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F0FF] hover:text-[#5CF7FF] group-hover:underline transition-colors font-medium"
            >
              <span>Read focus scope</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  if (!showMotion) {
    return cardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ 
        duration: 0.45, 
        delay: (idx % 3) * 0.08, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
}
