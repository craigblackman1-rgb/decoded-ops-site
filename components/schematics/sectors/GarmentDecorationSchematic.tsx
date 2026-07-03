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
 * Layout: main flow runs on a horizontal midline at y=396 (~55% of the
 * 720px canvas). The method split fans into three lanes on the right
 * third, lane centres at y=270 / 396 / 522 (126px apart), converging
 * into QC & Despatch at the far right on the midline. Zone band labels
 * sit in a single row at y=140; the topmost node edge is y=235, so
 * labels never collide with nodes.
 */
const ID = 'gd';

// Geometry — midline + lane grid
const MID = 396;        // main flow centreline (~55% of 720)
const LANE_TOP = 270;   // embroidery lane centre
const LANE_BOT = 522;   // screen print lane centre
const SPLIT_X = 800;    // split junction x
const LANE_X = 830;     // lane node left edge
const LANE_W = 170;     // lane node width
const QC_X = 1050;      // QC node left edge

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
    <svg viewBox="0 0 1240 720" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Garment decoration production flow: an order moves from intake through artwork sign-off and blank sourcing, splits across embroidery, DTG and screen print — each with a different lead time — then converges into quality control and despatch.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="720" rx="16" fill={c.bg} />
      <rect width="1240" height="720" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="60" style={fMono} fontSize="13" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">SECTOR SCHEMATIC — GARMENT DECORATION</text>
      <text x="60" y="98" style={fDisp} fontWeight="800" fontSize="30" fill={c.ink} className="sch-fade sch-f1">One order, three production realities</text>

      {/* zone bands — single row at y=140; topmost node edge is y=235, no collisions */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="11" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="140" y="140" textAnchor="middle">FRONT OF HOUSE</text>
        <text x="415" y="140" textAnchor="middle">STUDIO</text>
        <text x="915" y="140" textAnchor="middle">PRODUCTION</text>
        <text x="1130" y="140" textAnchor="middle">OUT THE DOOR</text>
      </g>
      <line x1="60" y1="152" x2="1180" y2="152" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* ===== main path on the midline: order -> artwork -> blank sourcing -> split ===== */}
      <path id={`${ID}-p-oa-${tone}`} className="sch-draw sch-d2" d={`M230 ${MID} H310`} fill="none" stroke={CYAN} strokeWidth="2" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-ab-${tone}`} className="sch-draw sch-d2" d={`M520 ${MID} H600`} fill="none" stroke={CYAN} strokeWidth="2" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-bs-${tone}`} className="sch-draw sch-d3" d={`M780 ${MID} H${SPLIT_X}`} fill="none" stroke={CYAN} strokeWidth="2" />

      {/* split junction */}
      <circle cx={SPLIT_X} cy={MID} r="5" fill={AMBER} className="sch-fade sch-f3" />

      {/* split -> lanes (fan out) */}
      <path id={`${ID}-p-se-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 812 330 812 295 ${LANE_X} ${LANE_TOP}`} fill="none" stroke={CYAN} strokeWidth="1.8" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-sd-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} H${LANE_X}`} fill="none" stroke={CYAN} strokeWidth="1.8" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-sp-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 812 462 812 497 ${LANE_X} ${LANE_BOT}`} fill="none" stroke={CYAN} strokeWidth="1.8" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* lanes -> QC & despatch (converge) */}
      <path id={`${ID}-p-eq-${tone}`} className="sch-draw sch-d4" d={`M${LANE_X + LANE_W} ${LANE_TOP} C 1032 ${LANE_TOP} 1035 340 ${QC_X} 376`} fill="none" stroke={CYAN} strokeWidth="1.8" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-dq-${tone}`} className="sch-draw sch-d4" d={`M${LANE_X + LANE_W} ${MID} H${QC_X}`} fill="none" stroke={CYAN} strokeWidth="1.8" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-pq-${tone}`} className="sch-draw sch-d4" d={`M${LANE_X + LANE_W} ${LANE_BOT} C 1032 ${LANE_BOT} 1035 452 ${QC_X} 416`} fill="none" stroke={CYAN} strokeWidth="1.8" strokeOpacity="0.8" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* artwork sign-off loop — arc above the approval node, clear of the zone band */}
      <path id={`${ID}-p-loop-${tone}`} className="sch-draw sch-d3" d="M360 351 C 330 252 500 252 470 351" fill="none" stroke={AMBER} strokeWidth="2" strokeDasharray="5 6" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      <text x="415" y="248" textAnchor="middle" style={fMono} fontSize="11.5" letterSpacing="1.5" fill={AMBER} opacity="0.9" className="sch-fade sch-f3">THE SIGN-OFF LOOP</text>

      {/* ===== nodes ===== */}
      {/* order in (on the midline) */}
      <GlassNode x={50} y={MID - 45} width={180} height={90} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={70} y={MID - 5} style={fDisp} fontWeight="700" fontSize="17" fill={c.ink}>ORDER IN</text>
          <text x={70} y={MID + 17} style={fMono} fontSize="11" fill={c.mono} opacity="0.85">ecommerce · b2b · email</text>
        </g>
      </GlassNode>

      {/* artwork approval (on the midline) */}
      <GlassNode x={310} y={MID - 45} width={210} height={90} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={330} y={MID - 10} style={fDisp} fontWeight="700" fontSize="16.5" fill={c.ink}>ARTWORK APPROVAL</text>
          <text x={330} y={MID + 13} style={fMono} fontSize="11" fill={AMBER} opacity="0.9">sign-off · revisions · reply</text>
          <text x={330} y={MID + 33} style={fMono} fontSize="11" fill={c.mono} opacity="0.7">the biggest source of delay</text>
        </g>
      </GlassNode>

      {/* blank sourcing (on the midline) */}
      <GlassNode x={600} y={MID - 45} width={180} height={90} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={620} y={MID - 5} style={fDisp} fontWeight="700" fontSize="16.5" fill={c.ink}>BLANK SOURCING</text>
          <text x={620} y={MID + 17} style={fMono} fontSize="11" fill={c.mono} opacity="0.85">stock check · supplier</text>
        </g>
      </GlassNode>

      {/* embroidery lane (top) */}
      <GlassNode x={LANE_X} y={LANE_TOP - 35} width={LANE_W} height={70} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 16} y={LANE_TOP - 5} style={fDisp} fontWeight="700" fontSize="15" fill={c.ink}>EMBROIDERY</text>
          <text x={LANE_X + 16} y={LANE_TOP + 15} style={fMono} fontSize="10.5" fill={c.mono} opacity="0.85">digitise · hooping</text>
        </g>
      </GlassNode>
      <MonoLabel x={LANE_X + LANE_W / 2} y={LANE_TOP - 50} tone={tone} size={11} color={c.mono} anchor="middle">2–3 DAYS</MonoLabel>

      {/* DTG lane (middle, on the midline) */}
      <GlassNode x={LANE_X} y={MID - 35} width={LANE_W} height={70} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 16} y={MID - 5} style={fDisp} fontWeight="700" fontSize="15" fill={c.ink}>DTG</text>
          <text x={LANE_X + 16} y={MID + 15} style={fMono} fontSize="10.5" fill={c.mono} opacity="0.85">pretreat · cure</text>
        </g>
      </GlassNode>
      <MonoLabel x={LANE_X + LANE_W / 2} y={MID - 50} tone={tone} size={11} color={AMBER} anchor="middle">SAME DAY</MonoLabel>

      {/* screen print lane (bottom) */}
      <GlassNode x={LANE_X} y={LANE_BOT - 35} width={LANE_W} height={70} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 16} y={LANE_BOT - 5} style={fDisp} fontWeight="700" fontSize="15" fill={c.ink}>SCREEN PRINT</text>
          <text x={LANE_X + 16} y={LANE_BOT + 15} style={fMono} fontSize="10.5" fill={c.mono} opacity="0.85">separations · screens</text>
        </g>
      </GlassNode>
      <MonoLabel x={LANE_X + LANE_W / 2} y={LANE_BOT - 50} tone={tone} size={11} color={c.mono} anchor="middle">4–5 DAYS</MonoLabel>

      {/* QC & despatch (far right, on the midline) */}
      <GlassNode x={QC_X} y={MID - 45} width={160} height={90} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={QC_X + 18} y={MID - 7} style={fDisp} fontWeight="700" fontSize="15.5" fill={c.ink}>QC &amp; DESPATCH</text>
          <text x={QC_X + 18} y={MID + 15} style={fMono} fontSize="10.5" fill={c.mono} opacity="0.85">ship confirm</text>
        </g>
      </GlassNode>

      {/* flowing data (motion only) */}
      {motion && (
        <g>
          <circle r="4" fill={CYAN}><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-oa-${tone}`} /></animateMotion></circle>
          <circle r="4" fill={CYAN}><animateMotion dur="2.6s" begin="1.3s" repeatCount="indefinite"><mpath href={`#${ID}-p-ab-${tone}`} /></animateMotion></circle>
          <circle r="4" fill={CYAN}><animateMotion dur="2.6s" begin="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-bs-${tone}`} /></animateMotion></circle>
          <circle r="3.5" fill={CYAN}><animateMotion dur="3.4s" begin="3.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-sd-${tone}`} /></animateMotion></circle>
          <circle r="3.5" fill={CYAN}><animateMotion dur="4.2s" begin="3.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-se-${tone}`} /></animateMotion></circle>
          <circle r="3.5" fill={CYAN}><animateMotion dur="4.6s" begin="4s" repeatCount="indefinite"><mpath href={`#${ID}-p-sp-${tone}`} /></animateMotion></circle>
          <circle r="3.5" fill={CYAN}><animateMotion dur="3.6s" begin="6.5s" repeatCount="indefinite"><mpath href={`#${ID}-p-dq-${tone}`} /></animateMotion></circle>
          <circle r="3.5" fill={CYAN}><animateMotion dur="4.2s" begin="7s" repeatCount="indefinite"><mpath href={`#${ID}-p-eq-${tone}`} /></animateMotion></circle>
          <circle r="3.5" fill={CYAN}><animateMotion dur="4.4s" begin="7.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-pq-${tone}`} /></animateMotion></circle>
          <circle r="4.5" fill={AMBER}><animateMotion dur="6s" repeatCount="indefinite"><mpath href={`#${ID}-p-loop-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="682" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="15" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Each method has its own logic. Your systems should know the difference.
      </text>
    </svg>
  );
}
