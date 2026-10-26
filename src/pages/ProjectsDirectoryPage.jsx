import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, FolderGit2, CheckCircle2, Filter } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function ProjectsDirectoryPage() {
  const { projects } = CYBER_DATA;
  const [filter, setFilter] = useState('ALL');

  const statuses = ['ALL', 'Prototype', 'In development', 'Evaluated / validated'];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Prototype':
        return 'bg-amber-500/15 text-[#FFA439] border-amber-500/40';
      case 'In development':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40';
      case 'Evaluated / validated':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      default:
        return 'bg-gray-500/15 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
          <FolderGit2 className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>VERIFIED ENGINEERING INVENTORY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Technical <span className="text-[#00F0FF]">Projects Directory</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          Cataloguing our open-source tools, lab specifications, and defensive prototypes. Every project includes verified maturity statuses and documented limitations.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {statuses.map(st => (
          <button
            key={st}
            onClick={() => setFilter(st)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              filter === st
                ? "bg-[#00F0FF] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            {st === 'ALL' ? 'All Projects' : st}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(proj => (
          <div 
            key={proj.slug}
            className="rounded-2xl bg-[#080d18] border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">{proj.category}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-medium ${getStatusBadge(proj.status)}`}>
                  {proj.status}
                </span>
              </div>

              <h2 className="text-xl font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                {proj.title}
              </h2>
              
              <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">
                {proj.problem}
              </p>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-4 text-[11px] font-sans text-gray-400">
                <span className="text-[10px] font-mono text-cyan-400 block mb-0.5 uppercase tracking-wider">Method:</span>
                {proj.approach}
              </div>

              {/* Tools Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.tools.map(tool => (
                  <span key={tool} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">Updated: {proj.lastUpdated}</span>
              <Link
                to={`/projects/${proj.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-all"
              >
                <span>Full Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
