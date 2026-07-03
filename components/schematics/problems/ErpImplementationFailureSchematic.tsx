'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "The go-live cliff" — a left-to-right timeline with three project-phase
 * nodes (SCOPE, BUILD, TRAINING), then an amber vertical cliff line at
 * GO-LIVE. After the cliff, the line fragments: dashed drops to two amber
 * chips (SPREADSHEETS RETURN, WORKAROUNDS) while a faint cyan "what was
 * promised" line continues straight and fades out. Built on the shared
 * schematic primitives, matching ManualWorkaroundsSchematic /
 * GarmentDecorationSchematic.
 *
 * Layout (1240x860): timeline midline y=380, month-mark ticks along it.
 * Three phase nodes at x=80/380/680 (width 240, height 110). Cliff line at
 * x=980. Faint cyan continuation line runs from the cliff to the right edge
 * fading via gradient opacity. Two amber post-cliff chips sit lower down
 * (y=560-680), well clear of the timeline and its month marks. Type at
 * ~0.46 scale: headline 46, eyebrow/zones 20, node mains 24-27, mono subs
 * 17-19, annotations 17-18, caption 25.
 */
const ID = 'eif';
const MID = 380;
const CLIFF_X = 980;

export function ErpImplementationFailureSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Go-live cliff diagram: a project timeline moves through scope, build and training, hits a go-live cliff, then fragments into spreadsheets returning and workarounds forming, while the straight line of what was promised fades out."
    >
      <SchematicDefs tone={tone} idPrefix={ID} />
      <defs>
        <linearGradient id={`${ID}-fade-${tone}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={CYAN} stopOpacity="0.7" />
          <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — THE GO-LIVE CLIFF</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">The project ended. The problems started</text>

      {/* timeline with month ticks */}
      <line x1="80" y1={MID} x2={CLIFF_X} y2={MID} stroke={CYAN} strokeWidth="2.6" className="sch-draw sch-d2" />
      {['MONTH 1', 'MONTH 2', 'MONTH 3'].map((m, i) => {
        const x = [350, 650, 950][i];
        return (
          <g key={m} className="sch-fade sch-f2">
            <line x1={x} y1={MID - 8} x2={x} y2={MID + 8} stroke={CYAN} strokeWidth="1.6" opacity="0.6" />
            <text x={x} y={MID - 20} textAnchor="middle" style={fMono} fontSize="17" fill={c.mono} opacity="0.65">{m}</text>
          </g>
        );
      })}

      {/* what was promised — continues past the cliff, fades */}
      <line x1={CLIFF_X} y1={MID} x2="1180" y2={MID} stroke={`url(#${ID}-fade-${tone})`} strokeWidth="2.6" strokeDasharray="2 6" className="sch-fade sch-f4" />
      <text x="1080" y={MID - 20} textAnchor="middle" style={fMono} fontSize="17" fill={CYAN} opacity="0.55" className="sch-fade sch-f4">what was promised</text>

      {/* go-live cliff */}
      <line x1={CLIFF_X} y1={MID - 90} x2={CLIFF_X} y2={MID + 90} stroke={AMBER} strokeWidth="3" className="sch-fade sch-f3" />
      <text x={CLIFF_X} y={MID - 100} textAnchor="middle" style={fMono} fontSize="19" letterSpacing="2" fill={AMBER} opacity="0.95" className="sch-fade sch-f3">GO-LIVE</text>

      {/* phase nodes */}
      <GlassNode x={80} y={MID - 55} width={240} height={110} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={106} y={MID - 2} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>SCOPE</text>
          <text x={106} y={MID + 26} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">vendor&apos;s template</text>
        </g>
      </GlassNode>
      <GlassNode x={380} y={MID - 55} width={240} height={110} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={406} y={MID - 2} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>BUILD</text>
          <text x={406} y={MID + 26} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">config, not process</text>
        </g>
      </GlassNode>
      <GlassNode x={680} y={MID - 55} width={240} height={110} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={706} y={MID - 2} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>TRAINING</text>
          <text x={706} y={MID + 26} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">one afternoon</text>
        </g>
      </GlassNode>

      {/* post go-live fragments — dashed drops to amber chips, well below the timeline */}
      <path id={`${ID}-p-drop1-${tone}`} className="sch-draw sch-d4" d={`M${CLIFF_X + 20} ${MID + 20} C ${CLIFF_X - 40} 480, 900 560, 850 600`} fill="none" stroke={AMBER} strokeWidth="2.2" strokeDasharray="6 6" markerEnd={`url(#${ID}-ah-${tone})`} />
      <path id={`${ID}-p-drop2-${tone}`} className="sch-draw sch-d4" d={`M${CLIFF_X + 60} ${MID + 20} C ${CLIFF_X + 120} 500, 1140 560, 1090 600`} fill="none" stroke={AMBER} strokeWidth="2.2" strokeDasharray="6 6" markerEnd={`url(#${ID}-ah-${tone})`} />

      <GlassNode x={630} y={610} width={280} height={110} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={656} y={654} style={fDisp} fontWeight="700" fontSize="23" fill={c.ink}>SPREADSHEETS</text>
          <text x={656} y={678} style={fDisp} fontWeight="700" fontSize="23" fill={c.ink}>RETURN</text>
          <text x={656} y={704} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">week two</text>
        </g>
      </GlassNode>
      <GlassNode x={950} y={610} width={230} height={110} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f4">
          <text x={976} y={654} style={fDisp} fontWeight="700" fontSize="23" fill={c.ink}>WORKAROUNDS</text>
          <text x={976} y={682} style={fMono} fontSize="17" fill={AMBER} opacity="0.9">week two</text>
        </g>
      </GlassNode>

      {motion && (
        <g>
          <circle r="6" fill={CYAN}><animateMotion dur="3.4s" repeatCount="indefinite" path={`M80 ${MID} H${CLIFF_X}`} /></circle>
          <circle r="6" fill={AMBER}><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href={`#${ID}-p-drop1-${tone}`} /></animateMotion></circle>
          <circle r="6" fill={AMBER}><animateMotion dur="3.6s" begin="1s" repeatCount="indefinite"><mpath href={`#${ID}-p-drop2-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="800" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        Implementation isn&apos;t the finish line. It&apos;s where the real work begins.
      </text>
    </svg>
  );
}
