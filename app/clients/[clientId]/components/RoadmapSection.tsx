'use client';

interface RoadmapData {
  tag: string;
  title: string;
  subtitle: string;
  phases: Array<{
    name: string;
    duration: string;
    details: string;
    order: number;
  }>;
  timeline: Array<{
    workstream: string;
    months: string[];
  }>;
}

export default function RoadmapSection({ data }: { data: RoadmapData }) {
  const sortedPhases = [...data.phases].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-[#023047] text-white px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">{data.title}</h2>
          <p className="text-lg text-[#8ECAE6]">{data.subtitle}</p>
        </div>

        {/* Phase Stack */}
        <div className="space-y-2 mb-16">
          {sortedPhases.map((phase, i) => (
            <div
              key={i}
              className={`p-5 rounded-lg border-l-4 ${
                i === 0
                  ? 'border-[#FFB703] bg-[rgba(255,183,3,0.08)]'
                  : i === 1
                  ? 'border-[#FB8500] bg-[rgba(251,133,0,0.08)] ml-10'
                  : i === 2
                  ? 'border-[#219EBC] bg-[rgba(33,158,188,0.08)] ml-20'
                  : i === 3
                  ? 'border-[#4FC3F7] bg-[rgba(79,195,247,0.08)] ml-32'
                  : 'border-[#023047] bg-[rgba(33,158,188,0.1)] ml-40'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="font-bold text-sm md:text-base">{phase.name}</div>
                <div className="text-xs font-semibold text-[#8ECAE6] opacity-70">
                  {phase.duration}
                </div>
              </div>
              {phase.details && (
                <p className="text-xs text-[rgba(255,255,255,0.5)] mt-2">
                  {phase.details}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[rgba(255,255,255,0.05)]">
                <th className="px-4 py-3 text-left font-bold text-[#8ECAE6] text-xs uppercase tracking-wider">
                  Workstream
                </th>
                {[
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                  'Q1 \'27',
                  'Q2 \'27',
                  'Q3+',
                ].map((m) => (
                  <th
                    key={m}
                    className="px-2 py-3 text-center font-bold text-[#8ECAE6] text-xs uppercase tracking-wider border-l border-[rgba(255,255,255,0.06)]"
                  >
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.timeline.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(255,255,255,0.02)]">
                  <td className="px-4 py-2 text-sm text-[rgba(255,255,255,0.7)] font-medium">
                    {row.workstream}
                  </td>
                  {row.months.map((m, j) => (
                    <td
                      key={j}
                      className={`px-2 py-2 text-center border-l border-[rgba(255,255,255,0.06)] ${
                        m === '✓'
                          ? 'bg-[rgba(33,158,188,0.1)] text-[#219EBC] font-bold'
                          : ''
                      }`}
                    >
                      {m}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#8ECAE6] opacity-50 text-center mt-4">
          ⚡ Phase 1 completes before August peak — no new implementations during your busiest months
        </p>
      </div>
    </section>
  );
}
