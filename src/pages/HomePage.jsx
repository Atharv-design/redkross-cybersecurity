import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Terminal, 
  Search, 
  Cpu, 
  Radio, 
  Users, 
  ArrowUpRight, 
  ExternalLink,
  Sparkles, 
  AlertCircle,
  FolderGit2,
  Lock,
  Compass,
  GraduationCap,
  Briefcase,
  BookOpen,
  Clock,
  Calendar,
  CheckCircle2,
  FileCode2,
  ArrowRight
} from 'lucide-react';
import { CYBER_DATA } from '../data/cyberData';
import CircuitTraceCard from '../components/CircuitTraceCard';
import ExplodedProjectCard from '../components/ExplodedProjectCard';
import CyberIntroBanner from '../components/CyberIntroBanner';
import CyberProgressStepCard from '../components/CyberProgressStepCard';
import CyberLearningCard from '../components/CyberLearningCard';
import CyberPartnershipBanner from '../components/CyberPartnershipBanner';
import CyberOpportunityCard from '../components/CyberOpportunityCard';
import CyberTrustBanner from '../components/CyberTrustBanner';

export default function HomePage() {
  const { 
    identity, 
    focusAreas, 
    projects, 
    howWeWork, 
    academy, 
    collegePartnerships, 
    opportunities, 
    responsibleDisclosure 
  } = CYBER_DATA;

  const iconMap = {
    Cpu: Cpu,
    ShieldAlert: Terminal,
    Search: Search,
    Radar: Compass,
    Radio: Radio,
    Users: Users
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Prototype':
        return 'bg-amber-500/10 text-[#FFA439] border border-amber-500/30';
      case 'In development':
        return 'bg-cyan-500/10 text-[#00F0FF] border border-cyan-500/30';
      case 'Evaluated / validated':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';
      default:
        return 'bg-white/5 text-slate-400 border border-white/10';
    }
  };

  return (
    <div className="relative pt-24 pb-20 select-none overflow-hidden min-h-screen">
      
      {/* Background Ambient Lighting (Refined & Restrained) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#00F0FF]/[0.05] rounded-full blur-[160px]" />
        <div className="absolute top-[40%] -right-32 w-[550px] h-[550px] bg-[#2563EB]/[0.04] rounded-full blur-[180px]" />
        <div className="absolute top-[75%] -left-32 w-[500px] h-[500px] bg-[#00F0FF]/[0.03] rounded-full blur-[160px]" />
        <div className="absolute inset-0 cyber-grid opacity-25" />
      </div>

      <div className="relative z-10">
        
        {/* =========================================================================
            SECTION 1: HERO
            Requirements: Headline, short explanation and 2–3 actions.
            Exact copy from spec:
            "Cybersecurity Research. Practical Learning. Safer Digital Systems."
            "We explore cybersecurity challenges through applied research, carefully
             scoped technical projects and accessible learning. Discover our focus
             areas, review verified work or collaborate with RedKross."
            Buttons: "Explore Research" → /research; "View Projects" → /projects;
                     "Partner with Us" → /college-partnerships.
           ========================================================================= */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Division Identity Beacon */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-8 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>REDKROSS RESEARCH FOUNDATION &bull; CYBERSECURITY DIVISION</span>
            </motion.div>

            {/* Headline (No gradient text, pure typographic weight & contrast) */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-royal tracking-tight mb-6 leading-[1.08] split-heading"
              style={{ perspective: '1000px' }}
            >
              Cybersecurity Research. <br className="hidden sm:inline" />
              <span className="text-[#00F0FF]">
                Practical Learning.
              </span> <br className="hidden sm:inline" />
              Safer Digital Systems.
            </h1>

            {/* Subtitle (Optimal measure 65-75ch) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed mb-10"
            >
              We explore cybersecurity challenges through applied research, carefully scoped technical projects and accessible learning. Discover our focus areas, review verified work or collaborate with RedKross.
            </motion.p>

            {/* 3 Call-To-Action Buttons (Clear visual hierarchy) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/research"
                className="px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase tracking-wider hover:bg-[#5CF7FF] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(0,240,255,0.3)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00F0FF]"
              >
                Explore Research
              </Link>

              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white font-royal font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all hover:scale-[1.02] backdrop-blur-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                View Projects
              </Link>

              <Link
                to="/college-partnerships"
                className="px-6 py-3 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-200 font-royal font-bold text-xs uppercase tracking-wider hover:bg-blue-600/30 hover:border-blue-400/60 transition-all hover:scale-[1.02] backdrop-blur-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
              >
                Partner with Us
              </Link>
            </motion.div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 2: INTRODUCTION
            Requirements: Explain this is RedKross Research Foundation’s cybersecurity
            division; link to the parent foundation.
           ========================================================================= */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <CyberIntroBanner parentOrgUrl={identity.parentOrg.url} />
        </section>


        {/* =========================================================================
            SECTION 3: FOCUS AREAS
            Requirements: Cards for AI security, defensive security, digital forensics,
            threat intelligence, cloud/IoT and human-centred security. Mark aspirational
            areas honestly.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading"
              style={{ perspective: '1000px' }}
            >
              Cybersecurity <span className="text-[#00F0FF]">Focus Areas</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              We focus on practical, evidence-led domains where defensibility and student capability can be measurably improved. Aspirational themes are marked honestly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((fa, idx) => (
              <CircuitTraceCard
                key={fa.id}
                fa={fa}
                idx={idx}
                iconMap={iconMap}
                showMotion={true}
              />
            ))}
          </div>
        </section>


        {/* =========================================================================
            SECTION 4: SELECTED WORK
            Requirements: Three or four verified projects at most, with status labels
            and repository/details links.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-royal split-heading"
              style={{ perspective: '1000px' }}
            >
              Selected Technical <span className="text-[#00F0FF]">Projects</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Three verified laboratory initiatives. Each technical project communicates its core challenge, engineering method, architecture, and documented limitations.
            </p>
          </div>

          {/* Split 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projects.slice(0, 3).map((project, idx) => (
              <ExplodedProjectCard
                key={project.slug || project.id || idx}
                project={project}
                idx={idx}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400/60 text-white font-royal font-bold text-xs uppercase tracking-wider transition-all hover:bg-white/[0.08]"
            >
              <span>Explore All Projects in Interactive Directory</span>
              <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
            </Link>
          </div>
        </section>


        {/* =========================================================================
            SECTION 5: HOW WE WORK (Progress Steps Architecture)
            Requirements: Research question → safe lab/dataset → evaluation →
            documentation → responsible sharing.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4 split-heading"
              style={{ perspective: '1000px' }}
            >
              How We <span className="text-[#00F0FF]">Work</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Every technical initiative follows a repeatable 5-step loop designed to guarantee reproducibility, safety, and peer review.
            </p>
          </div>

          {/* Sequential Stack of Cyber Progress Step Cards */}
          <div className="space-y-6">
            {howWeWork.map((step, sIdx) => (
              <CyberProgressStepCard 
                key={step.step}
                step={step}
                sIdx={sIdx}
                totalSteps={howWeWork.length}
              />
            ))}
          </div>
        </section>


        {/* =========================================================================
            SECTION 6: LEARNING AND STUDENT DEVELOPMENT
            Requirements: Only describe workshops or project cohorts that are genuinely
            ready to deliver. Label future Academy work.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-black text-white font-royal tracking-tight mb-4 split-heading"
              style={{ perspective: '1000px' }}
            >
              Learning &amp; <span className="text-[#00F0FF]">Student Development</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              We deliver practical student training with real telemetry and defensive tooling. Future Academy programmes are clearly labelled as under development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <CyberLearningCard 
              type="workshops" 
              idx={0} 
            />
            <CyberLearningCard 
              type="academy" 
              academyData={academy} 
              idx={1} 
            />
          </div>
        </section>


        {/* =========================================================================
            SECTION 7: COLLEGE PARTNERSHIPS
            Requirements: Benefits, delivery formats, pilot enquiry and link to
            /college-partnerships.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <CyberPartnershipBanner collegePartnerships={collegePartnerships} />
        </section>


        {/* =========================================================================
            SECTION 8: OPPORTUNITIES
            Requirements: Real, approved openings only; include supervisor, scope,
            eligibility and deadline.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-black text-white font-royal tracking-tight mb-4 split-heading"
              style={{ perspective: '1000px' }}
            >
              Research <span className="text-[#00F0FF]">Opportunities</span>
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              We list only approved research positions with identified supervisors, defined tasks, and clear eligibility requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-stretch">
            {opportunities.map((opp, idx) => (
              <CyberOpportunityCard
                key={opp.slug}
                opp={opp}
                idx={idx}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400/60 text-white font-royal font-bold text-xs uppercase tracking-wider transition-all hover:bg-white/[0.08]"
            >
              <span>View All Approved Opportunities</span>
              <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
            </Link>
          </div>
        </section>


        {/* =========================================================================
            SECTION 9: TRUST AND RESPONSIBILITY
            Requirements: Ethics, authorised testing, privacy and responsible disclosure.
           ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
          <CyberTrustBanner responsibleDisclosure={responsibleDisclosure} />
        </section>

        {/* SECTION 10: FOOTER IS RENDERED GLOBALLY BY CyberFooter.jsx */}

      </div>
    </div>
  );
}
