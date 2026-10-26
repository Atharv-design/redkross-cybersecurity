import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ArrowUpRight, Terminal, ShieldAlert, Cpu, Radio, Search, Users, AlertCircle, Lock } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CircuitTraceCard from '../components/CircuitTraceCard';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

export default function ResearchPage() {
  const { focusAreas, publications } = CYBER_DATA;
  const [hoveredCard, setHoveredCard] = useState(null);
  const [pubHovered, setPubHovered] = useState(false);

  const iconMap = {
    Cpu: Cpu,
    ShieldAlert: Terminal,
    Search: Search,
    Radar: Compass,
    Radio: Radio,
    Users: Users
  };

  const principles = [
    {
      id: '01',
      badge: '01 / RIGOUR',
      title: 'Threat Modelling',
      icon: Terminal,
      text: 'Every investigation begins with explicit threat vectors, attacker assumptions, and non-goals to prevent scope creep and safety violations.'
    },
    {
      id: '02',
      badge: '02 / SAFETY',
      title: 'Isolated Sandboxing',
      icon: Lock,
      text: 'Reproductions and malware triage run exclusively inside default-deny virtualized enclaves with zero external internet egress.'
    },
    {
      id: '03',
      badge: '03 / HONESTY',
      title: 'Limitation Auditing',
      icon: AlertCircle,
      text: 'We publish explicit failure modes and synthetic benchmark uncertainties alongside every defensive tool prototype.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <Compass className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>SCIENTIFIC INQUIRY &amp; RIGOUR // CONTROLLED LABS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          Research <span className="text-[#00F0FF]">Approach &amp; Method</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          At RedKross, cybersecurity research is treated as an empirical discipline requiring structured hypotheses, isolated lab testing, and transparent documentation of limitations.
        </p>
      </motion.div>

      {/* Methodology Principles HUD Cards (Scroll Triggered Stagger) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {principles.map((pr, idx) => {
          const Icon = pr.icon;
          const isHov = hoveredCard === pr.id;
          return (
            <motion.div
              key={pr.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group transition-all duration-300 select-none min-h-[220px] flex flex-col justify-between"
              onMouseEnter={() => setHoveredCard(pr.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CyberProjectCircuitFrame isHovered={isHov} />
              
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                      {pr.badge}
                    </span>
                    <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center shrink-0">
                      <span className="absolute inset-0 rounded-lg bg-[#00F0FF]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" />
                      <Icon className="w-3.5 h-3.5 text-[#00F0FF] group-hover:text-[#5CF7FF] relative z-10 drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {pr.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {pr.text}
                  </p>
                </div>

                {/* Cyber Progress Trace Divider */}
                <div className="mt-4 pt-3 relative">
                  <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${
                        isHov ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* The 6 Focus Areas Directory */}
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold font-royal text-white mb-8 text-center"
        >
          Explore Our 6 Technical Focus Tracks
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((fa, idx) => (
            <CircuitTraceCard
              key={fa.id}
              fa={fa}
              idx={idx}
              iconMap={iconMap}
              showMotion={true}
            />
          ))}
        </div>
      </div>

      {/* Publications Integrity Statement (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 select-none"
        onMouseEnter={() => setPubHovered(true)}
        onMouseLeave={() => setPubHovered(false)}
      >
        <CyberBannerFrame isHovered={pubHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-amber-500/40 text-[#FFA439] bg-amber-950/70 uppercase">
                Research Disclosure Policy
              </span>
              <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                STATUS: DISCLOSED / RIGOROUS
              </span>
            </div>
            <div className="relative p-1.5 rounded-lg bg-amber-950/40 border border-amber-500/35 group-hover:border-[#FFA439] group-hover:bg-[#FFA439]/15 group-hover:shadow-[0_0_12px_rgba(255,164,57,0.4)] transition-all duration-300 flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4 text-[#FFA439]" />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-royal text-white mb-2 leading-tight group-hover:text-[#FFA439] transition-colors">
            {publications.statusNotice}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 max-w-3xl">
            {publications.statement}
          </p>

          <Link
            to="/publications"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 hover:border-amber-400/80 text-[#FFA439] font-royal font-bold text-xs uppercase tracking-wider hover:bg-amber-500/25 transition-all shadow-[0_0_20px_rgba(255,164,57,0.2)]"
          >
            <span>View Publications Registry</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FFA439]" />
          </Link>
        </div>
      </motion.div>

    </div>
  );
}
