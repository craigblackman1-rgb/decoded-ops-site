export function FractionalFlexModel() {
  return (
    <div className="w-full">
      <svg viewBox="0 0 400 280" className="w-full max-w-[480px] mx-auto" aria-hidden="true">
        {/* Background */}
        <rect width="400" height="280" fill="none" />

        {/* Title */}
        <text x="200" y="30" fontSize="16" fontWeight="700" fill="#023047" textAnchor="middle" fontFamily="system-ui">
          Flexible Fractional Engagement
        </text>

        {/* Left column - Month by month flexibility */}
        <g>
          {/* Label */}
          <text x="50" y="65" fontSize="11" fontWeight="600" fill="#023047" fontFamily="system-ui">
            Variable Days Per Month
          </text>

          {/* Month boxes */}
          {[0, 1, 2].map((i) => (
            <g key={`month-${i}`}>
              <rect
                x={20 + i * 80}
                y={80}
                width="60"
                height="40"
                rx="4"
                fill="#219EBC"
                opacity="0.15"
                stroke="#219EBC"
                strokeWidth="1.5"
              />
              <text
                x={50 + i * 80}
                y="102"
                fontSize="13"
                fontWeight="700"
                fill="#219EBC"
                textAnchor="middle"
                fontFamily="system-ui"
              >
                {8 + i * 2} days
              </text>
              <text
                x={50 + i * 80}
                y="118"
                fontSize="9"
                fill="#023047"
                opacity="0.6"
                textAnchor="middle"
                fontFamily="system-ui"
              >
                Month {i + 1}
              </text>
            </g>
          ))}
        </g>

        {/* Right column - What's included */}
        <g>
          {/* Label */}
          <text x="50" y="195" fontSize="11" fontWeight="600" fill="#023047" fontFamily="system-ui">
            Always Includes
          </text>

          {/* Benefit items */}
          {[
            'Direct Craig involvement',
            'Leadership meetings',
            'Project ownership',
            'Vendor management',
          ].map((benefit, i) => (
            <g key={`benefit-${i}`}>
              <circle cx="32" cy={220 + i * 20} r="3" fill="#219EBC" />
              <text
                x="45"
                y={223 + i * 20}
                fontSize="10"
                fill="#023047"
                fontFamily="system-ui"
              >
                {benefit}
              </text>
            </g>
          ))}
        </g>

        {/* Bottom key facts */}
        <g>
          <rect x="20" y="245" width="360" height="25" rx="4" fill="#023047" opacity="0.05" />
          <text x="30" y="259" fontSize="9" fontWeight="600" fill="#023047" fontFamily="system-ui">
            3 month minimum • 30 day notice after • Flexible month-to-month after minimum
          </text>
        </g>
      </svg>
    </div>
  );
}
