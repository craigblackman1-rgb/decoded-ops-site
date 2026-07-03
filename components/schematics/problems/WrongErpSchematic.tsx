'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "Forced fit" — three small, irregularly-shaped cyan process chips (your
 * actual business) on the left, a large rigid ERP box drawn as a strict
 * grid with fixed slots on the right. Dashed amber mapping lines run from
 * each chip toward a slot, bending or missing outright; one chip is left
 * unconnected. Built on the shared schematic primitives, matching
 * ManualWorkaroundsSchematic / GarmentDecorationSchematic.
 *
 * Layout (1240x860): YOUR BUSINESS column at x=90-380, three chips at
 * varied y (220, 420, 620) with varied heights to read as "not a template".
 * ERP grid box at x=680-1150, y=200-680, subdivided into a 3-row grid with
 * mono slot labels. Mapping lines run left-to-right in the gutter x=380-680,
 * each bending toward/away from its slot; the unmatched chip's line stops
 * short with an amber X and annotation. Type at ~0.46 render scale:
 * headline 46, eyebrow/zones 20, node mains 24-28, mono subs 18-19,
 * annotations 17-18, caption 25.
 */
const ID = 'wes';

const CHIP_X = 90;
const CHIP_W = 260;
const ERP_X = 700;
const ERP_W = 450;
const ERP_Y = 210;
const ERP_H = 480;
const SLOT_H = ERP_H / 3;

export function WrongErpSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Forced-fit diagram: three differently shaped business process chips on the left try to map onto a rigid, gridded ERP template on the right — the mapping lines bend and miss, and one process has no matching slot at all.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — FORCED FIT</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">The software fits someone. Not you</text>

      {/* zone labels */}
      <text x={CHIP_X + CHIP_W / 2} y="170" textAnchor="middle" style={fMono} fontSize="20" letterSpacing="3" fill={c.mono} opacity="0.65" className="sch-fade sch-f1">YOUR BUSINESS</text>
      <text x={ERP_X + ERP_W / 2} y="170" textAnchor="middle" style={fMono} fontSize="20" letterSpacing="3" fill={c.mono} opacity="0.65" className="sch-fade sch-f1">THE ERP TEMPLATE</text>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* ERP rigid grid box */}
      <g className="sch-fade sch-f2">
        <rect x={ERP_X} y={ERP_Y} width={ERP_W} height={ERP_H} rx="6" fill="none" stroke={c.grid} strokeWidth="2" />
        <line x1={ERP_X} y1={ERP_Y + SLOT_H} x2={ERP_X + ERP_W} y2={ERP_Y + SLOT_H} stroke={c.grid} strokeWidth="1.4" />
        <line x1={ERP_X} y1={ERP_Y + SLOT_H * 2} x2={ERP_X + ERP_W} y2={ERP_Y + SLOT_H * 2} stroke={c.grid} strokeWidth="1.4" />
        <line x1={ERP_X + ERP_W / 2} y1={ERP_Y} x2={ERP_X + ERP_W / 2} y2={ERP_Y + ERP_H} stroke={c.grid} strokeWidth="1" strokeOpacity="0.5" />
      </g>
      <text x={ERP_X + 18} y={ERP_Y - 14} style={fMono} fontSize="18" fill={c.mono} opacity="0.7" className="sch-fade sch-f2">the template it shipped with</text>

      {/* slot labels */}
      <g className="sch-fade sch-f2" style={fMono} fontSize="18" fill={c.mono} opacity="0.75">
        <text x={ERP_X + 22} y={ERP_Y + SLOT_H / 2 + 6}>SLOT: STANDARD ORDER</text>
        <text x={ERP_X + 22} y={ERP_Y + SLOT_H + SLOT_H / 2 + 6}>SLOT: SINGLE SHIPMENT</text>
        <text x={ERP_X + 22} y={ERP_Y + SLOT_H * 2 + SLOT_H / 2 + 6}>SLOT: LIST PRICE</text>
      </g>

      {/* business process chips — varied shapes/positions to read as "not a template" */}
      <GlassNode x={CHIP_X} y={222} width={CHIP_W} height={96} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={CHIP_X + 22} y={264} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>DECORATED</text>
          <text x={CHIP_X + 22} y={292} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>ORDERS</text>
        </g>
      </GlassNode>
      <GlassNode x={CHIP_X - 20} y={414} width={CHIP_W + 40} height={80} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={CHIP_X + 2} y={450} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>PART-</text>
          <text x={CHIP_X + 2} y={478} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>SHIPMENTS</text>
        </g>
      </GlassNode>
      <GlassNode x={CHIP_X + 10} y={606} width={CHIP_W - 20} height={110} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={CHIP_X + 32} y={652} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>CONTRACT</text>
          <text x={CHIP_X + 32} y={680} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>PRICING</text>
          <text x={CHIP_X + 32} y={704} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">no home for this</text>
        </g>
      </GlassNode>

      {/* mapping lines — bend, miss, or stop short */}
      <g className="sch-fade sch-f3" fill="none" strokeWidth="2.4" strokeDasharray="7 6">
        {/* decorated orders -> standard order slot: bends off-target */}
        <path d={`M${CHIP_X + CHIP_W} 270 C 480 250, 560 265, ${ERP_X} 268`} stroke={AMBER} />
        {/* part-shipments -> single shipment slot: bends the other way */}
        <path d={`M${CHIP_X + CHIP_W + 20} 454 C 520 420, 600 428, ${ERP_X} 425`} stroke={AMBER} />
        {/* contract pricing -> nothing: stops short with an X */}
        <path d={`M${CHIP_X + CHIP_W - 10} 660 C 480 650, 520 650, 560 655`} stroke={AMBER} />
      </g>
      <g transform="translate(560, 655)" className="sch-fade sch-f3">
        <circle r="11" fill={tone === 'dark' ? '#04314a' : '#ffffff'} stroke={AMBER} strokeWidth="1.6" />
        <path d="M-4.5 -4.5 L4.5 4.5 M4.5 -4.5 L-4.5 4.5" stroke={AMBER} strokeWidth="2.2" strokeLinecap="round" />
      </g>

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        A system built for a template business meets a business that isn&apos;t one.
      </text>
    </svg>
  );
}
