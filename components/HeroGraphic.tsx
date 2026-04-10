export function HeroGraphic() {
  // Six system nodes arranged around a central hub
  // Nodes at positions: top, top-right, bottom-right, bottom, bottom-left, top-left
  const cx = 260;
  const cy = 220;
  const r = 140;

  const nodes = [
    { angle: -90,  label: 'Order Mgmt',    sub: 'intake & tracking',     color: '#219EBC' },
    { angle: -30,  label: 'eCommerce',      sub: 'online store',          color: '#023047' },
    { angle:  30,  label: 'Despatch',       sub: 'fulfilment',            color: '#023047' },
    { angle:  90,  label: 'Accounts',       sub: 'Xero / Sage',           color: '#219EBC' },
    { angle: 150,  label: 'Production',     sub: 'MIS / scheduling',      color: '#023047' },
    { angle: 210,  label: 'ERP / MIS',      sub: 'core system',           color: '#219EBC' },
  ];

  const toXY = (angleDeg: number, radius: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  };

  return (
    <div className="relative w-full aspect-square max-w-[520px]">
      <svg viewBox="0 0 520 440" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#219EBC" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#219EBC" stopOpacity="0" />
          </radialGradient>
          {/* Dashed line pattern */}
          <marker id="arrowTip" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <circle cx="3" cy="3" r="1.5" fill="#219EBC" opacity="0.5" />
          </marker>
        </defs>

        {/* Background glow */}
        <circle cx={cx} cy={cy} r="170" fill="url(#bgGrad)" />

        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={r + 10} fill="none" stroke="#8ECAE6" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />

        {/* Connection lines — from each node to centre */}
        {nodes.map((node, i) => {
          const pos = toXY(node.angle, r);
          return (
            <line
              key={i}
              x1={pos.x} y1={pos.y}
              x2={cx} y2={cy}
              stroke="#219EBC"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              opacity="0.35"
              markerEnd="url(#arrowTip)"
            />
          );
        })}

        {/* Node circles + labels */}
        {nodes.map((node, i) => {
          const pos = toXY(node.angle, r);
          // Nudge labels outward
          const labelPos = toXY(node.angle, r + 46);
          const isLeft = pos.x < cx - 10;
          const isRight = pos.x > cx + 10;
          const anchor = isLeft ? 'end' : isRight ? 'start' : 'middle';

          return (
            <g key={i}>
              {/* Node glow */}
              <circle cx={pos.x} cy={pos.y} r="22" fill={node.color} opacity="0.12" />
              {/* Node circle */}
              <circle cx={pos.x} cy={pos.y} r="16" fill="#F8F9FA" stroke={node.color} strokeWidth="1.5" />
              {/* Node dot */}
              <circle cx={pos.x} cy={pos.y} r="5" fill={node.color} opacity="0.7" />
              {/* Label */}
              <text x={labelPos.x} y={labelPos.y - 6} textAnchor={anchor} fontSize="10" fontWeight="600" fill="#023047" fontFamily="system-ui, sans-serif">{node.label}</text>
              <text x={labelPos.x} y={labelPos.y + 8} textAnchor={anchor} fontSize="8.5" fill="#023047" opacity="0.45" fontFamily="system-ui, sans-serif">{node.sub}</text>
            </g>
          );
        })}

        {/* Central hub */}
        <circle cx={cx} cy={cy} r="46" fill="#023047" />
        <circle cx={cx} cy={cy} r="44" fill="#023047" stroke="#219EBC" strokeWidth="1.5" />
        <text x={cx} y={cy - 8} textAnchor="middle" fontSize="11" fontWeight="700" fill="#F8F9FA" fontFamily="system-ui, sans-serif" letterSpacing="1">DECODED</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fontSize="11" fontWeight="700" fill="#219EBC" fontFamily="system-ui, sans-serif" letterSpacing="1">OPS</text>
        <text x={cx} y={cy + 22} textAnchor="middle" fontSize="7.5" fill="#8ECAE6" fontFamily="system-ui, sans-serif">audit &amp; decode</text>
      </svg>

      {/* Floating badge — 3× guarantee */}
      <div className="absolute -bottom-4 -left-4 bg-[#F8F9FA] rounded-xl shadow-lg p-4 border border-[#8ECAE6]/40 max-w-[200px]">
        <div className="text-xs font-semibold text-[#023047] uppercase tracking-wider mb-1">3× Clarity Guarantee</div>
        <div className="text-xs text-[#023047]/70 leading-snug">If the report doesn&apos;t find 3× its fee in value — full refund.</div>
      </div>

      {/* Floating badge — 1 day */}
      <div className="absolute -top-2 -right-2 bg-[#219EBC] rounded-xl shadow-lg p-3 text-center">
        <div className="text-xl font-bold text-white leading-none">1</div>
        <div className="text-[10px] font-semibold text-white/80 uppercase tracking-wide leading-tight">day<br/>on site</div>
      </div>
    </div>
  );
}
