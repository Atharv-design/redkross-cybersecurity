import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowUpRight, CheckCircle2, AlertCircle, Send, Lock, BookOpen } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

export default function AcademyPage() {
  const { academy } = CYBER_DATA;
  const [interestSubmitted, setInterestSubmitted] = useState(false);
  const [interestEmail, setInterestEmail] = useState('');
  const [disclaimerHovered, setDisclaimerHovered] = useState(false);
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const [formHovered, setFormHovered] = useState(false);

  const handleInterestSubmit = (e) => {
    e.preventDefault();
    if (interestEmail) {
      setInterestSubmitted(true);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>EDUCATIONAL RESEARCH ROADMAP // ACADEMIC STANDARDS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          RedKross <span className="text-[#00F0FF]">Academy</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          Structured learning pathways connecting systems fundamentals with hands-on defensive security engineering.
        </p>
      </motion.div>

      {/* Honest Disclaimer (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-16 select-none"
        onMouseEnter={() => setDisclaimerHovered(true)}
        onMouseLeave={() => setDisclaimerHovered(false)}
      >
        <CyberBannerFrame isHovered={disclaimerHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-amber-500/40 text-[#FFA439] bg-amber-950/70 uppercase">
                STATUS: {academy.status.toUpperCase()}
              </span>
            </div>
            <div className="relative p-1.5 rounded-lg bg-amber-950/40 border border-amber-500/35 group-hover:border-[#FFA439] transition-all flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4 text-[#FFA439]" />
            </div>
          </div>

          <h2 className="text-lg font-bold font-royal text-white mb-2 leading-tight">
            Accreditation &amp; Enrolment Transparency
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
            {academy.disclaimer}
          </p>
        </div>
      </motion.div>

      {/* Planned Curriculum Tracks HUD Cards */}
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold font-royal text-white mb-6 text-center"
        >
          Planned Curriculum Tracks (Roadmap)
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academy.plannedTracks.map((tr, idx) => {
            const isHov = hoveredTrack === idx;
            return (
              <motion.div 
                key={tr.track}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group transition-all duration-300 select-none min-h-[220px] flex flex-col justify-between"
                onMouseEnter={() => setHoveredTrack(idx)}
                onMouseLeave={() => setHoveredTrack(null)}
              >
                <CyberProjectCircuitFrame isHovered={isHov} />

                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                        {tr.track}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-slate-300">
                          {tr.level}
                        </span>
                        <div className="relative p-1 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                          <BookOpen className="w-3.5 h-3.5 text-[#00F0FF]" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                      {tr.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                      {tr.summary}
                    </p>
                  </div>

                  <div>
                    {/* Cyber Progress Trace Divider */}
                    <div className="w-full h-px bg-cyan-500/20 mb-3 relative overflow-hidden">
                      <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${isHov ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Phase: Curriculum Design</span>
                      <span className="text-[#FFA439]">Enrolment Paused</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interest Registration Form (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 select-none text-center max-w-2xl mx-auto"
        onMouseEnter={() => setFormHovered(true)}
        onMouseLeave={() => setFormHovered(false)}
      >
        <CyberBannerFrame isHovered={formHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-10">
          <h3 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 leading-tight">
            Register Interest for Future Cohorts
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans mb-6">
            We notify student applicants and faculty when new workshop cohorts or open-source curriculum modules become available.
          </p>

          {interestSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you! Your interest has been recorded in our institutional registry.</span>
            </div>
          ) : (
            <form onSubmit={handleInterestSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                required
                value={interestEmail}
                onChange={(e) => setInterestEmail(e.target.value)}
                placeholder="Enter your student / institutional email"
                className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-mono focus:outline-none focus:border-[#00F0FF]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              >
                <span>Notify Me</span>
                <Send className="w-3.5 h-3.5 text-[#00F0FF]" />
              </button>
            </form>
          )}
        </div>
      </motion.div>

    </div>
  );
}
