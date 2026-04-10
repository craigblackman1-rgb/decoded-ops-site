import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Users, Wrench, TrendingUp } from 'lucide-react';
import { FractionalModelGraphic } from '@/components/graphics/FractionalModelGraphic';

const whenItFits = [
  { icon: Wrench,     title: 'Post-audit implementation',   desc: "The audit found the issues. Now you need someone to drive the fixes. Fractional ops gives you the hands-on delivery without a full-time hire." },
  { icon: TrendingUp, title: 'ERP or technology transition', desc: "You're implementing new software. You need someone who understands the sector, the vendors, and your business — and can hold everyone accountable." },
  { icon: Users,      title: 'Scaling without chaos',        desc: "Revenue is growing but the systems aren't keeping up. You need operational infrastructure built around how your business actually works." },
  { icon: Clock,      title: 'Covering a gap',               desc: "Your ops director has left, or you've never had one. You need senior operational thinking without the £80k+ salary commitment." },
];

const whatItIncludes = [
  'A defined number of days per month — agreed in advance',
  'Attendance at leadership and operations meetings',
  'Ownership of specific projects or workstreams',
  'Vendor management and technology procurement oversight',
  'Team coaching and process documentation',
  'A direct line to Craig — not a team of junior consultants',
];

export default function FractionalPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-6">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— Fractional Ops Director</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F1923] leading-tight mb-6">
                Senior operational thinking.<br />
                <span className="text-[#3A86FF]">Without the full-time cost.</span>
              </h1>
              <p className="text-lg text-[#0F1923]/70 leading-relaxed mb-8 max-w-xl">
                For businesses that have found the problems and need someone to own the fixes. A defined number of days per month. Full senior involvement. No junior handoff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
                  Talk about your situation <ArrowRight size={18} />
                </Link>
                <Link href="/audit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#3A86FF] text-[#3A86FF] font-semibold hover:bg-[#3A86FF]/10 transition-colors">
                  Start with the audit
                </Link>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-bold text-[#0F1923]">£1,500</div>
                  <div className="text-sm text-[#0F1923]/60">Per month (after Advise tier)</div>
                </div>
                <div className="w-px bg-[#93A8C0]" />
                <div>
                  <div className="text-2xl font-bold text-[#0F1923]">3 months</div>
                  <div className="text-sm text-[#0F1923]/60">Minimum engagement</div>
                </div>
                <div className="w-px bg-[#93A8C0]" />
                <div>
                  <div className="text-2xl font-bold text-[#0F1923]">30 days</div>
                  <div className="text-sm text-[#0F1923]/60">Notice after minimum</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center p-6 rounded-2xl bg-[#0F1923]/5 border border-[#93A8C0]/30">
              <FractionalModelGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* WHEN IT FITS */}
      <section className="py-20 lg:py-28 bg-[#0F1923]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
              <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— When it fits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1923] mb-4">Four situations where fractional ops makes sense</h2>
            <p className="text-[#0F1923]/60 text-lg">Not every business needs a full-time ops director. But every business needs the thinking.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whenItFits.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group p-6 rounded-2xl border border-[#93A8C0]/40 bg-[#F8F9FA] hover:border-[#3A86FF]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#3A86FF]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#3A86FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F1923] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#0F1923]/60 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT IT INCLUDES — dark */}
      <section className="py-20 lg:py-28 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3A86FF]/20 border border-[#3A86FF]/30 mb-4">
                <span className="text-xs font-semibold text-[#93A8C0] tracking-wider uppercase">— What&apos;s included</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-8">What fractional ops actually looks like</h2>
              <div className="space-y-4">
                {whatItIncludes.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#3A86FF] mt-0.5 flex-shrink-0" />
                    <span className="text-[#93A8C0]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
                  Let&apos;s talk about what you need <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
              <div className="text-xs font-semibold text-[#93A8C0] uppercase tracking-wider mb-6">How it&apos;s priced</div>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-[#F8F9FA] mb-1">£1,500<span className="text-lg font-normal text-[#93A8C0]">/mo + VAT</span></div>
                  <div className="text-sm text-[#93A8C0]">After the Advise tier audit. Minimum 3 months.</div>
                </div>
                <div className="border-t border-[#F8F9FA]/10 pt-6">
                  <div className="text-sm text-[#93A8C0] leading-relaxed">
                    The monthly rate covers a defined number of days agreed at the start of the engagement. Days can be used flexibly across meetings, project work, vendor oversight, and team support.
                  </div>
                </div>
                <div className="border-t border-[#F8F9FA]/10 pt-6">
                  <div className="text-xs font-semibold text-[#3A86FF] uppercase tracking-wider mb-2">No lock-in after minimum</div>
                  <div className="text-sm text-[#93A8C0]">30 days notice either side after the 3-month minimum. No penalties. No conditions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
            <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— Get started</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1923] mb-4">Let&apos;s talk about what you need</h2>
          <p className="text-[#0F1923]/60 text-lg max-w-xl mx-auto mb-8">Fractional engagements are structured around your specific situation. The first call is free and takes 60 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
              Book a free call <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#3A86FF] text-[#3A86FF] font-semibold hover:bg-[#3A86FF]/10 transition-colors">
              See full pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
