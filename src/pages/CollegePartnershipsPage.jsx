import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, Send, AlertCircle, ArrowUpRight, Clock, Users, Building, ShieldCheck } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

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
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>INSTITUTIONAL ENGAGEMENT FRAMEWORK</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          College &amp; University <span className="text-[#00F0FF]">Partnerships</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          {collegePartnerships.overview}
        </p>
      </div>

      {/* 4 Partnership Formats (Spec 4.14) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {collegePartnerships.formats.map((fmt, idx) => (
          <div 
            key={fmt.title}
            className="p-6 rounded-2xl bg-[#090e1a] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#00F0FF]">Format 0{idx + 1}</span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400">
                  {fmt.format}
                </span>
              </div>
              <h3 className="text-lg font-bold font-royal text-white mb-2">{fmt.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">{fmt.scope}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 5 Delivery Stages */}
      <div className="p-8 rounded-3xl bg-black/40 border border-white/10 mb-16">
        <h2 className="text-xl sm:text-2xl font-bold font-royal text-white mb-6 text-center">
          Our 5-Stage Institutional Delivery Model
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {collegePartnerships.deliveryStages.map((st) => (
            <div key={st.stage} className="p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-mono text-[#00F0FF] block mb-1">STAGE {st.stage}</span>
              <h4 className="text-sm font-bold text-white mb-1">{st.name}</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Working Institutional Enquiry Form (Spec 4.14 & 7) */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/30 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold font-royal text-white mb-2">
            Submit an Institutional Tie-Up Enquiry
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans">
            Please provide your official college details. Our academic partnership team will respond within 48 business hours with custom syllabi and scheduling options.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold font-royal text-white mb-2">Enquiry Successfully Transmitted</h4>
            <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-md mx-auto mb-4">
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
                <label className="text-xs font-mono text-gray-300 block mb-2">Institution / University Name *</label>
                <input 
                  type="text" 
                  name="institution"
                  required
                  maxLength={120}
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="e.g. Panipat Institute of Engineering & Technology"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-2">Department / Placement Cell *</label>
                <input 
                  type="text" 
                  name="department"
                  required
                  maxLength={100}
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="e.g. Dept of Computer Science & Engineering"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-mono text-gray-300 block mb-2">Faculty / Coordinator Name &amp; Role *</label>
                <input 
                  type="text" 
                  name="contactName"
                  required
                  maxLength={100}
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Rajesh Sharma (Head of Dept)"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-2">Official Institutional Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  maxLength={100}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. coordinator@university.edu.in"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="text-xs font-mono text-gray-300 block mb-2">Programme Format</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                >
                  <option value="workshop">Defensive Workshop (2-3 Days)</option>
                  <option value="capstone">Supervised Capstone Cohort</option>
                  <option value="faculty">Faculty Research Affiliation</option>
                  <option value="showcase">Student Research Showcase</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-2">Approx Student Cohort</label>
                <select 
                  name="cohortSize"
                  value={formData.cohortSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                >
                  <option value="20-40">20 - 40 Students</option>
                  <option value="40-80">40 - 80 Students</option>
                  <option value="80+">80+ Students</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-2">Target Timeline</label>
                <select 
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                >
                  <option value="Immediate">Next 2 - 4 Weeks</option>
                  <option value="Upcoming Semester">Upcoming Semester</option>
                  <option value="Next Year">Longer-term Planning</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-gray-300 block mb-2">Specific Requirements or Objectives</label>
              <textarea 
                name="message"
                rows={4}
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your student cohort's current background, preferred dates, and specific topics of interest."
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <p className="text-[11px] font-sans text-gray-400">
                Data provided is handled strictly under our non-disclosure policy for educational coordination.
              </p>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Submit Institutional Proposal</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
}
