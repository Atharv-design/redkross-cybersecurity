/**
 * Intelligent Cross-Platform Ecosystem Link Resolver
 * 
 * Dynamically resolves URLs across 3 environments:
 * 1. LOCALHOST DEV (localhost / 127.0.0.1)
 *    -> Main Platform: http://localhost:3000 (or http://localhost:5173)
 *    -> Cybersecurity: http://localhost:5174
 *    -> Psychology: https://psychology.redkross.org.in
 * 
 * 2. VERCEL DEPLOYMENT / STAGING (*.vercel.app)
 *    -> Main Platform: https://redkross-foundation.vercel.app
 *    -> Cybersecurity: https://redkross-cybersecurity.vercel.app
 *    -> Psychology: https://psychology.redkross.org.in
 * 
 * 3. PRODUCTION CANONICAL (*.redkross.org.in)
 *    -> Main Platform: https://redkross.org.in
 *    -> Cybersecurity: https://cyber.redkross.org.in
 *    -> Psychology: https://psychology.redkross.org.in
 * 
 * In all environments, the UI display text & badges proudly show canonical domains (e.g. cyber.redkross.org.in).
 */

export const CANONICAL_DOMAINS = {
  main: 'https://redkross.org.in',
  cyber: 'https://cyber.redkross.org.in',
  psychology: 'https://psychology.redkross.org.in'
};

export const DISPLAY_LABELS = {
  main: 'redkross.org.in',
  cyber: 'cyber.redkross.org.in',
  psychology: 'psychology.redkross.org.in'
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

  const hostname = window.location.hostname.toLowerCase();
  const currentPort = window.location.port;
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.local');
  const isVercel = hostname.endsWith('.vercel.app');

  // 1. LOCALHOST MODE
  if (isLocal) {
    if (platform === 'cyber') {
      return `http://${hostname}:5174${cleanPath}`;
    }
    if (platform === 'main') {
      // If currently on 5174 (cyber), main dev server is on 3000 (default) or 5173
      const mainPort = currentPort === '3000' ? '3000' : '3000';
      return `http://${hostname}:${mainPort}${cleanPath}`;
    }
    if (platform === 'psychology') {
      return `https://psychology.redkross.org.in${cleanPath}`;
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
      return `https://psychology.redkross.org.in${cleanPath}`;
    }
  }

  // 3. CANONICAL PRODUCTION DOMAINS (*.redkross.org.in)
  const base = CANONICAL_DOMAINS[platform] || CANONICAL_DOMAINS.main;
  return `${base}${cleanPath}`;
}
