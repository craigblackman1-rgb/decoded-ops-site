import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const timeline = [
  { month: 'Month 1–3', label: 'eCommerce platform selected and contracted', cost: '£28,000', note: 'Chosen without a vendor brief. No integration scoping done.' },
  { month: 'Month 4–6', label: 'Integration issues discovered. Development work begins', cost: '£19,000', note: 'ERP and eCommerce couldn\'t talk to each other. Manual workarounds introduced.' },
  { month: 'Month 7–9', label: 'ERP customisation commissioned', cost: '£34,000', note: 'To fix what should have been caught in the original specification.' },
  { month: 'Month 10–12', label: 'Go-live delayed. Additional resource hired to cover', cost: '£22,000', note: 'Two additional staff members for 6 months to manage manual process.' },
  { month: 'Month 13–18', label: 'Ongoing fixes, rework, and a second integration attempt', cost: '£51,000', note: 'The original platform was eventually replaced entirely.' },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-[#546A7B]/10 text-[#546A7B] rounded-full text-sm font-medium mb-8">
            Case study
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#393D3F] leading-tight mb-8 max-w-3xl">
            What happens when<br />
            <span className="text-[#62929E]">the audit doesn&apos;t come first.</span>
          </h1>
          <p className="text-xl font-light text-[#393D3F]/70 max-w-2xl leading-relaxed">
            A print and embroidery business. £154,000. 18 months. And what the £10,000 audit would have prevented.
          </p>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-16 bg-[#393D3F]/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">The business</p>
          <h2 className="text-2xl font-bold text-[#393D3F] mb-6">A growing business. A decision made too quickly.</h2>
          <p className="text-[#393D3F]/70 leading-relaxed mb-4">
            A £2.4m print and embroidery business with 18 staff. The owner had been running the business for 12 years and had outgrown the original system. The decision was made to invest in a new eCommerce platform and connect it to the existing ERP.
          </p>
          <p className="text-[#393D3F]/70 leading-relaxed mb-4">
            The platform was selected based on a sales demo and a recommendation from another business owner in a different sector. The ERP vendor was asked whether integration was possible. They said yes.
          </p>
          <p className="text-[#393D3F]/70 leading-relaxed">
            No independent audit was done. No vendor brief was written. No integration scoping was completed before contracts were signed.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">What happened</p>
          <h2 className="text-3xl font-bold text-[#393D3F] mb-12">18 months. £154,000.</h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-[#C6C5B9]/30 bg-[#FDFDFF]">
                <div className="flex-shrink-0 text-right w-28">
                  <div className="text-xs font-medium text-[#546A7B]">{item.month}</div>
                  <div className="text-xl font-bold text-[#393D3F] mt-1">{item.cost}</div>
                </div>
                <div className="border-l border-[#C6C5B9]/40 pl-6">
                  <div className="font-semibold text-[#393D3F] mb-1">{item.label}</div>
                  <div className="text-sm text-[#393D3F]/55">{item.note}</div>
                </div>
              </div>
            ))}
            <div className="flex gap-6 p-6 rounded-2xl border-2 border-[#393D3F] bg-[#393D3F] text-white">
              <div className="flex-shrink-0 text-right w-28">
                <div className="text-xs font-medium text-[#C6C5B9]">Total</div>
                <div className="text-2xl font-bold mt-1">£154,000</div>
              </div>
              <div className="border-l border-white/20 pl-6 flex items-center">
                <div className="font-semibold">In direct costs, additional headcount, and lost productivity over 18 months.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE AUDIT WOULD HAVE FOUND */}
      <section className="py-24 lg:py-32 bg-[#393D3F]/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">The counterfactual</p>
          <h2 className="text-3xl font-bold text-[#393D3F] mb-8">What a one-day audit would have found</h2>
          <div className="space-y-4">
            {[
              'The ERP\'s API capability was limited to a specific version that the chosen eCommerce platform didn\'t support',
              'The existing ERP had an eCommerce module already — it had never been activated or explored',
              'Two alternative platforms were better suited to the business model and had native ERP integration',
              'The business\'s order data wasn\'t clean enough for any integration to work without significant preparation',
              'Three manual processes could have been automated within the existing system at no additional cost',
            ].map((finding, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#FDFDFF] border border-[#C6C5B9]/30">
                <div className="w-6 h-6 rounded-full bg-[#62929E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[#62929E]">{i + 1}</span>
                </div>
                <p className="text-sm text-[#393D3F]/70 leading-relaxed">{finding}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#393D3F]/55 mt-6 italic">Every one of these findings would have been visible in a single day on site. The audit costs £10,000. The total cost of not having it was £154,000.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62929E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">Don&apos;t let this be your case study</h3>
            <p className="text-white/80 max-w-xl">The audit exists to prevent exactly this. One day. Six areas. Everything it costs you in writing — before you commit to anything.</p>
          </div>
          <Link href="/audit" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#62929E] text-sm font-semibold hover:bg-[#FDFDFF]/90 transition-colors">
            Book the audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
