'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * Spec-driven production drawn as a single straight chain — no split, no
 * converge — because the point of this sector is that everything is
 * sequential and gated: spec, then a tolerance sign-off loop, then
 * scheduling, then finishing, then ship. The scheduling node carries a
 * literal mini-gantt motif (three stacked bars of different lengths, one
 * amber) standing in for run-length-vs-changeover economics. Different
 * topology to the other four sector schematics: this is the only pure
 * linear chain, distinguished by the embedded gantt block rather than by
 * branching geometry.
 *
 * Layout (1240x860): single chain on midline y=470. SPEC (x=50) -> DIE-LINE
 * PROOF (x=270, amber loop above) -> PRESS SCHEDULING (x=540, wide/tall node
 * with 3-bar gantt motif) -> FINISHING (x=870) -> SHIP (x=1090). Zone labels
 * single row y=170. Type: headline 46, eyebrow/zones 20, node mains 26-28,
 * mono subs 18-20, micro 17-19, caption 25.
 */
const ID = 'lp';
const MID = 470;

export function LabelsPackagingSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const c = schematicPalette(tone);
  const barColor = tone === 'dark' ? 'rgba(142,202,230,0.35)' : 'rgba(33,158,188,0.28)';

  return (
    <svg viewBox="0 0 1240 860" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Labels and packaging production schematic: a spec feeds a die-line proof with a tolerance sign-off loop, then a press scheduling node shown as a mini gantt chart of run length versus changeover, then finishing and ship — a single linear chain."
    >
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">SECTOR SCHEMATIC — LABELS &amp; PACKAGING</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Margins live in the changeover</text>

      {/* zone bands */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="20" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="160" y="170" textAnchor="middle">SPEC &amp; PROOF</text>
        <text x="680" y="170" textAnchor="middle">SCHEDULING &amp; RUN</text>
        <text x="1145" y="170" textAnchor="middle">SHIP</text>
      </g>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* chain paths */}
      <path id={`${ID}-p-1-${tone}`} className="sch-draw sch-d2" d={`M230 ${MID} H270`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-2-${tone}`} className="sch-draw sch-d3" d={`M490 ${MID} H540`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-3-${tone}`} className="sch-draw sch-d4" d={`M820 ${MID} H870`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-4-${tone}`} className="sch-draw sch-d5" d={`M1060 ${MID} H1090`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* tolerance sign-off loop above die-line proof */}
      <path id={`${ID}-p-loop-${tone}`} className="sch-draw sch-d2" d="M320 400 C 300 290 460 290 440 400" fill="none" stroke={AMBER} strokeWidth="2.5" strokeDasharray="6 7" strokeOpacity="0.9" markerEnd={`url(#${ID}-ah-${tone})`} />
      <text x="380" y="270" textAnchor="middle" style={fMono} fontSize="18" letterSpacing="1.5" fill={AMBER} opacity="0.9" className="sch-fade sch-f2">TOLERANCE SIGN-OFF</text>

      {/* ===== nodes ===== */}
      <GlassNode x={50} y={MID - 60} width={180} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={74} y={MID - 8} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>SPEC</text>
          <text x={74} y={MID + 28} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">die-line · substrate</text>
        </g>
      </GlassNode>

      <GlassNode x={270} y={MID - 60} width={220} height={120} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={294} y={MID - 22} style={fDisp} fontWeight="700" fontSize="25" fill={c.ink}>DIE-LINE</text>
          <text x={294} y={MID + 10} style={fDisp} fontWeight="700" fontSize="25" fill={c.ink}>PROOF</text>
          <text x={294} y={MID + 42} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">tolerance sign-off</text>
        </g>
      </GlassNode>

      {/* press scheduling — mini gantt motif */}
      <GlassNode x={540} y={MID - 90} width={280} height={180} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={564} y={MID - 48} style={fDisp} fontWeight="700" fontSize="25" fill={c.ink}>PRESS SCHEDULING</text>
          {/* three stacked gantt bars: run 1, changeover (amber, short), run 2 */}
          <rect x={564} y={MID - 22} width="190" height="18" rx="4" fill={barColor} />
          <rect x={564} y={MID + 4} width="60" height="18" rx="4" fill={AMBER} opacity="0.85" />
          <rect x={564} y={MID + 30} width="140" height="18" rx="4" fill={barColor} />
          <text x={564} y={MID + 68} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">run length vs changeover</text>
        </g>
      </GlassNode>

      <GlassNode x={870} y={MID - 60} width={190} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={894} y={MID - 8} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>FINISHING</text>
          <text x={894} y={MID + 28} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">laminate · die-cut · rewind</text>
        </g>
      </GlassNode>

      <GlassNode x={1090} y={MID - 50} width={100} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={1112} y={MID + 8} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>SHIP</text>
        </g>
      </GlassNode>

      {motion && (
        <g>
          <circle r="6" fill={CYAN}><animateMotion dur="2.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-1-${tone}`} /></animateMotion></circle>
          <circle r="6.5" fill={AMBER}><animateMotion dur="4.6s" begin="0.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-loop-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2.4s" begin="1.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-2-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2.6s" begin="2.8s" repeatCount="indefinite"><mpath href={`#${ID}-p-3-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2s" begin="4.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-4-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Short runs pay the setup cost every time. Scheduling is the profit lever.
      </text>
    </svg>
  );
}
