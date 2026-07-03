'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "The gaps" — a row of four process nodes (SALES, ARTWORK, PRODUCTION,
 * DESPATCH), each with a small owner chip above it. The nodes themselves are
 * fine — cyan, solidly staffed. The connecting handoff gaps between them are
 * the problem: dashed amber zones with "NO OWNER" labels, and a central
 * amber annotation calling out where jobs stall. Built on the shared
 * schematic primitives, matching ManualWorkaroundsSchematic /
 * GarmentDecorationSchematic.
 *
 * Layout (1240x860): four nodes evenly spaced on a midline y=420, owner
 * chips 70px above each node top. Gap zones are dashed amber rounded rects
 * sitting exactly in the space between adjacent nodes, each with a small
 * "NO OWNER" mono label centred inside — sized to never touch the flanking
 * nodes. Type at ~0.46 scale: headline 46, eyebrow/zones 20, node mains
 * 24-27, mono subs 17-19, annotations 17-18, caption 25.
 */
const ID = 'noo';
const MID = 420;
const NODE_W = 210;
const NODE_H = 130;
const GAP_W = 60;
const START_X = 90;

const nodes = [
  { label: 'SALES', sub: 'quote & book', owner: 'Sales Lead' },
  { label: 'ARTWORK', sub: 'design & proof', owner: 'Studio Manager' },
  { label: 'PRODUCTION', sub: 'make & finish', owner: 'Floor Supervisor' },
  { label: 'DESPATCH', sub: 'pack & ship', owner: 'Warehouse Lead' },
];

export function NoOpsOwnerSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Unowned handoffs diagram: sales, artwork, production and despatch are each staffed and owned, but the handoff gaps between them are marked as unowned zones where jobs stall."
    >
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — THE GAPS</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Everyone owns a step. Nobody owns the flow</text>

      {/* process nodes + owner chips + gap zones */}
      {nodes.map((n, i) => {
        const x = START_X + i * (NODE_W + GAP_W);
        return (
          <g key={n.label}>
            <rect x={x} y={MID - 130} width={NODE_W} height={44} rx="8" fill="none"
              stroke={c.grid} strokeWidth="1.4" className="sch-fade sch-f2" />
            <text x={x + NODE_W / 2} y={MID - 103} textAnchor="middle" style={fMono} fontSize="17" fill={c.mono} opacity="0.8" className="sch-fade sch-f2">
              {n.owner}
            </text>
            <line x1={x + NODE_W / 2} y1={MID - 86} x2={x + NODE_W / 2} y2={MID - 65} stroke={c.grid} strokeWidth="1.4" className="sch-fade sch-f2" />
            <GlassNode x={x} y={MID - 65} width={NODE_W} height={NODE_H} tone={tone} idPrefix={ID} accent="cyan">
              <g className="sch-fade sch-f2">
                <text x={x + 24} y={MID - 8} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>{n.label}</text>
                <text x={x + 24} y={MID + 22} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">{n.sub}</text>
              </g>
            </GlassNode>
          </g>
        );
      })}

      {/* gap zones between nodes */}
      {[0, 1, 2].map((i) => {
        const gx = START_X + (i + 1) * NODE_W + i * GAP_W;
        return (
          <g key={i} className="sch-fade sch-f3">
            <rect x={gx + 6} y={MID - 65} width={GAP_W - 12} height={NODE_H} rx="6"
              fill="none" stroke={AMBER} strokeWidth="1.8" strokeDasharray="5 5" opacity="0.85" />
          </g>
        );
      })}
      <text x="620" y={MID + 100} textAnchor="middle" style={fMono} fontSize="19" letterSpacing="2" fill={AMBER} opacity="0.9" className="sch-fade sch-f3">NO OWNER — WHERE JOBS STALL</text>
      {[0, 1, 2].map((i) => {
        const gx = START_X + (i + 1) * NODE_W + i * GAP_W + GAP_W / 2;
        return (
          <line key={i} x1={gx} y1={MID + 65} x2={gx} y2={MID + 84} stroke={AMBER} strokeWidth="1.6" strokeDasharray="3 4" opacity="0.7" className="sch-fade sch-f3" />
        );
      })}

      {motion && (
        <g>
          {[0, 1, 2].map((i) => {
            const gx = START_X + (i + 1) * NODE_W + i * GAP_W + GAP_W / 2;
            return (
              <circle key={i} r="5.5" fill={AMBER} opacity="0.9">
                <animateMotion dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite"
                  path={`M${gx} ${MID - 20} V${MID + 40}`} />
              </circle>
            );
          })}
        </g>
      )}

      <text x="620" y="800" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Work doesn&apos;t get stuck inside departments. It gets stuck between them.
      </text>
    </svg>
  );
}
