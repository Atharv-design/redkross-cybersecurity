import React from 'react';
import { ShieldAlert, Mail, AlertTriangle, CheckCircle2, Clock, Lock, Copy } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function ResponsibleDisclosurePage() {
  const { responsibleDisclosure } = CYBER_DATA;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto select-none">
      
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <ShieldAlert className="w-4 h-4" />
          <span>VULNERABILITY REPORTING POLICY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Responsible <span className="text-[#00F0FF]">Disclosure</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          {responsibleDisclosure.statement}
        </p>
      </div>

      {/* Critical Legal Warning (Spec 4.17 Mandate) */}
      <div className="rounded-2xl bg-red-950/20 border border-red-500/40 p-6 sm:p-8 mb-12 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
        <div>
          <h2 className="text-base font-bold font-royal text-red-400 mb-1">
            Important Notice: Not Authorisation for Penetration Testing
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            This policy outlines how to report accidental or responsibly identified vulnerabilities. <strong>It does not grant permission to attack, probe, scan, or conduct automated penetration testing</strong> on any RedKross infrastructure, student systems, or affiliated third-party platforms.
          </p>
        </div>
      </div>

      {/* Dedicated Reporting Channel */}
      <div className="rounded-2xl bg-[#090e1a] border border-cyan-500/30 p-6 sm:p-8 mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase block mb-1">Designated Reporting Inbox:</span>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-black/60 border border-white/10">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#00F0FF]" />
            <span className="font-mono text-base sm:text-lg text-white font-bold">{responsibleDisclosure.channel}</span>
          </div>
          <a
            href={`mailto:${responsibleDisclosure.channel}?subject=Vulnerability%20Disclosure%20Report`}
            className="px-5 py-2.5 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all text-center"
          >
            Send Report Email
          </a>
        </div>
      </div>

      {/* Ground Rules (Spec 4.17 Mandate) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-white/10 mb-12">
        <h3 className="text-lg font-bold font-royal text-white mb-4 flex items-center gap-2">
          <Lock className="w-4 h-4 text-[#00F0FF]" />
          <span>Disclosure Ground Rules</span>
        </h3>
        <ul className="space-y-3 text-xs sm:text-sm text-gray-300 font-sans">
          {responsibleDisclosure.rules.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Handling Timeline */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-white/10 mb-12">
        <h3 className="text-lg font-bold font-royal text-white mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#00F0FF]" />
          <span>Expected Handling Lifecycle</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {responsibleDisclosure.timeline.map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-mono text-[#00F0FF] block mb-1">{step.time}</span>
              <p className="text-xs text-gray-300 font-sans">{step.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Information to Include */}
      <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-xs text-gray-400 font-sans leading-relaxed">
        <span className="font-mono text-gray-300 block mb-1">What to Include in Your Report:</span>
        Please provide the affected domain or component, a summary of the vulnerability, step-by-step reproduction instructions, and minimal proof-of-concept evidence. Do NOT attach sensitive user data, private keys, or third-party proprietary materials.
      </div>

    </div>
  );
}
