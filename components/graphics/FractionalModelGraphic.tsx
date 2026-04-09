export function FractionalModelGraphic() {
  const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
  const phases = [
    { label: 'Advise Audit', span: [0, 1], color: '#1D3557', desc: 'Diagnose' },
    { label: 'Implementation Start', span: [1, 3], color: '#3A86FF', desc: 'Fractional ops begins' },
    { label: 'Delivery & Optimise', span: [3, 6], color: '#0F1923', desc: 'Ongoing + 30d notice' },
  ];

  const colW = 52;
  const rowH = 36;
  const leftPad = 10;
  const topPad = 28;
  const totalW = leftPad + months.length * colW + 20;
  const totalH = topPad + phases.length * (rowH + 10) + 60;

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${totalW} ${totalH}`} className="w-full max-w-[480px] mx-auto" aria-hidden="true">
        {/* Month headers */}
        {months.map((m, i) => (
          <text key={i} x={leftPad + i * colW + colW / 2} y="18"
            textAnchor="middle" fontSize="8.5" fontWeight="600"
            fill="#0F1923" opacity="0.5" fontFamily="system-ui">
            {m}
          </text>
        ))}

        {/* Phase bars */}
        {phases.map((phase, pi) => {
          const [startCol, endCol] = phase.span;
          const x = leftPad + startCol * colW;
          const y = topPad + pi * (rowH + 10);
          const w = (endCol - startCol) * colW - 4;

          return (
            <g key={pi}>
              <rect x={x} y={y} width={w} height={rowH} rx="6" fill={phase.color} opacity="0.85" />
              <text x={x + 10} y={y + rowH / 2 - 3} fontSize="9.5" fontWeight="700" fill="white" fontFamily="system-ui">
                {phase.label}
              </text>
              <text x={x + 10} y={y + rowH / 2 + 9} fontSize="8" fill="white" opacity="0.7" fontFamily="system-ui">
                {phase.desc}
              </text>
            </g>
          );
        })}

        {/* Price callouts */}
        <g transform={`translate(${leftPad}, ${topPad + phases.length * (rowH + 10) + 8})`}>
          <rect x="0" y="0" width="100" height="26" rx="5" fill="#3A86FF" opacity="0.1" stroke="#3A86FF" strokeWidth="1" />
          <text x="50" y="11" textAnchor="middle" fontSize="8" fontWeight="700" fill="#3A86FF" fontFamily="system-ui">Advise tier</text>
          <text x="50" y="21" textAnchor="middle" fontSize="8" fill="#3A86FF" opacity="0.8" fontFamily="system-ui">£3,500 + VAT</text>

          <rect x="108" y="0" width="110" height="26" rx="5" fill="#0F1923" opacity="0.08" stroke="#0F1923" strokeWidth="1" />
          <text x="163" y="11" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0F1923" fontFamily="system-ui">Fractional monthly</text>
          <text x="163" y="21" textAnchor="middle" fontSize="8" fill="#0F1923" opacity="0.6" fontFamily="system-ui">£1,500/mo + VAT</text>

          <text x="230" y="11" fontSize="8" fill="#0F1923" opacity="0.35" fontFamily="system-ui">30-day notice</text>
          <text x="230" y="21" fontSize="8" fill="#0F1923" opacity="0.35" fontFamily="system-ui">after 3 months</text>
        </g>
      </svg>
    </div>
  );
}
