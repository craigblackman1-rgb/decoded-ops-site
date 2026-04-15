export function TransformProgrammeGraphic() {
  const workstreams = [
    { label: 'ERP', x: 80 },
    { label: 'eCommerce', x: 180 },
    { label: 'Process', x: 280 },
  ];

  const bottomStreams = [
    { label: 'People & Change', x: 130 },
    { label: 'Integration', x: 260 },
    { label: 'Reporting', x: 360 },
  ];

  return (
    <div className="w-full">
      <svg viewBox="0 0 480 320" className="w-full max-w-[480px] mx-auto" aria-hidden="true">
        {/* Title */}
        <text x="240" y="25" fontSize="14" fontWeight="700" fill="#023047" textAnchor="middle" fontFamily="system-ui">
          Coordinated Multi-Workstream Programme
        </text>

        {/* Top section - Discovery */}
        <g>
          <rect x="40" y="50" width="400" height="45" rx="6" fill="#219EBC" opacity="0.15" stroke="#219EBC" strokeWidth="1.5" />
          <text x="240" y="72" fontSize="12" fontWeight="700" fill="#219EBC" textAnchor="middle" fontFamily="system-ui">
            Discovery Phase — Before Scoping
          </text>
          <text x="240" y="87" fontSize="9" fill="#023047" opacity="0.6" textAnchor="middle" fontFamily="system-ui">
            Assumptions are where transformations fail
          </text>
        </g>

        {/* Middle section - Workstreams */}
        <g>
          {/* Top row workstreams */}
          {workstreams.map((ws, i) => (
            <g key={`top-${i}`}>
              <rect x={ws.x - 35} y="120" width="70" height="50" rx="4" fill="#023047" opacity="0.08" stroke="#023047" strokeWidth="1" />
              <text x={ws.x} y="142" fontSize="11" fontWeight="600" fill="#023047" textAnchor="middle" fontFamily="system-ui">
                {ws.label}
              </text>
              <text x={ws.x} y="156" fontSize="8" fill="#023047" opacity="0.5" textAnchor="middle" fontFamily="system-ui">
                Workstream
              </text>
            </g>
          ))}

          {/* Center convergence point */}
          <circle cx="240" cy="195" r="12" fill="#219EBC" />
          <text x="240" y="200" fontSize="8" fontWeight="700" fill="white" textAnchor="middle" fontFamily="system-ui">
            ◆
          </text>

          {/* Bottom row workstreams */}
          {bottomStreams.map((ws, i) => (
            <g key={`bottom-${i}`}>
              <rect x={ws.x - 45} y="220" width="90" height="50" rx="4" fill="#023047" opacity="0.08" stroke="#023047" strokeWidth="1" />
              <text x={ws.x} y="242" fontSize="11" fontWeight="600" fill="#023047" textAnchor="middle" fontFamily="system-ui">
                {ws.label}
              </text>
              <text x={ws.x} y="256" fontSize="8" fill="#023047" opacity="0.5" textAnchor="middle" fontFamily="system-ui">
                Workstream
              </text>
            </g>
          ))}

          {/* Lines from all workstreams to center */}
          {[...workstreams, ...bottomStreams].map((ws, i) => (
            <line
              key={`line-${i}`}
              x1={ws.x}
              y1={ws.x < 200 ? 120 : 220}
              x2="240"
              y2="195"
              stroke="#219EBC"
              strokeWidth="1.5"
              opacity="0.3"
            />
          ))}
        </g>

        {/* Bottom label */}
        <g>
          <rect x="50" y="295" width="380" height="20" rx="3" fill="#023047" opacity="0.03" />
          <text x="240" y="308" fontSize="9" fontWeight="600" fill="#023047" textAnchor="middle" fontFamily="system-ui">
            Coordinated Programme Management • People-First Approach • Ongoing Governance
          </text>
        </g>
      </svg>
    </div>
  );
}
