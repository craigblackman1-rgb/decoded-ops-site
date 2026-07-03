'use client';

import type { ReactNode } from 'react';

/**
 * Shared schematic vocabulary — grid backdrop, glass-card nodes, broken-link
 * motif — built to the visual language established by ThreeLayerSchematic
 * and SinglePointSchematic (layered navy/off-white ground, cyan/amber accent,
 * mono eyebrow, glass gradient chips with feDropShadow). Every page-specific
 * schematic in the sector/problem rollout should compose from these rather
 * than reinventing the ground.
 */
export type Tone = 'dark' | 'light';

export const fDisp = { fontFamily: 'var(--font-outfit), Outfit, sans-serif' } as const;
export const fBody = { fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' } as const;
export const fMono = { fontFamily: 'ui-monospace, "JetBrains Mono", monospace' } as const;

export const CYAN = '#219EBC';
export const AMBER = '#FFB703';
export const SKY = '#8ECAE6';

export function schematicPalette(tone: Tone) {
  return tone === 'dark'
    ? {
        bg: '#023047', grid: '#0a3d5c', gridOp: 0.55,
        ink: '#F8F9FA', sub: '#8ECAE6', mono: '#8ECAE6',
        cardBg: '#04314a', cardStroke: 'rgba(142,202,230,0.35)',
        chipBg: '#023047', line: '#8ECAE6',
        dropFlood: '#00121f', dropOpacity: 0.5,
        glassCyanFrom: '#a6d4e8', glassCyanFromOp: 0.13, glassCyanTo: '#219EBC', glassCyanToOp: 0.025,
        glassAmberFrom: '#ffd980', glassAmberFromOp: 0.16, glassAmberTo: '#FB8500', glassAmberToOp: 0.03,
      }
    : {
        bg: '#F8F9FA', grid: '#d2e3ec', gridOp: 1,
        ink: '#023047', sub: '#3A5F74', mono: '#219EBC',
        cardBg: '#ffffff', cardStroke: 'rgba(2,48,71,0.14)',
        chipBg: '#ffffff', line: '#5A7D8F',
        dropFlood: '#023047', dropOpacity: 0.12,
        glassCyanFrom: '#ffffff', glassCyanFromOp: 1, glassCyanTo: '#8ECAE6', glassCyanToOp: 0.14,
        glassAmberFrom: '#ffffff', glassAmberFromOp: 1, glassAmberTo: '#FFB703', glassAmberToOp: 0.16,
      };
}

/**
 * Shared <defs>: grid pattern, glass-node gradients (cyan + amber), drop
 * shadow filter, amber arrowhead marker. All ids namespaced
 * `${idPrefix}-...-${tone}` so multiple schematics can share a page safely.
 */
export function SchematicDefs({ tone, idPrefix }: { tone: Tone; idPrefix: string }) {
  const c = schematicPalette(tone);
  return (
    <defs>
      <pattern id={`${idPrefix}-grid-${tone}`} width="34" height="34" patternUnits="userSpaceOnUse">
        <path d="M34 0H0V34" fill="none" stroke={c.grid} strokeWidth="0.6" />
      </pattern>
      <linearGradient id={`${idPrefix}-glass-cyan-${tone}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.glassCyanFrom} stopOpacity={c.glassCyanFromOp} />
        <stop offset="100%" stopColor={c.glassCyanTo} stopOpacity={c.glassCyanToOp} />
      </linearGradient>
      <linearGradient id={`${idPrefix}-glass-amber-${tone}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.glassAmberFrom} stopOpacity={c.glassAmberFromOp} />
        <stop offset="100%" stopColor={c.glassAmberTo} stopOpacity={c.glassAmberToOp} />
      </linearGradient>
      <filter id={`${idPrefix}-shadow-${tone}`} x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={c.dropFlood} floodOpacity={c.dropOpacity} />
      </filter>
      <marker id={`${idPrefix}-ah-${tone}`} markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 Z" fill={AMBER} />
      </marker>
    </defs>
  );
}

/**
 * Rounded glass-card node. Caller positions its own <text> children within
 * the node's box (x..x+width, y..y+height).
 */
export function GlassNode({
  x, y, width, height, tone, idPrefix, accent = 'cyan', children,
}: {
  x: number; y: number; width: number; height: number;
  tone: Tone; idPrefix: string; accent?: 'cyan' | 'amber'; children?: ReactNode;
}) {
  const c = schematicPalette(tone);
  const stroke = accent === 'amber' ? 'rgba(255,183,3,0.45)' : c.cardStroke;
  return (
    <g filter={`url(#${idPrefix}-shadow-${tone})`}>
      <rect
        x={x} y={y} width={width} height={height} rx="9.5"
        fill={`url(#${idPrefix}-glass-${accent}-${tone})`}
        stroke={stroke}
        strokeWidth="1.4"
      />
      {children}
    </g>
  );
}

/**
 * Dashed sky connector with an amber X at the midpoint — the "broken wire"
 * motif for paths that don't actually work.
 */
export function BrokenLink({
  x1, y1, x2, y2, tone,
}: {
  x1: number; y1: number; x2: number; y2: number; tone: Tone;
}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={SKY} strokeWidth="2" strokeDasharray="6 6" strokeOpacity={tone === 'dark' ? 0.45 : 0.55} />
      <g transform={`translate(${mx}, ${my})`}>
        <circle r="10" fill={tone === 'dark' ? '#04314a' : '#ffffff'} stroke={AMBER} strokeWidth="1.4" />
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
      </g>
    </g>
  );
}

/** Mono micro-label — small caps-style annotation used for lane times, zone bands, etc. */
export function MonoLabel({
  x, y, tone, children, size = 11, opacity = 0.85, color, anchor = 'start',
}: {
  x: number; y: number; tone: Tone; children: ReactNode; size?: number; opacity?: number; color?: string; anchor?: 'start' | 'middle' | 'end';
}) {
  const c = schematicPalette(tone);
  return (
    <text x={x} y={y} textAnchor={anchor} style={fMono} fontSize={size} letterSpacing="1.5" fill={color ?? c.mono} opacity={opacity}>
      {children}
    </text>
  );
}

/** Mono eyebrow + Outfit 800 headline pair, positioned top-left as in the reference schematics. */
export function Eyebrow({
  tone, eyebrow, headline, eyebrowColor = CYAN,
}: {
  tone: Tone; eyebrow: string; headline: string; eyebrowColor?: string;
}) {
  const c = schematicPalette(tone);
  return (
    <>
      <text x="60" y="60" style={fMono} fontSize="13" letterSpacing="3" fill={eyebrowColor} className="sch-fade sch-f1">{eyebrow}</text>
      <text x="60" y="98" style={fDisp} fontWeight="800" fontSize="30" fill={c.ink} className="sch-fade sch-f1">{headline}</text>
    </>
  );
}
