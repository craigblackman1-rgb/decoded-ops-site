'use client';

import { useEffect, useState } from 'react';

/**
 * The sigma quality scale as a schematic: 1σ–6σ track with DPMO per level,
 * the 5–6σ target zone highlighted, and the 3σ→5σ shift (99.6% fewer defects)
 * animated. Light + dark variants, reduced-motion aware.
 */
type Tone = 'dark' | 'light';

const palette = (tone: Tone) =>
  tone === 'dark'
    ? { bg: '#023047', grid: '#0a3d5c', gridOp: 0.5, ink: '#F8F9FA', sub: '#8ECAE6', track: 'rgba(142,202,230,0.18)' }
    : { bg: '#F8F9FA', grid: '#d2e3ec', gridOp: 1, ink: '#023047', sub: '#3A5F74', track: 'rgba(2,48,71,0.08)' };

const fDisp = { fontFamily: 'var(--font-outfit), Outfit, sans-serif' } as const;
const fBody = { fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' } as const;
const fMono = { fontFamily: 'ui-monospace, "JetBrains Mono", monospace' } as const;

const levels = [
  { x: 150, s: '1σ', dpmo: '690,000' },
  { x: 340, s: '2σ', dpmo: '308,000' },
  { x: 530, s: '3σ', dpmo: '66,807' },
  { x: 720, s: '4σ', dpmo: '6,210' },
  { x: 910, s: '5σ', dpmo: '233' },
  { x: 1100, s: '6σ', dpmo: '3.4' },
];

export function SixSigmaSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const c = palette(tone);
  const cyan = '#219EBC', amber = '#FFB703', orange = '#FB8500';
  const trackY = 300;

  return (
    <svg viewBox="0 0 1240 560" className={className} style={{ width: '100%', height: 'auto' }}
      role="img" aria-label="The sigma quality scale from 1 to 6 sigma with defects per million, and the shift from 3 to 5 sigma cutting defects by 99.6 percent.">
      <defs>
        <pattern id={`ss-grid-${tone}`} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke={c.grid} strokeWidth="0.6" />
        </pattern>
        <linearGradient id={`ss-track-${tone}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#8ECAE6" />
          <stop offset="45%" stopColor={cyan} />
          <stop offset="75%" stopColor={amber} />
          <stop offset="100%" stopColor={orange} />
        </linearGradient>
        <marker id={`ss-ah-${tone}`} markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
        </marker>
      </defs>

      <rect width="1240" height="560" rx="16" fill={c.bg} />
      <rect width="1240" height="560" rx="16" fill={`url(#ss-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={amber} />

      <text x="60" y="66" style={fMono} fontSize="13" letterSpacing="3" fill={cyan}>THE SIGMA SCALE</text>
      <text x="60" y="100" style={fDisp} fontWeight="800" fontSize="26" fill={c.ink}>The higher the sigma, the fewer defects escape</text>

      {/* target zone bracket over 5–6σ */}
      <g className="sch-fade sch-f3">
        <path d={`M890 250 v-16 h230 v16`} fill="none" stroke={amber} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x="1005" y="224" textAnchor="middle" style={fDisp} fontWeight="700" fontSize="12" letterSpacing="1" fill={amber}>TARGET ZONE</text>
      </g>

      {/* track */}
      <rect x="130" y={trackY} width="990" height="10" rx="5" fill={c.track} />
      <rect className="sch-draw sch-d2" x="130" y={trackY} width="990" height="10" rx="5" fill="none" stroke={`url(#ss-track-${tone})`} strokeWidth="10" strokeDasharray="990" strokeLinecap="round" />
      <rect x="130" y={trackY} width="990" height="10" rx="5" fill={`url(#ss-track-${tone})`} className="sch-fade sch-f2" />

      {/* level ticks */}
      {levels.map((l) => {
        const target = l.s === '5σ' || l.s === '6σ';
        return (
          <g key={l.s} className="sch-fade sch-f2">
            <line x1={l.x} y1={trackY - 6} x2={l.x} y2={trackY + 16} stroke={target ? amber : c.sub} strokeWidth="2" />
            <text x={l.x} y={trackY - 16} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="16" fill={target ? amber : c.ink}>{l.s}</text>
            <text x={l.x} y={trackY + 42} textAnchor="middle" style={fMono} fontSize="12" fill={c.sub}>{l.dpmo}</text>
            <text x={l.x} y={trackY + 60} textAnchor="middle" style={fBody} fontSize="10" fill={c.sub} opacity="0.7">DPMO</text>
          </g>
        );
      })}

      {/* 3σ → 5σ shift arc */}
      <path id={`ss-shift-${tone}`} className="sch-draw sch-d4" d="M530 262 C 620 150 820 150 910 262" fill="none" stroke={amber} strokeWidth="2.5" markerEnd={`url(#ss-ah-${tone})`} />
      <text x="720" y="140" textAnchor="middle" style={fDisp} fontWeight="900" fontSize="40" fill={amber} className="sch-fade sch-f4">99.6%</text>
      <text x="720" y="166" textAnchor="middle" style={fBody} fontSize="14" fill={c.sub} className="sch-fade sch-f4">fewer defects, moving 3σ to 5σ</text>

      {/* bottom takeaway */}
      <text x="60" y="470" style={fBody} fontStyle="italic" fontSize="15" fill={c.sub} opacity="0.85" className="sch-fade sch-f3">
        That jump is not a new machine. It is a better process: standard settings, documented steps, checks at the right points.
      </text>
      <text x="60" y="500" style={fBody} fontSize="13" fill={c.sub} opacity="0.6" className="sch-fade sch-f3">
        At 3σ, roughly 1 in 15 garments has a visible fault. At 5σ, it is 233 in a million.
      </text>

      {/* travelling marker 3σ→5σ (motion only) */}
      {motion && (
        <circle r="6" fill={amber} stroke={c.bg} strokeWidth="2">
          <animateMotion dur="4s" begin="1.4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href={`#ss-shift-${tone}`} />
          </animateMotion>
        </circle>
      )}
    </svg>
  );
}
