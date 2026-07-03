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
    <svg viewBox="0 0 1240 720" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Shadow systems diagram: the official ERP is connected to Orders, Stock and Invoicing by broken links that don't work, while a spreadsheet, an Access database and a paper notebook carry the real data through bypass routes that avoid the official system.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="720" rx="16" fill={c.bg} />
      <rect width="1240" height="720" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="60" style={fMono} fontSize="13" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — SHADOW SYSTEMS</text>
      <text x="60" y="98" style={fDisp} fontWeight="800" fontSize="30" fill={c.ink} className="sch-fade sch-f1">The second system your team built</text>

      {/* zone: official system */}
      <text x="620" y="128" textAnchor="middle" style={fMono} fontSize="11.5" letterSpacing="3" fill={c.mono} opacity="0.65" className="sch-fade sch-f1">THE OFFICIAL SYSTEM</text>
      <line x1="60" y1="140" x2="1180" y2="140" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* broken links: feeders -> ERP */}
      <g className="sch-fade sch-f2">
        <BrokenLink x1={230} y1={210} x2={540} y2={280} tone={tone} />
        <BrokenLink x1={640} y1={210} x2={620} y2={280} tone={tone} />
        <BrokenLink x1={1010} y1={210} x2={700} y2={280} tone={tone} />
      </g>

      {/* feeder nodes */}
      <GlassNode x={140} y={150} width={180} height={60} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={162} y={186} style={fDisp} fontWeight="700" fontSize="15" fill={c.ink}>ORDERS</text>
        </g>
      </GlassNode>
      <GlassNode x={550} y={150} width={180} height={60} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={572} y={186} style={fDisp} fontWeight="700" fontSize="15" fill={c.ink}>STOCK</text>
        </g>
      </GlassNode>
      <GlassNode x={920} y={150} width={180} height={60} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={942} y={186} style={fDisp} fontWeight="700" fontSize="15" fill={c.ink}>INVOICING</text>
        </g>
      </GlassNode>

      {/* ERP / MIS */}
      <GlassNode x={470} y={280} width={300} height={90} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={490} y={320} style={fDisp} fontWeight="800" fontSize="20" fill={c.ink}>ERP / MIS</text>
          <text x={490} y={344} style={fMono} fontSize="11" fill={c.mono} opacity="0.85">the official system</text>
        </g>
      </GlassNode>
      <text x="790" y="330" style={fBody} fontStyle="italic" fontSize="12.5" fill={AMBER} opacity="0.85" className="sch-fade sch-f3">
        status: paid for, worked around
      </text>

      {/* bypass connectors: shadow -> feeders (solid amber, route around ERP) */}
      <path id={`${ID}-p-so-${tone}`} className="sch-draw sch-d3" d="M210 480 C 208 400 220 280 230 210" fill="none" stroke={AMBER} strokeWidth="2.2" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-ds-${tone}`} className="sch-draw sch-d3" d="M500 480 C 400 430 380 320 420 250 C 450 210 560 195 640 210" fill="none" stroke={AMBER} strokeWidth="2.2" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-ni-${tone}`} className="sch-draw sch-d3" d="M790 480 C 850 390 900 290 950 240 C 970 222 990 214 1010 210" fill="none" stroke={AMBER} strokeWidth="2.2" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* zone: shadow system */}
      <text x="500" y="458" textAnchor="middle" style={fMono} fontSize="11.5" letterSpacing="2" fill={AMBER} opacity="0.85" className="sch-fade sch-f3">THE SHADOW SYSTEM (WHERE WORK ACTUALLY HAPPENS)</text>
      <line x1="60" y1="470" x2="1180" y2="470" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f3" />

      {/* shadow nodes */}
      <GlassNode x={80} y={480} width={260} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={100} y={518} style={fDisp} fontWeight="700" fontSize="16" fill={c.ink}>SPREADSHEET — &quot;THE MASTER&quot;</text>
          <text x={100} y={540} style={fMono} fontSize="11" fill={AMBER} opacity="0.9">updated daily, by hand</text>
        </g>
      </GlassNode>
      <GlassNode x={390} y={480} width={220} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={410} y={518} style={fDisp} fontWeight="700" fontSize="16" fill={c.ink}>ACCESS DB</text>
          <text x={410} y={540} style={fMono} fontSize="11" fill={AMBER} opacity="0.9">built in 2011</text>
        </g>
      </GlassNode>
      <GlassNode x={680} y={480} width={220} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={700} y={518} style={fDisp} fontWeight="700" fontSize="16" fill={c.ink}>THE NOTEBOOK</text>
          <text x={700} y={540} style={fMono} fontSize="11" fill={AMBER} opacity="0.9">despatch&apos;s source of truth</text>
        </g>
      </GlassNode>

      {/* flowing data — only through the shadow routes */}
      {motion && (
        <g>
          <circle r="4.5" fill={AMBER}><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-so-${tone}`} /></animateMotion></circle>
          <circle r="4.5" fill={AMBER}><animateMotion dur="4s" begin="0.8s" repeatCount="indefinite"><mpath href={`#${ID}-p-ds-${tone}`} /></animateMotion></circle>
          <circle r="4.5" fill={AMBER}><animateMotion dur="4.4s" begin="1.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-ni-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="670" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="15" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        The workarounds are the real operating model. The official system just watches.
      </text>
    </svg>
  );
}
