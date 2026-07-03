'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * Repeat-order / contract-kit logic, drawn as a stock-holding promise rather
 * than a production line. Left: a contract customer with a circular
 * repeat-order loop anchored to the node's top edge (cyan, "same kit, every
 * month"). Centre: a size-curve matrix — a mini 4x3 grid of cells standing
 * in for stock held by size, with two amber cells flagging stockout risk —
 * then a wearer-packs node. Right: call-off logic feeding despatch. Built on
 * the shared schematic primitives, matching GarmentDecorationSchematic /
 * ManualWorkaroundsSchematic.
 *
 * Layout (1240x860): main flow on midline y=470 (~55%, matching the garment
 * pilot's vertical balance). Contract customer node (50-260, y=410-530) with
 * the loop arc rising from its top edge to a label at y=296. Size-curve
 * block x=446-726 (y=316-584), wearer packs 800-970, call-off 1000-1200
 * (y=330-430) and despatch 1000-1200 (y=510-610) stacked at the far right.
 * Zone labels single row y=170. Type: headline 46, eyebrow/zones 20, node
 * mains 26-28, mono subs 17-18, micro 17, caption 25.
 */
const ID = 'wt';

const MID = 470;
const GRID_X = 470;   // size-curve first cell left edge
const GRID_Y = 370;   // size-curve first cell top edge
const CELL_W = 58;
const CELL_H = 46;
const PACKS_X = 800;
const CALLOFF_X = 1000;

export function WorkwearTeamwearSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const c = schematicPalette(tone);

  // size-curve grid cells: 4 cols (S M L XL) x 3 rows, two amber "empty" cells
  const cols = 4;
  const rows = 3;
  const amberCells = new Set(['1-3', '2-0']); // row-col flagged as stockout risk
  const cells: { x: number; y: number; key: string }[] = [];
  for (let r = 0; r < rows; r++) {
    for (const col of Array.from({ length: cols }, (_, i) => i)) {
      cells.push({ x: GRID_X + col * CELL_W, y: GRID_Y + r * CELL_H, key: `${r}-${col}` });
    }
  }

  return (
    <svg viewBox="0 0 1240 860" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Workwear and teamwear repeat-order schematic: a contract customer feeds a recurring order loop into a size-curve stock matrix, showing named wearer packs and stockout risk by size, before call-off despatch.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">SECTOR SCHEMATIC — WORKWEAR &amp; TEAMWEAR</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Repeat orders live or die on stock</text>

      {/* zone bands */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="20" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="150" y="170" textAnchor="middle">CONTRACT</text>
        <text x="600" y="170" textAnchor="middle">STOCK HOLDING</text>
        <text x="1080" y="170" textAnchor="middle">CALL-OFF</text>
      </g>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* repeat-order loop anchored to the contract customer node's top edge */}
      <path id={`${ID}-p-loop-${tone}`} className="sch-draw sch-d2" d={`M110 ${MID - 60} C 60 ${MID - 150} 240 ${MID - 150} 190 ${MID - 60}`} fill="none" stroke={CYAN} strokeWidth="2.5" strokeDasharray="6 7" strokeOpacity="0.9" markerEnd={`url(#${ID}-ah-${tone})`} />
      <text x="150" y={MID - 174} textAnchor="middle" style={fMono} fontSize="18" letterSpacing="1.5" fill={CYAN} opacity="0.9" className="sch-fade sch-f2">SAME KIT, EVERY MONTH</text>

      {/* main path: contract -> size-curve matrix */}
      <path id={`${ID}-p-cm-${tone}`} className="sch-draw sch-d2" d={`M260 ${MID} H440`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      {/* matrix -> wearer packs */}
      <path id={`${ID}-p-mp-${tone}`} className="sch-draw sch-d3" d={`M732 ${MID} H792`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      {/* wearer packs -> call-off */}
      <path id={`${ID}-p-pc-${tone}`} className="sch-draw sch-d4" d={`M970 ${MID} C 992 ${MID} 992 400 996 384`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      {/* call-off -> despatch */}
      <path id={`${ID}-p-cd-${tone}`} className="sch-draw sch-d5" d={`M1100 430 C 1112 455 1112 485 1100 506`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* contract customer node */}
      <GlassNode x={50} y={MID - 60} width={210} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={74} y={MID - 22} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>CONTRACT</text>
          <text x={74} y={MID + 10} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>CUSTOMER</text>
          <text x={74} y={MID + 42} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">named accounts</text>
        </g>
      </GlassNode>

      {/* size-curve matrix block */}
      <g className="sch-fade sch-f2">
        <rect x={GRID_X - 24} y={GRID_Y - 54} width={cols * CELL_W + 48} height={rows * CELL_H + 130} rx="9.5" fill={c.cardBg} stroke={c.cardStroke} strokeWidth="1.4" filter={`url(#${ID}-shadow-${tone})`} />
        <text x={GRID_X + (cols * CELL_W) / 2} y={GRID_Y - 26} textAnchor="middle" style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>SIZE CURVE</text>
        {cells.map((cell) => (
          <rect
            key={cell.key}
            x={cell.x} y={cell.y} width={CELL_W - 6} height={CELL_H - 6} rx="4"
            fill={amberCells.has(cell.key) ? 'transparent' : (tone === 'dark' ? 'rgba(142,202,230,0.16)' : 'rgba(33,158,188,0.12)')}
            stroke={amberCells.has(cell.key) ? AMBER : c.cardStroke}
            strokeWidth={amberCells.has(cell.key) ? 2 : 1}
            strokeDasharray={amberCells.has(cell.key) ? '4 3' : undefined}
          />
        ))}
        <text x={GRID_X + CELL_W * 0.5} y={GRID_Y + rows * CELL_H + 30} textAnchor="middle" style={fMono} fontSize="17" fill={c.mono} opacity="0.85">S</text>
        <text x={GRID_X + CELL_W * 1.5} y={GRID_Y + rows * CELL_H + 30} textAnchor="middle" style={fMono} fontSize="17" fill={c.mono} opacity="0.85">M</text>
        <text x={GRID_X + CELL_W * 2.5} y={GRID_Y + rows * CELL_H + 30} textAnchor="middle" style={fMono} fontSize="17" fill={c.mono} opacity="0.85">L</text>
        <text x={GRID_X + CELL_W * 3.5} y={GRID_Y + rows * CELL_H + 30} textAnchor="middle" style={fMono} fontSize="17" fill={c.mono} opacity="0.85">XL</text>
        <text x={GRID_X + (cols * CELL_W) / 2} y={GRID_Y + rows * CELL_H + 62} textAnchor="middle" style={fMono} fontSize="17" letterSpacing="1" fill={AMBER} opacity="0.9">stock holding by size</text>
      </g>

      {/* wearer packs node */}
      <GlassNode x={PACKS_X} y={MID - 60} width={170} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={PACKS_X + 22} y={MID - 22} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>WEARER</text>
          <text x={PACKS_X + 22} y={MID + 10} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>PACKS</text>
          <text x={PACKS_X + 22} y={MID + 42} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">per employee</text>
        </g>
      </GlassNode>

      {/* call-off node */}
      <GlassNode x={CALLOFF_X} y={330} width={200} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={CALLOFF_X + 20} y={374} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>CALL-OFF</text>
          <text x={CALLOFF_X + 20} y={404} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">held · called off</text>
        </g>
      </GlassNode>

      {/* despatch node */}
      <GlassNode x={CALLOFF_X} y={510} width={200} height={100} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={CALLOFF_X + 20} y={554} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>DESPATCH</text>
          <text x={CALLOFF_X + 20} y={584} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">named delivery</text>
        </g>
      </GlassNode>

      {motion && (
        <g>
          <circle r="6.5" fill={CYAN}><animateMotion dur="4.5s" repeatCount="indefinite"><mpath href={`#${ID}-p-loop-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-cm-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2.2s" begin="1.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-mp-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="2.6s" begin="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-pc-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={AMBER}><animateMotion dur="2.2s" begin="4s" repeatCount="indefinite"><mpath href={`#${ID}-p-cd-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Contract kit is a stock-holding promise. The system has to keep it.
      </text>
    </svg>
  );
}
