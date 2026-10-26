import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Lock, CheckCircle2, AlertTriangle, ArrowUpRight, Cpu } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';

export default function LabsPage() {
  const { labs } = CYBER_DATA;
  const [safetyHovered, setSafetyHovered] = useState(false);
  const [hoveredFacility, setHoveredFacility] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>ISOLATED RESEARCH ENVIRONMENTS // DEFENSIVE LAB RANGE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          Cyber Range &amp; <span className="text-[#00F0FF]">Laboratory Plane</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          Air-gapped disposable virtualization clusters designed for safe defensive simulation, CVE reproductions, and student skills training.
        </p>
      </motion.div>

      {/* Safety Notice (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-16 select-none"
        onMouseEnter={() => setSafetyHovered(true)}
        onMouseLeave={() => setSafetyHovered(false)}
      >
        <CyberBannerFrame isHovered={safetyHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-amber-500/40 text-[#FFA439] bg-amber-950/70 uppercase">
                Air-Gap Protocol
              </span>
            </div>
            <div className="relative p-1.5 rounded-lg bg-amber-950/40 border border-amber-500/35 group-hover:border-[#FFA439] transition-all flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4 text-[#FFA439]" />
            </div>
          </div>

          <h2 className="text-lg font-bold font-royal text-[#FFA439] mb-2 leading-tight">
            Access Control &amp; Air-Gap Policy
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
            {labs.disclaimer}
          </p>
        </div>
      </motion.div>

      {/* Facilities Grid */}
      <div className="space-y-8 mb-16">
        {labs.facilities.map((fac, idx) => {
          const isHov = hoveredFacility === idx;
          return (
            <motion.div 
              key={fac.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group transition-all duration-300 select-none"
              onMouseEnter={() => setHoveredFacility(idx)}
              onMouseLeave={() => setHoveredFacility(null)}
            >
              <CyberBannerFrame isHovered={isHov} />

              <div className="relative z-10 px-8 sm:px-12 py-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider block mb-1">
                      Facility 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-royal text-white group-hover:text-[#00F0FF] transition-colors">
                      {fac.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 w-fit">
                      {fac.status}
                    </span>
                    <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4 text-[#00F0FF]" />
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 max-w-3xl">
                  {fac.specs}
                </p>

                <div className="pt-4 border-t border-cyan-500/20">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Tested Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {fac.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* College Booking CTA (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 select-none text-center"
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
      >
        <CyberBannerFrame isHovered={ctaHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-10">
          <h3 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 leading-tight">
            Want to deploy a workshop simulation for your students?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto mb-6">
            We provide structured, mentor-supervised lab sessions for affiliated engineering colleges under formal institutional agreement.
          </p>
          <Link
            to="/college-partnerships"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          >
            <span>Enquire for College Lab Cohort</span>
            <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
          </Link>
        </div>
      </motion.div>

    </div>
  );
}
