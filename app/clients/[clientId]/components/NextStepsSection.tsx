'use client';

interface NextStepsData {
  tag: string;
  title: string;
  subtitle: string;
  deadline: string;
  decisionDate: string;
  steps: Array<{
    num: number;
    date: string;
    title: string;
    description: string;
  }>;
  contact: {
    phone: string;
    email: string;
    note: string;
  };
}

export default function NextStepsSection({ data }: { data: NextStepsData }) {
  return (
    <section className="bg-[#F8F9FA] text-[#023047] px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-[#FB8500] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">{data.title}</h2>
          <p className="text-lg text-[rgba(2,48,71,0.6)] max-w-2xl">
            {data.subtitle}
          </p>
        </div>

        {/* Validity Banner */}
        <div className="bg-[rgba(255,183,3,0.1)] border-l-4 border-[#FFB703] rounded-lg p-6 mb-12 flex gap-4">
          <div className="text-2xl flex-shrink-0">⏰</div>
          <div>
            <p className="text-sm text-[#555]">
              This proposal is valid until <strong>{data.deadline}</strong>. A decision by{' '}
              <strong>{data.decisionDate}</strong> is needed to start Phase 1 in the first week of June and have all deliverables live before August.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.steps.map((step) => (
            <div
              key={step.num}
              className="p-8 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#023047] text-white flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
                <div className="text-xs font-bold text-[#8ECAE6] uppercase tracking-wider">
                  {step.date}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-[rgba(2,48,71,0.05)] rounded-2xl p-8 border border-[rgba(2,48,71,0.1)] flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div>
            <div className="text-xs font-bold text-[#8ECAE6] uppercase tracking-widest mb-2">
              Call or email directly
            </div>
            <div className="text-4xl font-black text-[#023047]">
              {data.contact.phone}
            </div>
            <div className="text-lg text-[#219EBC] mt-2">
              {data.contact.email}
            </div>
          </div>
          <div className="text-sm text-[rgba(2,48,71,0.6)] max-w-sm">
            {data.contact.note}
          </div>
        </div>
      </div>
    </section>
  );
}
