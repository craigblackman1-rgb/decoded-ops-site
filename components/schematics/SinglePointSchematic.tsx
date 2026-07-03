'use client';

import { useEffect, useState } from 'react';

/**
 * "Single point of failure" — every process routing through one person.
 * Illustrates the risk: knowledge living in one head. Built to the same
 * blueprint/editorial visual language as ThreeLayerSchematic (layered ground,
 * glass-card chips, mono eyebrow, staged entrance). Light default (for
 * dark/light rhythm), also dark. Motion is a gentle centre pulse + inward
 * data flow along converging connectors. Honours prefers-reduced-motion.
 */
type Tone = 'dark' | 'light';

const palette = (tone: Tone) =>
  tone === 'dark'
    ? {
        bg: '#023047', grid: '#0a3d5c', gridOp: 0.55,
        ink: '#F8F9FA', sub: '#8ECAE6', mono: '#8ECAE6',
        chipStroke: 'rgba(142,202,230,0.35)', line: '#8ECAE6',
        dropFlood: '#00121f', dropOpacity: 0.5,
      }
    : {
        bg: '#F8F9FA', grid: '#d2e3ec', gridOp: 1,
        ink: '#023047', sub: '#3A5F74', mono: '#219EBC',
        chipStroke: 'rgba(2,48,71,0.14)', line: '#5A7D8F',
        dropFlood: '#023047', dropOpacity: 0.12,
      };

