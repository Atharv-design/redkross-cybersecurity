import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function CyberFooter() {
  const { identity } = CYBER_DATA;

  return (
    <footer className="bg-[#03060A] border-t border-cyan-500/20 text-gray-400 font-sans relative overflow-hidden select-none">
      {/* Subtle Cyan Radial Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00F0FF]/[0.025] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Platform Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black border border-[#00F0FF]/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <img src="/assets/crest-clean-circle.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-royal font-bold text-lg text-white">
                RedKross <span className="text-[#00F0FF]">Cybersecurity</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-sm">
              The dedicated technical and applied cybersecurity research division of <a href={identity.parentOrg.url} className="text-white hover:text-[#00F0FF] underline">RedKross Research Foundation</a>. Advancing practical learning, safe experimental environments, and verifiable defensive technology.
            </p>

            <div className="text-[11px] font-mono text-gray-500 space-y-1">
              <p>CIN: <span className="text-gray-300 font-bold">{identity.parentOrg.cin}</span> (RoC Haryana)</p>
              <p>{identity.parentOrg.legalStatus}</p>
            </div>
          </div>

          {/* Col 3: Research & Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-semibold">Technical Tracks</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/research" className="hover:text-white transition-colors">Research Overview</Link></li>
              <li><Link to="/research/ai-security" className="hover:text-white transition-colors">AI &amp; Model Security</Link></li>
              <li><Link to="/research/defensive-security" className="hover:text-white transition-colors">Defensive Engineering</Link></li>
              <li><Link to="/research/digital-forensics" className="hover:text-white transition-colors">Digital Forensics</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Verified Projects</Link></li>
              <li><Link to="/labs" className="hover:text-white transition-colors">Lab Environments</Link></li>
            </ul>
          </div>

          {/* Col 4: Community & Institutional */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-semibold">Programmes</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/college-partnerships" className="hover:text-white transition-colors">College Partnerships</Link></li>
              <li><Link to="/academy" className="hover:text-white transition-colors">Academy Roadmap</Link></li>
              <li><Link to="/opportunities" className="hover:text-white transition-colors">Cyber Opportunities</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Technical Guides</Link></li>
              <li><Link to="/publications" className="hover:text-white transition-colors">Publications Status</Link></li>
              <li><Link to="/responsible-disclosure" className="hover:text-white transition-colors">Responsible Disclosure</Link></li>
            </ul>
          </div>

          {/* Col 5: Connected Domains */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-semibold">Connected Ecosystem</h4>
            <div className="space-y-2.5">
              <a 
                href={identity.parentOrg.url}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-gray-300 hover:border-[#00F0FF]/40 hover:bg-white/10 transition-all group"
              >
                <div>
                  <span className="text-[10px] text-gray-500 font-mono block">PARENT PORTAL</span>
                  <span className="font-semibold text-white group-hover:text-[#00F0FF]">redkross.org.in</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00F0FF]" />
              </a>

              <a 
                href={identity.psychologyDomain}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-gray-300 hover:border-[#FFA439]/40 hover:bg-white/10 transition-all group"
              >
                <div>
                  <span className="text-[10px] text-gray-500 font-mono block">PSYCHOLOGY PORTAL</span>
                  <span className="font-semibold text-white group-hover:text-[#FFA439]">psychology.redkross.org.in</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FFA439]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Ethics & Statutory Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} RedKross Research Foundation. All rights reserved. Zero Fabrications Policy Enforced.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/trust" className="hover:text-gray-300">Ethics &amp; Trust</Link>
            <span>&bull;</span>
            <Link to="/responsible-disclosure" className="hover:text-[#00F0FF]">security@redkross.org.in</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
