'use client';

import { useRef, useEffect } from 'react';

declare global {
  interface Window {
    DO_PLATES?: Array<{ no: string; rev: string; title: string; page: string }>;
  }
}

interface PlateProps {
  tone?: 'dark' | 'light';
  p?: string;
  title: string;
  sub?: string;
  no: string;
  rev?: string;
  cls?: string;
  children?: React.ReactNode;
}

export function Plate({
  tone = 'dark',
  p,
  title,
  sub = '',
  no,
  rev = '01',
  cls = 'DECODED OPS · ISSUED',
  children,
}: PlateProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const prefix = (p || no.toLowerCase()).replace(/[^a-z0-9-]/g, '-');

  if (!no) {
    if (typeof console !== 'undefined') {
      console.warn('Plate refused: no drawing number');
    }
    return null;
  }

  useEffect(() => {
    document.documentElement.classList.add('sk-js');
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (typeof IntersectionObserver === 'undefined') {
      svg.classList.add('sk-in');
      if (!reduced.matches) {
        try { svg.unpauseAnimations(); } catch (_) { /* SMIL not supported */ }
      }
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          svg.classList.add('sk-in');
          if (!reduced.matches) {
            try { svg.unpauseAnimations(); } catch (_) { /* SMIL not supported */ }
          }
          io.unobserve(svg);
        });
      },
      { threshold: 0.25 }
    );

    io.observe(svg);

    try { svg.pauseAnimations(); } catch (_) { /* SMIL not supported */ }

    const handleChange = () => {
      try {
        reduced.matches ? svg.pauseAnimations() : svg.unpauseAnimations();
      } catch (_) { /* SMIL not supported */ }
    };
    reduced.addEventListener('change', handleChange);

    return () => {
      io.disconnect();
      reduced.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const register = (window.DO_PLATES = window.DO_PLATES || []);
    if (register.some((item) => item.no === no)) {
      console.warn('Plate number issued twice on this page:', no);
    } else {
      register.push({
        no,
        rev,
        title,
        page: typeof window !== 'undefined' ? window.location.pathname : '',
      });
    }
  }, [no, rev, title]);

  const uid = prefix;

  return (
    <svg
      ref={svgRef}
      className="pl"
      data-tone={tone}
      data-p={prefix}
      viewBox="0 0 1600 900"
      role="img"
    >
      <defs>
        <linearGradient id={`${uid}-ground`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="p-bg0"/><stop offset="1" className="p-bg1"/>
        </linearGradient>
        <pattern id={`${uid}-g20`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 L0 0 0 20" fill="none" className="p-grid" strokeWidth="0.35" opacity="0.10"/>
        </pattern>
        <pattern id={`${uid}-g100`} width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill={`url(#${uid}-g20)`}/>
          <path d="M100 0 L0 0 0 100" fill="none" className="p-grid" strokeWidth="0.6" opacity="0.15"/>
        </pattern>
        <radialGradient id={`${uid}-glow`} cx="0.82" cy="0.12" r="0.55">
          <stop offset="0" className="p-glow0"/><stop offset="1" className="p-glow1"/>
        </radialGradient>
        <linearGradient id={`${uid}-node`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="p-n0"/><stop offset="1" className="p-n1"/>
        </linearGradient>
        <linearGradient id={`${uid}-amber`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="p-a0"/><stop offset="1" className="p-a1"/>
        </linearGradient>
        <linearGradient id={`${uid}-amber-n`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="p-an0"/><stop offset="1" className="p-an1"/>
        </linearGradient>
        <linearGradient id={`${uid}-bar`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="p-bar0"/><stop offset="1" className="p-bar1"/>
        </linearGradient>
        <linearGradient id={`${uid}-amber-b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="p-ab0"/><stop offset="1" className="p-ab1"/>
        </linearGradient>
        <pattern id={`${uid}-scan`} width="4" height="3" patternUnits="userSpaceOnUse">
          <rect width="4" height="1" className="p-scan"/>
        </pattern>
        <filter id={`${uid}-shadow`} className="p-shadow" x="-30%" y="-30%" width="170%" height="170%">
          <feDropShadow dx="0" dy="2" stdDeviation="4"/>
        </filter>
        <marker id={`${uid}-ah`} markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" className="p-amber"/>
        </marker>
      </defs>

      <rect width="1600" height="900" fill={`url(#${uid}-ground)`}/>
      <rect width="1600" height="900" fill={`url(#${uid}-g100)`}/>
      <rect width="1600" height="900" fill={`url(#${uid}-glow)`}/>

      <rect x="14" y="14" width="1572" height="872" rx="18" fill="none" className="p-scyan" strokeWidth="1.4" strokeOpacity="0.32"/>
      <rect x="24" y="24" width="1552" height="852" rx="14" fill="none" className="p-scyan" strokeWidth="0.6" strokeOpacity="0.12"/>
      <g className="p-scyan" strokeWidth="1.2" strokeOpacity="0.5" fill="none">
        <path d="M36 58 V36 H58"/><path d="M1564 58 V36 H1542"/>
        <path d="M36 842 V864 H58"/><path d="M1564 842 V864 H1542"/>
      </g>

      <rect x="44" y="46" width="8" height="64" rx="2" className="p-amber"/>

      <text x="70" y="82" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="34" letterSpacing="-0.4">{title}</text>
      <text x="72" y="112" className="p-mono" fontSize="19" opacity="0.75">{sub}</text>

      <text x="1548" y="74" textAnchor="end" className="p-mono" fontSize="17" letterSpacing="1.4" opacity="0.55">{no} · REV {rev}</text>
      <text x="1548" y="100" textAnchor="end" className="p-mono" fontSize="15" letterSpacing="2.4" opacity="0.6">{cls}</text>
      <line x1="44" y1="140" x2="1556" y2="140" className="p-scyan" strokeWidth="0.6" strokeOpacity="0.2"/>

      {children}

      <g className="sk-fade sk-s1">
        <rect x="44" y="790" width="1512" height="64" rx="8" className="p-block" opacity="0.7"/>
        <rect x="44" y="790" width="1512" height="64" rx="8" fill="none" className="p-scyan" strokeWidth="0.7" strokeOpacity="0.5"/>
        <line x1="1080" y1="790" x2="1080" y2="854" className="p-scyan" strokeWidth="0.5" strokeOpacity="0.25"/>
        <line x1="1340" y1="790" x2="1340" y2="854" className="p-scyan" strokeWidth="0.5" strokeOpacity="0.25"/>
        <text x="68" y="815" className="p-mono" fontSize="13" letterSpacing="2" opacity="0.4">TITLE</text>
        <text x="68" y="841" className="p-mono" fontSize="18" letterSpacing="0.8" opacity="0.75">{title.toUpperCase()}</text>
        <text x="1104" y="815" className="p-mono" fontSize="13" letterSpacing="2" opacity="0.4">DRAWING NO.</text>
        <text x="1104" y="841" className="p-mono" fontSize="18" opacity="0.75">{no}</text>
        <text x="1364" y="815" className="p-mono" fontSize="13" letterSpacing="2" opacity="0.4">REV</text>
        <text x="1364" y="841" className="p-amber" fontSize="18" fontWeight="600" opacity="0.9">{rev}</text>
      </g>
    </svg>
  );
}
