import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, Send, AlertCircle, ArrowUpRight, Clock, Users, Building, ShieldCheck, BookOpen } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

export default function CollegePartnershipsPage() {
  const { collegePartnerships } = CYBER_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institution: '',
    department: '',
    contactName: '',
    email: '',
    interest: 'workshop',
    cohortSize: '30-50',
    timeline: 'Within 2 Months',
    message: '',
    hpField: '' // Honeypot anti-bot
  });

  const [hoveredFormat, setHoveredFormat] = useState(null);
  const [stagesHovered, setStagesHovered] = useState(false);
  const [formHovered, setFormHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.hpField) {
      // Bot detected via honeypot
      return;
    }
    setSubmitted(true);
  };

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
          <GraduationCap className="w-4 h-4" />
          <span>INSTITUTIONAL ENGAGEMENT FRAMEWORK // ACADEMIC ALLIANCES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          College &amp; University <span className="text-[#00F0FF]">Partnerships</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          {collegePartnerships.overview}
        </p>
      </motion.div>

      {/* 4 Partnership Formats HUD Cards (Scroll Triggered Stagger) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {collegePartnerships.formats.map((fmt, idx) => {
          const isHov = hoveredFormat === idx;
          return (
            <motion.div 
              key={fmt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group transition-all duration-300 select-none min-h-[220px] flex flex-col justify-between"
              onMouseEnter={() => setHoveredFormat(idx)}
              onMouseLeave={() => setHoveredFormat(null)}
            >
              <CyberProjectCircuitFrame isHovered={isHov} />

              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                      Format 0{idx + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-slate-300">
                        {fmt.format}
                      </span>
                      <div className="relative p-1 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                        <Building className="w-3.5 h-3.5 text-[#00F0FF]" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {fmt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {fmt.scope}
                  </p>
                </div>

                <div className="mt-4 pt-3 relative">
                  <div className="w-full h-px bg-cyan-500/20 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${isHov ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 5 Delivery Stages (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 mb-16 select-none"
        onMouseEnter={() => setStagesHovered(true)}
        onMouseLeave={() => setStagesHovered(false)}
      >
        <CyberBannerFrame isHovered={stagesHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-10">
          <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-6 text-center">
            Our 5-Stage Institutional Delivery Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {collegePartnerships.deliveryStages.map((st, idx) => (
              <motion.div 
                key={st.stage} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
              >
                <span className="text-xs font-mono text-[#00F0FF] block mb-1 font-semibold">STAGE {st.stage}</span>
                <h4 className="text-sm font-bold font-royal text-white mb-1">{st.name}</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Working Institutional Enquiry Form (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 max-w-4xl mx-auto select-none"
        onMouseEnter={() => setFormHovered(true)}
        onMouseLeave={() => setFormHovered(false)}
      >
        <CyberBannerFrame isHovered={formHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-10">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold font-royal text-white mb-2 leading-tight">
              Submit an Institutional Tie-Up Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto">
              Please provide your official college details. Our academic partnership team will respond within 48 business hours with custom syllabi and scheduling options.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold font-royal text-white mb-2">Enquiry Successfully Transmitted</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md mx-auto mb-4">
                Your inquiry for <strong className="text-white">{formData.institution}</strong> has been logged in our institutional routing registry. A confirmation email has been routed to our academic desk.
              </p>
              <span className="text-xs font-mono text-emerald-400">Reference: #RK-CYBER-COL-{Math.floor(1000 + Math.random() * 9000)}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Honeypot hidden input */}
              <input 
                type="text" 
                name="hpField" 
                value={formData.hpField} 
                onChange={handleChange} 
                className="hidden" 
                tabIndex={-1} 
                autoComplete="off" 
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2">Institution / University Name *</label>
                  <input 
                    type="text" 
                    name="institution"
                    required
                    maxLength={120}
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="e.g. Panipat Institute of Engineering & Technology"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2">Department / Placement Cell *</label>
                  <input 
                    type="text" 
                    name="department"
                    required
                    maxLength={100}
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="e.g. Dept of Computer Science & Engineering"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2">Faculty / Coordinator Name &amp; Role *</label>
                  <input 
                    type="text" 
                    name="contactName"
                    required
                    maxLength={100}
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Rajesh Sharma, HOD CSE"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2">Institutional Official Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="coordinator@college.edu.in"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2">Engagement Interest</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  >
                    <option value="workshop">2-Day Cyber Workshop</option>
                    <option value="range">Cyber Range Lab Session</option>
                    <option value="capstone">Student Capstone Mentorship</option>
                    <option value="curriculum">Full Curriculum Guest Lecture</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2">Expected Student Cohort</label>
                  <select 
                    name="cohortSize"
                    value={formData.cohortSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  >
                    <option value="20-30">20 – 30 Students</option>
                    <option value="30-50">30 – 50 Students</option>
                    <option value="50-100">50 – 100 Students</option>
                    <option value="100+">100+ Students (Auditorium)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2">Target Timeline</label>
                  <select 
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  >
                    <option value="Immediate">Next 2-3 Weeks</option>
                    <option value="Within 2 Months">Within 2 Months</option>
                    <option value="Upcoming Semester">Upcoming Semester</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-2">Scope Notes / Specific Focus Requests</label>
                <textarea 
                  name="message"
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline any specific prerequisites, student year (2nd/3rd/4th), or lab infrastructure already available on campus..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              >
                <span>Transmit Formal Institutional Enquiry</span>
                <Send className="w-4 h-4 text-[#00F0FF]" />
              </button>
            </form>
          )}
        </div>
      </motion.div>

    </div>
  );
}
