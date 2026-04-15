export function RetainedModelGraphic() {
  const phases = [
    { label: 'Onboard', duration: 'Month 1', color: '#219EBC' },
    { label: 'Establish', duration: 'Months 2–3', color: '#023047' },
    { label: 'Ongoing Leadership', duration: 'Month 4+', color: '#219EBC' },
  ];

  return (
    <div className="w-full">
      <svg viewBox="0 0 500 240" className="w-full max-w-[480px] mx-auto" aria-hidden="true">
        {/* Title */}
        <text x="250" y="25" fontSize="14" fontWeight="700" fill="#023047" textAnchor="middle" fontFamily="system-ui">
          Retained Ops Leadership — Ongoing Ownership
        </text>

        {/* Timeline */}
        <g>
          {/* Timeline line */}
          <line x1="50" y1="70" x2="450" y2="70" stroke="#8ECAE6" strokeWidth="2" />

          {/* Phase blocks */}
          {phases.map((phase, i) => {
            const x = 50 + (i * 200);
            return (
              <g key={i}>
                {/* Circle on timeline */}
                <circle cx={x} cy="70" r="8" fill={phase.color} />

                {/* Phase box */}
                <rect
                  x={x - 70}
                  y="90"
                  width="140"
                  height="70"
                  rx="6"
                  fill={phase.color}
                  opacity="0.1"
                  stroke={phase.color}
                  strokeWidth="1.5"
                />

                {/* Phase label */}
                <text
                  x={x}
                  y="115"
                  fontSize="12"
                  fontWeight="700"
                  fill={phase.color}
                  textAnchor="middle"
                  fontFamily="system-ui"
                >
                  {phase.label}
                </text>

                {/* Duration */}
                <text
                  x={x}
                  y="135"
                  fontSize="9"
                  fill="#023047"
                  opacity="0.7"
                  textAnchor="middle"
                  fontFamily="system-ui"
                >
                  {phase.duration}
                </text>
              </g>
            );
          })}
        </g>

        {/* Key characteristics at bottom */}
        <g>
          <rect x="30" y="185" width="440" height="45" rx="4" fill="#023047" opacity="0.03" stroke="#8ECAE6" strokeWidth="1" />

          {[
            { label: 'Fixed days/month', x: 60 },
            { label: 'Roadmap ownership', x: 200 },
            { label: 'Strategic + tactical', x: 340 },
          ].map((item, i) => (
            <g key={i}>
              <circle cx={item.x} cy="210" r="2.5" fill="#219EBC" />
              <text
                x={item.x + 12}
                y="214"
                fontSize="9"
                fill="#023047"
                fontFamily="system-ui"
              >
                {item.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
