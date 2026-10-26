import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  FolderGit2, 
  CheckCircle2, 
  Filter, 
  Terminal, 
  AlertCircle,
  Layers,
  LayoutGrid,
  RotateCw
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import ArcCarousel from '../components/ui/arc-carousel';

export default function ProjectsDirectoryPage() {
  const { projects } = CYBER_DATA;
  const [filter, setFilter] = useState('ALL');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [viewMode, setViewMode] = useState('both'); // 'both' | 'carousel' | 'grid'

  const statuses = ['ALL', 'Prototype', 'In development', 'Evaluated / validated'];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Prototype':
        return 'bg-amber-500/15 text-[#FFA439] border-amber-500/40';
      case 'In development':
        return 'bg-cyan-500/15 text-[#00F0FF] border-cyan-500/40';
      case 'Evaluated / validated':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      default:
        return 'bg-gray-500/15 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none overflow-x-hidden">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-[#00F0FF]/[0.05] rounded-full blur-[180px] pointer-events-none" />

      {/* Header with 3D SplitText Support */}
      <div className="text-center max-w-4xl mx-auto mb-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4 backdrop-blur-md"
        >
          <FolderGit2 className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>VERIFIED ENGINEERING INVENTORY // ZERO FABRICATIONS</span>
          <span className="text-gray-500 hidden sm:inline">&bull; 4 LAB-VERIFIED INITIATIVES</span>
        </motion.div>

        <h1 
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-royal tracking-tight mb-4 split-heading"
          style={{ perspective: '1000px' }}
        >
          Technical <span className="text-[#00F0FF]">Projects Directory</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto"
        >
          Cataloguing our open-source tools, lab specifications, and defensive prototypes. Rotate the continuous 3D verification arch or filter through our complete technical catalog. Every initiative communicates its core challenge, engineering method, architecture, and documented limitations.
        </motion.p>
      </div>

      {/* Controls Bar: Status Filter Tabs + View Mode Selector */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 max-w-5xl mx-auto px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
      >
        {/* Status Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {statuses.map(st => (
            <button
              key={st}
              onClick={() => {
                setFilter(st);
                setCarouselIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                filter === st
                  ? "bg-[#00F0FF] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {st === 'ALL' ? 'All Projects' : st}
            </button>
          ))}
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => setViewMode('both')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              viewMode === 'both' ? 'bg-cyan-500/20 text-[#00F0FF] font-bold border border-cyan-500/40' : 'text-gray-400 hover:text-white'
            }`}
            title="3D Arc Wheel & Catalog Grid"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Full Showcase</span>
          </button>

          <button
            onClick={() => setViewMode('carousel')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              viewMode === 'carousel' ? 'bg-cyan-500/20 text-[#00F0FF] font-bold border border-cyan-500/40' : 'text-gray-400 hover:text-white'
            }`}
            title="Interactive 3D Arc Wheel"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>3D Arc</span>
          </button>

          <button
            onClick={() => setViewMode('grid')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              viewMode === 'grid' ? 'bg-cyan-500/20 text-[#00F0FF] font-bold border border-cyan-500/40' : 'text-gray-400 hover:text-white'
            }`}
            title="Standard Catalog Grid"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Grid</span>
          </button>
        </div>
      </motion.div>

      {/* 1. 3D INTERACTIVE ARC CAROUSEL WHEEL ANIMATION */}
      <AnimatePresence>
        {(viewMode === 'both' || viewMode === 'carousel') && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="w-full relative mb-16"
          >
            {/* Guide hint */}
            <div className="text-center mb-4">
              <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                Drag horizontally or use mouse wheel to rotate continuous 3D verification arch
              </span>
            </div>

            <ArcCarousel
              items={filteredProjects.length > 0 ? filteredProjects : projects}
              activeIndex={carouselIndex}
              onChange={setCarouselIndex}
              cardWidth={340}
              cardHeight={500}
              radius={1100}
              renderItem={(project, { isApex, angle, index }) => {
                const isAmber = index % 2 === 1;
                const primaryColor = isAmber ? '#FFA439' : '#00F0FF';
                const glowBorder = isApex 
                  ? (isAmber 
                      ? 'border-[#FFA439] shadow-[0_0_40px_rgba(255,164,57,0.35)]' 
                      : 'border-[#00F0FF] shadow-[0_0_40px_rgba(0,240,255,0.35)]')
                  : 'border-white/10 hover:border-white/30';

                return (
                  <div 
                    className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl relative overflow-hidden border ${glowBorder} ${
                      isApex 
                        ? (isAmber 
                            ? 'bg-gradient-to-b from-[#181108] via-[#0d0a0d] to-[#04060a]' 
                            : 'bg-gradient-to-b from-[#041620] via-[#070e17] to-[#03060b]') 
                        : 'bg-[#070b13]/95'
                    }`}
                  >
                    {/* Reticle Tags */}
                    <div className="absolute top-2.5 left-3.5 text-[9px] font-mono text-gray-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor }} />
                      <span>[ + ] NODE 0{index + 1}</span>
                    </div>
                    <div className="absolute top-2.5 right-3.5 text-[9px] font-mono text-gray-400">
                      CYBER SPEC
                    </div>

                    {/* Top Section */}
                    <div className="pt-3">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span 
                          className="text-[10px] font-mono px-2.5 py-1 rounded-lg border font-semibold truncate max-w-[190px]"
                          style={{
                            backgroundColor: `${primaryColor}15`,
                            borderColor: `${primaryColor}40`,
                            color: primaryColor
                          }}
                        >
                          {project.category}
                        </span>

                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${getStatusBadge(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1 font-royal tracking-tight leading-tight">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <div 
                        className="text-xs font-mono font-medium mb-3 line-clamp-1"
                        style={{ color: primaryColor }}
                      >
                        {project.tools.slice(0, 3).join(' • ')}
                      </div>

                      {/* Core Problem */}
                      <div className="mb-3">
                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                          Core Challenge:
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 font-sans">
                          {project.problem}
                        </p>
                      </div>

                      {/* Architecture Specification Box */}
                      <div className="p-3 rounded-xl bg-black/60 border border-white/5 mb-3">
                        <div className="text-[10px] font-mono text-gray-300 uppercase font-bold flex items-center gap-1.5 mb-1">
                          <Terminal className="w-3 h-3 text-[#00F0FF]" />
                          <span>Approach &amp; Method:</span>
                        </div>
                        <p className="text-[11px] text-gray-400 font-mono leading-relaxed line-clamp-2">
                          {project.approach}
                        </p>
                      </div>

                      {/* Documented Limitation Notice */}
                      <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-200/90 flex items-start gap-1.5 mb-3">
                        <AlertCircle className="w-3 h-3 text-[#FFA439] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong>Limitation:</strong> {project.limitations}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Section: Tool Chips & Dossier Link */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tools.slice(0, 4).map((tool) => (
                          <span 
                            key={tool}
                            className="px-2 py-0.5 rounded bg-black/50 border border-white/10 text-[9px] font-mono text-gray-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold hover:underline group"
                          style={{ color: primaryColor }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FolderGit2 className="w-3.5 h-3.5" />
                          <span>Open Project Dossier</span>
                          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>

                        <span className="text-[9px] font-mono text-gray-400">
                          {project.lastUpdated}
                        </span>
                      </div>
                    </div>

                  </div>
                );
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. DETAILED CATALOG GRID (Smooth Scroll-Triggered Staggered Cards) */}
      <AnimatePresence>
        {(viewMode === 'both' || viewMode === 'grid') && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-royal text-white">
                  Full Catalog <span className="text-[#00F0FF]">Listing</span>
                </h2>
                <p className="text-xs text-gray-400 font-sans mt-1">
                  Showing {filteredProjects.length} of {projects.length} verified projects with full technical dossiers
                </p>
              </div>

              <span className="text-xs font-mono text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Filter: <strong className="text-cyan-300">{filter}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj, idx) => (
                <motion.div 
                  key={proj.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: (idx % 3) * 0.12, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="rounded-2xl bg-[#080d18] border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                        {proj.category}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-medium ${getStatusBadge(proj.status)}`}>
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors leading-tight">
                      {proj.title}
                    </h3>
                    
                    <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">
                      {proj.problem}
                    </p>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-4 text-[11px] font-sans text-gray-400">
                      <span className="text-[10px] font-mono text-cyan-400 block mb-0.5 uppercase tracking-wider font-semibold">
                        Method &amp; Implementation:
                      </span>
                      {proj.approach}
                    </div>

                    {/* Documented Limitation */}
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-200/90 flex items-start gap-1.5 mb-4">
                      <AlertCircle className="w-3.5 h-3.5 text-[#FFA439] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">
                        <strong>Limitation:</strong> {proj.limitations}
                      </span>
                    </div>

                    {/* Tools Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tools.map(tool => (
                        <span key={tool} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500 text-[11px]">Updated: {proj.lastUpdated}</span>
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-all font-bold"
                    >
                      <span>Full Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
