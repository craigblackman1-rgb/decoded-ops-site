'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode, MonoLabel,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * The garment decoration production flow as a real routing diagram: one
 * order splits across three decoration methods, each with its own lead
 * time, before converging back into a single despatch. The artwork
 * sign-off loop — the sector's biggest source of delay — is drawn as a
 * literal loop-back arc. Built on the shared schematic primitives, matching
 * the visual language of ThreeLayerSchematic / SinglePointSchematic.
 *
 * Layout (1240x860): main flow on a horizontal midline at y=470 (~55%).
 * The method split fans into three lanes on the right third, lane centres
 * at y=300 / 470 / 640 (170px apart), converging into QC & Despatch at the
 * far right on the midline. Zone band labels sit in a single row at y=170;
 * the topmost node edge is y=250. Type is sized for the ~0.46 render scale
 * inside the hero panel: headline 46, eyebrow/zones 20, node mains 26-28,
 * mono subs 19, micro labels 19, caption 25.
 */
const ID = 'gd';

// Geometry — midline + lane grid
const MID = 470;        // main flow centreline (~55% of 860)
const LANE_TOP = 300;   // embroidery lane centre
const LANE_BOT = 640;   // screen print lane centre
const SPLIT_X = 810;    // split junction x
const LANE_X = 830;     // lane node left edge
const LANE_W = 200;     // lane node width
const QC_X = 1060;      // QC node left edge

