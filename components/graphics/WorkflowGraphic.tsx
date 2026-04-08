interface Step {
  label: string;
  sub?: string;
  alert?: boolean;
}

interface Props {
  steps: Step[];
  title?: string;
  variant?: 'light' | 'dark';
}

export function WorkflowGraphic({ steps, title, variant = 'light' }: Props) {
  const isDark = variant === 'dark';
  const nodeColor = isDark ? '#FDFDFF' : '#FDFDFF';
  const nodeBorder = isDark ? '#62929E' : '#62929E';
  const textColor = isDark ? '#FDFDFF' : '#393D3F';
  const subColor = isDark ? '#C6C5B9' : '#393D3F';
  const lineColor = isDark ? '#62929E' : '#62929E';
  const bgColor = isDark ? '#FDFDFF' : '#393D3F';

  const cols = Math.min(steps.length, 4);
  const rows = Math.ceil(steps.length / cols);
  const nodeW = 90;
  const nodeH = 48;
  const hGap = 52;
  const vGap = 54;
  const totalW = cols * nodeW + (cols - 1) * hGap + 40;
  const totalH = rows * nodeH + (rows - 1) * vGap + (title ? 40 : 20);
  const startY = title ? 40 : 16;

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${totalW} ${totalH}`} className="w-full" aria-hidden="true">
        {title && (
          <text x={totalW / 2} y="22" textAnchor="middle" fontSize="10" fontWeight="700"
            fill={isDark ? '#C6C5B9' : '#546A7B'} fontFamily="system-ui" letterSpacing="1" opacity="0.8">
            {title.toUpperCase()}
          </text>
        )}

        {steps.map((step, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = 20 + col * (nodeW + hGap);
          const y = startY + row * (nodeH + vGap);
          const cx = x + nodeW / 2;
          const cy = y + nodeH / 2;

          // Arrow to next node
          const isLastInRow = col === cols - 1;
          const isLast = i === steps.length - 1;
          const nextInRow = !isLastInRow && !isLast;
          const rowEnd = isLastInRow && !isLast;

          return (
            <g key={i}>
              {/* Arrow right */}
              {nextInRow && (
                <g>
                  <line
                    x1={x + nodeW + 4} y1={cy}
                    x2={x + nodeW + hGap - 4} y2={cy}
                    stroke={lineColor} strokeWidth="1.5" opacity="0.5"
                  />
                  <polygon
                    points={`${x + nodeW + hGap - 4},${cy - 4} ${x + nodeW + hGap + 2},${cy} ${x + nodeW + hGap - 4},${cy + 4}`}
                    fill={lineColor} opacity="0.5"
                  />
                </g>
              )}

              {/* Arrow down (row wrap) */}
              {rowEnd && (
                <g>
                  <line
                    x1={cx} y1={y + nodeH + 4}
                    x2={cx} y2={y + nodeH + vGap - 4}
                    stroke={lineColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4"
                  />
                </g>
              )}

              {/* Node */}
              <rect x={x} y={y} width={nodeW} height={nodeH} rx="8"
                fill={step.alert ? '#393D3F' : nodeColor}
                stroke={step.alert ? '#62929E' : isDark ? '#62929E' : '#C6C5B9'}
                strokeWidth={step.alert ? '1.5' : '1.2'}
              />

              {/* Step number */}
              <text x={x + 10} y={y + 13} fontSize="8" fontWeight="700"
                fill={step.alert ? '#62929E' : isDark ? '#62929E' : '#62929E'}
                fontFamily="system-ui" opacity="0.8">
                {String(i + 1).padStart(2, '0')}
              </text>

              {/* Label */}
              <text x={cx} y={y + nodeH / 2 + (step.sub ? -3 : 5)} textAnchor="middle"
                fontSize="9.5" fontWeight="600"
                fill={step.alert ? '#FDFDFF' : isDark ? '#393D3F' : '#393D3F'}
                fontFamily="system-ui">
                {step.label}
              </text>

              {step.sub && (
                <text x={cx} y={y + nodeH / 2 + 10} textAnchor="middle"
                  fontSize="7.5"
                  fill={step.alert ? '#C6C5B9' : isDark ? '#393D3F' : '#393D3F'}
                  opacity="0.55" fontFamily="system-ui">
                  {step.sub}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
