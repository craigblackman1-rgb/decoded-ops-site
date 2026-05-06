'use client';

interface PricingOption {
  id: string;
  name: string;
  days: string;
  amount: string;
  period: string;
  minimum: string;
  recommended?: boolean;
  bestFor: string;
  breakdown: Array<{ label: string; value: string }>;
}

interface ValueItem {
  label: string;
  style: string;
}

interface ValueComparison {
  title: string;
  items: ValueItem[];
}

interface PricingData {
  tag: string;
  title: string;
  subtitle: string;
  options: PricingOption[];
  valueComparison: ValueComparison[];
  roi: Array<{ area: string; basis: string; value: string }>;
  paymentTerms: string[];
  notIncluded: string[];
}

export default function PricingSection({ data }: { data: PricingData }) {
  // HTML orders: C (Foundation), B (Growth/Recommended), A (Full Transform)
  const orderedOptions = ['C', 'B', 'A'].map(id => data.options.find(o => o.id === id)!).filter(Boolean);

  return (
    <section className="bg-[#F8F9FA] text-[#023047] px-5 py-24 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-[#023047]">
            {data.title.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </h2>
          <p className="text-base lg:text-lg text-[rgba(2,48,71,0.55)] max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* ── Pricing Cards ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {orderedOptions.map((option) => {
            const isB = option.id === 'B';
            const isC = option.id === 'C';
            const isA = option.id === 'A';
            return (
              <div
                key={option.id}
                className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 relative ${
                  isB
                    ? 'border-[#219EBC] -translate-y-3 shadow-2xl shadow-[rgba(33,158,188,0.2)]'
                    : 'border-transparent'
                }`}
              >
                {isB && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#219EBC] text-white px-4 py-1 rounded-b-xl text-xs font-bold tracking-wide">
                    ⭐ Recommended
                  </div>
                )}

                {/* Card head */}
                <div className={`px-7 pt-8 pb-7 text-center ${
                  isC ? 'bg-[#f0f0f0] text-[#023047]'
                  : isB ? 'bg-[#219EBC] text-white'
                  : 'bg-[#023047] text-white'
                }`}>
                  <div className="text-xs font-bold tracking-widest uppercase mb-2 opacity-60">
                    Option {option.id}
                  </div>
                  <h3 className="text-xl font-black mb-3">{option.name}</h3>
                  <div className={`text-3xl font-black font-[family-name:var(--font-outfit)] leading-none ${
                    isC ? 'text-[#023047]' : isB ? 'text-[#FFB703]' : 'text-[#8ECAE6]'
                  }`}>
                    {option.amount}
                    <span className="text-sm font-normal opacity-60">{option.period}</span>
                  </div>
                  <div className={`text-xs font-bold mt-2.5 mb-1 ${isB ? 'text-[#FFB703]' : 'opacity-60'}`}>
                    📅 {option.days}
                  </div>
                  <div className="text-xs opacity-40 mb-3">+ VAT · {option.minimum}</div>
                  <p className="text-xs leading-relaxed opacity-70 italic">{option.bestFor}</p>
                </div>

                {/* Card body */}
                <div className="bg-white px-6 pb-7">
                  {option.breakdown.map((line, i) => (
                    <div
                      key={i}
                      className={`py-2.5 text-sm flex justify-between items-center gap-3 ${
                        i < option.breakdown.length - 1 ? 'border-b border-[rgba(0,0,0,0.06)]' : ''
                      }`}
                    >
                      <span className={`text-xs ${i === option.breakdown.length - 1 && line.value === 'TBC' ? 'text-[#aaa] italic' : 'text-[rgba(0,0,0,0.6)]'}`}>
                        {line.label}
                      </span>
                      <span className={`font-bold text-sm whitespace-nowrap ${
                        line.value === 'TBC' ? 'text-[#aaa]' : 'text-[#023047]'
                      }`}>
                        {line.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Value Comparison ── */}
        <div className="mb-12 mt-12">
          <h3 className="text-xl font-bold text-[#023047] mb-1.5">What would you pay for this any other way?</h3>
          <p className="text-sm text-[rgba(2,48,71,0.5)] mb-6 leading-relaxed max-w-3xl">
            For context at TackleBag's scale — this is what comparable resource typically costs. Craig brings sector-specific knowledge from day one, with the audit already done, at a fixed rate that can be switched off after the minimum term.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {data.valueComparison.map((col, i) => {
              const isDec = i === 2;
              return (
                <div key={i} className="rounded-xl overflow-hidden shadow-sm">
                  <div className={`px-4 py-3.5 text-xs font-bold tracking-widest uppercase text-center ${
                    isDec ? 'bg-[#219EBC] text-white' : 'bg-[#eeeeee] text-[#888]'
                  }`}>
                    {col.title}
                  </div>
                  <div className={`px-4 py-4 flex flex-col gap-1.5 ${
                    isDec
                      ? 'bg-[rgba(33,158,188,0.05)] border border-[rgba(33,158,188,0.15)] border-t-0'
                      : 'bg-white'
                  }`}>
                    {col.items.map((item, j) => {
                      if (item.style === 'big') {
                        return (
                          <div key={j} className={`text-xl font-black font-[family-name:var(--font-outfit)] py-2 pb-3 border-b border-[rgba(0,0,0,0.06)] mb-1.5 ${isDec ? 'text-[#219EBC]' : 'text-[#023047]'}`}>
                            {item.label}
                          </div>
                        );
                      }
                      return (
                        <div key={j} className={`text-xs px-2 py-1.5 rounded flex items-start gap-2 leading-snug ${
                          isDec
                            ? 'bg-[rgba(33,158,188,0.07)] text-[rgba(2,48,71,0.8)]'
                            : item.style === 'bad'
                             ? 'bg-[rgba(198,40,40,0.05)] text-[#023047]'
                             : 'text-[#8aa8b5]'
                        }`}>
                          <span className={`flex-shrink-0 font-bold text-xs mt-0.5 ${
                             isDec ? 'text-[#219EBC]' : item.style === 'bad' ? 'text-[#C62828]' : 'text-[#8aa8b5]'
                          }`}>
                            {isDec ? '✓' : item.style === 'bad' ? '✕' : '—'}
                          </span>
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── ROI Table ── */}
        <h3 className="text-xl font-bold text-[#023047] mb-5">Return on Investment</h3>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-[#023047] text-white px-4 py-3 text-xs font-bold text-left tracking-wide">Area</th>
                <th className="bg-[#023047] text-white px-4 py-3 text-xs font-bold text-left tracking-wide">Basis</th>
                <th className="bg-[#023047] text-white px-4 py-3 text-xs font-bold text-left tracking-wide">Estimated Value</th>
              </tr>
            </thead>
            <tbody>
              {data.roi.map((row, i) => (
                <tr key={i} className="hover:bg-[#f9f9f9] border-b border-[#f0f0f0] last:border-0">
                  <td className="px-4 py-3 text-sm font-bold">{row.area}</td>
                  <td className="px-4 py-3 text-sm text-[rgba(0,0,0,0.6)]">{row.basis}</td>
                  <td className="px-4 py-3">
                    <span className="font-bold text-[#1B5E20] bg-[#E8F5E9] px-2.5 py-1 rounded font-[family-name:var(--font-outfit)] text-xs">
                      {row.value}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Payment Grid ── */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl p-7 shadow-sm">
            <h3 className="text-base font-bold text-[#023047] mb-4">Payment terms</h3>
            {data.paymentTerms.map((term, i) => (
              <div key={i} className="flex gap-3 mb-3.5 text-sm">
                <div className="w-7 h-7 rounded-full bg-[#023047] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i === data.paymentTerms.length - 1 ? '✓' : i + 1}
                </div>
                <div dangerouslySetInnerHTML={{ __html: term.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} className="text-[rgba(0,0,0,0.7)] leading-relaxed" />
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-7 shadow-sm">
            <h3 className="text-base font-bold text-[#023047] mb-4">What's not included</h3>
            <div className="text-sm text-[#5a7d8f] leading-loose">
              {data.notIncluded.map((item, i) => (
                <div key={i}>✕ {item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
