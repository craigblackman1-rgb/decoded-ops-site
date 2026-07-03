'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "The bottleneck" — a throughput funnel: a wide intake of order chips
 * flows right through sequential gates of decreasing width (QUOTE, ARTWORK,
 * PRODUCTION). At the narrowest gate (ARTWORK, amber) a queue backs up
 * visibly. After it, sparse chips trickle to DESPATCH. Built on the shared
 * schematic primitives, matching ManualWorkaroundsSchematic /
 * GarmentDecorationSchematic.
 *
 * Layout (1240x860): midline y=490 (~57%) so the composition fills the
 * canvas below the headline. Intake stack of 8 chips on the left (x=64,
 * y=250-676) with its mono label start-anchored at x=64 y=232, fully inside
 * the canvas. Gates at x=330 (QUOTE, 200h), x=590 (ARTWORK, 230w so the
 * amber sub fits), x=860 (PRODUCTION, 70h), DESPATCH at x=1070. A 7-chip
 * two-row queue stacks up below-left of the ARTWORK gate (y=572-626) with
 * its label beneath, clear of every node. Type at ~0.46 scale: headline 46,
 * eyebrow 20, node mains 21-27, mono subs 15-18, annotations 17, caption 25.
 */
const ID = 'cs';
const MID = 490;

export function CantScaleSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Bottleneck diagram: a wide, growing intake of orders funnels through quote, artwork and production gates of decreasing width — a queue backs up hard at the narrow artwork gate — before a thin trickle reaches despatch."
    >
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — THE BOTTLENECK</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Growth stopped at your narrowest point</text>

      {/* wide intake stack, funnelling toward QUOTE */}
      <g className="sch-fade sch-f2">
        <text x="64" y="232" style={fMono} fontSize="17" fill={c.mono} opacity="0.7">orders in — growing</text>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={64} y={250 + i * 56} width={44} height={36} rx="4"
            fill="none" stroke={CYAN} strokeWidth="1.6" opacity="0.6" />
        ))}
      </g>
      <path d="M118 280 C 220 340, 260 430, 330 462" className="sch-draw sch-d2" fill="none" stroke={CYAN} strokeWidth="2" opacity="0.7" />
      <path d="M118 650 C 220 610, 260 545, 330 518" className="sch-draw sch-d2" fill="none" stroke={CYAN} strokeWidth="2" opacity="0.7" />

      {/* gate 1: QUOTE — widest */}
      <GlassNode x={330} y={MID - 100} width={190} height={200} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={356} y={MID - 30} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>QUOTE</text>
          <text x={356} y={MID - 2} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">fast, self-serve</text>
        </g>
      </GlassNode>
      <path d="M520 475 C 550 480, 560 483, 590 485" className="sch-draw sch-d3" fill="none" stroke={CYAN} strokeWidth="2" opacity="0.7" />
      <path d="M520 505 C 550 500, 560 497, 590 495" className="sch-draw sch-d3" fill="none" stroke={CYAN} strokeWidth="2" opacity="0.7" />

      {/* gate 2: ARTWORK — narrowest gate, amber */}
      <GlassNode x={590} y={MID - 60} width={230} height={120} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f3">
          <text x={616} y={MID - 4} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>ARTWORK</text>
          <text x={616} y={MID + 24} style={fMono} fontSize="17" fill={AMBER} opacity="0.95">one approver</text>
        </g>
      </GlassNode>

      {/* queue backing up before ARTWORK — 7 chips, two visibly stacking rows */}
      <g className="sch-fade sch-f3">
        {[0, 1, 2, 3].map((i) => (
          <rect key={`q1-${i}`} x={556 + i * 32} y={572} width={24} height={24} rx="4"
            fill="none" stroke={AMBER} strokeWidth="1.6" opacity="0.9" />
        ))}
        {[0, 1, 2].map((i) => (
          <rect key={`q2-${i}`} x={572 + i * 32} y={602} width={24} height={24} rx="4"
            fill="none" stroke={AMBER} strokeWidth="1.6" opacity="0.75" />
        ))}
        <text x="620" y="662" textAnchor="middle" style={fMono} fontSize="17" fill={AMBER} opacity="0.9">queue backs up here</text>
      </g>

      <path d="M820 480 C 840 477, 848 476, 860 475" className="sch-draw sch-d4" fill="none" stroke={CYAN} strokeWidth="1.8" opacity="0.6" />
      <path d="M820 500 C 840 503, 848 504, 860 505" className="sch-draw sch-d4" fill="none" stroke={CYAN} strokeWidth="1.8" opacity="0.6" />

      {/* gate 3: PRODUCTION — thin, capacity going unused */}
      <GlassNode x={860} y={MID - 35} width={180} height={70} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={886} y={MID + 8} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>PRODUCTION</text>
        </g>
      </GlassNode>

      {/* sparse trickle to DESPATCH */}
      <path d="M1040 480 C 1055 478, 1060 478, 1070 478" className="sch-draw sch-d4" fill="none" stroke={CYAN} strokeWidth="1.6" strokeDasharray="2 8" opacity="0.6" />
      <path d="M1040 500 C 1055 502, 1060 502, 1070 502" className="sch-draw sch-d4" fill="none" stroke={CYAN} strokeWidth="1.6" strokeDasharray="2 8" opacity="0.6" />
      <GlassNode x={1070} y={MID - 55} width={130} height={110} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={1086} y={MID - 8} style={fDisp} fontWeight="700" fontSize="21" fill={c.ink}>DESPATCH</text>
          <text x={1086} y={MID + 18} style={fMono} fontSize="15" fill={c.mono} opacity="0.8">capacity</text>
          <text x={1086} y={MID + 36} style={fMono} fontSize="15" fill={c.mono} opacity="0.8">wasted</text>
        </g>
      </GlassNode>

      {motion && (
        <g>
          <circle r="5" fill={CYAN} opacity="0.8"><animateMotion dur="2.6s" repeatCount="indefinite" path="M118 280 C 220 340, 260 430, 330 462" /></circle>
          <circle r="5" fill={CYAN} opacity="0.8"><animateMotion dur="2.8s" begin="0.6s" repeatCount="indefinite" path="M118 650 C 220 610, 260 545, 330 518" /></circle>
          <circle r="5.5" fill={AMBER} opacity="0.9"><animateMotion dur="3.4s" begin="1.2s" repeatCount="indefinite" path="M520 490 C 550 490, 560 490, 590 490" /></circle>
          <circle r="4.5" fill={CYAN} opacity="0.6"><animateMotion dur="4.4s" begin="2s" repeatCount="indefinite" path="M820 490 C 840 490, 848 490, 860 490" /></circle>
        </g>
      )}

      <text x="620" y="810" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Adding orders doesn&apos;t add throughput. The bottleneck decides both.
      </text>
    </svg>
  );
}
