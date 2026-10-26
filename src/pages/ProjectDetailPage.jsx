import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  Layers, 
  FolderGit2,
  Calendar,
  UserCheck
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { projects } = CYBER_DATA;

  const proj = projects.find(p => p.slug === slug);

  if (!proj) {
    return <Navigate to="/projects" replace />;
  }

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
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      
      {/* Back to Directory */}
      <Link 
        to="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00F0FF] mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>&larr; Back to Projects Directory</span>
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{proj.category}</span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border font-medium ${getStatusBadge(proj.status)}`}>
            {proj.status}
          </span>
          <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Last Verified: {proj.lastUpdated}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          {proj.title}
        </h1>

        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
          <UserCheck className="w-4 h-4 text-[#00F0FF]" />
          <span>Approved Technical Lead: {proj.approvedOwner}</span>
        </div>
      </div>

      {/* Problem & Purpose Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <span className="text-xs font-mono text-cyan-400 uppercase block mb-2 font-semibold">01 / The Problem</span>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {proj.problem}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <span className="text-xs font-mono text-cyan-400 uppercase block mb-2 font-semibold">02 / Technical Purpose</span>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {proj.purpose}
          </p>
        </div>
      </div>

      {/* Architecture & Stack */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-white/10 mb-10">
        <h3 className="text-sm font-mono uppercase tracking-wider text-[#00F0FF] mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span>Architecture &amp; Pipeline Design</span>
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
          {proj.architecture}
        </p>

        <div>
          <span className="text-xs font-mono text-gray-400 block mb-2">Core Technical Stack:</span>
          <div className="flex flex-wrap gap-2">
            {proj.tools.map(tool => (
              <span key={tool} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-300">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Evaluation & Limitations (Spec Mandate) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-emerald-500/20">
          <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Empirical Evaluation</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {proj.evaluation}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#090e1a] border border-amber-500/20">
          <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Documented Limitations</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {proj.limitations}
          </p>
        </div>
      </div>

      {/* Safety & Responsible Boundaries */}
      <div className="p-6 rounded-2xl bg-black/40 border border-white/10 mb-12">
        <span className="text-xs font-mono text-gray-400 uppercase block mb-1">Safety &amp; Ethical Boundary:</span>
        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
          {proj.safetyBoundaries}
        </p>
      </div>

      {/* Repository / Demo Link */}
      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <span className="text-xs font-mono text-gray-500">Repository Status: Public Open-Source Research</span>
        <a
          href={proj.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
        >
          <FolderGit2 className="w-4 h-4" />
          <span>Inspect Repository on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
