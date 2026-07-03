'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode, BrokenLink,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "The second system" — the official ERP/MIS is wired to Orders, Stock and
 * Invoicing by broken links (paths that don't actually work), while a shadow
 * layer of spreadsheets, an Access database and a paper notebook carries the
 * same feeds via solid amber bypass routes that dodge the official system
 * entirely. The punchline, drawn literally: data actually flows through the
 * shadow system, not the one that was paid for. Built on the shared
 * schematic primitives, matching ThreeLayerSchematic / SinglePointSchematic.
 *
 * Layout (1240x860): official stratum (feeders y=190-270, ERP y=360-490),
 * shadow stratum (nodes y=630-760). Bypass routes run through the gutters
 * at x~220 (left), x~390-430 (around the ERP's left edge) and x~930-1010
 * (right), clear of every text block. Type is sized for the ~0.46 render
 * scale inside the hero panel: headline 46, eyebrow/zones 20, node mains
 * 26-30, mono subs 19-20, annotation 19, caption 25.
 */
const ID = 'mw';

export function ManualWorkaroundsSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Shadow systems diagram: the official ERP is connected to Orders, Stock and Invoicing by broken links that don't work, while a spreadsheet, an Access database and a paper notebook carry the real data through bypass routes that avoid the official system.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — SHADOW SYSTEMS</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">The second system your team built</text>

      {/* zone: official system */}
      <text x="620" y="164" textAnchor="middle" style={fMono} fontSize="20" letterSpacing="3" fill={c.mono} opacity="0.65" className="sch-fade sch-f1">THE OFFICIAL SYSTEM</text>
      <line x1="60" y1="176" x2="1180" y2="176" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* broken links: feeders -> ERP */}
      <g className="sch-fade sch-f2">
        <BrokenLink x1={230} y1={270} x2={520} y2={360} tone={tone} />
        <BrokenLink x1={620} y1={270} x2={620} y2={360} tone={tone} />
        <BrokenLink x1={1010} y1={270} x2={720} y2={360} tone={tone} />
      </g>

      {/* feeder nodes */}
      <GlassNode x={120} y={190} width={220} height={80} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={146} y={250} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>ORDERS</text>
        </g>
      </GlassNode>
      <GlassNode x={510} y={190} width={220} height={80} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={536} y={250} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>STOCK</text>
        </g>
      </GlassNode>
      <GlassNode x={900} y={190} width={220} height={80} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={926} y={250} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>INVOICING</text>
        </g>
      </GlassNode>

      {/* ERP / MIS */}
      <GlassNode x={440} y={360} width={360} height={130} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={468} y={425} style={fDisp} fontWeight="800" fontSize="30" fill={c.ink}>ERP / MIS</text>
          <text x={468} y={458} style={fMono} fontSize="20" fill={c.mono} opacity="0.85">the official system</text>
        </g>
      </GlassNode>
      <text x="620" y="534" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="19" fill={AMBER} opacity="0.85" className="sch-fade sch-f3">
        status: paid for, worked around
      </text>

      {/* bypass connectors: shadow -> feeders (solid amber, routed around the ERP) */}
      <path id={`${ID}-p-so-${tone}`} className="sch-draw sch-d3" d="M225 630 C 215 540 218 380 230 270" fill="none" stroke={AMBER} strokeWidth="2.6" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-ds-${tone}`} className="sch-draw sch-d3" d="M470 630 C 400 570 380 450 420 350 C 440 300 540 280 615 272" fill="none" stroke={AMBER} strokeWidth="2.6" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-ni-${tone}`} className="sch-draw sch-d3" d="M900 630 C 970 560 995 430 1005 340 C 1008 310 1009 288 1010 272" fill="none" stroke={AMBER} strokeWidth="2.6" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* zone: shadow system — label sits in the gutter between bypass routes */}
      <g className="sch-fade sch-f3" fill={AMBER} opacity="0.85">
        <text x="710" y="578" textAnchor="middle" style={fMono} fontSize="20" letterSpacing="2">THE SHADOW SYSTEM</text>
        <text x="710" y="604" textAnchor="middle" style={fMono} fontSize="17" letterSpacing="1.5">(WHERE WORK ACTUALLY HAPPENS)</text>
      </g>
      <line x1="60" y1="614" x2="1180" y2="614" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f3" />

      {/* shadow nodes */}
      <GlassNode x={80} y={630} width={290} height={130} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={106} y={678} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>SPREADSHEET</text>
          <text x={106} y={706} style={fMono} fontSize="19" fill={AMBER} opacity="0.9">&quot;the master&quot;</text>
          <text x={106} y={732} style={fMono} fontSize="19" fill={c.mono} opacity="0.8">updated daily, by hand</text>
        </g>
      </GlassNode>
      <GlassNode x={430} y={630} width={230} height={130} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={456} y={690} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>ACCESS DB</text>
          <text x={456} y={720} style={fMono} fontSize="19" fill={AMBER} opacity="0.9">built in 2011</text>
        </g>
      </GlassNode>
      <GlassNode x={720} y={630} width={330} height={130} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={746} y={690} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>THE NOTEBOOK</text>
          <text x={746} y={720} style={fMono} fontSize="19" fill={AMBER} opacity="0.9">despatch&apos;s source of truth</text>
        </g>
      </GlassNode>

      {/* flowing data — only through the shadow routes */}
      {motion && (
        <g>
          <circle r="6.5" fill={AMBER}><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-so-${tone}`} /></animateMotion></circle>
          <circle r="6.5" fill={AMBER}><animateMotion dur="4s" begin="0.8s" repeatCount="indefinite"><mpath href={`#${ID}-p-ds-${tone}`} /></animateMotion></circle>
          <circle r="6.5" fill={AMBER}><animateMotion dur="4.4s" begin="1.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-ni-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        The workarounds are the real operating model. The official system just watches.
      </text>
    </svg>
  );
}
