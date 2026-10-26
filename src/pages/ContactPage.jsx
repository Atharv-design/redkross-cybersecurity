import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function ContactPage() {
  const { identity } = CYBER_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: 'research',
    message: '',
    hpField: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.hpField) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-[#00F0FF] mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>INSTITUTIONAL &amp; TECHNICAL COMMUNICATIONS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
          Contact &amp; <span className="text-[#00F0FF]">Technical Desks</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          Reach our dedicated technical coordinators, laboratory researchers, or vulnerability disclosure committee.
        </p>
      </div>

      {/* 4 Dedicated Routing Desks (Spec 4.19 Mandate) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div className="p-5 rounded-2xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#00F0FF] uppercase block mb-1">01 / PARTNERSHIPS</span>
            <h3 className="text-sm font-bold font-royal text-white mb-2">College Tie-Ups</h3>
            <p className="text-xs text-gray-400 font-sans mb-4">Workshops, student capstones, and faculty curriculum delivery.</p>
          </div>
          <a href={`mailto:${identity.contacts.general}?subject=College%20Partnership%20Inquiry`} className="text-xs font-mono text-cyan-300 hover:underline">
            {identity.contacts.general}
          </a>
        </div>

        <div className="p-5 rounded-2xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#00F0FF] uppercase block mb-1">02 / DISCLOSURE</span>
            <h3 className="text-sm font-bold font-royal text-white mb-2">Vulnerability Desk</h3>
            <p className="text-xs text-gray-400 font-sans mb-4">Safe vulnerability reports and coordinated patch communication.</p>
          </div>
          <a href={`mailto:${identity.contacts.disclosure}?subject=Vulnerability%20Report`} className="text-xs font-mono text-cyan-300 hover:underline">
            {identity.contacts.disclosure}
          </a>
        </div>

        <div className="p-5 rounded-2xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#00F0FF] uppercase block mb-1">03 / TELEPHONE</span>
            <h3 className="text-sm font-bold font-royal text-white mb-2">Direct Voice Line</h3>
            <p className="text-xs text-gray-400 font-sans mb-4">Monday – Friday, 10:00 AM – 6:00 PM IST institutional routing.</p>
          </div>
          <a href={`tel:${identity.contacts.phone.replace(/\s+/g, '')}`} className="text-xs font-mono text-cyan-300 hover:underline">
            {identity.contacts.phone}
          </a>
        </div>

        <div className="p-5 rounded-2xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#00F0FF] uppercase block mb-1">04 / HEADQUARTERS</span>
            <h3 className="text-sm font-bold font-royal text-white mb-2">Registered Office</h3>
            <p className="text-xs text-gray-400 font-sans mb-4">Panipat, Haryana 132103, India.</p>
          </div>
          <span className="text-xs font-mono text-gray-500">RoC Haryana</span>
        </div>
      </div>

      {/* General Technical Message Form */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0d1424] via-[#090e1a] to-[#070b14] border border-cyan-500/30 p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold font-royal text-white mb-2 text-center">Send a Technical Inquiry</h3>
        <p className="text-xs text-gray-300 font-sans text-center mb-8">
          Inquiries are reviewed by our engineering and governance desks.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <h4 className="text-base font-bold font-royal text-white">Message Logged</h4>
            <p className="text-xs text-gray-300 mt-1 font-sans">
              Thank you. Your inquiry has been routed to the relevant technical department.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="hpField" value={form.hpField} onChange={e => setForm({...form, hpField: e.target.value})} className="hidden" tabIndex={-1} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">Your Name *</label>
                <input 
                  type="text" 
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">Your Email *</label>
                <input 
                  type="email" 
                  required
                  maxLength={100}
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="email@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-gray-300 block mb-1">Department Desk</label>
              <select
                value={form.category}
                onChange={e => setForm({...form, category: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
              >
                <option value="research">Technical &amp; Applied Research</option>
                <option value="college">College Partnership &amp; Workshops</option>
                <option value="opportunity">Opportunities &amp; Fellowship Inquiry</option>
                <option value="general">General Institutional Inquiry</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-gray-300 block mb-1">Message *</label>
              <textarea 
                rows={4}
                required
                maxLength={1000}
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                placeholder="How can we assist you or collaborate?"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase hover:bg-[#5CF7FF] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Transmit Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
