'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * Project pipeline, not order pipeline: survey feeds design & proof (with an
 * amber revision loop), which splits into two parallel production lanes —
 * print & cut, fabricate — that converge at install. Install carries a
 * literal calendar/schedule motif (the fixed constraint everything plans
 * backwards from) before a short final hop to sign-off. Different topology
 * to GarmentDecorationSchematic's fan-and-converge: here the split lanes are
 * short and the calendar block is the visual centrepiece, not a lane.
 *
 * Layout (1240x860): main flow on midline y=430. Survey -> design (with loop
 * arc above, y~240-370) -> split at x=610 into lanes at y=280/y=610 (330px
 * apart) -> converge into a tall INSTALL block (x=895-1095, y=320-540)
 * containing a 7-cell calendar strip stacked above a two-line sub with
 * clearance -> forward arrow into a SIGN-OFF chip fully clear to the right
 * (x=1125-1235). Zone labels single row y=170. Type: headline 46,
 * eyebrow/zones 20, node mains 24-28, mono subs 18-20, micro 17-19,
 * caption 25.
 */
const ID = 'sg';

const MID = 430;
const SPLIT_X = 610;
const LANE_TOP = 280;
const LANE_BOT = 610;
const LANE_X = 650;
const LANE_W = 210;
const INSTALL_X = 895;   // install block 895-1095
const SIGNOFF_X = 1125;  // sign-off chip 1125-1235

