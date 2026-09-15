'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER, SKY,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * Operations consultant for print & embroidery businesses — the journey
 * from scattered systems to integrated operations. Three connected stages:
 * audit, fix, and run — shown as a vertical flow with a central spine.
 * The defining visual is the transition from fragmented (multiple disconnected
 * boxes at top) to unified (single connected flow at bottom).
 *
 * Layout (1240x860): spine down the centre. Top has three separate boxes
 * (embroidery, print, admin) converging into a single audit node. Middle
 * shows the fix stage. Bottom shows the integrated run state.
 */
const ID = 'oe';

const MID = 430;
const SPINE_X = 280;

export function PrintEmbroideryOpsConsultantSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Operations consultant for print and embroidery businesses schematic: scattered systems converge through audit, fix, and run stages into integrated operations.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">SECTOR SCHEMATIC: PRINT &amp; EMBROIDERY</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Your systems don&apos;t talk to each other</text>

      {/* zone labels */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="20" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="300" y="170" textAnchor="middle">SCATTERED</text>
        <text x="620" y="170" textAnchor="middle">AUDIT</text>
        <text x="940" y="170" textAnchor="middle">INTEGRATED</text>
      </g>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* three scattered systems at top — embroidery, print, admin */}
      <GlassNode x={60} y={230} width={200} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={84} y={270} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>EMBROIDERY</text>
          <text x={84} y={302} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">digitising · stitch count</text>
        </g>
      </GlassNode>

      <GlassNode x={310} y={230} width={200} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={334} y={270} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>SCREEN PRINT</text>
          <text x={334} y={302} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">screens · ink · curing</text>
        </g>
      </GlassNode>

      <GlassNode x={560} y={230} width={200} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={584} y={270} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>ADMIN</text>
          <text x={584} y={302} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">quotes · orders · invoicing</text>
        </g>
      </GlassNode>

      {/* converging paths from scattered to audit */}
      <path className="sch-draw sch-d2" d="M160 330 C 160 380 250 400 280 420" fill="none" stroke={CYAN} strokeWidth="2.2" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path className="sch-draw sch-d2" d="M410 330 C 410 380 340 400 300 420" fill="none" stroke={AMBER} strokeWidth="2.2" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path className="sch-draw sch-d2" d="M660 330 C 660 380 400 400 320 420" fill="none" stroke={CYAN} strokeWidth="2.2" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* audit node */}
      <GlassNode x={180} y={420} width={240} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f3">
          <text x={204} y={462} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>CLARITY AUDIT</text>
          <text x={204} y={496} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">one day · full picture</text>
        </g>
      </GlassNode>

      {/* spine down from audit */}
      <path id={`${ID}-spine`} pathLength={1} className="sch-draw sch-d2" d={`M300 520 V700`}
        fill="none" strokeWidth="2.5" stroke={CYAN} markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* fix stage — mid spine */}
      <GlassNode x={460} y={570} width={220} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={484} y={612} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>FIX</text>
          <text x={484} y={646} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">vendor brief · roadmap</text>
        </g>
      </GlassNode>

      {/* run state — end of spine */}
      <GlassNode x={180} y={710} width={460} height={110} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={204} y={756} style={fDisp} fontWeight="800" fontSize="28" fill={c.ink}>INTEGRATED OPERATIONS</text>
          <text x={204} y={792} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">one system · embroidery + print + admin · connected</text>
        </g>
      </GlassNode>

      {/* path from fix to integrated */}
      <path className="sch-draw sch-d4" d="M300 670 V710" fill="none" stroke={AMBER} strokeWidth="2.2" markerEnd={`url(#${ID}-ah-${tone})`} />

      {motion && (
        <g>
          <circle r="5.5" fill={CYAN}><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href={`#${ID}-spine`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="840" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Print and embroidery under one roof need systems that understand both.
      </text>
    </svg>
  );
}
