'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode, MonoLabel,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * Personalisation as a data merge: two separate inputs — the physical
 * product and the customer's data file — converge at a single check point,
 * then the job forks into one-offs and batch runs before recombining into a
 * single engrave/print stage and a final despatch. A double-diamond: two
 * sources converge, one process diverges, two lanes reconverge. Different
 * topology to every other sector schematic here — none of them open with a
 * two-source merge.
 *
 * Layout (1240x860): PRODUCT (x=50,y=190) and DATA FILE (x=50,y=610, amber —
 * the risk) converge into MERGE & CHECK (x=320,y=390-510, MID=450). Split at
 * x=560 into ONE-OFFS (x=600,y=230-320) and BATCH (x=600,y=610-700), both
 * converging into ENGRAVE/PRINT (x=860,y=390-510), then a short hop to PACK
 * & DESPATCH (x=1080,y=400-500). Zone labels single row y=170. Type: headline
 * 46, eyebrow/zones 20, node mains 24-28, mono subs 17-19, micro 17, caption 25.
 */
const ID = 'ae';
const MID = 450;
const MERGE_X = 320;
const SPLIT_X = 560;
const LANE_X = 600;
const LANE_TOP = 275;
const LANE_BOT = 655;
const ENGRAVE_X = 860;
const PACK_X = 1080;

export function AwardsEngravingSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Awards and engraving personalisation schematic: a product and a customer data file converge at a merge and check point, splitting into one-off and batch lanes, before recombining into engrave and print, then pack and despatch with a fixed event date.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">SECTOR SCHEMATIC — AWARDS &amp; ENGRAVING</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">The data file is the production line</text>

      {/* zone bands */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="20" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="150" y="170" textAnchor="middle">INPUTS</text>
        <text x="620" y="170" textAnchor="middle">MERGE &amp; RUN TYPE</text>
        <text x="1080" y="170" textAnchor="middle">OUT THE DOOR</text>
      </g>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* inputs -> merge */}
      <path id={`${ID}-p-pm-${tone}`} className="sch-draw sch-d2" d={`M250 245 C 300 245 300 400 ${MERGE_X - 10} 420`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-dm-${tone}`} className="sch-draw sch-d2" d={`M270 675 C 320 675 320 500 ${MERGE_X - 10} 480`} fill="none" stroke={AMBER} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* merge -> split */}
      <path id={`${ID}-p-ms-${tone}`} className="sch-draw sch-d3" d={`M540 ${MID} H${SPLIT_X}`} fill="none" stroke={CYAN} strokeWidth="2.5" />
      <circle cx={SPLIT_X} cy={MID} r="7" fill={AMBER} className="sch-fade sch-f3" />

      {/* split -> lanes */}
      <path id={`${ID}-p-so-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 580 360 580 310 ${LANE_X} ${LANE_TOP}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-sb-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 580 540 580 590 ${LANE_X} ${LANE_BOT}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* lanes -> engrave (reconverge) */}
      <path id={`${ID}-p-oe-${tone}`} className="sch-draw sch-d4" d={`M780 ${LANE_TOP} C 820 ${LANE_TOP} 830 380 ${ENGRAVE_X} 410`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-be-${tone}`} className="sch-draw sch-d4" d={`M780 ${LANE_BOT} C 820 ${LANE_BOT} 830 520 ${ENGRAVE_X} 490`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* engrave -> pack */}
      <path id={`${ID}-p-ep-${tone}`} className="sch-draw sch-d5" d={`M1040 ${MID} H${PACK_X}`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* ===== nodes ===== */}
      <GlassNode x={50} y={190} width={200} height={110} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={74} y={240} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>PRODUCT</text>
          <text x={74} y={270} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">trophy · plaque · glass</text>
        </g>
      </GlassNode>

      <GlassNode x={50} y={610} width={230} height={130} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={74} y={660} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>DATA FILE</text>
          <text x={74} y={690} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">names · dates · spellings</text>
          <text x={74} y={716} style={fMono} fontSize="15" fill={AMBER} opacity="0.75">one typo = one remake</text>
        </g>
      </GlassNode>

      <GlassNode x={MERGE_X} y={MID - 60} width={220} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={MERGE_X + 24} y={MID - 8} style={fDisp} fontWeight="700" fontSize="25" fill={c.ink}>MERGE &amp; CHECK</text>
          <text x={MERGE_X + 24} y={MID + 26} style={fMono} fontSize="17" fill={c.mono} opacity="0.85">spec vs data, verified</text>
        </g>
      </GlassNode>

      <GlassNode x={LANE_X} y={LANE_TOP - 45} width={180} height={90} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 20} y={LANE_TOP - 2} style={fDisp} fontWeight="700" fontSize="23" fill={c.ink}>ONE-OFFS</text>
          <text x={LANE_X + 20} y={LANE_TOP + 24} style={fMono} fontSize="16" fill={c.mono} opacity="0.85">single pieces</text>
        </g>
      </GlassNode>

      <GlassNode x={LANE_X} y={LANE_BOT - 45} width={180} height={90} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 20} y={LANE_BOT - 2} style={fDisp} fontWeight="700" fontSize="23" fill={c.ink}>BATCH</text>
          <text x={LANE_X + 20} y={LANE_BOT + 24} style={fMono} fontSize="16" fill={c.mono} opacity="0.85">event sets · teams</text>
        </g>
      </GlassNode>

      <GlassNode x={ENGRAVE_X} y={MID - 60} width={180} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={ENGRAVE_X + 20} y={MID - 8} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>ENGRAVE /</text>
          <text x={ENGRAVE_X + 20} y={MID + 22} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>PRINT</text>
        </g>
      </GlassNode>

      <GlassNode x={PACK_X} y={MID - 50} width={110} height={100} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={PACK_X + 16} y={MID - 6} style={fDisp} fontWeight="700" fontSize="21" fill={c.ink}>PACK &amp;</text>
          <text x={PACK_X + 16} y={MID + 20} style={fDisp} fontWeight="700" fontSize="21" fill={c.ink}>DESPATCH</text>
        </g>
      </GlassNode>
      <MonoLabel x={PACK_X + 55} y={MID + 72} tone={tone} size={17} color={AMBER} anchor="middle">event date fixed</MonoLabel>

      {motion && (
        <g>
          <circle r="6" fill={CYAN}><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-pm-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={AMBER}><animateMotion dur="2.8s" begin="0.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-dm-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2s" begin="2s" repeatCount="indefinite"><mpath href={`#${ID}-p-ms-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3s" begin="3s" repeatCount="indefinite"><mpath href={`#${ID}-p-so-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.2s" begin="3.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-sb-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3s" begin="4.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-oe-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.2s" begin="5s" repeatCount="indefinite"><mpath href={`#${ID}-p-be-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={AMBER}><animateMotion dur="2.2s" begin="6.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-ep-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Get the spreadsheet wrong and the remake queue eats the margin.
      </text>
    </svg>
  );
}
