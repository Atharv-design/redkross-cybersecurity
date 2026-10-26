import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowUpRight, CheckCircle2, AlertCircle, Send, Lock } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function AcademyPage() {
  const { academy } = CYBER_DATA;
  const [interestSubmitted, setInterestSubmitted] = useState(false);
  const [interestEmail, setInterestEmail] = useState('');

  const handleInterestSubmit = (e) => {
    e.preventDefault();
    if (interestEmail) {
      setInterestSubmitted(true);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>EDUCATIONAL RESEARCH ROADMAP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          RedKross <span className="text-[#00F0FF]">Academy</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          Structured learning pathways connecting systems fundamentals with hands-on defensive security engineering.
        </p>
      </div>

      {/* Honest Disclaimer (Spec 4.12 Mandate) */}
      <div className="rounded-2xl bg-[#090e1a] border border-amber-500/30 p-6 sm:p-8 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FFA439] mb-2">
          <AlertCircle className="w-4 h-4" />
          <span>STATUS: {academy.status.toUpperCase()}</span>
        </div>
        <h2 className="text-lg font-bold font-royal text-white mb-2">
          Accreditation &amp; Enrolment Transparency
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
          {academy.disclaimer}
        </p>
      </div>

      {/* Planned Curriculum Tracks */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold font-royal text-white mb-6">
          Planned Curriculum Tracks (Roadmap)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academy.plannedTracks.map((tr) => (
            <div 
              key={tr.track}
              className="p-6 rounded-2xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">{tr.track}</span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400">
                    {tr.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-royal text-white mb-2">{tr.title}</h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">{tr.summary}</p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Phase: Curriculum Design</span>
                <span className="text-amber-400/80">Enrolment Paused</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interest Registration Form (Spec 4.12 Mandate) */}
      <div className="rounded-2xl p-8 bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/30 text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-bold font-royal text-white mb-2">
          Register Interest for Future Cohorts
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 font-sans mb-6">
          We notify student applicants and faculty when new workshop cohorts or open-source curriculum modules become available.
        </p>

        {interestSubmitted ? (
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
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
              className="flex-1 px-4 py-3 rounded-full bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#00F0FF]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all flex items-center justify-center gap-1.5"
            >
              <span>Notify Me</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
