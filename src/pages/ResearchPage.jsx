import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowUpRight, Terminal, ShieldAlert, Cpu, Radio, Search, Users, AlertCircle } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function ResearchPage() {
  const { focusAreas, howWeWork, publications } = CYBER_DATA;

  const iconMap = {
    Cpu: Cpu,
    ShieldAlert: Terminal,
    Search: Search,
    Radar: Compass,
    Radio: Radio,
    Users: Users
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
          <Compass className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>SCIENTIFIC INQUIRY &amp; RIGOUR</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Research <span className="text-[#00F0FF]">Approach &amp; Method</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          At RedKross, cybersecurity research is treated as an empirical discipline requiring structured hypotheses, isolated lab testing, and transparent documentation of limitations.
        </p>
      </div>

      {/* Methodology Principles verbatim from Spec 4.2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <span className="text-xs font-mono text-[#00F0FF] uppercase block mb-2">01 / Rigour</span>
          <h3 className="text-lg font-bold font-royal text-white mb-2">Threat Modelling</h3>
          <p className="text-xs text-gray-300 font-sans leading-relaxed">
            Every investigation begins with explicit threat vectors, attacker assumptions, and non-goals to prevent scope creep and safety violations.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <span className="text-xs font-mono text-[#00F0FF] uppercase block mb-2">02 / Safety</span>
          <h3 className="text-lg font-bold font-royal text-white mb-2">Isolated Sandboxing</h3>
          <p className="text-xs text-gray-300 font-sans leading-relaxed">
            Reproductions and malware triage run exclusively inside default-deny virtualized enclaves with zero external internet egress.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <span className="text-xs font-mono text-[#00F0FF] uppercase block mb-2">03 / Honesty</span>
          <h3 className="text-lg font-bold font-royal text-white mb-2">Limitation Auditing</h3>
          <p className="text-xs text-gray-300 font-sans leading-relaxed">
            We publish explicit failure modes and synthetic benchmark uncertainties alongside every defensive tool prototype.
          </p>
        </div>
      </div>

      {/* The 6 Focus Areas Directory */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold font-royal text-white mb-8 text-center">
          Explore Our 6 Technical Focus Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((fa) => {
            const IconComponent = iconMap[fa.icon] || Terminal;
            return (
              <div 
                key={fa.id}
                className="p-6 rounded-2xl bg-[#090e1a]/80 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20">
                      {fa.badge}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                  <h3 className="text-lg font-bold font-royal text-white mb-2">{fa.title}</h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">{fa.summary}</p>
                </div>
                <Link
                  to={`/research/${fa.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F0FF] hover:underline pt-3 border-t border-white/5"
                >
                  <span>Detailed Track Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Publications Integrity Statement (Spec 4.16) */}
      <div className="rounded-2xl p-6 sm:p-8 bg-[#090e1a] border border-amber-500/30">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FFA439] mb-2">
          <AlertCircle className="w-4 h-4" />
          <span>RESEARCH DISCLOSURE POLICY</span>
        </div>
        <h3 className="text-lg font-bold font-royal text-white mb-2">
          {publications.statusNotice}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
          {publications.statement}
        </p>
        <Link
          to="/publications"
          className="inline-flex items-center gap-1 text-xs font-mono text-[#FFA439] hover:underline"
        >
          <span>View Publications Registry</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
