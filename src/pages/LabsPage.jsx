import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ShieldAlert, Lock, CheckCircle2, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function LabsPage() {
  const { labs } = CYBER_DATA;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
          <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>ISOLATED RESEARCH ENVIRONMENTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Cyber Range &amp; <span className="text-[#00F0FF]">Laboratory Plane</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          Air-gapped disposable virtualization clusters designed for safe defensive simulation, CVE reproductions, and student skills training.
        </p>
      </div>

      {/* Safety Notice verbatim from Spec 4.11 */}
      <div className="rounded-2xl bg-amber-950/20 border border-amber-500/40 p-6 sm:p-8 mb-16 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-[#FFA439] shrink-0 mt-1" />
        <div>
          <h2 className="text-base font-bold font-royal text-[#FFA439] mb-1">
            Access Control &amp; Air-Gap Policy
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {labs.disclaimer}
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="space-y-8 mb-16">
        {labs.facilities.map((fac, idx) => (
          <div 
            key={fac.name}
            className="rounded-2xl bg-[#090e1a] border border-white/10 p-6 sm:p-8 hover:border-cyan-500/30 transition-all shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider block mb-1">Facility 0{idx + 1}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-royal text-white">{fac.name}</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 w-fit">
                {fac.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
              {fac.specs}
            </p>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">Tested Capabilities:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {fac.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* College Booking CTA */}
      <div className="rounded-2xl p-8 bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/30 text-center">
        <h3 className="text-xl font-bold font-royal text-white mb-2">
          Want to deploy a workshop simulation for your students?
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-xl mx-auto mb-6">
          We provide structured, mentor-supervised lab sessions for affiliated engineering colleges under formal institutional agreement.
        </p>
        <Link
          to="/college-partnerships"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all"
        >
          <span>Enquire for College Lab Cohort</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
