import React, { useState, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Clock, MapPin, CheckCircle2, ArrowUpRight, ArrowLeft, Send, AlertCircle, ShieldCheck, Briefcase } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

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

  const [hoveredOpp, setHoveredOpp] = useState(null);
  const [psychHovered, setPsychHovered] = useState(false);
  const [paramsHovered, setParamsHovered] = useState(false);
  const [eligHovered, setEligHovered] = useState(false);
  const [tasksHovered, setTasksHovered] = useState(false);
  const [formHovered, setFormHovered] = useState(false);

  const lastSubmitRef = useRef(0);

  const selectedOpp = slug 
    ? opportunities.find(o => o.slug === slug) 
    : null;

  // Security Hardening: Guard against unhandled invalid slugs (404/redirect)
  if (slug && !selectedOpp) {
    return <Navigate to="/opportunities" replace />;
  }

  const handleAppSubmit = (e) => {
    e.preventDefault();
    if (appForm.hpField) return;
    
    // Anti-automation flood guard: 4-second minimum interval between attempts
    const now = Date.now();
    if (now - lastSubmitRef.current < 4000) return;
    lastSubmitRef.current = now;

    // Sanitize input state
    setAppForm(prev => ({
      ...prev,
      name: prev.name.replace(/[^\w\s.-]/gi, '').trim(),
      email: prev.email.trim(),
      githubOrLinkedin: prev.githubOrLinkedin.trim(),
      statement: prev.statement.trim()
    }));

    setApplied(true);
  };

  // If viewing a specific opportunity detail
  if (selectedOpp) {
    return (
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto select-none relative">
        <Link 
          to="/opportunities"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00F0FF] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>&larr; Back to Cyber Opportunities</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
              Status: {selectedOpp.status}
            </span>
            <span className="text-xs font-mono text-slate-400">{selectedOpp.type}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
            {selectedOpp.title}
          </h1>
          <p className="text-xs sm:text-sm font-mono text-cyan-300">
            Supervisor: {selectedOpp.supervisor}
          </p>
        </motion.div>

        {/* Overview Parameters (Cyber HUD Banner) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="relative group transition-all duration-300 mb-8 select-none"
          onMouseEnter={() => setParamsHovered(true)}
          onMouseLeave={() => setParamsHovered(false)}
        >
          <CyberBannerFrame isHovered={paramsHovered} />

          <div className="relative z-10 px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 block mb-1">DOMAIN</span>
                <span className="text-white font-semibold">{selectedOpp.domain}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">DELIVERY</span>
                <span className="text-white font-semibold">{selectedOpp.delivery}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">DURATION</span>
                <span className="text-white font-semibold">{selectedOpp.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">HOURS</span>
                <span className="text-white font-semibold">{selectedOpp.hours}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Eligibility & Tasks HUD Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Candidate Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="relative group transition-all duration-300 select-none min-h-[220px] flex flex-col justify-between"
            onMouseEnter={() => setEligHovered(true)}
            onMouseLeave={() => setEligHovered(false)}
          >
            <CyberProjectCircuitFrame isHovered={eligHovered} />

            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                    Candidate Eligibility
                  </span>
                  <div className="relative p-1 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {selectedOpp.eligibility}
                </p>
              </div>

              <div className="mt-4 pt-3 relative">
                <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${eligHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Responsibilities & Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group transition-all duration-300 select-none min-h-[220px] flex flex-col justify-between"
            onMouseEnter={() => setTasksHovered(true)}
            onMouseLeave={() => setTasksHovered(false)}
          >
            <CyberProjectCircuitFrame isHovered={tasksHovered} />

            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                    Core Tasks
                  </span>
                  <div className="relative p-1 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                  </div>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                  {selectedOpp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 relative">
                <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${tasksHovered ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Selection Workflow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="p-6 rounded-2xl bg-[#081224]/80 border border-cyan-500/20 text-xs font-sans text-slate-300 leading-relaxed mb-8"
        >
          <span className="text-[10px] font-mono text-cyan-400 uppercase block mb-1">Selection Workflow:</span>
          {selectedOpp.selection}
        </motion.div>

        {/* Application Form (Cyber HUD Banner) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="relative group transition-all duration-300 select-none mb-12"
          onMouseEnter={() => setFormHovered(true)}
          onMouseLeave={() => setFormHovered(false)}
        >
          <CyberBannerFrame isHovered={formHovered} />

          <div className="relative z-10 px-8 sm:px-12 py-10">
            <h3 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 leading-tight">Apply for this Position</h3>
            <p className="text-xs text-slate-300 font-sans mb-6">
              Directly submit your credentials to the research review committee.
            </p>

            {applied ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-white font-royal">Application Logged</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Your submission has been routed to our research supervisor. We will contact shortlisted applicants via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAppSubmit} className="space-y-4">
                <input type="text" name="hpField" value={appForm.hpField} onChange={e => setAppForm({...appForm, hpField: e.target.value})} className="hidden" tabIndex={-1} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Full Legal Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={appForm.name}
                      onChange={e => setAppForm({...appForm, name: e.target.value})}
                      placeholder="Your name" 
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Contact Email *</label>
                    <input 
                      type="email" 
                      required 
                      value={appForm.email}
                      onChange={e => setAppForm({...appForm, email: e.target.value})}
                      placeholder="email@domain.com" 
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">GitHub / Portfolio / LinkedIn URL</label>
                  <input 
                    type="url" 
                    value={appForm.githubOrLinkedin}
                    onChange={e => setAppForm({...appForm, githubOrLinkedin: e.target.value})}
                    placeholder="https://github.com/username" 
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Statement of Interest / Background *</label>
                  <textarea 
                    rows={3} 
                    required
                    value={appForm.statement}
                    onChange={e => setAppForm({...appForm, statement: e.target.value})}
                    placeholder="Briefly describe your programming or technical security background and why you wish to join this research effort." 
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // General Opportunities Directory View
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <Users className="w-4 h-4" />
          <span>CYBERSECURITY TALENT ARCHITECTURE // SELECTIVE APPOINTMENTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          Research <span className="text-[#00F0FF]">Opportunities</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          Open positions for student researchers and technical fellows. We publish only verified, approved openings with clear supervisors and realistic scopes.
        </p>
      </motion.div>

      {/* Opportunities HUD Cards (Scroll Triggered Stagger) */}
      <div className="space-y-6 mb-16">
        {opportunities.map((opp, idx) => {
          const isHov = hoveredOpp === idx;
          return (
            <motion.div 
              key={opp.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group transition-all duration-300 select-none"
              onMouseEnter={() => setHoveredOpp(idx)}
              onMouseLeave={() => setHoveredOpp(null)}
            >
              <CyberBannerFrame isHovered={isHov} />

              <div className="relative z-10 px-8 sm:px-12 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                      {opp.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{opp.domain}</span>
                    <span className="text-xs font-mono text-slate-500">&bull; {opp.delivery}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {opp.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-3">
                    {opp.eligibility}
                  </p>
                  <div className="text-xs font-mono text-cyan-400/80">
                    Supervisor: {opp.supervisor} &bull; Duration: {opp.duration}
                  </div>
                </div>

                <Link
                  to={`/opportunities/${opp.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                >
                  <span>View Role &amp; Apply</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Psychology Cross-Link for Behavioral Internships (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 select-none"
        onMouseEnter={() => setPsychHovered(true)}
        onMouseLeave={() => setPsychHovered(false)}
      >
        <CyberBannerFrame isHovered={psychHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold font-royal text-[#FFA439]">Looking for Psychology or Wellbeing Internships?</h3>
            <p className="text-xs text-slate-400 font-sans">
              Behavioural psychology, mental health education and community internship roles are hosted on our dedicated psychology domain.
            </p>
          </div>
          <a 
            href={`${CYBER_DATA.identity.psychologyDomain}/opportunities`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-[#FFA439] hover:bg-amber-500/25 text-xs font-royal font-bold uppercase tracking-wider transition-all shrink-0 shadow-[0_0_16px_rgba(255,164,57,0.2)]"
          >
            <span>Psychology Opportunities</span>
            <span>&rarr;</span>
          </a>
        </div>
      </motion.div>

    </div>
  );
}
