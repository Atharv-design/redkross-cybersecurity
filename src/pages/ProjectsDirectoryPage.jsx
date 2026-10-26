import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import ExplodedProjectCard from '../components/ExplodedProjectCard';

export default function ProjectsDirectoryPage() {
  const { projects } = CYBER_DATA;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto mb-14 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <FolderGit2 className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>VERIFIED ENGINEERING INVENTORY // ZERO FABRICATIONS</span>
          <span className="text-slate-500 hidden sm:inline">&bull; {projects.length} LAB-VERIFIED INITIATIVES</span>
        </div>

        <h1 
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-royal tracking-tight mb-4 split-heading"
          style={{ perspective: '1000px' }}
        >
          Technical <span className="text-[#00F0FF]">Projects Directory</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
          Cataloguing our open-source tools, lab specifications, and defensive prototypes. Inspect all active engineering initiatives, architecture blueprints, and verified GitHub repositories.
        </p>
      </motion.div>

      {/* COMPLETE INITIATIVE INVENTORY GRID */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <ExplodedProjectCard
              key={project.slug || project.id || idx}
              project={project}
              idx={idx}
            />
          ))}
        </div>
      </div>

      {/* Research Integrity Footer Notice */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-[#081224]/80 border border-cyan-500/20 text-center text-xs font-mono text-slate-400 max-w-3xl mx-auto"
      >
        <span className="text-[#00F0FF] font-semibold block mb-1">MANDATORY TECHNICAL DISCLOSURE</span>
        All defensive prototypes and security tooling are evaluated in air-gapped lab environments. We publish explicit evaluation datasets and synthetic benchmarks alongside each release.
      </motion.div>

    </div>
  );
}
