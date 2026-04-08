export function CostChartGraphic() {
  const bars = [
    { period: 'Month 1–3',   cost: 28,  label: '£28k',  note: 'eCommerce platform' },
    { period: 'Month 4–6',   cost: 19,  label: '£19k',  note: 'Integration dev work' },
    { period: 'Month 7–9',   cost: 34,  label: '£34k',  note: 'ERP customisation' },
    { period: 'Month 10–12', cost: 22,  label: '£22k',  note: 'Extra resource hired' },
    { period: 'Month 13–18', cost: 51,  label: '£51k',  note: 'Rework & replacement' },
  ];

  const auditCost = 10;
  const chartH = 160;
  const chartW = 340;
  const maxVal = 54;
  const barW = 48;
  const gap = 18;
  const leftPad = 36;
  const topPad = 20;
  const totalBarsWidth = bars.length * barW + (bars.length - 1) * gap;
  const startX = leftPad + (chartW - leftPad - totalBarsWidth) / 2;

  // Running total for cumulative line
  let cumulative = 0;
  const cumulativePoints: { x: number; y: number; total: number }[] = [];

  bars.forEach((bar, i) => {
    cumulative += bar.cost;
    const x = startX + i * (barW + gap) + barW / 2;
    const y = topPad + chartH - (cumulative / 154) * chartH;
    cumulativePoints.push({ x, y, total: cumulative });
  });

  const lineD = cumulativePoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className="w-full">
      <svg viewBox="0 0 400 310" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#62929E" />
            <stop offset="100%" stopColor="#546A7B" />
          </linearGradient>
          <linearGradient id="auditGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C6C5B9" />
            <stop offset="100%" stopColor="#C6C5B9" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Y-axis grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((frac, i) => {
          const y = topPad + chartH - frac * chartH;
          const val = Math.round(frac * maxVal);
          return (
            <g key={i}>
              <line x1={leftPad} y1={y} x2={leftPad + chartW} y2={y} stroke="#C6C5B9" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.5" />
              <text x={leftPad - 4} y={y + 4} textAnchor="end" fontSize="8" fill="#393D3F" opacity="0.45" fontFamily="system-ui, sans-serif">£{val}k</text>
            </g>
          );
        })}

        {/* Bars */}
        {bars.map((bar, i) => {
          const x = startX + i * (barW + gap);
          const barH = (bar.cost / maxVal) * chartH;
          const y = topPad + chartH - barH;
          return (
            <g key={i}>
              <rect x={x} y={y} width={barW} height={barH} rx="4" fill="url(#barGrad)" opacity="0.85" />
              <text x={x + barW / 2} y={y - 5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#393D3F" fontFamily="system-ui, sans-serif">{bar.label}</text>
              <text x={x + barW / 2} y={topPad + chartH + 14} textAnchor="middle" fontSize="7.5" fill="#393D3F" opacity="0.6" fontFamily="system-ui, sans-serif">{bar.period.replace('Month ', 'Mo ')}</text>
            </g>
          );
        })}

        {/* Cumulative line */}
        <path d={lineD} fill="none" stroke="#393D3F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
        {cumulativePoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#393D3F" opacity="0.5" />
        ))}

        {/* Total label at end of cumulative line */}
        <text x={cumulativePoints[4].x + 8} y={cumulativePoints[4].y + 4} fontSize="9" fontWeight="700" fill="#393D3F" fontFamily="system-ui, sans-serif">£154k total</text>

        {/* Divider */}
        <line x1={leftPad} y1={topPad + chartH + 30} x2={leftPad + chartW} y2={topPad + chartH + 30} stroke="#C6C5B9" strokeWidth="0.5" opacity="0.5" />

        {/* Audit cost comparison */}
        <g transform={`translate(${leftPad}, ${topPad + chartH + 42})`}>
          {/* Audit bar */}
          <rect x="0" y="0" width={(auditCost / 154) * chartW * 0.9} height="16" rx="3" fill="url(#auditGrad)" />
          <text x={(auditCost / 154) * chartW * 0.9 + 6} y="12" fontSize="9" fontWeight="700" fill="#393D3F" opacity="0.7" fontFamily="system-ui, sans-serif">£10k audit</text>

          {/* Total bar */}
          <rect x="0" y="22" width={chartW * 0.9} height="16" rx="3" fill="url(#barGrad)" opacity="0.7" />
          <text x={chartW * 0.9 + 6} y="34" fontSize="9" fontWeight="700" fill="#62929E" fontFamily="system-ui, sans-serif">£154k without</text>
        </g>

        {/* VS label */}
        <text x={leftPad + (auditCost / 154) * chartW * 0.45} y={topPad + chartH + 67} textAnchor="middle" fontSize="8" fontWeight="700" fill="#546A7B" fontFamily="system-ui, sans-serif" opacity="0.8">vs</text>

        {/* Caption */}
        <text x={leftPad} y={topPad + chartH + 110} fontSize="8.5" fill="#393D3F" opacity="0.45" fontFamily="system-ui, sans-serif" fontStyle="italic">The audit costs £10,000. Not having it cost £154,000.</text>
      </svg>
    </div>
  );
}
