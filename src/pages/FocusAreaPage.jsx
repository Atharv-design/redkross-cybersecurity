import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle, Terminal, HelpCircle, Layers } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function FocusAreaPage() {
  const { focusArea } = useParams();
  const { focusAreas, projects, identity } = CYBER_DATA;

  const area = focusAreas.find(fa => fa.id === focusArea);

  if (!area) {
    return <Navigate to="/research" replace />;
  }

  // Find any verified projects connected to this focus area
  const relatedProjects = projects.filter(p => 
    p.category.toLowerCase().includes(area.id.replace('-', ' ')) ||
    p.domain.toLowerCase().includes(area.id.replace('-', ' ')) ||
    (area.id === 'ai-security' && p.slug === 'deepscan-ai') ||
    (area.id === 'cloud-iot' && p.slug === 'firmstrike') ||
    (area.id === 'defensive-security' && p.slug === 'appsec-orchestrator') ||
    (area.id === 'threat-intelligence' && p.slug === 'risklens-ai')
  );

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      
      {/* Back Link */}
      <Link 
        to="/research"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00F0FF] mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>&larr; Back to Research Overview</span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <span>FOCUS TRACK</span>
          <span className="text-gray-500">&bull;</span>
          <span>{area.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          {area.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
          {area.summary}
        </p>
      </div>

      {/* Primary Research Question (Spec Mandate) */}
      <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/30 mb-10 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] mb-3">
          <HelpCircle className="w-4 h-4" />
          <span>CENTRAL RESEARCH QUESTION</span>
        </div>
        <blockquote className="text-lg sm:text-xl font-medium text-white italic font-sans leading-snug">
          &ldquo;{area.researchQuestion}&rdquo;
        </blockquote>
      </div>

      {/* Scope, Methodology & Mitigations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#00F0FF] mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Technical Scope</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {area.scope}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#00F0FF] mb-3 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>Investigative Methodology</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {area.methodology}
          </p>
        </div>
      </div>

      {/* Defensive Guidance & Mitigations */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-white/10 mb-12">
        <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Recommended Defensive Guidance</span>
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
          {area.defensiveGuidance}
        </p>
      </div>

      {/* Special Mandate for Human-Centred Security (Section 4.8) */}
      {area.id === 'human-centred-security' && (
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#1c1507] via-[#100e09] to-[#0a0805] border border-amber-500/40 mb-12 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFA439] mb-3">
            <ExternalLink className="w-4 h-4" />
            <span>INTERDISCIPLINARY PSYCHOLOGY CONVERGENCE</span>
          </div>
          <h3 className="text-xl font-bold font-royal text-white mb-2">
            Human-Centred Research Links to Psychology Subdomain
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
            Research into user susceptibility, cognitive bias, and behavioral deception is conducted jointly with the RedKross Psychology Subdomain. For participant counselling, cognitive assessments, and mental wellbeing resources, visit the dedicated platform.
          </p>
          <a
            href={identity.psychologyDomain}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFA439] text-black font-royal font-bold text-xs uppercase hover:bg-amber-400 transition-all shadow-md"
          >
            <span>Visit Psychology Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Status Note & Active Projects */}
      <div className="p-6 rounded-2xl bg-black/40 border border-white/5 mb-12">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-1">
          Current Research Status:
        </span>
        <p className="text-xs text-cyan-300 font-sans">
          {area.statusNote}
        </p>
      </div>

      {/* Related Projects if any */}
      {relatedProjects.length > 0 && (
        <div className="pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold font-royal text-white mb-6">
            Associated Engineering Initiatives
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map(p => (
              <Link 
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="p-5 rounded-xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/40 transition-all group flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors">{p.title}</h4>
                  <span className="text-[10px] font-mono text-gray-400">{p.status} &bull; {p.category}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
