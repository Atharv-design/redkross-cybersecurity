import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Clock, MapPin, CheckCircle2, ArrowUpRight, ArrowLeft, Send, AlertCircle, ShieldCheck } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function OpportunitiesPage() {
  const { slug } = useParams();
  const { opportunities } = CYBER_DATA;

  const [applied, setApplied] = useState(false);
  const [appForm, setAppForm] = useState({
    name: '',
    email: '',
    githubOrLinkedin: '',
    statement: '',
    hpField: ''
  });

  const selectedOpp = slug 
    ? opportunities.find(o => o.slug === slug) 
    : null;

  const handleAppSubmit = (e) => {
    e.preventDefault();
    if (appForm.hpField) return;
    setApplied(true);
  };

  // If viewing a specific opportunity detail
  if (selectedOpp) {
    return (
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto select-none">
        <Link 
          to="/opportunities"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00F0FF] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>&larr; Back to Cyber Opportunities</span>
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
              Status: {selectedOpp.status}
            </span>
            <span className="text-xs font-mono text-gray-400">{selectedOpp.type}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
            {selectedOpp.title}
          </h1>
          <p className="text-xs sm:text-sm font-mono text-cyan-300">
            Supervisor: {selectedOpp.supervisor}
          </p>
        </div>

        {/* Overview Parameters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#090e1a] border border-white/10 mb-8 text-xs font-mono">
          <div>
            <span className="text-gray-500 block mb-1">DOMAIN</span>
            <span className="text-white font-semibold">{selectedOpp.domain}</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1">DELIVERY</span>
            <span className="text-white font-semibold">{selectedOpp.delivery}</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1">DURATION</span>
            <span className="text-white font-semibold">{selectedOpp.duration}</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1">HOURS</span>
            <span className="text-white font-semibold">{selectedOpp.hours}</span>
          </div>
        </div>

        {/* Eligibility & Tasks */}
        <div className="space-y-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#00F0FF] mb-3">Candidate Eligibility:</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {selectedOpp.eligibility}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#00F0FF] mb-3">Core Responsibilities &amp; Tasks:</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans">
              {selectedOpp.tasks.map((task, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-gray-300 leading-relaxed">
            <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">Selection Workflow:</span>
            {selectedOpp.selection}
          </div>
        </div>

        {/* Application Form */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/30 p-8 shadow-xl">
          <h3 className="text-xl font-bold font-royal text-white mb-2">Apply for this Position</h3>
          <p className="text-xs text-gray-300 font-sans mb-6">
            Directly submit your credentials to the research review committee.
          </p>

          {applied ? (
            <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-white font-royal">Application Logged</h4>
              <p className="text-xs text-gray-300 mt-1">
                Your submission has been routed to our research supervisor. We will contact shortlisted applicants via email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleAppSubmit} className="space-y-4">
              <input type="text" name="hpField" value={appForm.hpField} onChange={e => setAppForm({...appForm, hpField: e.target.value})} className="hidden" tabIndex={-1} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">Full Legal Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={appForm.name}
                    onChange={e => setAppForm({...appForm, name: e.target.value})}
                    placeholder="Your name" 
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">Contact Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={appForm.email}
                    onChange={e => setAppForm({...appForm, email: e.target.value})}
                    placeholder="email@domain.com" 
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-400 block mb-1">GitHub / Portfolio / LinkedIn URL</label>
                <input 
                  type="url" 
                  value={appForm.githubOrLinkedin}
                  onChange={e => setAppForm({...appForm, githubOrLinkedin: e.target.value})}
                  placeholder="https://github.com/username" 
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-gray-400 block mb-1">Statement of Interest / Background *</label>
                <textarea 
                  rows={3} 
                  required
                  value={appForm.statement}
                  onChange={e => setAppForm({...appForm, statement: e.target.value})}
                  placeholder="Briefly describe your programming or technical security background and why you wish to join this research effort." 
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // General Opportunities Directory View
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <Users className="w-4 h-4" />
          <span>CYBERSECURITY TALENT ARCHITECTURE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Research <span className="text-[#00F0FF]">Opportunities</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          Open positions for student researchers and technical fellows. We publish only verified, approved openings with clear supervisors and realistic scopes.
        </p>
      </div>

      {/* Opportunities Cards */}
      <div className="space-y-6 mb-16">
        {opportunities.map((opp) => (
          <div 
            key={opp.slug}
            className="p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/40 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                  {opp.status}
                </span>
                <span className="text-xs font-mono text-gray-400">{opp.domain}</span>
                <span className="text-xs font-mono text-gray-500">&bull; {opp.delivery}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2">{opp.title}</h2>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-3">{opp.eligibility}</p>
              <div className="text-xs font-mono text-cyan-400/80">
                Supervisor: {opp.supervisor} &bull; Duration: {opp.duration}
              </div>
            </div>

            <Link
              to={`/opportunities/${opp.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all shrink-0"
            >
              <span>View Role &amp; Apply</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      {/* Psychology Cross-Link for Behavioral Internships */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-[#1c1507] via-[#100e09] to-[#0a0805] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold font-royal text-[#FFA439]">Looking for Psychology or Wellbeing Internships?</h3>
          <p className="text-xs text-gray-400 font-sans">
            Behavioural psychology, mental health education and community internship roles are hosted on our dedicated psychology domain.
          </p>
        </div>
        <a 
          href={`${CYBER_DATA.identity.psychologyDomain}/opportunities`}
          className="px-4 py-2 rounded-full bg-[#FFA439] text-black text-xs font-mono font-bold uppercase hover:bg-amber-400 transition-all shrink-0"
        >
          Psychology Opportunities &rarr;
        </a>
      </div>

    </div>
  );
}
