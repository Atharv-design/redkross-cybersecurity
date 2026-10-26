import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Clock, Radio, Calendar, ArrowRight, Briefcase } from 'lucide-react';
import CyberProjectCircuitFrame from './CyberProjectCircuitFrame';

export default function CyberOpportunityCard({ opp, idx = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ 
        duration: 0.5, 
        delay: idx * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative group transition-all duration-300 w-full h-full flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Cyber Circuit HUD Frame */}
      <CyberProjectCircuitFrame isHovered={isHovered} />

      {/* 2. Content Container (Safe Inset Zone) */}
      <div className="relative z-10 px-8 sm:px-10 pt-7 pb-6 flex flex-col justify-between h-full">
        <div>
          {/* Header Row: Domain Badge & Glowing Icon */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 group-hover:border-cyan-400 group-hover:bg-cyan-900/60 transition-colors uppercase">
                {opp.domain}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-emerald-500/40 text-emerald-400 bg-emerald-950/40">
                Status: {opp.status}
              </span>
            </div>

            {/* Glowing Icon Box */}
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
              <span 
                className="absolute inset-0 rounded-lg bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
                style={{ animationDuration: '2.5s' }} 
                aria-hidden="true"
              />
              <Briefcase className="w-4 h-4 text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:animate-subtle-icon transition-all duration-300 relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.85)]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-royal text-white mb-3 group-hover:text-[#00F0FF] transition-colors leading-snug">
            {opp.title}
          </h3>

          {/* Telemetry Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 mb-3.5 bg-black/50 p-3 rounded-lg border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate"><strong>Lead:</strong> {opp.supervisor.split(' ')[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span><strong>Hours:</strong> {opp.hours}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span><strong>Type:</strong> {opp.delivery}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span><strong>Term:</strong> {opp.duration}</span>
            </div>
          </div>

          {/* Eligibility */}
          <div className="text-xs text-slate-300 font-sans mb-3">
            <span className="text-[10px] font-mono text-cyan-400 block mb-0.5 uppercase font-bold tracking-wider">
              Eligibility:
            </span>
            <p className="line-clamp-2 leading-relaxed text-slate-300">{opp.eligibility}</p>
          </div>

          {/* Key Scope */}
          <div className="text-xs text-slate-300 font-sans mb-3">
            <span className="text-[10px] font-mono text-cyan-400 block mb-1 uppercase font-bold tracking-wider">
              Key Scope:
            </span>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
              {opp.tasks.slice(0, 2).map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Footer Link */}
        <div className="mt-3">
          {/* Animated Progress Trace Divider */}
          <div className="relative w-full h-[1px] mb-2.5 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2.5 h-[2px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_8px_#FFFFFF]" />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-400 group-hover:text-cyan-300 transition-colors tracking-wider">
              Deadline: Rolling Cohort
            </span>
            <Link
              to={`/opportunities/${opp.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00F0FF] hover:text-[#5CF7FF] group-hover:underline transition-colors"
            >
              <span>Role scope &amp; apply</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
