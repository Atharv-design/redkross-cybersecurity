/**
 * Intelligent Cross-Platform Ecosystem Link Resolver
 * 
 * Dynamically resolves URLs across 3 environments:
 * 1. LOCALHOST DEV (localhost / 127.0.0.1)
 *    -> Main Platform: http://localhost:3000
 *    -> Cybersecurity: http://localhost:5174
 *    -> Psychology: http://localhost:5175
 *    -> Academy: http://localhost:5173
 * 
 * 2. VERCEL DEPLOYMENT / STAGING (*.vercel.app)
 *    -> Main Platform: https://redkross-foundation.vercel.app
 *    -> Cybersecurity: https://redkross-cybersecurity.vercel.app
 *    -> Psychology: https://redkross-psychology.vercel.app
 *    -> Academy: https://redkross-academy.vercel.app
 * 
 * 3. PRODUCTION CANONICAL (*.redkross.org.in)
 *    -> Main Platform: https://redkross.org.in
 *    -> Cybersecurity: https://cybersecurity.redkross.org.in
 *    -> Psychology: https://psychology.redkross.org.in
 *    -> Academy: https://redkross-academy.vercel.app
 */

export const CANONICAL_DOMAINS = {
  main: 'https://redkross.org.in',
  cyber: 'https://cybersecurity.redkross.org.in',
  psychology: 'https://psychology.redkross.org.in',
  academy: 'https://redkross-academy.vercel.app'
};

export const DISPLAY_LABELS = {
  main: 'redkross.org.in',
  cyber: 'cybersecurity.redkross.org.in',
  psychology: 'psychology.redkross.org.in',
  academy: 'academy.redkross.org.in'
};

export function getEcosystemUrl(platform, path = '') {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';

  // Server-side / static fallback
  if (typeof window === 'undefined') {
    return `${CANONICAL_DOMAINS[platform] || CANONICAL_DOMAINS.main}${cleanPath}`;
  }

  // Allow explicit environment variable overrides if provided
  if (platform === 'main' && import.meta.env?.VITE_MAIN_URL) {
    return `${import.meta.env.VITE_MAIN_URL}${cleanPath}`;
  }
  if (platform === 'cyber' && import.meta.env?.VITE_CYBER_URL) {
    return `${import.meta.env.VITE_CYBER_URL}${cleanPath}`;
  }
  if (platform === 'academy' && import.meta.env?.VITE_ACADEMY_URL) {
    return `${import.meta.env.VITE_ACADEMY_URL}${cleanPath}`;
  }

  const hostname = window.location.hostname.toLowerCase();
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.local');
  const isVercel = hostname.endsWith('.vercel.app');

  // 1. LOCALHOST MODE
  if (isLocal) {
    if (platform === 'cyber') {
      return `http://${hostname}:5174${cleanPath}`;
    }
    if (platform === 'main') {
      return `http://${hostname}:3000${cleanPath}`;
    }
    if (platform === 'psychology') {
      return `http://${hostname}:5175${cleanPath}`;
    }
    if (platform === 'academy') {
      return `http://${hostname}:5173${cleanPath}`;
    }
  }

  // 2. VERCEL PREVIEW / STAGING MODE (*.vercel.app)
  if (isVercel) {
    if (platform === 'main') {
      return `https://redkross-foundation.vercel.app${cleanPath}`;
    }
    if (platform === 'cyber') {
      return `https://redkross-cybersecurity.vercel.app${cleanPath}`;
    }
    if (platform === 'psychology') {
      return `https://redkross-psychology.vercel.app${cleanPath}`;
    }
    if (platform === 'academy') {
      return `https://redkross-academy.vercel.app${cleanPath}`;
    }
  }

  // 3. CANONICAL PRODUCTION DOMAINS (*.redkross.org.in)
  const base = CANONICAL_DOMAINS[platform] || CANONICAL_DOMAINS.main;
  return `${base}${cleanPath}`;
}
