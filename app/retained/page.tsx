import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Users, Wrench, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Retained CTO Services | Decoded Ops',
  description: 'Fractional CTO and Head of Operations on a retained basis. Monthly strategic and operational leadership, vendor management, and a direct line to Craig.',
  alternates: { canonical: '/retained' },
};
import { RetainedModelGraphic } from '@/components/graphics/RetainedModelGraphic';

const whenItFits = [
  { icon: Wrench,     title: 'Post-audit implementation',   desc: "The audit found the issues. Now you need someone to drive the fixes. Retained gives you the hands-on delivery without a full-time hire." },
  { icon: TrendingUp, title: 'ERP or technology transition', desc: "You're implementing new software. You need someone who understands the sector, the vendors, and your business — and can hold everyone accountable." },
  { icon: Users,      title: 'Scaling without chaos',        desc: "Revenue is growing but the systems aren't keeping up. You need operational infrastructure built around how your business actually works." },
  { icon: Clock,      title: 'Covering a gap',               desc: "Your ops director has left, or you've never had one. You need senior operational thinking without the \u00A380k+ salary commitment." },
];

const whatItIncludes = [
  'A defined number of days per month — agreed in advance',
  'Attendance at leadership and operations meetings',
  'Ownership of specific projects or workstreams',
  'Vendor management and technology procurement oversight',
  'Technology roadmap ownership',
  'Team coaching and process documentation',
  'A direct line to Craig — not a team of junior consultants',
];

const serviceJourney = [
  { label: 'Clarity',   href: '/clarity',   highlighted: false },
  { label: 'Deliver',   href: '/deliver',   highlighted: false },
  { label: 'Transform', href: '/transform', highlighted: false },
  { label: 'Retained',  href: '/retained',  highlighted: true },
];

export default function RetainedPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; Retained &middot; Fractional CTO / Head of Operations</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
                Senior operational thinking. <span className="text-[#219EBC]">Without the full-time cost.</span>
              </h1>
              <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl">
                Monthly strategic and operational leadership for businesses that need the thinking without a full-time hire. Roadmap ownership. Vendor management. Ongoing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  Talk about your situation <ArrowRight size={18} />
                </Link>
                <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                  Start with Clarity
                </Link>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-bold text-[#023047]">Fixed days</div>
                  <div className="text-sm text-[#023047]/70">Agreed at the start</div>
                </div>
                <div className="w-px bg-[#8ECAE6]" />
                <div>
                  <div className="text-2xl font-bold text-[#023047]">3 months</div>
                  <div className="text-sm text-[#023047]/70">Minimum engagement</div>
                </div>
                <div className="w-px bg-[#8ECAE6]" />
                <div>
                  <div className="text-2xl font-bold text-[#023047]">30 days</div>
                  <div className="text-sm text-[#023047]/70">Notice after minimum</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center p-6 rounded-2xl bg-[#023047]/5 border border-[#8ECAE6]/30">
              <RetainedModelGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CONNECTIONS */}
      <section className="py-12 bg-[#F8F9FA] border-t border-[#8ECAE6]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-3">
            {serviceJourney.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <Link
                  href={step.href}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    step.highlighted
                      ? 'bg-[#219EBC] text-[#F8F9FA]'
                      : 'bg-[#023047]/10 text-[#023047] hover:bg-[#023047]/20'
                  }`}
                >
                  {step.label}
                </Link>
                {i < serviceJourney.length - 1 && (
                  <ArrowRight size={16} className="text-[#8ECAE6]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN IT FITS */}
      <section className="py-20 lg:py-28 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; When it fits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">Four situations where Retained makes sense</h2>
            <p className="text-[#023047]/70 text-lg">Not every business needs a full-time ops director. But every business needs the thinking.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whenItFits.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group p-6 rounded-2xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#219EBC]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#219EBC]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#023047] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#023047]/70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT IT INCLUDES — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
                <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">&mdash; What&apos;s included</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-8">What Retained actually looks like</h2>
              <div className="space-y-4">
                {whatItIncludes.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#219EBC] mt-0.5 flex-shrink-0" />
                    <span className="text-[#8ECAE6]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  Let&apos;s talk about what you need <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
              <div className="text-xs font-semibold text-[#8ECAE6] uppercase tracking-wider mb-6">How it&apos;s structured</div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-[#8ECAE6]">Fixed days per month. Agreed at the start of the engagement. Minimum 3 months.</div>
                </div>
                <div className="border-t border-[#F8F9FA]/10 pt-6">
                  <div className="text-sm text-[#8ECAE6] leading-relaxed">
                    Days are used flexibly across meetings, project work, vendor oversight, and team support — based on what your business needs that month.
                  </div>
                </div>
                <div className="border-t border-[#F8F9FA]/10 pt-6">
                  <div className="text-xs font-semibold text-[#219EBC] uppercase tracking-wider mb-2">No lock-in after minimum</div>
                  <div className="text-sm text-[#8ECAE6]">30 days notice either side after the 3-month minimum. No penalties. No conditions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; Get started</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">Let&apos;s talk about what you need</h2>
          <p className="text-[#023047]/70 text-lg max-w-xl mx-auto mb-8">Retained engagements are structured around your specific situation. The first call is free and takes 60 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free call <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
              See full pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
