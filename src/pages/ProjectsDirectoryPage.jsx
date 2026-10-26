import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  Terminal, 
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import ArcCarousel from '../components/ui/arc-carousel';

export default function ProjectsDirectoryPage() {
  const { projects } = CYBER_DATA;
  const [filter, setFilter] = useState('ALL');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const statuses = ['ALL', 'Prototype', 'In development', 'Evaluated / validated'];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Prototype':
        return 'bg-amber-500/10 text-[#FFA439] border border-amber-500/30 backdrop-blur-md';
      case 'In development':
        return 'bg-cyan-500/10 text-[#00F0FF] border border-cyan-500/30 backdrop-blur-md';
      case 'Evaluated / validated':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 backdrop-blur-md';
      default:
        return 'bg-white/5 text-slate-400 border border-white/10 backdrop-blur-md';
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none relative">
      
      {/* Background Ambient Atmospheric Smoke Clouds */}
      <div className="absolute top-36 left-1/2 -translate-x-1/2 w-[950px] h-[480px] bg-[#00F0FF]/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-64 left-1/2 -translate-x-1/2 w-[750px] h-[420px] bg-[#1e40af]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      {/* Header with 3D SplitText Support */}
      <div className="text-center max-w-4xl mx-auto mb-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4 backdrop-blur-xl"
        >
          <FolderGit2 className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>VERIFIED ENGINEERING INVENTORY // ZERO FABRICATIONS</span>
          <span className="text-slate-500 hidden sm:inline">&bull; 4 LAB-VERIFIED INITIATIVES</span>
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
          className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto"
        >
          Cataloguing our open-source tools, lab specifications, and defensive prototypes. Rotate the continuous 3D verification arch or filter through our complete technical catalog. Every initiative communicates its core challenge, engineering method, architecture, and documented limitations.
        </motion.p>
      </div>

      {/* Status Filter Tabs (Clean Frosted Glass Pills) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-2.5 mb-10 relative z-10"
      >
        {statuses.map(st => (
          <button
            key={st}
            onClick={() => {
              setFilter(st);
              setCarouselIndex(0);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
              filter === st
                ? "bg-[#00F0FF] text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.35)]"
                : "bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-white/25 backdrop-blur-md"
            }`}
          >
            {st === 'ALL' ? 'All Projects' : st}
          </button>
        ))}
      </motion.div>

      {/* 3D INTERACTIVE ARC CAROUSEL WHEEL (Cloudy & Smoky Blending, 1-Second Auto Rotation) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative mb-12"
      >
        <div className="text-center mb-4 relative z-10">
          <span className="text-[11px] font-mono text-cyan-300/80 bg-white/[0.03] border border-cyan-500/20 px-3.5 py-1 rounded-full backdrop-blur-md">
            Rotating automatically every 1s &bull; Drag to inspect active project node
          </span>
        </div>

        <ArcCarousel
          items={filteredProjects.length > 0 ? filteredProjects : projects}
          activeIndex={carouselIndex}
          onChange={setCarouselIndex}
          cardWidth={340}
          cardHeight={500}
          radius={1100}
          autoPlayInterval={1000}
          renderItem={(project, { isApex, angle, index }) => {
            const isAmber = index % 2 === 1;
            const primaryColor = isAmber ? '#FFA439' : '#00F0FF';

            // Smoky & Cloudy Blended Card Styling (Zero sharp harsh edges, soft atmospheric dissolve)
            const cardBg = isApex
              ? (isAmber
                  ? 'bg-gradient-to-b from-[#1c1308]/75 via-[#110a08]/70 to-[#060810]/85'
                  : 'bg-gradient-to-b from-[#091524]/75 via-[#060e1a]/70 to-[#03060e]/85')
              : 'bg-gradient-to-b from-[#080d18]/50 via-[#050912]/50 to-[#020409]/70';

            const cardBorder = isApex
              ? (isAmber
                  ? 'border border-amber-400/20 shadow-[0_0_50px_rgba(255,164,57,0.16),0_25px_60px_rgba(0,0,0,0.8),inset_0_0_35px_rgba(255,164,57,0.05)]'
                  : 'border border-cyan-400/20 shadow-[0_0_50px_rgba(0,240,255,0.16),0_25px_60px_rgba(0,0,0,0.8),inset_0_0_35px_rgba(0,240,255,0.05)]')
              : 'border border-white/[0.04] shadow-[0_15px_40px_rgba(0,0,0,0.6)]';

            return (
              <div 
                className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-2xl relative overflow-hidden ${cardBg} ${cardBorder}`}
              >
                {/* Smoky Internal Radial Fog Layers */}
                <div 
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none transition-opacity duration-700" 
                  style={{
                    backgroundColor: `${primaryColor}14`,
                    opacity: isApex ? 0.9 : 0.25
                  }}
                />
                <div 
                  className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full blur-3xl pointer-events-none transition-opacity duration-700" 
                  style={{
                    backgroundColor: isAmber ? '#b4530914' : '#1e40af18',
                    opacity: isApex ? 0.8 : 0.2
                  }}
                />

                {/* Reticle Tags */}
                <div className="absolute top-4 left-5 text-[9px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor }} />
                  <span>[ + ] NODE 0{index + 1}</span>
                </div>
                <div className="absolute top-4 right-5 text-[9px] font-mono text-slate-400">
                  CYBER SPEC
                </div>

                {/* Top Section */}
                <div className="pt-3 relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span 
                      className="text-[10px] font-mono px-3 py-1 rounded-full border font-semibold truncate max-w-[190px]"
                      style={{
                        backgroundColor: `${primaryColor}12`,
                        borderColor: `${primaryColor}30`,
                        color: primaryColor
                      }}
                    >
                      {project.category}
                    </span>

                    <span className={`text-[9px] font-mono px-2.5 py-0.5 rounded-full shrink-0 ${getStatusBadge(project.status)}`}>
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
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Core Challenge:
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-sans">
                      {project.problem}
                    </p>
                  </div>

                  {/* Architecture Specification Box (Frosted Smoky) */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl mb-3">
                    <div className="text-[10px] font-mono text-slate-300 uppercase font-bold flex items-center gap-1.5 mb-1">
                      <Terminal className="w-3 h-3 text-[#00F0FF]" />
                      <span>Approach &amp; Method:</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono leading-relaxed line-clamp-2">
                      {project.approach}
                    </p>
                  </div>

                  {/* Documented Limitation Notice (Smoky Amber) */}
                  <div className="p-3 rounded-2xl bg-amber-500/[0.05] border border-amber-500/15 text-[10px] text-amber-200/90 flex items-start gap-1.5 mb-3 backdrop-blur-xl">
                    <AlertCircle className="w-3.5 h-3.5 text-[#FFA439] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      <strong className="text-[#FFA439]">Limitation:</strong> {project.limitations}
                    </span>
                  </div>
                </div>

                {/* Bottom Section: Tool Chips & Dossier Link */}
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span 
                        key={tool}
                        className="px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[9px] font-mono text-slate-300 backdrop-blur-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between">
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

                    <span className="text-[9px] font-mono text-slate-400">
                      {project.lastUpdated}
                    </span>
                  </div>
                </div>

              </div>
            );
          }}
        />
      </motion.div>

    </div>
  );
}