const fDisp = { fontFamily: 'var(--font-outfit), Outfit, sans-serif' } as const;
const fBody = { fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' } as const;
const fMono = { fontFamily: 'ui-monospace, "JetBrains Mono", monospace' } as const;

const CX = 550, CY = 340;
const nodes = [
  { x: 930, y: 340, label: 'Orders', sub: 'who gets priority' },
  { x: 740, y: 540, label: 'Despatch', sub: 'the courier quirks' },
  { x: 360, y: 540, label: 'Stock', sub: 'what the counts really mean' },
  { x: 170, y: 340, label: 'Artwork', sub: 'which files are current' },
  { x: 360, y: 140, label: 'Invoicing', sub: "who's on stop" },
  { x: 740, y: 140, label: 'Production', sub: 'the machine settings' },
];

export function SinglePointSchematic({ tone = 'light', className }: { tone?: Tone; className?: string }) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const c = palette(tone);
  const cyan = '#219EBC', amber = '#FFB703';

  return (
    <svg viewBox="0 0 1100 680" className={className} style={{ width: '100%', height: 'auto' }}
      role="img" aria-label="A single-point-of-failure diagram: six operational processes — Orders, Despatch, Stock, Artwork, Invoicing and Production — all routing through one person, each hiding knowledge that lives only in their head.">
      <defs>
        <pattern id={`sp-grid-${tone}`} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke={c.grid} strokeWidth="0.6" />
        </pattern>
        <radialGradient id={`sp-glowA-${tone}`} cx="50%" cy="58%" r="46%">
          <stop offset="0%" stopColor={amber} stopOpacity={tone === 'dark' ? 0.16 : 0.12} />
          <stop offset="100%" stopColor={c.bg} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`sp-glowC-${tone}`} cx="14%" cy="12%" r="46%">
          <stop offset="0%" stopColor={cyan} stopOpacity={tone === 'dark' ? 0.1 : 0.06} />
          <stop offset="100%" stopColor={c.bg} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`sp-chip-${tone}`} x1="0%" y1="0%" x2="100%" y2="100%">
          {tone === 'dark' ? (
            <>
              <stop offset="0%" stopColor="#a6d4e8" stopOpacity="0.13" />
              <stop offset="100%" stopColor="#219EBC" stopOpacity="0.025" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#8ECAE6" stopOpacity="0.14" />
            </>
          )}
        </linearGradient>
        <filter id={`sp-shadow-${tone}`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={c.dropFlood} floodOpacity={c.dropOpacity} />
        </filter>
        <marker id={`sp-ah-${tone}`} markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
        </marker>
      </defs>

      {/* backdrop */}
      <rect width="1100" height="680" rx="16" fill={c.bg} />
      <rect width="1100" height="680" rx="16" fill={`url(#sp-grid-${tone})`} opacity={c.gridOp} />
      <rect width="1100" height="680" rx="16" fill={`url(#sp-glowC-${tone})`} />
      <rect width="1100" height="680" rx="16" fill={`url(#sp-glowA-${tone})`} />
      <rect x="0" y="0" width="1100" height="6" fill={amber} />

      {/* eyebrow + title */}
      <text x="60" y="60" style={fMono} fontSize="13" letterSpacing="3" fill={cyan} className="sch-fade sch-f1">THE RISK</text>
      <text x="60" y="98" style={fDisp} fontWeight="800" fontSize="30" fill={c.ink} className="sch-fade sch-f1">Everything runs through one person</text>

      {/* converging connectors */}
      {nodes.map((n, i) => (
        <path key={`l${i}`} id={`sp-l${i}-${tone}`}
          className="sch-draw sch-d3"
          d={`M${n.x} ${n.y} Q ${(n.x + CX) / 2} ${(n.y + CY) / 2 + (n.y < CY ? -18 : 18)} ${CX} ${CY}`}
          fill="none" stroke={c.line} strokeWidth="2" strokeOpacity="0.6" markerEnd={`url(#sp-ah-${tone})`} />
      ))}

      {/* process chips */}
      {nodes.map((n, i) => (
        <g key={`n${i}`} className={`sch-fade ${i % 2 === 0 ? 'sch-f2' : 'sch-f3'}`} filter={`url(#sp-shadow-${tone})`}>
          <rect x={n.x - 96} y={n.y - 34} width="192" height="68" rx="12" fill={`url(#sp-chip-${tone})`} stroke={c.chipStroke} strokeWidth="1.4" />
          <text x={n.x} y={n.y - 5} textAnchor="middle" style={fDisp} fontWeight="600" fontSize="21" fill={c.ink}>{n.label}</text>
          <text x={n.x} y={n.y + 18} textAnchor="middle" style={fMono} fontSize="11" letterSpacing="0.3" fill={c.mono} opacity="0.85">{n.sub}</text>
        </g>
      ))}

      {/* centre: the single point */}
      <g className="sch-fade sch-f4">
        <circle cx={CX} cy={CY} r="86" className="sch-halo" fill={amber} />
        <circle cx={CX} cy={CY} r="68" fill={amber} />
        <circle cx={CX} cy={CY} r="68" fill="none" stroke="#023047" strokeOpacity="0.22" strokeWidth="1.6" />
        <circle cx={CX} cy={CY} r="54" fill="none" stroke="#023047" strokeOpacity="0.14" strokeWidth="1" />
        <text x={CX} y={CY - 6} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="24" fill="#023047">One</text>
        <text x={CX} y={CY + 22} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="24" fill="#023047">person</text>

        {/* status caption pill */}
        <rect x={CX - 138} y={CY + 96} width="276" height="32" rx="16" fill="none" stroke={amber} strokeWidth="1.3" />
        <text x={CX} y={CY + 117} textAnchor="middle" style={fMono} fontSize="12" letterSpacing="1.2" fill={amber}>STATUS: SINGLE POINT OF FAILURE</text>
      </g>

      {/* inward data flow (motion only) */}
      {motion && nodes.map((n, i) => (
        <circle key={`d${i}`} r="4.5" fill={cyan}>
          <animateMotion dur={`${3.4 + i * 0.3}s`} begin={`${i * 0.45}s`} repeatCount="indefinite">
            <mpath href={`#sp-l${i}-${tone}`} />
          </animateMotion>
        </circle>
      ))}

      <text x="550" y="648" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="18" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        When they are off, or they leave, it leaves with them.
      </text>
    </svg>
  );
}
