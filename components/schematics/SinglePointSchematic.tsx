'use client';

import { useEffect, useState } from 'react';

/**
 * "Single point of failure" — every process routing through one person.
 * Illustrates the risk: knowledge living in one head. Light default (for
 * dark/light rhythm), also dark. Elements are visible by default; motion is
 * a gentle centre pulse + inward data flow. Honours prefers-reduced-motion.
 */
type Tone = 'dark' | 'light';

const palette = (tone: Tone) =>
  tone === 'dark'
    ? { bg: '#023047', grid: '#0a3d5c', gridOp: 0.5, ink: '#F8F9FA', sub: '#8ECAE6', chip: '#04314a', chipStroke: 'rgba(142,202,230,0.4)', line: '#8ECAE6' }
    : { bg: '#F8F9FA', grid: '#d2e3ec', gridOp: 1, ink: '#023047', sub: '#3A5F74', chip: '#ffffff', chipStroke: 'rgba(2,48,71,0.16)', line: '#5A7D8F' };

const fDisp = { fontFamily: 'var(--font-outfit), Outfit, sans-serif' } as const;
const fBody = { fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' } as const;

const CX = 500, CY = 288;
const nodes = [
  { x: 858, y: 288, label: 'Orders' },
  { x: 675, y: 452, label: 'Despatch' },
  { x: 325, y: 452, label: 'Stock' },
  { x: 142, y: 288, label: 'Artwork' },
  { x: 325, y: 124, label: 'Invoicing' },
  { x: 675, y: 124, label: 'Production' },
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
    <svg viewBox="0 0 1000 540" className={className} style={{ width: '100%', height: 'auto' }}
      role="img" aria-label="A single-point-of-failure diagram: six operational processes all routing through one person.">
      <defs>
        <pattern id={`sp-grid-${tone}`} width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M36 0H0V36" fill="none" stroke={c.grid} strokeWidth="0.6" />
        </pattern>
        <radialGradient id={`sp-glow-${tone}`} cx="50%" cy="54%" r="42%">
          <stop offset="0%" stopColor={amber} stopOpacity={tone === 'dark' ? 0.12 : 0.1} />
          <stop offset="100%" stopColor={c.bg} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1000" height="540" rx="16" fill={c.bg} />
      <rect width="1000" height="540" rx="16" fill={`url(#sp-grid-${tone})`} opacity={c.gridOp} />
      <rect width="1000" height="540" rx="16" fill={`url(#sp-glow-${tone})`} />

      <text x="500" y="44" textAnchor="middle" style={fDisp} fontWeight="800" fontSize="18" letterSpacing="0.5" fill={c.ink}>Everything runs through one person</text>

      {/* converging lines (static, always visible) */}
      {nodes.map((n, i) => (
        <path key={`l${i}`} id={`sp-l${i}-${tone}`}
          d={`M${n.x} ${n.y} Q ${(n.x + CX) / 2} ${(n.y + CY) / 2 + (n.y < CY ? -14 : 14)} ${CX} ${CY}`}
          fill="none" stroke={c.line} strokeWidth="1.8" strokeOpacity="0.55" />
      ))}

      {/* process nodes */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <rect x={n.x - 66} y={n.y - 23} width="132" height="46" rx="10" fill={c.chip} stroke={c.chipStroke} strokeWidth="1.2" />
          <text x={n.x} y={n.y + 6} textAnchor="middle" style={fBody} fontWeight="500" fontSize="16" fill={c.ink}>{n.label}</text>
        </g>
      ))}

      {/* centre: the single point */}
      <circle cx={CX} cy={CY} r="66" className="sch-halo" fill={amber} />
      <circle cx={CX} cy={CY} r="54" fill={amber} />
      <circle cx={CX} cy={CY} r="54" fill="none" stroke="#023047" strokeOpacity="0.18" strokeWidth="1.5" />
      <text x={CX} y={CY - 6} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="18" fill="#023047">One</text>
      <text x={CX} y={CY + 16} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="18" fill="#023047">person</text>

      {/* inward data flow (motion only) */}
      {motion && nodes.map((n, i) => (
        <circle key={`d${i}`} r="4" fill={cyan}>
          <animateMotion dur={`${3.4 + i * 0.3}s`} begin={`${i * 0.45}s`} repeatCount="indefinite">
            <mpath href={`#sp-l${i}-${tone}`} />
          </animateMotion>
        </circle>
      ))}

      <text x="500" y="516" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="15" fill={c.sub} opacity="0.85">
        When they are off, or they leave, it leaves with them.
      </text>
    </svg>
  );
}
