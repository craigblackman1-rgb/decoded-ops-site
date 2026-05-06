'use client';

interface PainPoint {
  title: string;
  description: string;
  stat: string;
}

interface ChallengeData {
  tag: string;
  title: string;
  subtitle: string;
  painPoints: PainPoint[];
}

export default function ChallengeSection({ data }: { data: ChallengeData }) {
  return (
    <section className="bg-[#F8F9FA] text-[#023047] px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-[#FB8500] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">{data.title}</h2>
          <p className="text-lg text-[rgba(2,48,71,0.6)] max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {data.painPoints.map((point, i) => (
            <div
              key={i}
              className="p-7 bg-white rounded-2xl border-l-4 border-[#FB8500] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[rgba(251,133,0,0.1)] flex items-center justify-center mb-4 text-2xl">
                {i === 0 && '🔗'}
                {i === 1 && '📊'}
                {i === 2 && '📈'}
                {i === 3 && '⚠️'}
              </div>
              <h3 className="text-lg font-bold text-[#023047] mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed mb-3">
                {point.description}
              </p>
              <div className="text-xs font-bold px-3 py-2 bg-[rgba(251,133,0,0.08)] rounded-lg text-[#FB8500] inline-block">
                {point.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Systems Diagram Note */}
        <div className="bg-[#023047] rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Current State vs. Future State</h3>
            <p className="text-[#8ECAE6] text-sm max-w-2xl mx-auto">
              Your systems are disconnected and manual. We\'ll consolidate them into a single, integrated platform that flows data cleanly into your future ERP.
            </p>
          </div>

          {/* Placeholder for SVG diagram */}
          <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-8 h-80 flex items-center justify-center border border-[rgba(33,158,188,0.2)]">
            <div className="text-center text-[rgba(255,255,255,0.4)]">
              <div className="text-sm font-mono">Systems Diagram</div>
              <div className="text-xs mt-2">Current chaos → Future clarity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
