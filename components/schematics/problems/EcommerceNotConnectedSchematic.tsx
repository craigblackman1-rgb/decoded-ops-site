'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode, BrokenLink,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "Orphaned storefront" — a webstore node sits above a stack of queued
 * orders, disconnected by a BrokenLink from a back-office stratum (ERP,
 * STOCK, DESPATCH) that is solidly wired to itself. An amber person-chip
 * carries orders across the break by hand. Built on the shared schematic
 * primitives, matching ManualWorkaroundsSchematic / GarmentDecorationSchematic.
 *
 * Layout (1240x860): WEBSTORE node top-centre (x=470-770, y=200-300) with
 * four small order-queue chips stacked beneath it (y=330-430, one amber).
 * BrokenLink drops from webstore/queue down to the back-office stratum
 * (y=560-700), three nodes wired solidly left-to-right. The COPY & PASTE
 * chip sits in the break, offset to the left of the vertical break line so
 * it never collides with the BrokenLink's X-mark. Stock annotation sits
 * beside the STOCK node. Type at ~0.46 scale: headline 46, eyebrow/zones 20,
 * node mains 24-28, mono subs 18-19, annotations 17-18, caption 25.
 */
const ID = 'enc';

export function EcommerceNotConnectedSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Orphaned storefront diagram: a webstore takes orders around the clock while a disconnected back office of ERP, stock and despatch systems runs separately, bridged only by someone copying and pasting orders across twice a day."
    >
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — ORPHANED STOREFRONT</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Your webstore doesn&apos;t know what&apos;s in the warehouse</text>

      {/* webstore node */}
      <GlassNode x={470} y={190} width={300} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f1">
          <text x={496} y={238} style={fDisp} fontWeight="800" fontSize="28" fill={c.ink}>WEBSTORE</text>
          <text x={496} y={266} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">orders in · 24/7</text>
        </g>
      </GlassNode>

      {/* queued order chips beneath the webstore */}
      <g className="sch-fade sch-f2">
        {[0, 1, 2, 3].map((i) => {
          const x = 490 + i * 66;
          const amber = i === 2;
          return (
            <rect key={i} x={x} y={330} width={52} height={40} rx="5"
              fill="none" stroke={amber ? AMBER : c.grid} strokeWidth="1.6" opacity={amber ? 0.9 : 0.6} />
          );
        })}
        <text x="620" y="404" textAnchor="middle" style={fMono} fontSize="17" fill={c.mono} opacity="0.7">orders queuing</text>
      </g>

      {/* broken link — webstore/queue down to back office */}
      <g className="sch-fade sch-f3">
        <BrokenLink x1={620} y1={430} x2={620} y2={560} tone={tone} />
      </g>

      {/* back office stratum — label offset right so it stays clear of the BrokenLink X-mark */}
      <text x="1015" y="522" textAnchor="middle" style={fMono} fontSize="20" letterSpacing="3" fill={c.mono} opacity="0.6" className="sch-fade sch-f3">BACK OFFICE</text>
      <line x1="60" y1="534" x2="1180" y2="534" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f3" />

      <path d="M310 630 H520" className="sch-draw sch-d4" fill="none" stroke={CYAN} strokeWidth="2.4" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path d="M810 630 H900" className="sch-draw sch-d4" fill="none" stroke={CYAN} strokeWidth="2.4" markerEnd={`url(#${ID}-ah-${tone})`} />

      <GlassNode x={100} y={570} width={210} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={126} y={624} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>ERP</text>
          <text x={126} y={652} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">order processing</text>
        </g>
      </GlassNode>
      <GlassNode x={520} y={570} width={290} height={120} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={546} y={624} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>STOCK</text>
          <text x={546} y={652} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">shows in stock — isn&apos;t</text>
        </g>
      </GlassNode>
      <GlassNode x={900} y={570} width={230} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={926} y={624} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>DESPATCH</text>
          <text x={926} y={652} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">pick &amp; ship</text>
        </g>
      </GlassNode>

      {/* amber bypass carrier — sits left of the break, clear of the X-mark */}
      <GlassNode x={80} y={425} width={230} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f3">
          <text x={106} y={461} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>COPY &amp; PASTE</text>
          <text x={106} y={487} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">twice a day,</text>
          <text x={106} y={509} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">if remembered</text>
        </g>
      </GlassNode>
      <path d="M195 425 C 260 405, 380 400, 470 397" className="sch-draw sch-d3" fill="none" stroke={AMBER} strokeWidth="2.2" strokeDasharray="6 6" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path d="M195 525 C 195 550, 260 630, 310 630" className="sch-draw sch-d3" fill="none" stroke={AMBER} strokeWidth="2.2" strokeDasharray="6 6" markerEnd={`url(#${ID}-ah-${tone})`} />

      {motion && (
        <g>
          <circle r="6" fill={AMBER}><animateMotion dur="4s" repeatCount="indefinite" path="M195 425 C 260 405, 380 400, 470 397" /></circle>
          <circle r="6" fill={AMBER}><animateMotion dur="4.4s" begin="1s" repeatCount="indefinite" path="M195 525 C 195 550, 260 630, 310 630" /></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Online sells what the back office can&apos;t see. The customer finds out last.
      </text>
    </svg>
  );
}
