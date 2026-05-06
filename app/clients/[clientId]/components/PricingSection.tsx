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
  breakdown: Array<{
    label: string;
    value: string;
  }>;
}

interface PricingData {
  tag: string;
  title: string;
  subtitle: string;
  options: PricingOption[];
  valueComparison: any[];
  roi: Array<{
    area: string;
    basis: string;
    value: string;
  }>;
  paymentTerms: string[];
  notIncluded: string[];
}

export default function PricingSection({ data }: { data: PricingData }) {
  return (
    <section className="bg-[#023047] text-white px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">{data.title}</h2>
          <p className="text-lg text-[#8ECAE6] max-w-2xl">
            {data.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {data.options.map((option) => (
            <div
              key={option.id}
              className={`rounded-2xl p-8 relative transition-all duration-300 ${
                option.recommended
                  ? 'bg-[rgba(33,158,188,0.15)] border-2 border-[#219EBC] transform -translate-y-4'
                  : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]'
              }`}
            >
              {option.recommended && (
                <div className="absolute -top-4 right-6 bg-[#FFB703] text-[#023047] px-4 py-1 rounded-full text-xs font-bold">
                  ⭐ Recommended
                </div>
              )}

              <div className="text-xs font-bold text-[#FFB703] uppercase tracking-wider mb-2">
                Option {option.id}
              </div>
              <h3 className="text-2xl font-bold mb-4">{option.name}</h3>

              <div className="mb-6">
                <div className="text-4xl font-black text-[#FFB703]">
                  {option.amount}
                  <span className="text-lg font-normal opacity-70">{option.period}</span>
                </div>
                <div className="text-sm text-[#8ECAE6] mt-2">
                  {option.days} · {option.minimum}
                </div>
              </div>

              <p className="text-sm text-[rgba(255,255,255,0.6)] mb-6">
                {option.bestFor}
              </p>

              <div className="space-y-2 border-t border-[rgba(255,255,255,0.1)] pt-6">
                {option.breakdown.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span className="text-xs text-[rgba(255,255,255,0.5)]">
                      {item.label}
                    </span>
                    <span className="text-sm font-mono font-bold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Table */}
        <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6">Return on Investment</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.1)]">
                  <th className="text-left py-4 px-4 font-bold text-[#8ECAE6]">Area</th>
                  <th className="text-left py-4 px-4 font-bold text-[#8ECAE6]">Basis</th>
                  <th className="text-right py-4 px-4 font-bold text-[#FFB703]">Value</th>
                </tr>
              </thead>
              <tbody>
                {data.roi.map((row, i) => (
                  <tr key={i} className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)]">
                    <td className="py-4 px-4 font-bold">{row.area}</td>
                    <td className="py-4 px-4 text-[rgba(255,255,255,0.6)]">
                      {row.basis}
                    </td>
                    <td className="py-4 px-4 text-right text-[#FFB703]">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Payment Terms</h3>
            <div className="space-y-4">
              {data.paymentTerms.map((term, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#219EBC] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm text-[rgba(255,255,255,0.7)]">{term}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Not Included</h3>
            <div className="space-y-2">
              {data.notIncluded.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-[rgba(255,255,255,0.6)]">
                  <span className="text-[#FB8500] flex-shrink-0">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
