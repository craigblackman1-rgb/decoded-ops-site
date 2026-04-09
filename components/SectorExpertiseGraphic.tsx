const sectors = [
  {
    label: 'Garment\nDecoration',
    // Embroidery hoop icon
    path: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12-8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 3c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z',
    // Simple thread/needle SVG path
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        <line x1="20" y1="4" x2="20" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="29" x2="20" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="20" x2="11" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Print &\nPromotional',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="6" y="14" width="28" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="6" width="20" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="24" width="20" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="29" cy="22" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: 'Workwear &\nTeamwear',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M14 6 L8 12 L8 24 L32 24 L32 12 L26 6 L22 10 L20 8 L18 10 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 8 L20 24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M8 24 L8 34 L32 34 L32 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Signs &\nGraphics',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="4" y="8" width="32" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="28" x2="20" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="36" x2="26" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="14" x2="19" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="22" x2="31" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="14" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="31" cy="13" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: 'Awards &\nEngraving',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M20 4 L23 13 L33 13 L25 19 L28 28 L20 22 L12 28 L15 19 L7 13 L17 13 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <line x1="15" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="34" x2="23" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Labels &\nPackaging',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="8" y="6" width="24" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="12" y="10" width="16" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const experienceItems = [
  { years: '25+', label: 'Years inside\nthese businesses' },
  { years: '6',   label: 'Sectors with\ndeep expertise' },
  { years: '0',   label: 'Vendor\nrelationships' },
];

export function SectorExpertiseGraphic() {
  return (
    <div className="w-full">
      {/* Sector grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {sectors.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#F8F9FA] border border-[#93A8C0]/40 text-center">
            <div className="text-[#3A86FF]">{s.icon}</div>
            <div className="text-[10px] font-semibold text-[#0F1923] leading-tight whitespace-pre-line">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Experience bar */}
      <div className="grid grid-cols-3 gap-3">
        {experienceItems.map((item, i) => (
          <div key={i} className={`p-4 rounded-2xl text-center ${i === 0 ? 'bg-[#3A86FF]' : i === 2 ? 'bg-[#0F1923]' : 'bg-[#1D3557]'}`}>
            <div className="text-2xl font-bold text-white">{item.years}</div>
            <div className="text-[10px] text-white/70 leading-tight whitespace-pre-line mt-0.5">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
