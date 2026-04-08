export function AuditWheelGraphic() {
  const cx = 200;
  const cy = 200;
  const outerR = 160;
  const innerR = 65;
  const labelR = 182;
  const segments = 6;
  const gap = 0.04; // radians gap between segments

  const areas = [
    { num: '01', label: 'IT\nInfrastructure',   color: '#62929E' },
    { num: '02', label: 'Software\n& Systems',   color: '#546A7B' },
    { num: '03', label: 'eCommerce\n& Digital',  color: '#62929E' },
    { num: '04', label: 'Processes\n& Ops',       color: '#546A7B' },
    { num: '05', label: 'Growth &\nOpportunity', color: '#62929E' },
    { num: '06', label: 'AI\nReadiness',          color: '#546A7B' },
  ];

  const sliceAngle = (2 * Math.PI) / segments;

  const describeArc = (startAngle: number, endAngle: number, r1: number, r2: number) => {
    const x1 = cx + r1 * Math.cos(startAngle);
    const y1 = cy + r1 * Math.sin(startAngle);
    const x2 = cx + r2 * Math.cos(startAngle);
    const y2 = cy + r2 * Math.sin(startAngle);
    const x3 = cx + r2 * Math.cos(endAngle);
    const y3 = cy + r2 * Math.sin(endAngle);
    const x4 = cx + r1 * Math.cos(endAngle);
    const y4 = cy + r1 * Math.sin(endAngle);
    return `M ${x1} ${y1} L ${x2} ${y2} A ${r2} ${r2} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${r1} ${r1} 0 0 0 ${x1} ${y1} Z`;
  };

  return (
    <div className="w-full flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full max-w-[420px]" aria-hidden="true">
        <defs>
          <radialGradient id="wheelBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#62929E" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#62929E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background */}
        <circle cx={cx} cy={cy} r={outerR + 20} fill="url(#wheelBg)" />

        {/* Segments */}
        {areas.map((area, i) => {
          const start = i * sliceAngle - Math.PI / 2 + gap;
          const end = (i + 1) * sliceAngle - Math.PI / 2 - gap;
          const midAngle = (start + end) / 2;
          const lx = cx + labelR * Math.cos(midAngle);
          const ly = cy + labelR * Math.sin(midAngle);
          const numX = cx + (innerR + (outerR - innerR) / 2) * Math.cos(midAngle);
          const numY = cy + (innerR + (outerR - innerR) / 2) * Math.sin(midAngle) + 5;
          const lines = area.label.split('\n');

          return (
            <g key={i}>
              <path
                d={describeArc(start, end, innerR, outerR)}
                fill={area.color}
                opacity="0.85"
              />
              {/* Number inside segment */}
              <text x={numX} y={numY - 4} textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif" opacity="0.9">
                {area.num}
              </text>
            </g>
          );
        })}

        {/* Label lines + text outside */}
        {areas.map((area, i) => {
          const start = i * sliceAngle - Math.PI / 2 + gap;
          const end = (i + 1) * sliceAngle - Math.PI / 2 - gap;
          const midAngle = (start + end) / 2;
          const lineStart = cx + (outerR + 4) * Math.cos(midAngle);
          const lineStartY = cy + (outerR + 4) * Math.sin(midAngle);
          const lineEnd = cx + (outerR + 18) * Math.cos(midAngle);
          const lineEndY = cy + (outerR + 18) * Math.sin(midAngle);
          const lx = cx + (outerR + 28) * Math.cos(midAngle);
          const ly = cy + (outerR + 28) * Math.sin(midAngle);
          const anchor = Math.cos(midAngle) > 0.1 ? 'start' : Math.cos(midAngle) < -0.1 ? 'end' : 'middle';
          const lines = area.label.split('\n');

          return (
            <g key={`label-${i}`}>
              <line x1={lineStart} y1={lineStartY} x2={lineEnd} y2={lineEndY} stroke="#C6C5B9" strokeWidth="1" />
              {lines.map((line, li) => (
                <text key={li} x={lx} y={ly + li * 13 - (lines.length - 1) * 6} textAnchor={anchor} fontSize="9.5" fontWeight="600" fill="#393D3F" fontFamily="system-ui, sans-serif">
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* Inner ring */}
        <circle cx={cx} cy={cy} r={innerR} fill="#FDFDFF" stroke="#C6C5B9" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={innerR - 10} fill="#393D3F" />

        {/* Centre text */}
        <text x={cx} y={cy - 10} textAnchor="middle" fontSize="10" fontWeight="700" fill="#FDFDFF" fontFamily="system-ui, sans-serif" letterSpacing="0.5">ONE</text>
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#62929E" fontFamily="system-ui, sans-serif" letterSpacing="0.5">DAY</text>
        <text x={cx} y={cy + 17} textAnchor="middle" fontSize="8" fill="#C6C5B9" fontFamily="system-ui, sans-serif">6 areas</text>
      </svg>
    </div>
  );
}
