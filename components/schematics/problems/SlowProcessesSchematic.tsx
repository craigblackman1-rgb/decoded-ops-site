'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "Dead time" — a job journey ORDER -> ARTWORK -> APPROVAL -> PRODUCTION ->
 * DESPATCH, with an amber wait-state chip in each gap showing dead time.
 * Below, a summary duration bar splits touch time (thin cyan) from wait
 * time (long amber). Built on the shared schematic primitives, matching
 * ManualWorkaroundsSchematic / GarmentDecorationSchematic.
 *
 * Layout (1240x860): five small nodes on a midline y=330 (x=60/280/500/
 * 720/940, width 170, height 90), each gap between them holding a wait-state
 * chip below the connecting line (y=380-430) so it never touches the nodes.
 * Summary bar sits lower (y=600-680), full width, segmented into alternating
 * thin cyan / long amber blocks with a legend beneath. Type at ~0.46 scale:
 * headline 46, eyebrow/zones 20, node mains 20-24, mono subs 16-18,
 * annotations 16-17, caption 25.
 */
const ID = 'sp';
const MID = 330;
const NODE_W = 170;
const NODE_H = 90;
const nodeXs = [60, 285, 510, 735, 960];
const nodeLabels = ['ORDER', 'ARTWORK', 'APPROVAL', 'PRODUCTION', 'DESPATCH'];
const waits = ['2 days in an inbox', '3 days awaiting reply', '1 day finding the file', 'queue'];

export function SlowProcessesSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Dead time diagram: a job moves from order through artwork, approval, production and despatch, with a wait state of days sitting in every gap, and a summary bar showing hours of real work against days of waiting."
    >
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — DEAD TIME</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">The job takes days. The work takes hours</text>

      {/* job journey nodes */}
      {nodeXs.map((x, i) => (
        <GlassNode key={nodeLabels[i]} x={x} y={MID - NODE_H / 2} width={NODE_W} height={NODE_H} tone={tone} idPrefix={ID} accent="cyan">
          <g className="sch-fade sch-f2">
            <text x={x + 18} y={MID + 6} style={fDisp} fontWeight="700" fontSize="21" fill={c.ink}>{nodeLabels[i]}</text>
          </g>
        </GlassNode>
      ))}

      {/* connecting lines through the gaps */}
      {nodeXs.slice(0, -1).map((x, i) => (
        <line key={i} x1={x + NODE_W} y1={MID} x2={nodeXs[i + 1]} y2={MID} stroke={CYAN} strokeWidth="2" opacity="0.5" className="sch-fade sch-f2" />
      ))}

      {/* wait-state chips beneath each gap */}
      {nodeXs.slice(0, -1).map((x, i) => {
        const gapCentre = (x + NODE_W + nodeXs[i + 1]) / 2;
        return (
          <g key={i} className="sch-fade sch-f3">
            <line x1={gapCentre} y1={MID + NODE_H / 2 + 10} x2={gapCentre} y2={MID + 100} stroke={AMBER} strokeWidth="1.6" strokeDasharray="4 5" opacity="0.7" />
            <rect x={gapCentre - 78} y={MID + 100} width={156} height={54} rx="7" fill="none" stroke={AMBER} strokeWidth="1.6" opacity="0.85" />
            <text x={gapCentre} y={MID + 124} textAnchor="middle" style={fMono} fontSize="15" fill={AMBER} opacity="0.95">WAIT</text>
            <text x={gapCentre} y={MID + 144} textAnchor="middle" style={fMono} fontSize="14" fill={AMBER} opacity="0.85">{waits[i]}</text>
          </g>
        );
      })}

      {/* summary duration bar */}
      <text x="620" y="560" textAnchor="middle" style={fMono} fontSize="19" letterSpacing="2" fill={c.mono} opacity="0.65" className="sch-fade sch-f4">TOTAL JOB DURATION</text>
      <g className="sch-fade sch-f4">
        <rect x="90" y="580" width="1060" height="50" rx="8" fill="none" stroke={c.grid} strokeWidth="1.4" />
        {/* thin cyan touch-time segments alternating with long amber wait segments */}
        <rect x="94" y="584" width="40" height="42" rx="4" fill={CYAN} opacity="0.75" />
        <rect x="140" y="584" width="220" height="42" rx="4" fill={AMBER} opacity="0.5" />
        <rect x="366" y="584" width="40" height="42" rx="4" fill={CYAN} opacity="0.75" />
        <rect x="412" y="584" width="320" height="42" rx="4" fill={AMBER} opacity="0.5" />
        <rect x="738" y="584" width="40" height="42" rx="4" fill={CYAN} opacity="0.75" />
        <rect x="784" y="584" width="260" height="42" rx="4" fill={AMBER} opacity="0.5" />
        <rect x="1050" y="584" width="96" height="42" rx="4" fill={CYAN} opacity="0.75" />
      </g>
      <g className="sch-fade sch-f4" style={fMono} fontSize="17">
        <rect x="90" y="654" width="22" height="14" rx="3" fill={CYAN} opacity="0.75" />
        <text x="122" y="666" fill={c.ink} opacity="0.85">work: hours</text>
        <rect x="280" y="654" width="22" height="14" rx="3" fill={AMBER} opacity="0.5" />
        <text x="312" y="666" fill={c.ink} opacity="0.85">waiting: days</text>
      </g>

      {motion && (
        <g>
          <circle r="5" fill={CYAN} opacity="0.8"><animateMotion dur="4s" repeatCount="indefinite" path="M60 330 H1130" /></circle>
        </g>
      )}

      <text x="620" y="790" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Speed isn&apos;t about working faster. It&apos;s about not waiting.
      </text>
    </svg>
  );
}
