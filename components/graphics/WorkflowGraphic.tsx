'use client';

import { useEffect, useState } from 'react';

/**
 * Operations flow shown as a schematic pipeline: numbered process nodes with
 * connectors and data flowing through them. Blueprint/editorial language,
 * light + dark variants, reduced-motion aware. Keeps the original props
 * (steps/title/variant) so every sector page works unchanged.
 */
interface Step { label: string; sub?: string; alert?: boolean }
interface Props { steps: Step[]; title?: string; variant?: 'light' | 'dark' }

const fDisp = { fontFamily: 'var(--font-outfit), Outfit, sans-serif' } as const;
const fBody = { fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' } as const;
const fMono = { fontFamily: 'ui-monospace, "JetBrains Mono", monospace' } as const;

export function WorkflowGraphic({ steps, title, variant = 'light' }: Props) {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const dark = variant === 'dark';
  const c = dark
    ? { bg: '#023047', grid: '#0a3d5c', gridOp: 0.5, ink: '#F8F9FA', sub: '#8ECAE6', node: '#04314a', stroke: 'rgba(142,202,230,0.4)', line: '#8ECAE6' }
    : { bg: '#F8F9FA', grid: '#d2e3ec', gridOp: 1, ink: '#023047', sub: '#3A5F74', node: '#ffffff', stroke: 'rgba(2,48,71,0.16)', line: '#5A7D8F' };
  const cyan = '#219EBC', amber = '#FFB703';

  const cols = Math.min(steps.length, 3);
  const rows = Math.ceil(steps.length / cols);
  const nodeW = 176, nodeH = 78, hGap = 46, vGap = 58, pad = 28, titleH = title ? 48 : 20;
  const totalW = cols * nodeW + (cols - 1) * hGap + pad * 2;
  const totalH = titleH + rows * nodeH + (rows - 1) * vGap + pad;

  const pos = (i: number) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = pad + col * (nodeW + hGap);
    const y = titleH + row * (nodeH + vGap);
    return { x, y, col, row, cx: x + nodeW / 2, cy: y + nodeH / 2 };
  };

  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} className="w-full" style={{ height: 'auto' }}
      role="img" aria-label={title || 'Operations workflow'}>
      <defs>
        <pattern id={`wf-grid-${variant}`} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke={c.grid} strokeWidth="0.6" />
        </pattern>
        <marker id={`wf-ah-${variant}`} markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={c.line} opacity="0.8" />
        </marker>
      </defs>

      <rect width={totalW} height={totalH} rx="16" fill={c.bg} />
      <rect width={totalW} height={totalH} rx="16" fill={`url(#wf-grid-${variant})`} opacity={c.gridOp} />
      <rect x="0" y="0" width={totalW} height="5" fill={amber} />

      {title && (
        <text x={pad} y="34" style={fMono} fontSize="13" letterSpacing="2" fill={cyan}>{title.toUpperCase()}</text>
      )}

      {steps.map((step, i) => {
        const p = pos(i);
        const isLast = i === steps.length - 1;
        const lastInRow = p.col === cols - 1;
        const connRight = !lastInRow && !isLast;
        const connDown = lastInRow && !isLast;
        const connId = `wf-c-${variant}-${i}`;
        return (
          <g key={i}>
            {connRight && (
              <>
                <line id={connId} x1={p.x + nodeW} y1={p.cy} x2={p.x + nodeW + hGap} y2={p.cy} stroke={c.line} strokeWidth="2" strokeOpacity="0.6" markerEnd={`url(#wf-ah-${variant})`} />
                {motion && <circle r="3.5" fill={amber}><animateMotion dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite"><mpath href={`#${connId}`} /></animateMotion></circle>}
              </>
            )}
            {connDown && (
              <line x1={p.cx} y1={p.y + nodeH} x2={p.cx} y2={p.y + nodeH + vGap} stroke={c.line} strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.4" markerEnd={`url(#wf-ah-${variant})`} />
            )}

            {/* node */}
            {step.alert && <rect x={p.x - 3} y={p.y - 3} width={nodeW + 6} height={nodeH + 6} rx="13" className="sch-halo" fill={amber} />}
            <rect x={p.x} y={p.y} width={nodeW} height={nodeH} rx="11" fill={step.alert ? amber : c.node} stroke={step.alert ? amber : c.stroke} strokeWidth="1.4" />
            <text x={p.x + 14} y={p.y + 22} style={fMono} fontSize="12" fontWeight="600" fill={step.alert ? '#023047' : cyan}>{String(i + 1).padStart(2, '0')}</text>
            <text x={p.x + nodeW / 2} y={p.y + (step.sub ? 44 : 48)} textAnchor="middle" style={fDisp} fontWeight="700" fontSize="16" fill={step.alert ? '#023047' : c.ink}>{step.label}</text>
            {step.sub && <text x={p.x + nodeW / 2} y={p.y + 62} textAnchor="middle" style={fBody} fontSize="12" fill={step.alert ? '#023047' : c.sub} opacity="0.75">{step.sub}</text>}
          </g>
        );
      })}
    </svg>
  );
}
