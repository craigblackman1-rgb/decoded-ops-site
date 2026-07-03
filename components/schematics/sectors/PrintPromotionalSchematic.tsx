'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER, SKY,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * The in-house vs drop-ship split, drawn as two clearly separated strata
 * (background bands) rather than tight parallel lanes — this sector's
 * defining fact is that half the width of the diagram belongs to someone
 * else's operation. An order runs through a quote engine (amber — pricing
 * complexity is the pain point), then a routing junction sends it either up
 * into the in-house stratum or down into the supplier stratum, where a
 * dashed line visibly fades to nothing ("visibility ends here"). Both
 * converge into despatch & invoice. Different topology to
 * SignsGraphicsSchematic's tight lane split: here the strata are wide,
 * labelled bands with a real visual gap between them.
 *
 * Layout (1240x860): main path on midline y=450. Order in -> quote engine ->
 * split at x=610 -> in-house stratum band (y=195-375, label top-left inside
 * the band at y=224, node centred below it at y=250-350) and supplier
 * stratum band (y=530-710, label at y=559, node at y=585-685) -> converge
 * into despatch & invoice at x=970-1190, clear of the right canvas edge.
 * Zone labels single row y=170. Type: headline 46, eyebrow/zones 20, node
 * mains 26-28, mono subs 18-20, micro 17-19, caption 25.
 */
const ID = 'pp';

const MID = 450;
const SPLIT_X = 610;
const NODE_X = 700;
const NODE_W = 220;
const TOP_Y = 300;   // in-house node centre (node y 250-350, band label above at y=224)
const BOT_Y = 635;   // supplier node centre (node y 585-685, band label above at y=559)
const CONV_X = 970;

export function PrintPromotionalSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Print and promotional production split schematic: an order runs through a quote engine and a routing junction that sends it either into an in-house production stratum or a supplier drop-ship stratum where visibility fades out, before both converge into despatch and invoicing.">
      <defs>
        <linearGradient id={`${ID}-fade-${tone}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={SKY} stopOpacity="0.7" />
          <stop offset="100%" stopColor={SKY} stopOpacity="0" />
        </linearGradient>
      </defs>
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">SECTOR SCHEMATIC — PRINT &amp; PROMOTIONAL</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Half your production isn&apos;t yours</text>

      {/* zone bands (top row label) */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="20" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="200" y="170" textAnchor="middle">INTAKE</text>
        <text x="1080" y="170" textAnchor="middle">OUT THE DOOR</text>
      </g>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* stratum background bands — labels top-left inside the band, nodes centred below with clear air */}
      <rect x="650" y="195" width="470" height="180" rx="10" fill={tone === 'dark' ? 'rgba(142,202,230,0.06)' : 'rgba(33,158,188,0.05)'} className="sch-fade sch-f2" />
      <text x="668" y="224" style={fMono} fontSize="19" letterSpacing="2" fill={c.mono} opacity="0.55" className="sch-fade sch-f2">IN-HOUSE STRATUM</text>

      <rect x="650" y="530" width="470" height="180" rx="10" fill={tone === 'dark' ? 'rgba(255,183,3,0.06)' : 'rgba(255,183,3,0.05)'} className="sch-fade sch-f2" />
      <text x="668" y="559" style={fMono} fontSize="19" letterSpacing="2" fill={AMBER} opacity="0.6" className="sch-fade sch-f2">SUPPLIER STRATUM</text>

      {/* main path: order -> quote */}
      <path id={`${ID}-p-oq-${tone}`} className="sch-draw sch-d2" d={`M250 ${MID} H320`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      {/* quote -> split */}
      <path id={`${ID}-p-qs-${tone}`} className="sch-draw sch-d2" d={`M550 ${MID} H${SPLIT_X}`} fill="none" stroke={CYAN} strokeWidth="2.5" />
      <circle cx={SPLIT_X} cy={MID} r="7" fill={AMBER} className="sch-fade sch-f3" />

      {/* split -> in-house */}
      <path id={`${ID}-p-si-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 650 380 655 330 ${NODE_X} ${TOP_Y}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      {/* split -> supplier */}
      <path id={`${ID}-p-sp-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 650 520 655 580 ${NODE_X} ${BOT_Y}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* in-house -> converge */}
      <path id={`${ID}-p-ic-${tone}`} className="sch-draw sch-d4" d={`M${NODE_X + NODE_W} ${TOP_Y} C 945 ${TOP_Y} 952 385 ${CONV_X - 4} 418`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      {/* supplier -> converge */}
      <path id={`${ID}-p-pc-${tone}`} className="sch-draw sch-d4" d={`M${NODE_X + NODE_W} ${BOT_Y} C 945 ${BOT_Y} 952 515 ${CONV_X - 4} 482`} fill="none" stroke={AMBER} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* visibility fade-out from the supplier node */}
      <line x1={NODE_X + 30} y1={700} x2={NODE_X + 230} y2={700} stroke={`url(#${ID}-fade-${tone})`} strokeWidth="2.5" strokeDasharray="5 6" className="sch-fade sch-f4" />
      <text x={NODE_X + 30} y={728} style={fMono} fontSize="17" letterSpacing="1" fill={SKY} opacity="0.75" className="sch-fade sch-f4">visibility ends here</text>

      {/* ===== nodes ===== */}
      <GlassNode x={50} y={MID - 60} width={200} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={74} y={MID - 8} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>ORDER IN</text>
          <text x={74} y={MID + 28} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">ecomm · b2b</text>
        </g>
      </GlassNode>

      <GlassNode x={320} y={MID - 60} width={230} height={120} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={344} y={MID - 22} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>QUOTE</text>
          <text x={344} y={MID + 10} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>ENGINE</text>
          <text x={344} y={MID + 42} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">qty breaks · margins</text>
        </g>
      </GlassNode>

      {/* in-house lane node — centred inside its band, clear air below the band label */}
      <GlassNode x={NODE_X} y={TOP_Y - 50} width={NODE_W} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={NODE_X + 20} y={TOP_Y - 6} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>PRINT</text>
          <text x={NODE_X + 20} y={TOP_Y + 28} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">own kit · own schedule</text>
        </g>
      </GlassNode>

      {/* supplier lane node — centred inside its band, clear air below the band label */}
      <GlassNode x={NODE_X} y={BOT_Y - 50} width={NODE_W} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f3">
          <text x={NODE_X + 20} y={BOT_Y - 6} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>DROP-SHIP</text>
          <text x={NODE_X + 20} y={BOT_Y + 28} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">their stock · their lead time</text>
        </g>
      </GlassNode>

      {/* despatch & invoice (converge) — clear of the right canvas edge, short sub */}
      <GlassNode x={CONV_X} y={MID - 65} width={220} height={130} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={CONV_X + 22} y={MID - 20} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>DESPATCH &amp;</text>
          <text x={CONV_X + 22} y={MID + 12} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>INVOICE</text>
          <text x={CONV_X + 22} y={MID + 44} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">two sources in</text>
        </g>
      </GlassNode>

      {motion && (
        <g>
          <circle r="6" fill={CYAN}><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-oq-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2.6s" begin="1.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-qs-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.4s" begin="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-si-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={AMBER}><animateMotion dur="3.6s" begin="3s" repeatCount="indefinite"><mpath href={`#${ID}-p-sp-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.4s" begin="4.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-ic-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={AMBER}><animateMotion dur="3.6s" begin="4.8s" repeatCount="indefinite"><mpath href={`#${ID}-p-pc-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        When a supplier runs the job, your promise to the customer rides on their schedule.
      </text>
    </svg>
  );
}