export function GarmentDecorationSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Garment decoration production flow: an order moves from intake through artwork sign-off and blank sourcing, splits across embroidery, DTG and screen print — each with a different lead time — then converges into quality control and despatch.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">SECTOR SCHEMATIC — GARMENT DECORATION</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">One order, three production realities</text>

      {/* zone bands — single row at y=170; topmost node edge is y=250, no collisions */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="20" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="150" y="170" textAnchor="middle">FRONT OF HOUSE</text>
        <text x="410" y="170" textAnchor="middle">STUDIO</text>
        <text x="930" y="170" textAnchor="middle">PRODUCTION</text>
        <text x="1130" y="170" textAnchor="middle">OUT THE DOOR</text>
      </g>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* ===== main path on the midline: order -> artwork -> blank sourcing -> split ===== */}
      <path id={`${ID}-p-oa-${tone}`} className="sch-draw sch-d2" d={`M250 ${MID} H300`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-ab-${tone}`} className="sch-draw sch-d2" d={`M520 ${MID} H570`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-bs-${tone}`} className="sch-draw sch-d3" d={`M790 ${MID} H${SPLIT_X}`} fill="none" stroke={CYAN} strokeWidth="2.5" />

      {/* split junction */}
      <circle cx={SPLIT_X} cy={MID} r="7" fill={AMBER} className="sch-fade sch-f3" />

      {/* split -> lanes (fan out) */}
      <path id={`${ID}-p-se-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 822 380 820 340 ${LANE_X} ${LANE_TOP}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-sd-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} H${LANE_X}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-sp-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 822 560 820 600 ${LANE_X} ${LANE_BOT}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* lanes -> QC & despatch (converge) */}
      <path id={`${ID}-p-eq-${tone}`} className="sch-draw sch-d4" d={`M${LANE_X + LANE_W} ${LANE_TOP} C 1050 ${LANE_TOP} 1052 400 ${QC_X} 438`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-dq-${tone}`} className="sch-draw sch-d4" d={`M${LANE_X + LANE_W} ${MID} H${QC_X}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-pq-${tone}`} className="sch-draw sch-d4" d={`M${LANE_X + LANE_W} ${LANE_BOT} C 1050 ${LANE_BOT} 1052 540 ${QC_X} 502`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* artwork sign-off loop — arc above the approval node, clear of the zone band */}
      <path id={`${ID}-p-loop-${tone}`} className="sch-draw sch-d3" d="M340 410 C 310 280 490 280 460 410" fill="none" stroke={AMBER} strokeWidth="2.5" strokeDasharray="6 7" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      <text x="400" y="270" textAnchor="middle" style={fMono} fontSize="19" letterSpacing="1.5" fill={AMBER} opacity="0.9" className="sch-fade sch-f3">THE SIGN-OFF LOOP</text>

      {/* ===== nodes ===== */}
      {/* order in (on the midline) */}
      <GlassNode x={50} y={MID - 60} width={200} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={74} y={MID - 8} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>ORDER IN</text>
          <text x={74} y={MID + 28} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">ecomm · b2b</text>
        </g>
      </GlassNode>

      {/* artwork approval (on the midline) */}
      <GlassNode x={300} y={MID - 60} width={220} height={120} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={324} y={MID - 22} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>ARTWORK</text>
          <text x={324} y={MID + 10} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>APPROVAL</text>
          <text x={324} y={MID + 42} style={fMono} fontSize="19" fill={AMBER} opacity="0.9">sign-off loop</text>
        </g>
      </GlassNode>

      {/* blank sourcing (on the midline) */}
      <GlassNode x={570} y={MID - 60} width={220} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={594} y={MID - 22} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>BLANK</text>
          <text x={594} y={MID + 10} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>SOURCING</text>
          <text x={594} y={MID + 42} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">stock · supplier</text>
        </g>
      </GlassNode>

      {/* embroidery lane (top) */}
      <GlassNode x={LANE_X} y={LANE_TOP - 50} width={LANE_W} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 20} y={LANE_TOP - 6} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>EMBROIDERY</text>
          <text x={LANE_X + 20} y={LANE_TOP + 28} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">digitise · hoop</text>
        </g>
      </GlassNode>
      <MonoLabel x={LANE_X + LANE_W / 2} y={LANE_TOP - 72} tone={tone} size={19} color={c.mono} anchor="middle">2–3 DAYS</MonoLabel>

      {/* DTG lane (middle, on the midline) */}
      <GlassNode x={LANE_X} y={MID - 50} width={LANE_W} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 20} y={MID - 6} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>DTG</text>
          <text x={LANE_X + 20} y={MID + 28} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">pretreat · cure</text>
        </g>
      </GlassNode>
      <MonoLabel x={LANE_X + LANE_W / 2} y={MID - 72} tone={tone} size={19} color={AMBER} anchor="middle">SAME DAY</MonoLabel>

      {/* screen print lane (bottom) */}
      <GlassNode x={LANE_X} y={LANE_BOT - 50} width={LANE_W} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 14} y={LANE_BOT - 6} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>SCREEN PRINT</text>
          <text x={LANE_X + 14} y={LANE_BOT + 28} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">seps · screens</text>
        </g>
      </GlassNode>
      <MonoLabel x={LANE_X + LANE_W / 2} y={LANE_BOT - 72} tone={tone} size={19} color={c.mono} anchor="middle">4–5 DAYS</MonoLabel>

      {/* QC & despatch (far right, on the midline) */}
      <GlassNode x={QC_X} y={MID - 60} width={170} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={QC_X + 22} y={MID - 22} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>QC &amp;</text>
          <text x={QC_X + 22} y={MID + 10} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>DESPATCH</text>
          <text x={QC_X + 22} y={MID + 42} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">ship confirm</text>
        </g>
      </GlassNode>

      {/* flowing data (motion only) */}
      {motion && (
        <g>
          <circle r="6" fill={CYAN}><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-oa-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2.6s" begin="1.3s" repeatCount="indefinite"><mpath href={`#${ID}-p-ab-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2.6s" begin="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-bs-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.4s" begin="3.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-sd-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="4.2s" begin="3.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-se-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="4.6s" begin="4s" repeatCount="indefinite"><mpath href={`#${ID}-p-sp-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.6s" begin="6.5s" repeatCount="indefinite"><mpath href={`#${ID}-p-dq-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="4.2s" begin="7s" repeatCount="indefinite"><mpath href={`#${ID}-p-eq-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="4.4s" begin="7.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-pq-${tone}`} /></animateMotion></circle>
          <circle r="6.5" fill={AMBER}><animateMotion dur="6s" repeatCount="indefinite"><mpath href={`#${ID}-p-loop-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Each method has its own logic. Your systems should know the difference.
      </text>
    </svg>
  );
}
