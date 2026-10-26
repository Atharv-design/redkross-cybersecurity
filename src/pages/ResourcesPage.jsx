import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Download, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';

export default function ResourcesPage() {
  const { resources } = CYBER_DATA;
  const [hoveredRes, setHoveredRes] = useState(null);
  const [safetyHovered, setSafetyHovered] = useState(false);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <BookOpen className="w-4 h-4" />
          <span>OPEN EDUCATIONAL ARTIFACTS // CURATED KNOWLEDGEBASE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          Technical <span className="text-[#00F0FF]">Resources &amp; Guides</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          Open-access technical explainers, operational checklists, and safe lab configuration guides authored by our engineering research team.
        </p>
      </motion.div>

      {/* Resources List HUD Cards (Scroll Triggered Stagger) */}
      <div className="space-y-6 mb-16">
        {resources.map((res, idx) => {
          const isHov = hoveredRes === idx;
          return (
            <motion.div 
              key={res.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group transition-all duration-300 select-none"
              onMouseEnter={() => setHoveredRes(idx)}
              onMouseLeave={() => setHoveredRes(null)}
            >
              <CyberBannerFrame isHovered={isHov} />

              <div className="relative z-10 px-8 sm:px-12 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                      {res.category}
                    </span>
                    <span className="text-slate-400">&bull; {res.date}</span>
                    <span className="text-slate-400">&bull; Author: {res.author}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {res.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {res.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="px-5 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-xs font-royal font-bold uppercase tracking-wider text-white inline-flex items-center gap-2 group-hover:bg-cyan-500/25 transition-all shadow-[0_0_16px_rgba(0,240,255,0.2)]">
                    <FileText className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>Open Reference</span>
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Safety Notice for Resources (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 select-none text-center"
        onMouseEnter={() => setSafetyHovered(true)}
        onMouseLeave={() => setSafetyHovered(false)}
      >
        <CyberBannerFrame isHovered={safetyHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">Usage &amp; Boundary Notice</span>
          </div>
          <p className="text-xs text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            All technical guides are provided strictly for educational defensive hardening and authorized research. Misuse of technical instructions against unauthorized networks is strictly prohibited.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
