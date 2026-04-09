import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CostChartGraphic } from '@/components/graphics/CostChartGraphic';

const timeline = [
  { month: 'Month 1–3',   cost: '£28,000',  label: 'eCommerce platform selected and contracted',              note: "Chosen without a vendor brief. No integration scoping done." },
  { month: 'Month 4–6',   cost: '£19,000',  label: 'Integration issues discovered. Development work begins', note: "ERP and eCommerce couldn't talk to each other. Manual workarounds introduced." },
  { month: 'Month 7–9',   cost: '£34,000',  label: 'ERP customisation commissioned',                         note: "To fix what should have been caught in the original specification." },
  { month: 'Month 10–12', cost: '£22,000',  label: 'Go-live delayed. Additional resource hired to cover',    note: "Two additional staff members for 6 months to manage manual process." },
  { month: 'Month 13–18', cost: '£51,000',  label: 'Ongoing fixes, rework, and a second integration attempt', note: "The original platform was eventually replaced entirely." },
];

const auditFindings = [
  "The ERP's API capability was limited to a specific version that the chosen eCommerce platform didn't support",
  "The existing ERP had an eCommerce module already — it had never been activated or explored",
  "Two alternative platforms were better suited to the business model and had native ERP integration",
  "The business's order data wasn't clean enough for any integration to work without significant preparation",
  "Three manual processes could have been automated within the existing system at no additional cost",
];

export default function CaseStudyPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-6">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— Case Study</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F1923] leading-tight mb-6">
                What happens when<br />
                <span className="text-[#3A86FF]">the audit doesn&apos;t come first.</span>
              </h1>
              <p className="text-lg text-[#0F1923]/70 leading-relaxed mb-8 max-w-xl">
                A print and embroidery business. £154,000. 18 months. And what the £10,000 audit would have prevented.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
                Don&apos;t let this be your story <ArrowRight size={18} />
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <CostChartGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-20 bg-[#0F1923]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— The business</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0F1923] mb-6">A growing business. A decision made too quickly.</h2>
              <div className="space-y-4 text-[#0F1923]/70 leading-relaxed">
                <p>A £2.4m print and embroidery business with 18 staff. The owner had been running the business for 12 years and had outgrown the original system. The decision was made to invest in a new eCommerce platform and connect it to the existing ERP.</p>
                <p>The platform was selected based on a sales demo and a recommendation from another business owner in a different sector. The ERP vendor was asked whether integration was possible. They said yes.</p>
                <p>No independent audit was done. No vendor brief was written. No integration scoping was completed before contracts were signed.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Business revenue', value: '£2.4m' },
                { label: 'Staff at time', value: '18' },
                { label: 'Years trading', value: '12' },
                { label: 'Total losses', value: '£154k' },
              ].map(s => (
                <div key={s.label} className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#93A8C0]/40 text-center">
                  <div className="text-3xl font-bold text-[#0F1923] mb-1">{s.value}</div>
                  <div className="text-xs text-[#0F1923]/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE — dark */}
      <section className="py-20 lg:py-28 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3A86FF]/20 border border-[#3A86FF]/30 mb-4">
              <span className="text-xs font-semibold text-[#93A8C0] tracking-wider uppercase">— What happened</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">18 months. £154,000.</h2>
            <p className="text-[#93A8C0] text-lg">How the costs accumulated, month by month.</p>
          </div>
          <div className="space-y-4 mb-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                <div className="flex-shrink-0 text-right w-28">
                  <div className="text-xs font-medium text-[#3A86FF]">{item.month}</div>
                  <div className="text-xl font-bold text-[#F8F9FA] mt-1">{item.cost}</div>
                </div>
                <div className="border-l border-[#F8F9FA]/10 pl-6">
                  <div className="font-semibold text-[#F8F9FA] mb-1">{item.label}</div>
                  <div className="text-sm text-[#93A8C0]">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 p-6 rounded-2xl border-2 border-[#3A86FF] bg-[#3A86FF]/10">
            <div className="flex-shrink-0 text-right w-28">
              <div className="text-xs font-medium text-[#3A86FF]">Total</div>
              <div className="text-2xl font-bold text-[#F8F9FA] mt-1">£154,000</div>
            </div>
            <div className="border-l border-[#3A86FF]/30 pl-6 flex items-center">
              <div className="font-semibold text-[#F8F9FA]">In direct costs, additional headcount, and lost productivity over 18 months.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE AUDIT WOULD HAVE FOUND */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— The counterfactual</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1923] mb-4">What a one-day audit would have found</h2>
              <p className="text-[#0F1923]/60 mb-8">Every one of these findings would have been visible in a single day on site. The audit costs £10,000. The total cost of not having it was £154,000.</p>
              <div className="space-y-4">
                {auditFindings.map((finding, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#93A8C0]/40">
                    <div className="w-7 h-7 rounded-full bg-[#3A86FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#3A86FF]">{i + 1}</span>
                    </div>
                    <p className="text-sm text-[#0F1923]/70 leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl bg-[#3A86FF]/10 border border-[#3A86FF]/25 p-8">
                <div className="text-2xl font-bold text-[#0F1923] mb-2">Don&apos;t let this be your case study</div>
                <p className="text-[#0F1923]/70 mb-6 text-sm leading-relaxed">The audit exists to prevent exactly this. One day. Six areas. Everything it costs you in writing — before you commit to anything.</p>
                <div className="space-y-3 mb-8">
                  {['Written report within 5 days', 'Every issue quantified in £', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#0F1923]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/audit" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
                  Book the audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
