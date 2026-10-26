import React from 'react';
import { ShieldCheck, Lock, ExternalLink, FileCheck, ArrowUpRight } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function TrustPage() {
  const { identity } = CYBER_DATA;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>GOVERNANCE &amp; ETHICS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Trust, Privacy &amp; <span className="text-[#00F0FF]">Data Minimization</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          At RedKross, trust is not an afterthought; it is an active constraint built into our laboratory architectures and software designs.
        </p>
      </div>

      {/* Core Safeguards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <h3 className="text-base font-bold font-royal text-white mb-2 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#00F0FF]" />
            <span>Data Minimization Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            We avoid collecting personal identifying information wherever possible. Our forensic tools and detection algorithms run locally on synthetic, sanitized test sets with zero cloud data harvesting.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <h3 className="text-base font-bold font-royal text-white mb-2 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#00F0FF]" />
            <span>Authorized Research Only</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            We prohibit unsupervised or unauthorized scanning of live networks. All offensive security exercises occur in strictly isolated virtual environments with default-deny egress policies.
          </p>
        </div>
      </div>

      {/* Canonical Parent Policies Link (Spec 4.18 Mandate) */}
      <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/30 mb-12">
        <h3 className="text-lg font-bold font-royal text-white mb-2">
          Canonical Foundation Policies
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
          To prevent contradictory documentation across platforms, official governance charters, legal incorporation certificates, and privacy registries are maintained canonically on our parent website.
        </p>
        
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`${identity.parentOrg.url}/#governance`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono transition-all"
          >
            <span>Parent Governance &amp; Ethics</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={`${identity.parentOrg.url}/#contact`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono transition-all"
          >
            <span>Statutory Fact Registry</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

    </div>
  );
}
