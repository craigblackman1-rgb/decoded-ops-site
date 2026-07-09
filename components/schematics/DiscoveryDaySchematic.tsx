'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from './primitives';
import type { Tone } from './primitives';

/**
 * The homepage hero graphic: six audit areas converging into one written
 * plan in a single day on site. Same hub-and-spoke geometry as
 * SinglePointSchematic (proven layout), reframed positively — the six
 * areas aren't a risk converging on one person, they're what gets covered
 * in the Discovery Day and what comes back out as one clear plan.
 *
 * Layout (1100x840): six chips in a hexagonal ring around the centre hub
 * at (550, 460). Type sized for the ~0.5 render scale inside the hero
 * panel: headline 44, eyebrow 20, chip mains 26, mono subs 18, pill 18.
 */
const ID = 'dd';
const CX = 550, CY = 460;

const areas = [
  { x: 945, y: 460, label: 'IT Infrastructure',  sub: 'security · connectivity' },
  { x: 740, y: 690, label: 'Software & Systems', sub: 'ERP · MIS' },
  { x: 360, y: 690, label: 'eCommerce & Digital', sub: 'platform · UX' },
  { x: 155, y: 460, label: 'Processes & Ops',    sub: 'order to invoice' },
  { x: 360, y: 240, label: 'Growth & Opportunity', sub: 'the roadmap' },
  { x: 740, y: 240, label: 'AI Readiness',       sub: 'honest assessment' },
];

export function DiscoveryDaySchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const c = schematicPalette(tone);

  return (
    <svg viewBox="0 0 1100 840" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Discovery Day diagram: six audit areas — IT infrastructure, software and systems, eCommerce and digital, processes and operations, growth and opportunity, and AI readiness — all covered in one day on site and converging into a single written plan.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1100" height="840" rx="16" fill={c.bg} />
      <rect width="1100" height="840" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1100" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">DISCOVERY DAY</text>
      <text x="60" y="116" style={fDisp} fontWeight="800" fontSize="44" fill={c.ink} className="sch-fade sch-f1">One day. Six areas. One clear plan.</text>

      {/* converging connectors — six areas feeding into the written plan */}
      {areas.map((n, i) => (
        <path key={`l${i}`} id={`${ID}-l${i}-${tone}`}
          className="sch-draw sch-d3"
          d={`M${n.x} ${n.y} Q ${(n.x + CX) / 2} ${(n.y + CY) / 2 + (n.y < CY ? -22 : 22)} ${CX} ${CY}`}
          fill="none" stroke={c.line} strokeWidth="2.2" strokeOpacity="0.6" markerEnd={`url(#${ID}-ah-${tone})`} />
      ))}

      {/* six audit-area nodes */}
      {areas.map((n, i) => (
        <g key={`n${i}`} className={`sch-fade ${i % 2 === 0 ? 'sch-f2' : 'sch-f3'}`}>
          <GlassNode x={n.x - 130} y={n.y - 50} width={260} height={100} tone={tone} idPrefix={ID} accent="cyan">
            <text x={n.x} y={n.y - 8} textAnchor="middle" style={fDisp} fontWeight="600" fontSize="26" fill={c.ink}>{n.label}</text>
            <text x={n.x} y={n.y + 26} textAnchor="middle" style={fMono} fontSize="18" letterSpacing="0.3" fill={c.mono} opacity="0.85">{n.sub}</text>
          </GlassNode>
        </g>
      ))}

      {/* centre: the written plan */}
      <g className="sch-fade sch-f4">
        <circle cx={CX} cy={CY} r="100" className="sch-halo" fill={AMBER} />
        <circle cx={CX} cy={CY} r="80" fill={AMBER} />
        <circle cx={CX} cy={CY} r="80" fill="none" stroke="#023047" strokeOpacity="0.22" strokeWidth="1.6" />
        <circle cx={CX} cy={CY} r="64" fill="none" stroke="#023047" strokeOpacity="0.14" strokeWidth="1" />
        <text x={CX} y={CY - 8} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="26" fill="#023047">DECODED</text>
        <text x={CX} y={CY + 22} textAnchor="middle" style={fDisp} fontWeight="800" fontSize="26" fill="#023047">OPS</text>

        {/* status pill */}
        <rect x={CX - 215} y={CY + 110} width="430" height="44" rx="22" fill={c.bg} stroke={AMBER} strokeWidth="1.4" />
        <text x={CX} y={CY + 138} textAnchor="middle" style={fMono} fontSize="18" letterSpacing="1.5" fill={AMBER}>WRITTEN PLAN · 5 WORKING DAYS</text>
      </g>

      {/* inward data flow (motion only) */}
      {motion && areas.map((n, i) => (
        <circle key={`d${i}`} r="6" fill={CYAN}>
          <animateMotion dur={`${3.4 + i * 0.3}s`} begin={`${i * 0.45}s`} repeatCount="indefinite">
            <mpath href={`#${ID}-l${i}-${tone}`} />
          </animateMotion>
        </circle>
      ))}

      <text x="550" y="800" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Followed, observed, and quantified — not guessed at.
      </text>
    </svg>
  );
}
