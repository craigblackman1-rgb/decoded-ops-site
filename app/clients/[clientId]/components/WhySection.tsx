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
    <section className="bg-[#023047] text-white px-5 py-24 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-white">
            {data.title.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </h2>
          <p className="text-base lg:text-lg text-[rgba(255,255,255,0.55)] max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* 3-column comparison table grid — matches HTML diff-grid */}
        <div
          className="rounded-xl overflow-hidden mb-12"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.08)' }}
        >
          {/* Headers */}
          <div className="px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-center bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.4)]">
            Typical approach
          </div>
          <div className="px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-center bg-[#219EBC] text-white">
            Decoded Ops
          </div>
          <div className="px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-center bg-[rgba(255,183,3,0.1)] text-[#FFB703]">
            Your benefit
          </div>

          {/* Rows */}
          {data.comparison.map((row, i) => (
            <div key={i} style={{ display: 'contents' }}>
              <div className="px-5 py-4 text-sm leading-relaxed bg-[rgba(255,255,255,0.02)] text-[rgba(255,255,255,0.4)] italic">
                {row.typical}
              </div>
              <div className="px-5 py-4 text-sm leading-relaxed bg-[rgba(33,158,188,0.08)] text-[#8ECAE6] font-medium">
                {row.decoded}
              </div>
              <div className="px-5 py-4 text-sm leading-relaxed bg-[rgba(255,183,3,0.04)] text-[rgba(255,255,255,0.7)]">
                {row.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies — 2 column grid */}
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {data.caseStudies.map((study, i) => (
            <div
              key={i}
              className="p-7 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:border-[#219EBC] transition-colors duration-300"
            >
              <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
                Case Study
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">{study.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed mb-4">
                {study.description}
              </p>
              <div className="px-3.5 py-2.5 bg-[rgba(255,183,3,0.08)] rounded-md text-sm font-semibold text-[#FFB703]">
                {study.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
