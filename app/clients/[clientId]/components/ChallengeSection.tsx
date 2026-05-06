'use client';

import SystemsDiagram from './SystemsDiagram';

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

        {/* Systems Diagram */}
        <SystemsDiagram />
      </div>
    </section>
  );
}