export function SignsGraphicsSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Signs and graphics project pipeline schematic: a site survey feeds design and proof with a client revision loop, splitting into print and cut, and fabricate lanes, converging at a scheduled install with a calendar motif before sign-off.">
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">SECTOR SCHEMATIC — SIGNS &amp; GRAPHICS</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">Every job is a project with a deadline on site</text>

      {/* zone bands */}
      <g className="sch-fade sch-f1" style={fMono} fontSize="20" letterSpacing="2.5" fill={c.mono} opacity="0.6">
        <text x="160" y="170" textAnchor="middle">SURVEY &amp; PROOF</text>
        <text x="750" y="170" textAnchor="middle">PRODUCTION</text>
        <text x="1080" y="170" textAnchor="middle">ON SITE</text>
      </g>
      <line x1="60" y1="184" x2="1180" y2="184" stroke={c.grid} strokeWidth="1" className="sch-fade sch-f1" />

      {/* main path: survey -> design */}
      <path id={`${ID}-p-sd-${tone}`} className="sch-draw sch-d2" d={`M250 ${MID} H320`} fill="none" stroke={CYAN} strokeWidth="2.5" markerEnd={`url(#${ID}-ah-${tone})`} />
      {/* design -> split */}
      <path id={`${ID}-p-ds-${tone}`} className="sch-draw sch-d2" d={`M540 ${MID} H${SPLIT_X}`} fill="none" stroke={CYAN} strokeWidth="2.5" />
      <circle cx={SPLIT_X} cy={MID} r="7" fill={AMBER} className="sch-fade sch-f3" />

      {/* revision loop above design */}
      <path id={`${ID}-p-loop-${tone}`} className="sch-draw sch-d2" d="M370 370 C 350 260 510 260 490 370" fill="none" stroke={AMBER} strokeWidth="2.5" strokeDasharray="6 7" strokeOpacity="0.9" markerEnd={`url(#${ID}-ah-${tone})`} />
      <text x="430" y="240" textAnchor="middle" style={fMono} fontSize="18" letterSpacing="1.5" fill={AMBER} opacity="0.9" className="sch-fade sch-f2">CLIENT CHANGES</text>

      {/* split -> lanes */}
      <path id={`${ID}-p-st-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 630 340 630 300 ${LANE_X} ${LANE_TOP}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-sb-${tone}`} className="sch-draw sch-d3" d={`M${SPLIT_X} ${MID} C 630 520 630 560 ${LANE_X} ${LANE_BOT}`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* lanes -> install (converge) */}
      <path id={`${ID}-p-ti-${tone}`} className="sch-draw sch-d4" d={`M${LANE_X + LANE_W} ${LANE_TOP} C 872 ${LANE_TOP} 882 345 ${INSTALL_X - 2} 383`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-bi-${tone}`} className="sch-draw sch-d4" d={`M${LANE_X + LANE_W} ${LANE_BOT} C 872 ${LANE_BOT} 882 515 ${INSTALL_X - 2} 477`} fill="none" stroke={CYAN} strokeWidth="2.2" strokeOpacity="0.85" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* install -> sign-off (forward, left to right) */}
      <path id={`${ID}-p-ig-${tone}`} className="sch-draw sch-d5" d={`M${INSTALL_X + 200} ${MID} H${SIGNOFF_X - 7}`} fill="none" stroke={AMBER} strokeWidth="2.3" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* ===== nodes ===== */}
      <GlassNode x={50} y={MID - 60} width={200} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={74} y={MID - 8} style={fDisp} fontWeight="700" fontSize="28" fill={c.ink}>SURVEY</text>
          <text x={74} y={MID + 28} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">site visit · measure</text>
        </g>
      </GlassNode>

      <GlassNode x={320} y={MID - 60} width={220} height={120} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={344} y={MID - 22} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>DESIGN &amp;</text>
          <text x={344} y={MID + 10} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>PROOF</text>
          <text x={344} y={MID + 42} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">revision loop</text>
        </g>
      </GlassNode>

      {/* print & cut lane */}
      <GlassNode x={LANE_X} y={LANE_TOP - 55} width={LANE_W} height={110} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 20} y={LANE_TOP - 8} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>PRINT &amp; CUT</text>
          <text x={LANE_X + 20} y={LANE_TOP + 24} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">wide format · vinyl</text>
        </g>
      </GlassNode>

      {/* fabricate lane */}
      <GlassNode x={LANE_X} y={LANE_BOT - 55} width={LANE_W} height={110} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f3">
          <text x={LANE_X + 20} y={LANE_BOT - 8} style={fDisp} fontWeight="700" fontSize="26" fill={c.ink}>FABRICATE</text>
          <text x={LANE_X + 20} y={LANE_BOT + 24} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">built to spec</text>
        </g>
      </GlassNode>

      {/* install block with calendar/schedule motif — calendar and sub stacked with clearance */}
      <GlassNode x={INSTALL_X} y={320} width={200} height={220} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={INSTALL_X + 24} y={366} style={fDisp} fontWeight="800" fontSize="28" fill={c.ink}>INSTALL</text>
          {/* mini calendar: 7-cell strip, one amber (the booked day) */}
          <g transform={`translate(${INSTALL_X + 24}, 386)`}>
            {Array.from({ length: 7 }, (_, i) => i).map((i) => (
              <rect
                key={i}
                x={i * 23} y={0} width="19" height="19" rx="3"
                fill={i === 4 ? AMBER : 'transparent'}
                stroke={i === 4 ? AMBER : c.cardStroke}
                strokeWidth={i === 4 ? 1.6 : 1}
              />
            ))}
          </g>
          <text x={INSTALL_X + 24} y={452} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">booked crew</text>
          <text x={INSTALL_X + 24} y={480} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">site access</text>
        </g>
      </GlassNode>

      {/* sign-off chip — fully clear of install, to its right */}
      <GlassNode x={SIGNOFF_X} y={MID - 45} width={110} height={90} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f4">
          <text x={SIGNOFF_X + 22} y={MID - 4} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>SIGN-</text>
          <text x={SIGNOFF_X + 22} y={MID + 26} style={fDisp} fontWeight="700" fontSize="24" fill={c.ink}>OFF</text>
        </g>
      </GlassNode>

      {motion && (
        <g>
          <circle r="6" fill={CYAN}><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-sd-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={CYAN}><animateMotion dur="2.6s" begin="1.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-ds-${tone}`} /></animateMotion></circle>
          <circle r="6.5" fill={AMBER}><animateMotion dur="4.8s" repeatCount="indefinite"><mpath href={`#${ID}-p-loop-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.4s" begin="2.6s" repeatCount="indefinite"><mpath href={`#${ID}-p-st-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.6s" begin="3s" repeatCount="indefinite"><mpath href={`#${ID}-p-sb-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.4s" begin="4.4s" repeatCount="indefinite"><mpath href={`#${ID}-p-ti-${tone}`} /></animateMotion></circle>
          <circle r="5.5" fill={CYAN}><animateMotion dur="3.6s" begin="4.8s" repeatCount="indefinite"><mpath href={`#${ID}-p-bi-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={AMBER}><animateMotion dur="2s" begin="6.5s" repeatCount="indefinite"><mpath href={`#${ID}-p-ig-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="820" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        The install date is fixed. Everything upstream has to plan backwards from it.
      </text>
    </svg>
  );
}
