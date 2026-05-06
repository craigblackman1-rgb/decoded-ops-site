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
    <section className="bg-[#023047] text-white px-5 py-24 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-white">
            {data.title.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </h2>
          <p className="text-base lg:text-lg text-[rgba(255,255,255,0.55)] max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Validity bar */}
        <div className="flex items-center gap-3 px-7 py-5 bg-[rgba(251,133,0,0.1)] border border-[rgba(251,133,0,0.2)] rounded-xl mb-12 text-sm">
          <span className="text-xl flex-shrink-0">⏰</span>
          <div className="text-[rgba(255,255,255,0.8)]">
            This proposal is valid until{' '}
            <strong className="text-[#FFB703]">{data.deadline}</strong>. A decision by{' '}
            <strong className="text-[#FFB703]">{data.decisionDate}</strong> is needed to start Phase 1 in the first week of June and have all deliverables live before August.
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {data.steps.map((step) => (
            <div
              key={step.num}
              className="p-7 bg-[rgba(255,255,255,0.04)] rounded-xl border border-[rgba(255,255,255,0.08)] relative"
            >
              <div className="absolute top-4 right-5 text-5xl font-black text-[#FFB703] opacity-15 font-mono leading-none">
                {step.num}
              </div>
              <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-2">
                {step.date}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Contact block */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-12 items-start p-7 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl flex-wrap">
          <div>
            <div className="text-xs text-[#8ECAE6] mb-1">Call or email me directly</div>
            <div className="text-3xl font-black text-white">{data.contact.phone}</div>
            <div className="text-base text-[#219EBC] mt-1">{data.contact.email}</div>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.5)] max-w-sm leading-relaxed">
            {data.contact.note}
          </div>
        </div>
      </div>
    </section>
  );
}
