export function CredentialsGraphic() {
  const stats = [
    { value: '25+', label: 'Years in sector', color: '#62929E' },
    { value: '0', label: 'Vendor ties', color: '#546A7B' },
    { value: '6', label: 'Sectors covered', color: '#393D3F' },
  ];

  const expertise = [
    'Garment decoration & embroidery',
    'Print & promotional merchandise',
    'Workwear & managed accounts',
    'Signs, labels & awards',
    'ERP selection & implementation',
    'eCommerce integration',
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Profile card */}
      <div className="rounded-2xl bg-[#393D3F] p-8 mb-4">
        {/* Avatar placeholder */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#62929E]/30 border-2 border-[#62929E] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
              <circle cx="20" cy="14" r="8" fill="#62929E" opacity="0.8" />
              <path d="M4 36 Q4 28 20 28 Q36 28 36 36" fill="#62929E" opacity="0.6" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold text-[#FDFDFF]">Craig Blackman</div>
            <div className="text-sm text-[#62929E]">Founder, Decoded Ops</div>
            <div className="text-xs text-[#C6C5B9] mt-1">Independent Operations Consultant</div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map(s => (
            <div key={s.label} className="text-center p-3 rounded-xl bg-[#FDFDFF]/5 border border-[#FDFDFF]/10">
              <div className="text-2xl font-bold" style={{ color: s.color === '#393D3F' ? '#C6C5B9' : s.color }}>{s.value}</div>
              <div className="text-xs text-[#C6C5B9] mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Expertise list */}
        <div className="space-y-2">
          {expertise.map(item => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#62929E] flex-shrink-0" />
              <span className="text-xs text-[#C6C5B9]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Independence badge */}
      <div className="rounded-xl bg-[#62929E]/10 border border-[#62929E]/30 p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#62929E] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
            <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="white" opacity="0.9" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-[#393D3F]">Fully independent</div>
          <div className="text-xs text-[#393D3F]/60">No referral fees. No vendor commissions. Ever.</div>
        </div>
      </div>
    </div>
  );
}
