'use client';

import { useEffect, useState } from 'react';
import {
  schematicPalette, SchematicDefs, GlassNode,
  fDisp, fBody, fMono, CYAN, AMBER,
} from '../primitives';
import type { Tone } from '../primitives';

/**
 * "Untested restore path" — a solid cyan line runs LIVE SYSTEM -> BACKUP
 * (the easy, proven half of the job), then a long dashed amber arc labelled
 * THE RESTORE PATH loops back toward a RECOVERED? node that's never been
 * rehearsed, with an amber X mid-arc. Below, a three-line mono checklist
 * spells out what's actually been tested. Built on the shared schematic
 * primitives, matching ManualWorkaroundsSchematic / GarmentDecorationSchematic.
 *
 * Layout (1240x860): three nodes on a midline y=340 — LIVE SYSTEM (x=90-330),
 * BACKUP (x=520-760), RECOVERED? (x=950-1190) — with the restore arc
 * dropping from BACKUP down and back left-to-right beneath the midline to
 * RECOVERED?, well clear of the checklist block at y=560-720. Type at ~0.46
 * scale: headline 46, eyebrow/zones 20, node mains 24-28, mono subs 18-19,
 * annotations 17-18, caption 25.
 */
const ID = 'dr';
const MID = 340;

export function DisasterRecoverySchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
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
      aria-label="Untested recovery diagram: the live system backs up to a nightly backup that nobody checks, then a long dashed restore path loops back toward a recovery that has never been rehearsed, breaking partway with an X."
    >
      <SchematicDefs tone={tone} idPrefix={ID} />

      {/* backdrop */}
      <rect width="1240" height="860" rx="16" fill={c.bg} />
      <rect width="1240" height="860" rx="16" fill={`url(#${ID}-grid-${tone})`} opacity={c.gridOp} />
      <rect x="0" y="0" width="1240" height="6" fill={AMBER} />

      {/* eyebrow + headline */}
      <text x="60" y="64" style={fMono} fontSize="20" letterSpacing="3" fill={CYAN} className="sch-fade sch-f1">PROBLEM SCHEMATIC — UNTESTED RECOVERY</text>
      <text x="60" y="118" style={fDisp} fontWeight="800" fontSize="46" fill={c.ink} className="sch-fade sch-f1">A backup is not a recovery plan</text>

      {/* live -> backup: solid cyan, proven */}
      <path d={`M330 ${MID} H520`} className="sch-draw sch-d2" fill="none" stroke={CYAN} strokeWidth="2.6" markerEnd={`url(#${ID}-ah-${tone})`} />

      {/* restore arc: backup -> recovered?, dashed amber, breaks mid-arc */}
      <path id={`${ID}-p-restore-${tone}`} className="sch-draw sch-d3" d={`M640 ${MID + 70} C 660 500, 900 500, 940 420`} fill="none" stroke={AMBER} strokeWidth="2.4" strokeDasharray="7 6" strokeOpacity="0.9" />
      <path d={`M960 ${MID + 60} C 1000 470, 1030 430, 1040 ${MID + 20}`} className="sch-draw sch-d4" fill="none" stroke={AMBER} strokeWidth="2.4" strokeDasharray="7 6" strokeOpacity="0.9" markerEnd={`url(#${ID}-ah-${tone})`} />
      <g transform="translate(950, 445)" className="sch-fade sch-f3">
        <circle r="13" fill={tone === 'dark' ? '#04314a' : '#ffffff'} stroke={AMBER} strokeWidth="1.8" />
        <path d="M-5.5 -5.5 L5.5 5.5 M5.5 -5.5 L-5.5 5.5" stroke={AMBER} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <text x="800" y="560" textAnchor="middle" style={fMono} fontSize="20" letterSpacing="3" fill={AMBER} opacity="0.9" className="sch-fade sch-f3">THE RESTORE PATH</text>
      <text x="800" y="590" textAnchor="middle" style={fMono} fontSize="18" fill={AMBER} opacity="0.8" className="sch-fade sch-f3">found out on the worst day</text>

      {/* nodes */}
      <GlassNode x={90} y={MID - 60} width={240} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={116} y={MID - 8} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>LIVE SYSTEM</text>
          <text x={116} y={MID + 24} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">production data</text>
        </g>
      </GlassNode>
      <GlassNode x={520} y={MID - 60} width={240} height={120} tone={tone} idPrefix={ID} accent="cyan">
        <g className="sch-fade sch-f2">
          <text x={546} y={MID - 8} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>BACKUP</text>
          <text x={546} y={MID + 24} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">runs nightly</text>
          <text x={546} y={MID + 48} style={fMono} fontSize="18" fill={c.mono} opacity="0.85">nobody checks</text>
        </g>
      </GlassNode>
      <GlassNode x={950} y={MID - 60} width={240} height={120} tone={tone} idPrefix={ID} accent="amber">
        <g className="sch-fade sch-f2">
          <text x={976} y={MID - 8} style={fDisp} fontWeight="700" fontSize="27" fill={c.ink}>RECOVERED?</text>
          <text x={976} y={MID + 24} style={fMono} fontSize="18" fill={AMBER} opacity="0.9">never rehearsed</text>
        </g>
      </GlassNode>

      {/* checklist block */}
      <g className="sch-fade sch-f4">
        <rect x="90" y="640" width="1060" height="150" rx="10" fill="none" stroke={c.grid} strokeWidth="1.4" />
        <text x="120" y="682" style={fMono} fontSize="20" fill={c.ink} opacity="0.9">backup runs</text>
        <text x="620" y="682" style={fMono} fontSize="20" fill={CYAN}>— yes</text>
        <text x="120" y="720" style={fMono} fontSize="20" fill={c.ink} opacity="0.9">restore tested</text>
        <text x="620" y="720" style={fMono} fontSize="20" fill={AMBER}>— never</text>
        <text x="120" y="758" style={fMono} fontSize="20" fill={c.ink} opacity="0.9">who knows how</text>
        <text x="620" y="758" style={fMono} fontSize="20" fill={AMBER}>— one person</text>
      </g>

      {motion && (
        <g>
          <circle r="6" fill={CYAN}><animateMotion dur="2.8s" repeatCount="indefinite" path={`M330 ${MID} H520`} /></circle>
          <circle r="6.5" fill={AMBER}><animateMotion dur="4.5s" repeatCount="indefinite"><mpath href={`#${ID}-p-restore-${tone}`} /></animateMotion></circle>
        </g>
      )}

      <text x="620" y="825" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="25" fill={c.sub} opacity="0.85" className="sch-fade sch-f4">
        The nightly job proves data was copied. Not that the business comes back.
      </text>
    </svg>
  );
}
