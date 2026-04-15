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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Illustrative Scenario</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
                What happens when<br />
                <span className="text-[#219EBC]">the audit doesn&apos;t come first.</span>
              </h1>
              <p className="text-lg text-[#023047]/70 leading-relaxed mb-2 max-w-xl">
                A composite scenario based on real patterns observed across print and embroidery audits.
              </p>
              <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl">
                £154,000 in costs. 18 months. What a £10,000 audit would have prevented.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
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
      <section className="py-20 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— The Pattern</span>
              </div>
              <h2 className="text-3xl font-bold text-[#023047] mb-6">A common scenario: Growth without preparation.</h2>
              <div className="space-y-4 text-[#023047]/70 leading-relaxed">
                <p>A £5.5m print and embroidery business. Successful. Growing. The owner had outgrown their original system and made the decision to invest in a new eCommerce platform integrated to their existing ERP.</p>
                <p>The problem: the ERP platform was fairly new and lacked the capacity to manage productions, artwork approvals, and decorated garments natively. The eCommerce platform was selected without scoping integration. The ERP vendor confirmed integration was &ldquo;possible&rdquo;—but there was no existing API integration between them.</p>
                <p>No independent audit was done. No vendor brief was written. No integration scoping was completed before contracts were signed. The cost to build that integration from scratch: £80,000.</p>
                <p className="text-[#023047] font-semibold">What they didn&rsquo;t know: if this engagement had happened six months earlier, they wouldn&rsquo;t have paid £50,000 for their ERP implementation at all. A better platform existed that cost around £25,000 to implement and had native API integration built in. The eCommerce build would have been over 50% less expensive, with no custom workarounds needed for artwork, decorated garments, product publishing, custom attributes, or the hundreds of hours spent mapping supplier data and testing bespoke functionality.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Business revenue', value: '£5.5m' },
                { label: 'ERP-eCommerce integration cost', value: '£80k' },
                { label: 'Wasted ERP spend (could have been £25k)', value: '£50k' },
                { label: 'Total losses', value: '£154k' },
              ].map(s => (
                <div key={s.label} className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#8ECAE6]/40 text-center">
                  <div className="text-3xl font-bold text-[#023047] mb-1">{s.value}</div>
                  <div className="text-xs text-[#023047]/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">— What happened</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">18 months. £154,000.</h2>
            <p className="text-[#8ECAE6] text-lg">How the costs accumulated, month by month.</p>
          </div>
          <div className="space-y-4 mb-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                <div className="flex-shrink-0 text-right w-28">
                  <div className="text-xs font-medium text-[#219EBC]">{item.month}</div>
                  <div className="text-xl font-bold text-[#F8F9FA] mt-1">{item.cost}</div>
                </div>
                <div className="border-l border-[#F8F9FA]/10 pl-6">
                  <div className="font-semibold text-[#F8F9FA] mb-1">{item.label}</div>
                  <div className="text-sm text-[#8ECAE6]">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 p-6 rounded-2xl border-2 border-[#219EBC] bg-[#219EBC]/10">
            <div className="flex-shrink-0 text-right w-28">
              <div className="text-xs font-medium text-[#219EBC]">Total</div>
              <div className="text-2xl font-bold text-[#F8F9FA] mt-1">£154,000</div>
            </div>
            <div className="border-l border-[#219EBC]/30 pl-6 flex items-center">
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— The counterfactual</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">What a one-day audit would have found</h2>
              <p className="text-[#023047]/70 mb-8">Every one of these findings would have been visible in a single day on site. The audit costs £10,000. The total cost of not having it was £154,000.</p>
              <div className="space-y-4">
                {auditFindings.map((finding, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#8ECAE6]/40">
                    <div className="w-7 h-7 rounded-full bg-[#219EBC]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#219EBC]">{i + 1}</span>
                    </div>
                    <p className="text-sm text-[#023047]/70 leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25 p-8">
                <div className="text-2xl font-bold text-[#023047] mb-2">Don&apos;t let this be your case study</div>
                <p className="text-[#023047]/70 mb-6 text-sm leading-relaxed">The audit exists to prevent exactly this. One day. Six areas. Everything it costs you in writing — before you commit to anything.</p>
                <div className="space-y-3 mb-8">
                  {['Written report within 5 days', 'Every issue quantified in £', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#023047]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#219EBC]" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/clarity" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
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
