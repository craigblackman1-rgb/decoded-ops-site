'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "No fuel" — a large AI node on the right with three dashed input pipes
 * arriving from broken data sources on the left (SPREADSHEETS, PAPER, ERP),
 * each pipe carrying an amber X. Below, a cyan "FIX THE DATA FIRST" note.
 * Built on the shared schematic primitives, matching
 * ManualWorkaroundsSchematic / GarmentDecorationSchematic.
 *
 * Layout (1240x860): three source nodes stacked on the left (x=80-380,
 * y=200/380/560, height 110 each), each with a pipe running right toward
 * the AI node (x=760-1150, y=290-570). Each pipe carries an amber X at its
 * own midpoint, staggered horizontally (x=520/560/600) so none collide with
 * each other or the AI node's left edge. The "FIX THE DATA FIRST" chip sits
 * beneath the AI node, clear of the lowest pipe. Type at ~0.46 scale:
 * headline 46, eyebrow/zones 20, node mains 24-27, mono subs 17-19,
 * annotations 17-18, caption 25.
 */
const ID = 'aip';

const sources = [
  { label: 'SPREADSHEETS', sub: 'in Dave’s head format', y: 200 },
  { label: 'PAPER', sub: 'job bags', y: 380 },
  { label: 'ERP', sub: 'half-filled fields', y: 560 },
];

export function AiParalysisSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const c = schematicPalette(tone);
  const aiY = 290, aiH = 280, aiX = 760, aiW = 390;
  const aiCy = aiY + aiH / 2;

  return (
    <svg viewBox="0 0 1240 860" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="No-fuel diagram: an AI tool sits ready on the right while three broken data pipes arrive from spreadsheets, paper job bags and a half-filled ERP on the left, each pipe marked with an X, with a note to fix the data first."
    >
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — NO FUEL</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">AI can&apos;t read your paper job bags</text>

      {/* pipes: source -> AI, each broken with an amber X, staggered */}
      {sources.map((s, i) => {
        const sy = s.y + 55;
        const xMid = 520 + i * 60;
        return (
          <g key={s.label} className="sch-fade sch-f2">
            <path d={`M380 ${sy} C ${xMid - 60} ${sy}, ${xMid + 40} ${aiCy + (i - 1) * 60}, ${aiX} ${aiCy + (i - 1) * 60}`}
              fill="none" stroke={AMBER} strokeWidth="2.2" strokeDasharray="6 6" opacity="0.85" />
            <g transform={`translate(${xMid}, ${sy + (aiCy + (i - 1) * 60 - sy) * 0.35})`}>
              <circle r="11" fill={tone === 'dark' ? '#04314a' : '#ffffff'} stroke={AMBER} strokeWidth="1.6" />
              <path d="M-4.5 -4.5 L4.5 4.5 M4.5 -4.5 L-4.5 4.5" stroke={AMBER} strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </g>
        );
      })}

      {/* source nodes */}
      {sources.map((s) => (
        <GlassNode key={s.label} x={80} y={s.y} width={300} height={110} tone={tone} idPrefix={ID} accent="amber">
          <g className="sch-fade sch-f2">
            <text x={106} y={s.y + 46} style={fDisp} fontWeight="700" fontSize="25" fill={c.ink}>{s.label}</text>
            <text x={106} y={s.y + 74} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">{s.sub}</text>
          </g>
        </GlassNode>
      ))}

      {/* AI node */}
      <GlassNode x={aiX} y={aiY} width={aiW} height={aiH} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={aiX + 30} y={aiCy - 30} style={fDisp} fontWeight="800" fontSize="30" fill={c.ink}>AI</text>
          <text x={aiX + 30} y={aiCy + 2} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">the tool you&apos;re</text>
          <text x={aiX + 30} y={aiCy + 26} style={fMono} fontSize="19" fill={c.mono} opacity="0.85">being sold</text>
          <text x={aiX + 30} y={aiCy + 66} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">status: nothing to work with</text>
        </g>
      </GlassNode>

      {/* fix-the-data note */}
      <GlassNode x={860} y={aiY + aiH + 40} width={220} height={70} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={882} y={aiY + aiH + 84} style={fMono} fontSize="19" fontWeight="700" fill={CYAN}>FIX THE DATA FIRST</text>
        </g>
      </GlassNode>

      {motion && (
        <g>
          {sources.map((s, i) => {
            const sy = s.y + 55;
            const xMid = 520 + i * 60;
            const ey = aiCy + (i - 1) * 60;
            return (
              <circle key={s.label} r="5.5" fill={AMBER} opacity="0.75">
                <animateMotion dur={`${3.2 + i * 0.4}s`} begin={`${i * 0.5}s`} repeatCount="indefinite"
                  path={`M380 ${sy} C ${xMid - 60} ${sy}, ${xMid + 40} ${ey}, ${aiX} ${ey}`} />
              </circle>
            );
          })}
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        The model is fine. The data it would need doesn&apos;t exist yet.
      </text>
    </svg>
  );
}
