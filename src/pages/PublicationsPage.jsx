import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function PublicationsPage() {
  const { publications } = CYBER_DATA;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <FileText className="w-4 h-4" />
          <span>SCHOLARLY OUTPUTS &amp; PAPERS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Publications &amp; <span className="text-[#00F0FF]">Technical Reports</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          Verifiable scholarly contributions, experimental datasets, and peer-reviewed technical specifications.
        </p>
      </div>

      {/* Zero Fabrications Notice verbatim from Spec 4.16 */}
      <div className="rounded-3xl bg-[#090e1a] border border-cyan-500/30 p-8 sm:p-12 text-center max-w-3xl mx-auto mb-16 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center mx-auto mb-4 text-[#00F0FF]">
          <ShieldCheck className="w-6 h-6" />
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-3">
          {publications.statusNotice}
        </h2>
        
        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
          {publications.statement}
        </p>

        <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-cyan-300 inline-block">
          Active Pre-Prints: DeepScan AI (Synthetic Media Frequency Analysis) &bull; Zero Trust Lab Topology Spec
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white font-royal font-bold text-xs uppercase hover:bg-white/10 transition-all"
        >
          <span>Explore Verified Open-Source Projects Instead</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
