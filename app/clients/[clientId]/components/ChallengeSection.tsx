'use client';

import SystemsDiagram from './SystemsDiagram';

interface PainPoint {
  title: string;
  description: string;
  stat: string;
  icon?: string;
  borderColor?: string;
  bgColor?: string;
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
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight max-w-3xl">
            {data.title.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </h2>
           <p className="text-base lg:text-lg text-[rgba(2,48,71,0.55)] max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {data.painPoints.map((point, i) => {
            const borderClass = point.borderColor || 'border-[#FB8500]';
            const bgClass = point.bgColor || 'bg-[rgba(251,133,0,0.1)]';
            const statBgClass = point.borderColor === 'border-[#C62828]'
              ? 'bg-[rgba(198,40,40,0.08)]'
              : point.borderColor === 'border-[#219EBC]'
              ? 'bg-[rgba(33,158,188,0.08)]'
              : point.borderColor === 'border-[#FFB703]'
              ? 'bg-[rgba(255,183,3,0.1)]'
              : 'bg-[rgba(251,133,0,0.08)]';
            const statTextClass = point.borderColor === 'border-[#C62828]'
              ? 'text-[#C62828]'
              : point.borderColor === 'border-[#219EBC]'
              ? 'text-[#219EBC]'
              : point.borderColor === 'border-[#FFB703]'
              ? 'text-[#FFB703]'
              : 'text-[#FB8500]';

            return (
              <div
                key={i}
                className={`p-7 bg-white rounded-2xl border-l-4 ${borderClass} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl ${bgClass} flex items-center justify-center mb-4 text-2xl`}>
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-[#023047] mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed mb-3">
                  {point.description}
                </p>
                <div className={`text-xs font-bold px-3 py-2 ${statBgClass} rounded-lg ${statTextClass} inline-block`}>
                  {point.stat}
                </div>
              </div>
            );
          })}
        </div>

        {/* Systems Diagram */}
        <SystemsDiagram />
      </div>
    </section>
  );
}
