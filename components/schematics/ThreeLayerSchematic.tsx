'use client';

import { useEffect, useState } from 'react';

/**
 * The Decoded Method shown as a live operations schematic:
 * a Process Register spine feeding one-page SOPs, with an Improvement Log
 * looping back to update the register. Blueprint/editorial language + restrained
 * motion (data flowing through the system). Honours prefers-reduced-motion.
 */
type Tone = 'dark' | 'light';

const palette = (tone: Tone) =>
  tone === 'dark'
    ? {
        bg: '#023047', grid: '#0a3d5c', gridOp: 0.55,
        ink: '#F8F9FA', sub: '#8ECAE6', mono: '#8ECAE6',
        spine: '#219EBC', cardBg: '#04314a', cardStroke: 'rgba(142,202,230,0.35)',
        rows: '#8ECAE6', chipBg: '#023047',
      }
    : {
        bg: '#F8F9FA', grid: '#d2e3ec', gridOp: 1,
        ink: '#023047', sub: '#3A5F74', mono: '#219EBC',
        spine: '#219EBC', cardBg: '#ffffff', cardStroke: 'rgba(2,48,71,0.14)',
        rows: '#8AA8B5', chipBg: '#ffffff',
      };

const fDisp = { fontFamily: 'var(--font-outfit), Outfit, sans-serif' } as const;
const fBody = { fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' } as const;
const fMono = { fontFamily: 'ui-monospace, "JetBrains Mono", monospace' } as const;

export function ThreeLayerSchematic({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const c = palette(tone);
  const cyan = '#219EBC', amber = '#FFB703';

  return (
    <svg viewBox="0 0 1240 720" className={className} style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="The Decoded Method as an operations schematic: a Process Register spine feeds one-page SOPs, and an Improvement Log feeds back to update the register.">
      <defs>
        <pattern id={`grid-${tone}`} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke={c.grid} strokeWidth="0.6" />
        </pattern>
        <radialGradient id={`glowC-${tone}`} cx="28%" cy="30%" r="60%">
          <stop offset="0%" stopColor={cyan} stopOpacity={tone === 'dark' ? 0.1 : 0.06} />
          <stop offset="100%" stopColor={c.bg} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`glowA-${tone}`} cx="84%" cy="82%" r="55%">
          <stop offset="0%" stopColor={amber} stopOpacity={tone === 'dark' ? 0.07 : 0.05} />
          <stop offset="100%" stopColor={c.bg} stopOpacity="0" />
        </radialGradient>
        <marker id={`ah-${tone}`} markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
        </marker>
      </defs>

      {/* backdrop */}
      <rect width="1240" height="720" rx="16" fill={c.bg} />
      <rect width="1240" height="720" rx="16" fill={`url(#grid-${tone})`} opacity={c.gridOp} />
      <rect width="1240" height="720" rx="16" fill={`url(#glowC-${tone})`} />
      <rect width="1240" height="720" rx="16" fill={`url(#glowA-${tone})`} />
      <rect x="0" y="0" width="1240" height="6" fill={amber} />

      {/* title */}
      <text x="60" y="66" style={fMono} fontSize="13" letterSpacing="3" fill={cyan}>HOW IT WORKS</text>
      <text x="60" y="104" style={fDisp} fontWeight="800" fontSize="30" fill={c.ink}>The Decoded Method, as a system</text>

      {/* feedback annotation */}
      <text x="618" y="150" textAnchor="middle" style={fBody} fontStyle="italic" fontSize="13" fill={amber} opacity="0.85" className="sch-fade sch-f4">
        When something changes, it feeds back and updates the register.
      </text>

      {/* ===== 01 PROCESS REGISTER ===== */}
      <g className="sch-fade sch-f1">
        <rect x="60" y="188" width="34" height="26" rx="5" fill={c.chipBg} stroke={cyan} strokeWidth="1.5" />
        <text x="77" y="206" textAnchor="middle" style={fDisp} fontWeight="800" fontSize="14" fill={cyan}>01</text>
        <text x="106" y="206" style={fDisp} fontWeight="700" fontSize="14" letterSpacing="1.5" fill={c.ink}>PROCESS REGISTER</text>
      </g>
      <line className="sch-draw sch-d2" x1="150" y1="250" x2="150" y2="632" stroke={c.spine} strokeWidth="2.5" />
      <circle cx="150" cy="250" r="6" fill={amber} className="sch-fade sch-f2" />

      <g className="sch-fade sch-f2" style={fBody}>
        {/* PR-001 */}
        <circle cx="150" cy="300" r="5" fill={c.sub} />
        <text x="176" y="296" style={fMono} fontSize="12" fill={c.sub}>DO-PR-001</text>
        <text x="176" y="314" fontSize="14" fill={c.ink}>Discovery Day</text>
        <circle cx="360" cy="304" r="4" fill={cyan} />
        {/* PR-002 (active, pulsing) */}
        <circle cx="150" cy="380" className="sch-halo" r="16" fill={amber} />
        <circle cx="150" cy="380" r="5" fill={amber} />
        <text x="176" y="376" style={fMono} fontSize="12" fill={c.sub}>DO-PR-002</text>
        <text x="176" y="394" fontSize="14" fill={c.ink}>Client Onboarding</text>
        <circle cx="360" cy="384" r="4" fill={cyan} />
        {/* PR-004 */}
        <circle cx="150" cy="460" r="5" fill={c.sub} />
        <text x="176" y="456" style={fMono} fontSize="12" fill={c.sub}>DO-PR-004</text>
        <text x="176" y="474" fontSize="14" fill={c.ink}>Proposal Build</text>
        <circle cx="360" cy="464" r="4" fill={cyan} />
        {/* PR-009 (draft) */}
        <circle cx="150" cy="540" r="5" fill={c.sub} />
        <text x="176" y="536" style={fMono} fontSize="12" fill={c.sub}>DO-PR-009</text>
        <text x="176" y="554" fontSize="14" fill={c.ink}>Client Handover</text>
        <rect x="352" y="533" width="16" height="8" rx="4" fill={amber} />
      </g>
      <text x="60" y="668" style={fBody} fontStyle="italic" fontSize="13" fill={c.sub} opacity="0.75" className="sch-fade sch-f3">
        The spine. Every process, owned and dated, on one page.
      </text>

      {/* ===== 02 SOPs ===== */}
      <g className="sch-fade sch-f2">
        <rect x="520" y="188" width="34" height="26" rx="5" fill={c.chipBg} stroke={cyan} strokeWidth="1.5" />
        <text x="537" y="206" textAnchor="middle" style={fDisp} fontWeight="800" fontSize="14" fill={cyan}>02</text>
        <text x="566" y="206" style={fDisp} fontWeight="700" fontSize="14" letterSpacing="1.5" fill={c.ink}>SOPs · ONE PAGE EACH</text>
      </g>
      <path id={`connA-${tone}`} className="sch-draw sch-d3" d="M164 380 C 320 380 360 300 520 300" fill="none" stroke={cyan} strokeWidth="2" strokeOpacity="0.8" markerEnd={`url(#ah-${tone})`} />
      <path id={`connB-${tone}`} className="sch-draw sch-d3" d="M164 460 C 320 460 360 470 520 470" fill="none" stroke={cyan} strokeWidth="2" strokeOpacity="0.8" markerEnd={`url(#ah-${tone})`} />

      {/* SOP module A */}
      <g className="sch-fade sch-f3">
        <rect x="528" y="250" width="230" height="130" rx="10" fill={c.cardBg} stroke={c.cardStroke} />
        <path d={`M528 260 a10 10 0 0 1 10 -10 h210 a10 10 0 0 1 10 10 v18 h-230 z`} fill={cyan} />
        <text x="544" y="269" style={fMono} fontSize="11" fill="#023047" fontWeight="600">DO-SOP-002 · Onboarding</text>
        <rect x="544" y="292" width="120" height="6" rx="3" fill={c.rows} opacity="0.55" />
        <rect x="544" y="308" width="180" height="6" rx="3" fill={c.rows} opacity="0.4" />
        <rect x="544" y="324" width="150" height="6" rx="3" fill={c.rows} opacity="0.4" />
        <rect x="544" y="340" width="198" height="8" rx="4" fill={amber} opacity="0.9" />
        <rect x="544" y="358" width="110" height="6" rx="3" fill={c.rows} opacity="0.4" />
      </g>
      {/* SOP module B */}
      <g className="sch-fade sch-f4">
        <rect x="528" y="418" width="230" height="110" rx="10" fill={c.cardBg} stroke={c.cardStroke} />
        <path d={`M528 428 a10 10 0 0 1 10 -10 h210 a10 10 0 0 1 10 10 v18 h-230 z`} fill={cyan} />
        <text x="544" y="437" style={fMono} fontSize="11" fill="#023047" fontWeight="600">DO-SOP-004 · Proposal</text>
        <rect x="544" y="460" width="130" height="6" rx="3" fill={c.rows} opacity="0.55" />
        <rect x="544" y="476" width="180" height="6" rx="3" fill={c.rows} opacity="0.4" />
        <rect x="544" y="492" width="160" height="8" rx="4" fill={amber} opacity="0.9" />
        <rect x="544" y="510" width="110" height="6" rx="3" fill={c.rows} opacity="0.4" />
      </g>
      <text x="528" y="560" style={fBody} fontStyle="italic" fontSize="13" fill={c.sub} opacity="0.75" className="sch-fade sch-f4">
        One page. Five sections. Handed over, not explained.
      </text>

      {/* ===== 03 IMPROVEMENT LOG ===== */}
      <g className="sch-fade sch-f3">
        <rect x="928" y="188" width="34" height="26" rx="5" fill={c.chipBg} stroke={amber} strokeWidth="1.5" />
        <text x="945" y="206" textAnchor="middle" style={fDisp} fontWeight="800" fontSize="14" fill={amber}>03</text>
        <text x="974" y="206" style={fDisp} fontWeight="700" fontSize="14" letterSpacing="1.5" fill={c.ink}>IMPROVEMENT LOG</text>
      </g>
      <g className="sch-fade sch-f4">
        <rect x="936" y="250" width="244" height="200" rx="12" fill={c.cardBg} stroke={amber} strokeOpacity="0.45" />
        <text x="958" y="286" style={fMono} fontSize="11" fill={amber}>DO-IL-014</text>
        <text x="958" y="316" style={fDisp} fontWeight="700" fontSize="12" letterSpacing="1" fill={cyan}>WHAT BROKE</text>
        <text x="958" y="334" style={fBody} fontSize="12.5" fill={c.sub}>Proposals priced from memory.</text>
        <text x="958" y="366" style={fDisp} fontWeight="700" fontSize="12" letterSpacing="1" fill={cyan}>WHAT CHANGED</text>
        <text x="958" y="384" style={fBody} fontSize="12.5" fill={c.sub}>SOP forces canonical pricing.</text>
        <text x="958" y="416" style={fDisp} fontWeight="700" fontSize="12" letterSpacing="1" fill={amber}>RESULT</text>
        <text x="958" y="434" style={fBody} fontSize="12.5" fill={c.ink}>No under-quotes since.</text>
      </g>
      <path id={`fb-${tone}`} className="sch-draw sch-d4" d="M936 300 C 620 130 320 130 158 366" fill="none" stroke={amber} strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.85" markerEnd={`url(#ah-${tone})`} />

      {/* ===== flowing data dots (motion only) ===== */}
      {motion && (
        <g>
          <circle r="4" fill={amber}><animateMotion dur="4s" repeatCount="indefinite"><mpath href={`#connA-${tone}`} /></animateMotion></circle>
          <circle r="4" fill={amber}><animateMotion dur="4.6s" begin="1s" repeatCount="indefinite"><mpath href={`#connB-${tone}`} /></animateMotion></circle>
          <circle r="3.5" fill={cyan}><animateMotion dur="3.4s" repeatCount="indefinite" path="M150 250 V632" /></circle>
          <circle r="3.5" fill={cyan}><animateMotion dur="3.4s" begin="1.7s" repeatCount="indefinite" path="M150 250 V632" /></circle>
          <circle r="4.5" fill={amber}><animateMotion dur="5s" begin="2s" repeatCount="indefinite"><mpath href={`#fb-${tone}`} /></animateMotion></circle>
        </g>
      )}
    </svg>
  );
}
