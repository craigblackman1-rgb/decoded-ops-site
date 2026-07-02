'use client';

import { useEffect, useState } from 'react';

/**
 * "Single point of failure" — every process routing through one person.
 * Illustrates the core risk: knowledge living in one head. Light variant by
 * default (for light sections / dark/light rhythm). Reusable on problem pages
 * (no-ops-owner, systems-dont-talk). Honours prefers-reduced-motion.
 */
type Tone = 'dark' | 'light';

const palette = (tone: Tone) =>
  tone === 'dark'
    ? { bg: '#023047', grid: '#0a3d5c', gridOp: 0.5, ink: '#F8F9FA', sub: '#8ECAE6', chip: '#04314a', chipStroke: 'rgba(142,202,230,0.35)', line: '#8ECAE6' }
    : { bg: '#F8F9FA', grid: '#d2e3ec', gridOp: 1, ink: '#023047', sub: '#3A5F74', chip: '#ffffff', chipStroke: 'rgba(2,48,71,0.14)', line: '#8AA8B5' };

const fDisp = { fontFamily: 'var(--font-outfit), Outfit, sans-serif' } as const;
const fBody = { fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' } as const;

const nodes = [
  { x: 690, y: 280, label: 'Orders' },
  { x: 585, y: 452, label: 'Despatch' },
  { x: 375, y: 452, label: 'Stock' },
  { x: 270, y: 280, label: 'Artwork' },
  { x: 375, y: 108, label: 'Invoicing' },
  { x: 585, y: 108, label: 'Production' },
];
const CX = 480, CY = 280;

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
    <svg viewBox="0 0 960 560" className={className} style={{ width: '100%', height: 'auto' }}
      role="img" aria-label="A single-point-of-failure diagram: six operational processes all routing through one person.">
      <defs>
        <pattern id={`sp-grid-${tone}`} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke={c.grid} strokeWidth="0.6" />
        </pattern>
        <radialGradient id={`sp-glow-${tone}`} cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={amber} stopOpacity={tone === 'dark' ? 0.1 : 0.08} />
          <stop offset="100%" stopColor={c.bg} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="960" height="560" rx="16" fill={c.bg} />
      <rect width="960" height="560" rx="16" fill={`url(#sp-grid-${tone})`} opacity={c.gridOp} />
      <rect width="960" height="560" rx="16" fill={`url(#sp-glow-${tone})`} />

      <text x="480" y="46" textAnchor="middle" style={fDisp} fontWeight="700" fontSize="15" letterSpacing="1" fill={c.ink}>Everything runs through one person</text>

      {/* converging lines */}
      {nodes.map((n, i) => (
        <path key={`l${i}`} id={`sp-l${i}-${tone}`} className="sch-draw sch-d2"
          d={`M${n.x} ${n.y} Q ${(n.x + CX) / 2} ${(n.y + CY) / 2 + (n.y < CY ? -10 : 10)} ${CX} ${CY}`}
          fill="none" stroke={c.line} strokeWidth="1.6" strokeOpacity="0.6" />
      ))}

      {/* process nodes */}
      {nodes.map((n, i) => (
        <g key={`n${i}`} className="sch-fade sch-f2">
          <rect x={n.x - 58} y={n.y - 20} width="116" height="40" rx="9" fill={c.chip} stroke={c.chipStroke} />
          <text x={n.x} y={n.y + 5} textAnchor="middle" style={fBody} fontSize="14" fill={c.ink}>{n.label}</text>
        </g>
      ))}

      {/* centre: the single point */}
      <circle cx={CX} cy={CY} r="46" className="sch-halo" fill={amber} />
      <g className="sch-fade sch-f1">
        <circle cx={CX} cy={CY} r="40" fill={amber} />
        <circle cx={CX} cy={CY} r="40" fill="none" stroke="#023047" strokeOpacity="0.15" />
        <text x={CX} y={CY - 2} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="15" fill="#023047">One</text>
        <text x={CX} y={CY + 16} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="15" fill="#023047">person</text>
      </g>

      {/* flowing dots inward (motion only) */}
      {motion && nodes.map((n, i) => (
        <circle key={`d${i}`} r="3.5" fill={cyan}>
          <animateMotion dur={`${3.4 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount="indefinite">
            <mpath href={`#sp-l${i}-${tone}`} />
          </animateMotion>
        </circle>
      ))}

      <text x="480" y="524" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="14" fill={c.sub} opacity="0.8" className="sch-fade sch-f3">
        When they are off, or they leave, it leaves with them.
      </text>
    </svg>
  );
}
