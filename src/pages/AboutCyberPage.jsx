import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ExternalLink, ArrowUpRight, CheckCircle2, Lock, Cpu, Terminal } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function AboutCyberPage() {
  const { identity } = CYBER_DATA;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      
      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>INSTITUTIONAL DIVISION PROFILE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          About RedKross <span className="text-[#00F0FF]">Cybersecurity</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          The specialist technical, laboratory and security engineering division of RedKross Research Foundation.
        </p>
      </div>

      {/* Legal Status Notice verbatim from Spec 4.1 */}
      <div className="rounded-2xl bg-[#090e1a] border border-cyan-500/30 p-6 sm:p-8 mb-12 shadow-lg">
        <h2 className="text-lg font-bold font-royal text-white mb-2 flex items-center gap-2">
          <Lock className="w-4 h-4 text-[#00F0FF]" />
          <span>Statutory Foundation Boundary</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
          RedKross Cybersecurity is an operational technical division of <strong className="text-white">RedKross Research Foundation</strong>, a legally incorporated Section 8 non-profit research company under the Ministry of Corporate Affairs, Government of India (CIN: <span className="font-mono text-cyan-300">U85499HR2026NPL144741</span>). This subdomain is not a separate commercial entity.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <a 
            href={`${identity.parentOrg.url}/#about`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:border-cyan-500/40 transition-all"
          >
            <span>Parent About &amp; Legal Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href={`${identity.parentOrg.url}/#team`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:border-cyan-500/40 transition-all"
          >
            <span>Confirmed Board &amp; Leadership</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href={`${identity.parentOrg.url}/#governance`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:border-cyan-500/40 transition-all"
          >
            <span>Foundation Governance</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Scope & Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 rounded-2xl bg-[#090e1a]/60 border border-white/10">
          <h3 className="text-lg font-bold font-royal text-white mb-3 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#00F0FF]" />
            <span>Our Applied Mission</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-3">
            Our mission is to bridge academic computer science curricula with practical, ethical security engineering. We conduct scoped research into digital threats, author open-source defensive tools, and create isolated lab models where students learn without endangering operational infrastructure.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#090e1a]/60 border border-white/10">
          <h3 className="text-lg font-bold font-royal text-white mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#00F0FF]" />
            <span>Target Audiences</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <span><strong>Engineering Students:</strong> Hands-on defensive skills and capstones.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <span><strong>Colleges &amp; Universities:</strong> Structured workshops and faculty collaboration.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <span><strong>Researchers &amp; Fellows:</strong> Scoped, reproducible vulnerability studies.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Boundaries: Current Work vs Future Plans */}
      <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-white/10 mb-12">
        <h3 className="text-lg font-bold font-royal text-white mb-3">
          Boundary Between Current Work &amp; Future Roadmaps
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-4">
          To preserve complete trust, we distinguish our live activities from planned roadmaps:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/30">
            <span className="text-emerald-400 font-mono font-bold block mb-1">WHAT IS ACTIVE TODAY:</span>
            <p className="text-gray-300 leading-relaxed">
              Open-source prototype tools (DeepScan AI, AppSec Orchestrator), College workshop delivery, synthetic forensics workbench research, and zero-trust lab architecture specifications.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-amber-500/30">
            <span className="text-amber-400 font-mono font-bold block mb-1">WHAT IS PLANNED / IN ROADMAP:</span>
            <p className="text-gray-300 leading-relaxed">
              Public self-service cyber range enclaves (currently private nodes only) and accredited multi-semester Academy certifications.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="text-center pt-8 border-t border-white/10">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all"
        >
          <span>Explore Our Research Overview</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
