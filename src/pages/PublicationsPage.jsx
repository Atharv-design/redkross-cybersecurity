import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';

export default function PublicationsPage() {
  const { publications } = CYBER_DATA;
  const [bannerHovered, setBannerHovered] = useState(false);

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
          <FileText className="w-4 h-4" />
          <span>SCHOLARLY OUTPUTS &amp; PAPERS // INTEGRITY REGISTRY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          Publications &amp; <span className="text-[#00F0FF]">Technical Reports</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          Verifiable scholarly contributions, experimental datasets, and peer-reviewed technical specifications.
        </p>
      </motion.div>

      {/* Zero Fabrications Notice (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 max-w-3xl mx-auto mb-16 select-none"
        onMouseEnter={() => setBannerHovered(true)}
        onMouseLeave={() => setBannerHovered(false)}
      >
        <CyberBannerFrame isHovered={bannerHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-10 text-center">
          <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center mx-auto mb-4 text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-3">
            {publications.statusNotice}
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 max-w-xl mx-auto">
            {publications.statement}
          </p>

          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 inline-block">
            Active Pre-Prints: DeepScan AI (Synthetic Media Frequency Analysis) &bull; Zero Trust Lab Topology Spec
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)]"
        >
          <span>Explore Verified Open-Source Projects Instead</span>
          <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
        </Link>
      </motion.div>

    </div>
  );
}
