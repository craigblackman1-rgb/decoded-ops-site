export function ExpertiseTimelineGraphic() {
  const milestones = [
    { year: 'Early career', label: 'Production floor', detail: 'Embroidery, screen print & fulfilment operations' },
    { year: 'Mid career', label: 'Operations management', detail: 'Multi-site production, ERP implementation & process design' },
    { year: 'Senior roles', label: 'Technology & systems', detail: 'Vendor selection, integration scoping & digital transformation' },
    { year: 'Now', label: 'Decoded Ops', detail: 'Independent audit & fractional ops for the sector', highlight: true },
  ];

  return (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        {milestones.map((m, i) => (
          <div key={i} className="flex gap-4">
            {/* Timeline spine */}
            <div className="flex flex-col items-center">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: m.highlight ? '#219EBC' : '#023047', opacity: m.highlight ? 1 : 0.6 }}
              />
              {i < milestones.length - 1 && (
                <div className="w-0.5 flex-1 mt-1" style={{ backgroundColor: '#8ECAE6', opacity: 0.3, minHeight: '32px' }} />
              )}
            </div>
            {/* Content */}
            <div className={`pb-6 ${m.highlight ? '' : ''}`}>
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                style={{ color: m.highlight ? '#219EBC' : '#8ECAE6', opacity: m.highlight ? 1 : 0.7 }}
              >
                {m.year}
              </div>
              <div
                className="text-sm font-bold mb-0.5"
                style={{ color: m.highlight ? '#F8F9FA' : '#F8F9FA', opacity: m.highlight ? 1 : 0.8 }}
              >
                {m.label}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: '#8ECAE6', opacity: 0.65 }}>
                {m.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-2 p-4 rounded-xl border border-[#219EBC]/30 bg-[#219EBC]/10">
        <div className="text-xs text-[#8ECAE6] leading-relaxed italic">
          &ldquo;25 years in the sector means I know what a hoop size means and why it affects your production schedule. That context is what makes the advice useful.&rdquo;
        </div>
        <div className="mt-2 text-xs font-semibold text-[#219EBC]">— Craig Blackman</div>
      </div>
    </div>
  );
}
