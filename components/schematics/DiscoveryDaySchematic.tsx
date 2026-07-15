'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from './primitives';
import type { Tone } from './primitives';

/**
 * The homepage / Discovery Day hero graphic: a real flow — a free call,
 * then six areas covered in one day on site, then a written plan back in
 * five working days. Built to the same left-to-right flow language as
 * GarmentDecorationSchematic (zone bands, midline flow, converge/diverge)
 * rather than a generic hub-and-spoke, so the six areas read as "all
 * covered in one day" (a grouped zone) instead of implying a sequence.
 *
 * Layout (1240x860): main flow on the midline at y=470. Discovery call on
 * the left, the six-area cluster in the middle (two rows of three, boxed
 * by a dashed zone outline — no individual connectors, since order within
 * the day doesn't matter), written plan on the right. Zone band labels sit
 * in a single row at y=170. Type sized for the ~0.46 render scale inside
 * the hero panel: headline 46, eyebrow/zones 20, node mains 26-27, mono
 * subs 18-19, caption 25.
 */
const ID = 'dd';
const MID = 470;

const areas = [
  { x: 470, y: 350, label: 'IT Infrastructure',    sub: 'security · connectivity' },
  { x: 700, y: 350, label: 'Software & Systems',   sub: 'ERP · MIS' },
  { x: 930, y: 350, label: 'eCommerce & Digital',  sub: 'platform · UX' },
  { x: 470, y: 590, label: 'Processes & Ops',      sub: 'order to invoice' },
  { x: 700, y: 590, label: 'Growth & Opportunity', sub: 'the roadmap' },
  { x: 930, y: 590, label: 'AI Readiness',         sub: 'honest assessment' },
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
    <svg viewBox="0 0 1240 860" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Discovery Day diagram: a free discovery call, followed by one day on site covering six areas — IT infrastructure, software and systems, eCommerce and digital, processes and operations, growth and opportunity, and AI readiness — followed by a written plan delivered within five working days.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">DISCOVERY DAY</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">One call. One day. One clear plan.</text>

      {/* zone bands — single row at y=170 */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="20" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="160" y="170" textAnchor="middle">BEFORE</text>
        <text x="700" y="170" textAnchor="middle">ON SITE — ONE DAY</text>
        <text x="1110" y="170" textAnchor="middle">AFTER</text>
      </g>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* main flow: discovery call -> six-area zone -> written plan */}
      <path id={`${ID}-p-a-${tone}`} className="sch-draw sch-d2" d={`M270 ${MID} H370`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-b-${tone}`} className="sch-draw sch-d3" d={`M1040 ${MID} H1090`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* discovery call node */}
      <GlassNode x={50} y={MID - 60} width={220} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={74} y={MID - 8} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>DISCOVERY</text>
          <text x={74} y={MID + 24} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>CALL</text>
          <text x={74} y={MID + 50} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">free · 60 min</text>
        </g>
      </GlassNode>

      {/* six-area zone — dashed bounding box, no internal connectors (order doesn't matter) */}
      <rect x="370" y="270" width="670" height="400" rx="18" fill="none" stroke={c.line} strokeOpacity="0.28" strokeWidth="1.6" strokeDasharray="7 8" className="sch-fade sch-f2" />

      {areas.map((n, i) => (
        <g key={`n${i}`} className={`sch-fade ${i < 3 ? 'sch-f3' : 'sch-f4'}`}>
          <GlassNode x={n.x - 100} y={n.y - 45} width={200} height={90} tone={tone} idPrefix={ID} accent="cyan">
            <text x={n.x} y={n.y - 6} textAnchor="middle" style={fDisp} fontWeight="600" fontSize="20" fill={c.ink}>{n.label}</text>
            <text x={n.x} y={n.y + 22} textAnchor="middle" style={fMono} fontSize="16" letterSpacing="0.2" fill={c.mono} opacity="0.85">{n.sub}</text>
          </GlassNode>
        </g>
      ))}

      {/* written plan node */}
      <GlassNode x={1060} y={MID - 80} width={150} height={160} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4" textAnchor="middle">
          <text x={1135} y={MID - 30} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>WRITTEN</text>
          <text x={1135} y={MID - 4} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>PLAN</text>
          <text x={1135} y={MID + 38} style={fMono} fontSize="17" fill={AMBER} opacity="0.95">5 working</text>
          <text x={1135} y={MID + 58} style={fMono} fontSize="17" fill={AMBER} opacity="0.95">days</text>
        </g>
      </GlassNode>

      {/* flowing data (motion only) */}
      {motion && (
        <g>
          <circle r="6" fill={CYAN}><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-a-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={AMBER}><animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-b-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="800" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Followed, observed, and quantified — not guessed at.
      </text>
    </svg>
  );
}
