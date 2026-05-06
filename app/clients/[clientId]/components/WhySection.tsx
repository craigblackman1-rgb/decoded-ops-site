'use client';

interface WhyData {
  tag: string;
  title: string;
  subtitle: string;
  comparison: Array<{
    typical: string;
    decoded: string;
    benefit: string;
  }>;
  caseStudies: Array<{
    title: string;
    description: string;
    result: string;
  }>;
}

export default function WhySection({ data }: { data: WhyData }) {
  return (
    <section className="bg-[#010f17] text-white px-8 py-20 md:px-20">
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

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {data.comparison.map((item, i) => (
            <div key={i} className="space-y-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#FB8500] mb-2">
                  Typical Approach
                </div>
                <p className="text-sm text-[rgba(255,255,255,0.6)]">{item.typical}</p>
              </div>
              <div className="h-px bg-[rgba(255,255,255,0.1)]" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#219EBC] mb-2">
                  Decoded Ops
                </div>
                <p className="text-sm text-[#8ECAE6]">{item.decoded}</p>
              </div>
              <div className="h-px bg-[rgba(255,255,255,0.1)]" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#4ade80] mb-2">
                  Your Benefit
                </div>
                <p className="text-sm text-[#86efac]">{item.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-[rgba(33,158,188,0.05)] rounded-2xl p-8 border border-[rgba(33,158,188,0.1)]">
          <h3 className="text-2xl font-bold mb-8">Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.caseStudies.map((study, i) => (
              <div key={i} className="border-l-4 border-[#219EBC] pl-6">
                <h4 className="font-bold text-base mb-2">{study.title}</h4>
                <p className="text-sm text-[rgba(255,255,255,0.6)] mb-4">
                  {study.description}
                </p>
                <p className="text-sm font-bold text-[#FFB703]">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
