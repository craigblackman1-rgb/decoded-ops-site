'use client';

import { useEffect, useState } from 'react';

/**
 * Systems either disconnected (broken wiring, manual re-entry) or connected
 * (wired to a central hub with data flowing). Schematic/blueprint language,
 * light + dark, reduced-motion aware, no emojis. Same `connected` prop.
 */
interface Props { connected?: boolean; variant?: 'light' | 'dark' }

const fDisp = { fontFamily: 'var(--font-outfit), Outfit, sans-serif' } as const;
const fBody = { fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' } as const;
const fMono = { fontFamily: 'ui-monospace, "JetBrains Mono", monospace' } as const;

const CX = 360, CY = 263;
const systems = [
  { x: 540, y: 236, label: 'eCommerce' },
  { x: 410, y: 386, label: 'Accounts' },
  { x: 160, y: 386, label: 'Despatch' },
  { x: 30, y: 236, label: 'Orders' },
  { x: 160, y: 86, label: 'Production' },
  { x: 410, y: 86, label: 'ERP / MIS' },
];
const NW = 150, NH = 54;

export function SystemsDisconnectedGraphic({ connected = false, variant = 'light' }: Props) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const dark = variant === 'dark';
  const c = dark
    ? { bg: '#023047', grid: '#0a3d5c', gridOp: 0.5, ink: '#F8F9FA', sub: '#8ECAE6', node: '#04314a', stroke: 'rgba(142,202,230,0.4)' }
    : { bg: '#F8F9FA', grid: '#d2e3ec', gridOp: 1, ink: '#023047', sub: '#3A5F74', node: '#ffffff', stroke: 'rgba(2,48,71,0.16)' };
  const cyan = '#219EBC', amber = '#FFB703';
  const cxy = (n: { x: number; y: number }) => ({ x: n.x + NW / 2, y: n.y + NH / 2 });

  return (
    <svg viewBox="0 0 720 480" className="w-full" style={{ height: 'auto' }}
      role="img" aria-label={connected ? 'Six business systems wired to a central hub with data flowing between them.' : 'Six business systems that do not talk to each other, bridged by manual re-entry.'}>
      <defs>
        <pattern id={`sd-grid-${variant}-${connected}`} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke={c.grid} strokeWidth="0.6" />
        </pattern>
        <marker id={`sd-ah-${variant}-${connected}`} markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={cyan} />
        </marker>
      </defs>

      <rect width="720" height="480" rx="16" fill={c.bg} />
      <rect width="720" height="480" rx="16" fill={`url(#sd-grid-${variant}-${connected})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="720" height="5" fill={connected ? cyan : amber} />

      <text x="28" y="34" style={fMono} fontSize="13" letterSpacing="2" fill={connected ? cyan : amber}>
        {connected ? 'CONNECTED SYSTEMS' : 'DISCONNECTED SYSTEMS'}
      </text>

      {/* wiring */}
      {connected
        ? systems.map((s, i) => {
            const a = cxy(s);
            const id = `sd-w-${variant}-${i}`;
            return (
              <g key={`w${i}`}>
                <line id={id} x1={a.x} y1={a.y} x2={CX} y2={CY} stroke={cyan} strokeWidth="2" strokeOpacity="0.65" />
                {motion && <circle r="3.5" fill={amber}><animateMotion dur={`${3 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount="indefinite"><mpath href={`#${id}`} /></animateMotion></circle>}
              </g>
            );
          })
        : systems.map((s, i) => {
            const a = cxy(s);
            const b = cxy(systems[(i + 1) % systems.length]);
            const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
            return (
              <g key={`b${i}`}>
                <line x1={a.x} y1={a.y} x2={mx - 10} y2={my - 10} stroke={c.sub} strokeWidth="1.6" strokeDasharray="5 5" strokeOpacity="0.45" />
                <line x1={mx + 10} y1={my + 10} x2={b.x} y2={b.y} stroke={c.sub} strokeWidth="1.6" strokeDasharray="5 5" strokeOpacity="0.45" />
                <line x1={mx - 7} y1={my - 7} x2={mx + 7} y2={my + 7} stroke={amber} strokeWidth="2.5" />
                <line x1={mx + 7} y1={my - 7} x2={mx - 7} y2={my + 7} stroke={amber} strokeWidth="2.5" />
              </g>
            );
          })}

      {/* centre */}
      {connected ? (
        <g>
          <circle cx={CX} cy={CY} r="44" className="sch-halo" fill={cyan} />
          <circle cx={CX} cy={CY} r="38" fill="#023047" />
          <text x={CX} y={CY - 2} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="15" fill="#F8F9FA">Decoded</text>
          <text x={CX} y={CY + 16} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="15" fill={cyan}>Ops</text>
        </g>
      ) : (
        <text x={CX} y={CY + 5} textAnchor="middle" style={fBody} fontStyle="italic" fontSize="17" fill={c.sub} opacity="0.8">manual re-entry</text>
      )}

      {/* system nodes */}
      {systems.map((s, i) => (
        <g key={`n${i}`}>
          <rect x={s.x} y={s.y} width={NW} height={NH} rx="10" fill={c.node} stroke={connected ? cyan : c.stroke} strokeWidth={connected ? 1.6 : 1.4} strokeOpacity={connected ? 0.7 : 1} />
          <text x={s.x + NW / 2} y={s.y + NH / 2 + 6} textAnchor="middle" style={fDisp} fontWeight="700" fontSize="18" fill={c.ink}>{s.label}</text>
        </g>
      ))}

      <text x="360" y="462" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="16" fill={c.sub} opacity="0.8">
        {connected ? 'One source of truth. Data flows once, everywhere.' : 'Every gap is a spreadsheet, a re-key, and a chance to be wrong.'}
      </text>
    </svg>
  );
}
