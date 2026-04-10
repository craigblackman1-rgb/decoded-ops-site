interface Props {
  connected?: boolean;
}

export function SystemsDisconnectedGraphic({ connected = false }: Props) {
  const systems = [
    { label: 'Orders',       x: 60,  y: 80  },
    { label: 'ERP / MIS',    x: 220, y: 40  },
    { label: 'eCommerce',    x: 340, y: 80  },
    { label: 'Accounts',     x: 340, y: 200 },
    { label: 'Despatch',     x: 220, y: 240 },
    { label: 'Production',   x: 60,  y: 200 },
  ];

  // Pairs that should be connected
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 4], [0, 3],
  ];

  const nodeW = 80;
  const nodeH = 32;

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${connected ? 'bg-[#219EBC]/15 text-[#219EBC]' : 'bg-[#023047]/10 text-[#023047]/70'}`}>
          {connected ? '✓ Connected systems' : '✗ Disconnected systems'}
        </span>
      </div>
      <svg viewBox="0 0 420 300" className="w-full" aria-hidden="true">
        <defs>
          <marker id={`arrow-${connected ? 'c' : 'd'}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 z" fill={connected ? '#219EBC' : '#8ECAE6'} opacity={connected ? 0.7 : 0.4} />
          </marker>
        </defs>

        {/* Connection lines */}
        {connections.map(([a, b], i) => {
          const from = systems[a];
          const to = systems[b];
          const fx = from.x + nodeW / 2;
          const fy = from.y + nodeH / 2;
          const tx = to.x + nodeW / 2;
          const ty = to.y + nodeH / 2;

          if (connected) {
            return (
              <line key={i} x1={fx} y1={fy} x2={tx} y2={ty}
                stroke="#219EBC" strokeWidth="1.5" opacity="0.5"
                markerEnd={`url(#arrow-c)`} />
            );
          } else {
            // Broken line — draw with a gap/X in the middle
            const midX = (fx + tx) / 2;
            const midY = (fy + ty) / 2;
            return (
              <g key={i}>
                <line x1={fx} y1={fy} x2={midX - 8} y2={midY - 8}
                  stroke="#8ECAE6" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <line x1={midX + 8} y1={midY + 8} x2={tx} y2={ty}
                  stroke="#8ECAE6" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                {/* Break X */}
                <line x1={midX - 5} y1={midY - 5} x2={midX + 5} y2={midY + 5} stroke="#8ECAE6" strokeWidth="1.5" opacity="0.5" />
                <line x1={midX + 5} y1={midY - 5} x2={midX - 5} y2={midY + 5} stroke="#8ECAE6" strokeWidth="1.5" opacity="0.5" />
              </g>
            );
          }
        })}

        {/* Manual data bridges (only on disconnected) */}
        {!connected && (
          <>
            <text x="170" y="155" textAnchor="middle" fontSize="8" fill="#023047" opacity="0.4" fontFamily="system-ui" fontStyle="italic">↓ manual re-entry</text>
            <text x="270" y="130" textAnchor="middle" fontSize="8" fill="#023047" opacity="0.4" fontFamily="system-ui" fontStyle="italic">↓ spreadsheet</text>
          </>
        )}

        {/* System nodes */}
        {systems.map((sys, i) => (
          <g key={i}>
            <rect x={sys.x} y={sys.y} width={nodeW} height={nodeH} rx="6"
              fill={connected ? '#F8F9FA' : '#F8F9FA'}
              stroke={connected ? '#219EBC' : '#8ECAE6'}
              strokeWidth={connected ? '1.5' : '1'}
              opacity={connected ? 1 : 0.7}
            />
            <text x={sys.x + nodeW / 2} y={sys.y + nodeH / 2 + 4} textAnchor="middle"
              fontSize="9.5" fontWeight="600"
              fill={connected ? '#023047' : '#023047'}
              opacity={connected ? 1 : 0.6}
              fontFamily="system-ui, sans-serif">
              {sys.label}
            </text>
          </g>
        ))}

        {/* Central hub (only when connected) */}
        {connected && (
          <g>
            <circle cx={210} cy={145} r="28" fill="#023047" />
            <text x="210" y="141" textAnchor="middle" fontSize="8" fontWeight="700" fill="#F8F9FA" fontFamily="system-ui">DECODED</text>
            <text x="210" y="153" textAnchor="middle" fontSize="8" fontWeight="700" fill="#219EBC" fontFamily="system-ui">OPS</text>
          </g>
        )}

        {/* People icons as manual bridges (disconnected only) */}
        {!connected && [
          { x: 150, y: 130 },
          { x: 250, y: 155 },
        ].map((pos, i) => (
          <g key={`person-${i}`}>
            <circle cx={pos.x} cy={pos.y - 6} r="5" fill="none" stroke="#8ECAE6" strokeWidth="1" opacity="0.5" />
            <path d={`M${pos.x - 6} ${pos.y + 10} Q${pos.x} ${pos.y + 4} ${pos.x + 6} ${pos.y + 10}`} fill="none" stroke="#8ECAE6" strokeWidth="1" opacity="0.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}
