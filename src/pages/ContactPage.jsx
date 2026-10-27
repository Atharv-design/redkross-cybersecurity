import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, ArrowUpRight, Building2, PhoneCall } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CyberBannerFrame from '../components/CyberBannerFrame';
import CyberProjectCircuitFrame from '../components/CyberProjectCircuitFrame';

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

  const [hoveredDesk, setHoveredDesk] = useState(null);
  const [formHovered, setFormHovered] = useState(false);

  const lastSubmitRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.hpField) return;

    // Anti-automation flood guard: 4-second minimum interval between submissions
    const now = Date.now();
    if (now - lastSubmitRef.current < 4000) return;
    lastSubmitRef.current = now;

    // Sanitize input state
    setForm(prev => ({
      ...prev,
      name: prev.name.replace(/[^\w\s.-]/gi, '').trim(),
      email: prev.email.trim(),
      message: prev.message.trim()
    }));

    setSubmitted(true);
  };

  const desks = [
    {
      id: '01',
      badge: '01 / PARTNERSHIPS',
      title: 'College Tie-Ups',
      desc: 'Workshops, student capstones, and faculty curriculum delivery.',
      actionText: identity.contacts.general,
      actionHref: `mailto:${identity.contacts.general}?subject=College%20Partnership%20Inquiry`,
      icon: Mail
    },
    {
      id: '02',
      badge: '02 / DISCLOSURE',
      title: 'Vulnerability Desk',
      desc: 'Safe vulnerability reports and coordinated patch communication.',
      actionText: identity.contacts.disclosure,
      actionHref: `mailto:${identity.contacts.disclosure}?subject=Vulnerability%20Report`,
      icon: ShieldCheck
    },
    {
      id: '03',
      badge: '03 / TELEPHONE',
      title: 'Direct Voice Line',
      desc: 'Monday – Friday, 10:00 AM – 6:00 PM IST institutional routing.',
      actionText: identity.contacts.phone,
      actionHref: `tel:${identity.contacts.phone.replace(/\s+/g, '')}`,
      icon: PhoneCall
    },
    {
      id: '04',
      badge: '04 / HEADQUARTERS',
      title: 'Registered Office',
      desc: 'Panipat, Haryana 132103, India.',
      actionText: 'RoC Haryana Registered',
      actionHref: null,
      icon: Building2
    }
  ];

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
          <Mail className="w-3.5 h-3.5" />
          <span>INSTITUTIONAL &amp; TECHNICAL COMMUNICATIONS // DIRECT ROUTING</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading">
          Contact &amp; <span className="text-[#00F0FF]">Technical Desks</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          Reach our dedicated technical coordinators, laboratory researchers, or vulnerability disclosure committee.
        </p>
      </motion.div>

      {/* 4 Dedicated Routing Desks HUD Cards (Scroll Triggered Stagger) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {desks.map((desk, idx) => {
          const Icon = desk.icon;
          const isHov = hoveredDesk === desk.id;
          return (
            <motion.div
              key={desk.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group transition-all duration-300 select-none min-h-[220px] flex flex-col justify-between"
              onMouseEnter={() => setHoveredDesk(desk.id)}
              onMouseLeave={() => setHoveredDesk(null)}
            >
              <CyberProjectCircuitFrame isHovered={isHov} />

              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-cyan-500/40 text-[#00F0FF] bg-cyan-950/70 uppercase">
                      {desk.badge}
                    </span>
                    <div className="relative p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/35 group-hover:border-[#00F0FF] transition-all flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#00F0FF]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-royal text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {desk.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {desk.desc}
                  </p>
                </div>

                <div>
                  {/* Cyber Progress Trace Divider */}
                  <div className="w-full h-px bg-cyan-500/20 mb-3 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-all duration-700 ${isHov ? 'translate-x-48 opacity-100' : '-translate-x-24 opacity-0'}`} />
                  </div>

                  {desk.actionHref ? (
                    <a 
                      href={desk.actionHref} 
                      className="text-xs font-mono text-cyan-300 hover:underline flex items-center gap-1 group/link"
                    >
                      <span className="truncate">{desk.actionText}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#00F0FF] group-hover/link:translate-x-0.5 transition-transform shrink-0" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">
                      {desk.actionText}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* General Technical Message Form (Cyber HUD Banner) */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative group transition-all duration-300 max-w-3xl mx-auto select-none"
        onMouseEnter={() => setFormHovered(true)}
        onMouseLeave={() => setFormHovered(false)}
      >
        <CyberBannerFrame isHovered={formHovered} />

        <div className="relative z-10 px-8 sm:px-12 py-10">
          <h3 className="text-2xl font-bold font-royal text-white mb-2 text-center leading-tight">
            Send a Technical Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans text-center mb-8 max-w-lg mx-auto">
            Inquiries are reviewed by our engineering and governance desks.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-base font-bold font-royal text-white">Message Logged</h4>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                Thank you. Your inquiry has been routed to the relevant technical department.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="hpField" value={form.hpField} onChange={e => setForm({...form, hpField: e.target.value})} className="hidden" tabIndex={-1} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Full Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Your Email *</label>
                  <input 
                    type="email" 
                    required
                    maxLength={100}
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Department Desk</label>
                <select
                  value={form.category}
                  onChange={e => setForm({...form, category: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                >
                  <option value="research">Technical &amp; Applied Research</option>
                  <option value="college">College Partnership &amp; Workshops</option>
                  <option value="opportunity">Opportunities &amp; Fellowship Inquiry</option>
                  <option value="general">General Institutional Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Message *</label>
                <textarea 
                  rows={4}
                  required
                  maxLength={1000}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="How can we assist you or collaborate?"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white text-xs font-sans focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              >
                <span>Transmit Technical Message</span>
                <Send className="w-4 h-4 text-[#00F0FF]" />
              </button>
            </form>
          )}
        </div>
      </motion.div>

    </div>
  );
}
