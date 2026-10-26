import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, ExternalLink, FileCheck, ArrowUpRight } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

export default function TrustPage() {
  const { identity } = CYBER_DATA;
  const [dataMinHovered, setDataMinHovered] = useState(false);
  const [authHovered, setAuthHovered] = useState(false);
  const [canonicalHovered, setCanonicalHovered] = useState(false);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>GOVERNANCE &amp; ETHICS // INSTITUTIONAL SAFEGUARDS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          Trust, Privacy &amp; <span className="text-[#00F0FF]">Data Minimization</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          At RedKross, trust is not an afterthought; it is an active constraint built into our laboratory architectures and software designs.
        </p>
      </motion.div>

      {/* Core Safeguards HUD Cards (Scroll Triggered Stagger) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Data Minimization Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="relative group transition-all duration-300 select-none min-h-[200px] flex flex-col justify-between"
          onMouseEnter={() => setDataMinHovered(true)}
          onMouseLeave={() => setDataMinHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={dataMinHovered} />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                  Data Minimization
                </span>
                <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                  <Lock className="w-3.5 h-3.5 text-[#00F0FF]" />
                </div>
              </div>

              <h3 className="text-base font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                Data Minimization Architecture
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                We avoid collecting personal identifying information wherever possible. Our forensic tools and detection algorithms run locally on synthetic, sanitized test sets with zero cloud data harvesting.
              </p>
            </div>

            <div className="mt-4 pt-3 relative">
              <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${dataMinHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Authorized Research Only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group transition-all duration-300 select-none min-h-[200px] flex flex-col justify-between"
          onMouseEnter={() => setAuthHovered(true)}
          onMouseLeave={() => setAuthHovered(false)}
        >
          <CyberProjectCircuitFrame isHovered={authHovered} />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                  Authorized Research
                </span>
                <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                  <FileCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
                </div>
              </div>

              <h3 className="text-base font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                Authorized Research Only
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                We prohibit unsupervised or unauthorized scanning of live networks. All offensive security exercises occur in strictly isolated virtual environments with default-deny egress policies.
              </p>
            </div>

            <div className="mt-4 pt-3 relative">
              <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${authHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Canonical Parent Policies Link (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-12 select-none"
        onMouseEnter={() => setCanonicalHovered(true)}
        onMouseLeave={() => setCanonicalHovered(false)}
      >
        <CyberBannerFrame isHovered={canonicalHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
              Parent Foundation Registries
            </span>
            <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
              <ExternalLink className="w-4 h-4 text-[#00F0FF]" />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-royal text-white mb-2 leading-tight">
            Canonical Foundation Policies
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 max-w-3xl">
            To prevent contradictory documentation across platforms, official governance charters, legal incorporation certificates, and privacy registries are maintained canonically on our parent website.
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`${identity.parentOrg.url}/#governance`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all shadow-[0_0_16px_rgba(0,240,255,0.2)]"
            >
              <span>Parent Governance &amp; Ethics</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00F0FF]" />
            </a>
            <a
              href={`${identity.parentOrg.url}/#contact`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all shadow-[0_0_16px_rgba(0,240,255,0.2)]"
            >
              <span>Statutory Fact Registry</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00F0FF]" />
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
