import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowUpRight, Compass, FolderGit2, Users, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center select-none">
      
      <div className="w-16 h-16 rounded-full bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center mx-auto mb-6 text-[#00F0FF]">
        <AlertCircle className="w-8 h-8" />
      </div>

      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">404 // ROUTE NOT FOUND</span>
      <h1 className="text-3xl sm:text-5xl font-black text-white font-royal mb-4">
        Page Not Located
      </h1>
      <p className="text-sm text-gray-300 font-sans leading-relaxed mb-10">
        The requested technical route or document could not be resolved. Please explore our verified platform sections below:
      </p>

      <div className="grid grid-cols-2 gap-3 text-left mb-10">
        <Link 
          to="/"
          className="p-4 rounded-xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <Home className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-xs font-mono text-gray-200 group-hover:text-white">Cyber Home</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#00F0FF]" />
        </Link>

        <Link 
          to="/research"
          className="p-4 rounded-xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <Compass className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-xs font-mono text-gray-200 group-hover:text-white">Research Focus</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#00F0FF]" />
        </Link>

        <Link 
          to="/projects"
          className="p-4 rounded-xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <FolderGit2 className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-xs font-mono text-gray-200 group-hover:text-white">Projects Directory</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#00F0FF]" />
        </Link>

        <Link 
          to="/opportunities"
          className="p-4 rounded-xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-xs font-mono text-gray-200 group-hover:text-white">Opportunities</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#00F0FF]" />
        </Link>
      </div>

    </div>
  );
}
