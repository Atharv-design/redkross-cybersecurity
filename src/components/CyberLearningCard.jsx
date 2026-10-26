import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, GraduationCap, BookOpen } from 'lucide-react';
import CyberProjectCircuitFrame from './CyberProjectCircuitFrame';

export default function CyberLearningCard({ 
  type = 'workshops', 
  academyData = null, 
  idx = 0 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isAcademy = type === 'academy';
  const IconComponent = isAcademy ? BookOpen : GraduationCap;

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
          {/* Header Row: Badge & Glowing Icon Box */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border ${
                isAcademy 
                  ? 'border-amber-500/40 text-[#FFA439] bg-amber-950/40' 
                  : 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40'
              }`}>
                {isAcademy ? (academyData?.status || 'Under Development') : 'Ready to Deliver'}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {isAcademy ? 'Curriculum Roadmapping' : 'Live Delivery Formats'}
              </span>
            </div>

            {/* Inset Cyber Icon Badge */}
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
              <span 
                className="absolute inset-0 rounded-lg bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" 
                style={{ animationDuration: '2.5s' }} 
                aria-hidden="true"
              />
              <IconComponent className="w-4 h-4 text-[#00F0FF] group-hover:text-[#5CF7FF] group-hover:animate-subtle-icon transition-all duration-300 relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.85)]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 leading-tight group-hover:text-[#00F0FF] transition-colors">
            {isAcademy ? 'RedKross Academy (Future Learning Paths)' : 'Hands-On Workshops & Supervised Cohorts'}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            {isAcademy 
              ? academyData?.disclaimer 
              : 'Engineered for college students and emerging practitioners. We run targeted 2–3 day bootcamps on Linux security and packet triage, as well as semester-long research capstone cohorts with structured milestones.'
            }
          </p>

          {/* Body Features */}
          {isAcademy ? (
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {academyData?.plannedTracks.slice(0, 4).map(tr => (
                <div key={tr.track} className="p-2.5 rounded-lg bg-black/50 border border-white/10 group-hover:border-amber-500/30 transition-colors text-[11px]">
                  <div className="text-[10px] font-mono text-amber-300 font-bold">{tr.track} &bull; {tr.level}</div>
                  <div className="text-slate-300 font-sans truncate">{tr.title}</div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-2.5 text-xs font-sans text-slate-300 mb-4">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Practical defensive labs with disposable virtual environments</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Linux command-line fundamentals &amp; forensic evidence collection</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Faculty-aligned milestone reviews and peer code auditing</span>
              </li>
            </ul>
          )}
        </div>

        {/* Divider & Footer Link */}
        <div className="mt-3">
          {/* Animated Progress Trace Divider */}
          <div className="relative w-full h-[1px] mb-3 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_10px_#00F0FF]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2.5 h-[2px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-progress-trace transition-opacity duration-300 shadow-[0_0_8px_#FFFFFF]" />
          </div>

          <Link
            to={isAcademy ? '/academy' : '/college-partnerships'}
            className={`inline-flex items-center gap-2 text-xs font-mono font-bold ${
              isAcademy ? 'text-[#FFA439] hover:text-amber-300' : 'text-[#00F0FF] hover:text-[#5CF7FF]'
            } group-hover:underline transition-colors`}
          >
            <span>{isAcademy ? 'Review Academy roadmap & principles' : 'Explore workshop delivery options'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
