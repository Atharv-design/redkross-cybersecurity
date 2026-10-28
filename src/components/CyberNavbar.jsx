import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowUpRight, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';

export default function CyberNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Research", path: "/research" },
    { label: "Projects", path: "/projects" },
    { label: "Labs", path: "/labs" },
    { label: "Academy", path: "/academy" },
    { label: "Opportunities", path: "/opportunities" },
    { label: "Partnerships", path: "/college-partnerships" },
    { label: "Resources", path: "/resources" },
    { label: "Trust", path: "/trust" },
    { label: "Contact", path: "/contact" }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none select-none">
      {/* Top Cross-Domain Utility Bar */}
      <div className="bg-[#03060a]/90 border-b border-cyan-500/15 py-1.5 px-4 sm:px-8 text-[11px] font-mono text-gray-400 flex items-center justify-between backdrop-blur-md pointer-events-auto">
        <div className="flex items-center gap-4">
          <a 
            href={CYBER_DATA.identity.parentOrg.url}
            className="flex items-center gap-1.5 text-gray-300 hover:text-[#00F0FF] transition-colors"
          >
            <span>&larr; RedKross Foundation</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href={CYBER_DATA.identity.psychologyDomain}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#FFA439] transition-colors"
          >
            <span>Psychology Platform</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://redkross-academy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-rose-400 hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span>Academy Platform</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-3 text-[10px] text-cyan-400/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span>CYBERSECURITY RESEARCH PLATFORM</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-4 sm:px-8 pt-3">
        <div className={`max-w-7xl mx-auto rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          scrolled 
            ? "bg-[#060A12]/90 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            : "bg-[#080E1C]/75 backdrop-blur-lg border border-white/10 shadow-lg"
        }`}>
          
          {/* Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black border border-[#00F0FF]/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform">
              <img 
                src="/assets/crest-clean-circle.png" 
                alt="RedKross Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-royal font-bold text-sm tracking-wider text-white leading-tight">
                RedKross <span className="text-[#00F0FF]">Cybersecurity</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-cyan-400/70 uppercase -mt-0.5">
                Applied Research &bull; Labs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-xs font-mono font-medium transition-colors duration-200 relative py-1 whitespace-nowrap ${
                    active ? "text-[#00F0FF] font-bold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#00F0FF] to-[#2563EB] rounded-full shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Partner with Us Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/college-partnerships"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-black text-xs font-royal font-bold tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:scale-105 transition-all cursor-pointer uppercase"
              style={{
                background: 'linear-gradient(135deg, #00F0FF, #38BDF8)'
              }}
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#00F0FF]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00F0FF]" /> : <Menu className="w-5 h-5 text-[#00F0FF]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pt-2 pointer-events-auto">
          <div className="max-w-7xl mx-auto rounded-2xl bg-[#060A12]/95 border border-cyan-500/30 p-5 shadow-2xl backdrop-blur-2xl">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-mono flex items-center justify-between ${
                    isActive(link.path) 
                      ? "bg-[#00F0FF]/15 text-[#00F0FF] font-bold" 
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 mt-2">
                <Link
                  to="/college-partnerships"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase"
                >
                  <span>Partner With Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
