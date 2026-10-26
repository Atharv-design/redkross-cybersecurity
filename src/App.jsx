import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initGlobalSplitText } from './utils/initSplitText';
import CyberNavbar from './components/CyberNavbar';
import CyberFooter from './components/CyberFooter';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Pages
import HomePage from './pages/HomePage';
import AboutCyberPage from './pages/AboutCyberPage';
import ResearchPage from './pages/ResearchPage';
import FocusAreaPage from './pages/FocusAreaPage';
import ProjectsDirectoryPage from './pages/ProjectsDirectoryPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import LabsPage from './pages/LabsPage';
import AcademyPage from './pages/AcademyPage';
import CollegePartnershipsPage from './pages/CollegePartnershipsPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import ResourcesPage from './pages/ResourcesPage';
import PublicationsPage from './pages/PublicationsPage';
import ResponsibleDisclosurePage from './pages/ResponsibleDisclosurePage';
import TrustPage from './pages/TrustPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  // Safe 3D SplitText Ripple re-initialized on every navigation & scroll
  useEffect(() => {
    let cleanup = null;

    const setupSplit = () => {
      cleanup = initGlobalSplitText();
      ScrollTrigger.refresh();
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(setupSplit);
    } else {
      setTimeout(setupSplit, 250);
    }

    return () => {
      if (cleanup) cleanup();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#060A12] text-slate-100 flex flex-col font-sans selection:bg-[#00F0FF]/30 selection:text-cyan-200">
      <ScrollToTop />
      <CyberNavbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutCyberPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:focusArea" element={<FocusAreaPage />} />
          <Route path="/projects" element={<ProjectsDirectoryPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/college-partnerships" element={<CollegePartnershipsPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/opportunities/:slug" element={<OpportunitiesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/responsible-disclosure" element={<ResponsibleDisclosurePage />} />
          <Route path="/trust" element={<TrustPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <CyberFooter />
    </div>
  );
}
