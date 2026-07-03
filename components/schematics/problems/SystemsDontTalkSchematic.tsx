'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode, BrokenLink,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "Data islands" — four systems (ERP, ECOMMERCE, ACCOUNTS, WAREHOUSE) each
 * sit inside their own faint boundary box, with broken links criss-crossing
 * every pair that should talk. A single amber person-chip sits at the centre
 * doing the bridging by hand, with small amber annotations describing how
 * data actually moves between islands. Built on the shared schematic
 * primitives, matching ManualWorkaroundsSchematic / GarmentDecorationSchematic.
 *
 * Layout (1240x860): four island boxes at the four corners of a square
 * (x=110/810, y=250/560; box size 320x180), each containing one GlassNode.
 * The re-entry chip sits dead centre (x=520-720, y=390-470). BrokenLinks run
 * corner-to-corner and side-to-side, all passing clear of the centre chip's
 * bounding box. Annotations sit in the four gutters between islands, well
 * clear of every path midpoint X-mark. Type sized for ~0.46 render scale:
 * headline 46, eyebrow/zones 20, node mains 26-28, mono subs 18-20,
 * annotations 17-18, caption 25.
 */
const ID = 'sdt';

// Island geometry
const IW = 320, IH = 170;
const TL_X = 90, TL_Y = 230;   // ERP (top-left)
const TR_X = 830, TR_Y = 230;  // ECOMMERCE (top-right)
const BL_X = 90, BL_Y = 580;   // WAREHOUSE (bottom-left)
const BR_X = 830, BR_Y = 580;  // ACCOUNTS (bottom-right)

function islandCentre(x: number, y: number) {
  return { cx: x + IW / 2, cy: y + IH / 2 };
}

export function SystemsDontTalkSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const c = schematicPalette(tone);
  const tl = islandCentre(TL_X, TL_Y);
  const tr = islandCentre(TR_X, TR_Y);
  const bl = islandCentre(BL_X, BL_Y);
  const br = islandCentre(BR_X, BR_Y);

  return (
    <svg viewBox="0 0 1240 860" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Data islands diagram: ERP, ecommerce, accounts and warehouse systems sit in separate boxes with broken connections between every pair, while a person at the centre manually re-keys, exports and re-types data to bridge the gaps.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — DATA ISLANDS</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Four systems, zero conversations</text>

      {/* island boundary boxes — faint, drawn before links */}
      <g className="sch-fade sch-f1" fill="none" stroke={c.grid} strokeWidth="1.4" strokeDasharray="3 5">
        <rect x={TL_X - 20} y={TL_Y - 20} width={IW + 40} height={IH + 40} rx="14" />
        <rect x={TR_X - 20} y={TR_Y - 20} width={IW + 40} height={IH + 40} rx="14" />
        <rect x={BL_X - 20} y={BL_Y - 20} width={IW + 40} height={IH + 40} rx="14" />
        <rect x={BR_X - 20} y={BR_Y - 20} width={IW + 40} height={IH + 40} rx="14" />
      </g>
      <g className="sch-fade sch-f1" style={fMono} fontSize="17" letterSpacing="2" fill={c.mono} opacity="0.55">
        <text x={TL_X - 20} y={TL_Y - 32}>ISLAND</text>
        <text x={TR_X - 20} y={TR_Y - 32}>ISLAND</text>
        <text x={BL_X - 20} y={BL_Y - 32}>ISLAND</text>
        <text x={BR_X - 20} y={BR_Y - 32}>ISLAND</text>
      </g>

      {/* broken links between adjacent pairs — routed around the centre chip */}
      <g className="sch-fade sch-f2">
        <BrokenLink x1={tl.cx} y1={tl.cy} x2={tr.cx} y2={tr.cy} tone={tone} />
        <BrokenLink x1={bl.cx} y1={bl.cy} x2={br.cx} y2={br.cy} tone={tone} />
        <BrokenLink x1={tl.cx} y1={tl.cy} x2={bl.cx} y2={bl.cy} tone={tone} />
        <BrokenLink x1={tr.cx} y1={tr.cy} x2={br.cx} y2={br.cy} tone={tone} />
      </g>

      {/* island nodes */}
      <GlassNode x={TL_X} y={TL_Y} width={IW} height={IH} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={TL_X + 26} y={TL_Y + 78} style={fDisp} fontWeight="800" fontSize="28" fill={c.ink}>ERP</text>
          <text x={TL_X + 26} y={TL_Y + 110} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">orders &amp; stock</text>
        </g>
      </GlassNode>
      <GlassNode x={TR_X} y={TR_Y} width={IW} height={IH} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={TR_X + 26} y={TR_Y + 78} style={fDisp} fontWeight="800" fontSize="26" fill={c.ink}>ECOMMERCE</text>
          <text x={TR_X + 26} y={TR_Y + 110} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">webstore</text>
        </g>
      </GlassNode>
      <GlassNode x={BL_X} y={BL_Y} width={IW} height={IH} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={BL_X + 26} y={BL_Y + 78} style={fDisp} fontWeight="800" fontSize="26" fill={c.ink}>WAREHOUSE</text>
          <text x={BL_X + 26} y={BL_Y + 110} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">pick &amp; pack</text>
        </g>
      </GlassNode>
      <GlassNode x={BR_X} y={BR_Y} width={IW} height={IH} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={BR_X + 26} y={BR_Y + 78} style={fDisp} fontWeight="800" fontSize="26" fill={c.ink}>ACCOUNTS</text>
          <text x={BR_X + 26} y={BR_Y + 110} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">invoicing</text>
        </g>
      </GlassNode>

      {/* gap annotations — sit in gutters, clear of nodes and X-marks */}
      <g className="sch-fade sch-f3" style={fMono} fontSize="18" fill={AMBER} opacity="0.9">
        <text x="620" y="288" textAnchor="middle">re-keyed</text>
        <text x="620" y="700" textAnchor="middle">csv export</text>
        <text x="272" y="450">printed and typed in</text>
      </g>

      {/* centre re-entry chip — the human bridge */}
      <GlassNode x={520} y={445} width={200} height={90} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={546} y={485} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>RE-ENTRY</text>
          <text x={546} y={511} style={fMono} fontSize="18" fill={AMBER} opacity="0.95">someone, by hand</text>
        </g>
      </GlassNode>

      {motion && (
        <g>
          <circle r="6" fill={AMBER} opacity="0.8"><animateMotion dur="3.4s" repeatCount="indefinite" path="M418 408 L512 470" /></circle>
          <circle r="6" fill={AMBER} opacity="0.8"><animateMotion dur="3.8s" begin="1s" repeatCount="indefinite" path="M728 510 L822 572" /></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Every gap gets bridged by hand. Every bridge is a place data goes wrong.
      </text>
    </svg>
  );
}
