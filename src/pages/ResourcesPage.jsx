import React from 'react';
import { BookOpen, FileText, Download, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function ResourcesPage() {
  const { resources } = CYBER_DATA;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <BookOpen className="w-4 h-4" />
          <span>OPEN EDUCATIONAL ARTIFACTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Technical <span className="text-[#00F0FF]">Resources &amp; Guides</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          Open-access technical explainers, operational checklists, and safe lab configuration guides authored by our engineering research team.
        </p>
      </div>

      {/* Resources List */}
      <div className="space-y-6 mb-16">
        {resources.map((res, idx) => (
          <div 
            key={res.title}
            className="p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2 text-xs font-mono">
                <span className="text-[#00F0FF] px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20">{res.category}</span>
                <span className="text-gray-500">&bull; {res.date}</span>
                <span className="text-gray-500">&bull; Author: {res.author}</span>
              </div>
              <h2 className="text-xl font-bold font-royal text-white mb-2">{res.title}</h2>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">{res.summary}</p>
            </div>

            <div className="shrink-0">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 inline-flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Open Reference</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Notice for Resources */}
      <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-center text-xs text-gray-400 font-sans">
        All technical guides are provided strictly for educational defensive hardening and authorized research. Misuse of technical instructions against unauthorized networks is strictly prohibited.
      </div>

    </div>
  );
}
