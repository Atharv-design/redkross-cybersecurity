import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Mail, AlertTriangle, CheckCircle2, Clock, Lock, Copy } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';

export default function ResponsibleDisclosurePage() {
  const { responsibleDisclosure } = CYBER_DATA;
  const [warningHovered, setWarningHovered] = useState(false);
  const [channelHovered, setChannelHovered] = useState(false);
  const [rulesHovered, setRulesHovered] = useState(false);
  const [timelineHovered, setTimelineHovered] = useState(false);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto select-none relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <ShieldAlert className="w-4 h-4" />
          <span>VULNERABILITY REPORTING POLICY // SAFE HARBOR</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          Responsible <span className="text-[#00F0FF]">Disclosure</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          {responsibleDisclosure.statement}
        </p>
      </motion.div>

      {/* Critical Legal Warning (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-12 select-none"
        onMouseEnter={() => setWarningHovered(true)}
        onMouseLeave={() => setWarningHovered(false)}
      >
        <CyberBannerFrame isHovered={warningHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-red-500/40 text-red-400 bg-red-950/70 uppercase">
              Important Legal Boundary
            </span>
            <div className="relative p-1.5 rounded-lg bg-red-950/40 border border-red-500/35 group-hover:border-red-400 transition-all flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
          </div>

          <h2 className="text-base sm:text-lg font-bold font-royal text-red-400 mb-2 leading-tight">
            Important Notice: Not Authorisation for Penetration Testing
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            This policy outlines how to report accidental or responsibly identified vulnerabilities. <strong>It does not grant permission to attack, probe, scan, or conduct automated penetration testing</strong> on any RedKross infrastructure, student systems, or affiliated third-party platforms.
          </p>
        </div>
      </motion.div>

      {/* Dedicated Reporting Channel (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-12 select-none"
        onMouseEnter={() => setChannelHovered(true)}
        onMouseLeave={() => setChannelHovered(false)}
      >
        <CyberBannerFrame isHovered={channelHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <span className="text-xs font-mono text-cyan-400 uppercase block mb-3 font-semibold">
            Designated Reporting Inbox:
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/25">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#00F0FF]" />
              <span className="font-mono text-base sm:text-lg text-white font-bold">{responsibleDisclosure.channel}</span>
            </div>
            <a
              href={`mailto:${responsibleDisclosure.channel}?subject=Vulnerability%20Disclosure%20Report`}
              className="px-6 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all text-center shadow-[0_0_16px_rgba(0,240,255,0.2)]"
            >
              Send Report Email
            </a>
          </div>
        </div>
      </motion.div>

      {/* Ground Rules (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-12 select-none"
        onMouseEnter={() => setRulesHovered(true)}
        onMouseLeave={() => setRulesHovered(false)}
      >
        <CyberBannerFrame isHovered={rulesHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold font-royal text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#00F0FF]" />
              <span>Disclosure Ground Rules</span>
            </h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase">MANDATORY PROTOCOL</span>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
            {responsibleDisclosure.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Handling Timeline (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-12 select-none"
        onMouseEnter={() => setTimelineHovered(true)}
        onMouseLeave={() => setTimelineHovered(false)}
      >
        <CyberBannerFrame isHovered={timelineHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <h3 className="text-lg font-bold font-royal text-white mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00F0FF]" />
            <span>Expected Handling Lifecycle</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {responsibleDisclosure.timeline.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
                <span className="text-xs font-mono text-[#00F0FF] block mb-1 font-semibold">{step.time}</span>
                <p className="text-xs text-slate-300 font-sans">{step.action}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Information to Include */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="p-6 rounded-2xl bg-[#081224]/80 border border-cyan-500/20 text-xs text-slate-400 font-sans leading-relaxed"
      >
        <span className="font-mono text-slate-300 block mb-1 font-semibold">What to Include in Your Report:</span>
        Please provide the affected domain or component, a summary of the vulnerability, step-by-step reproduction instructions, and minimal proof-of-concept evidence. Do NOT attach sensitive user data, private keys, or third-party proprietary materials.
      </motion.div>

    </div>
  );
}
