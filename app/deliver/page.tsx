import Link from 'next/link';
import { ArrowRight, FileText, Search, Users, Shield, CheckCircle2 } from 'lucide-react';

const processSteps = [
  { icon: FileText, num: '01', title: 'Brief',   desc: 'I write the vendor brief based on your Clarity report or existing requirements. Your needs, not the vendor\u2019s sales pitch.' },
  { icon: Search,   num: '02', title: 'Procure',  desc: 'I go to market on your behalf. Vendors are approached, managed, and compared on a like-for-like basis. No commitment until you\u2019ve reviewed all options.' },
  { icon: Users,    num: '03', title: 'Manage',   desc: 'I act as your single point of contact. Vendors are held to the brief. Changes are challenged. Progress is reviewed and documented.' },
  { icon: Shield,   num: '04', title: 'Deliver',  desc: 'Milestones are signed off before payments are released. Final handover review and acceptance. The project is done when it works, not when the vendor says it\u2019s done.' },
];

const includedItems = [
  'Independent vendor brief written on your terms',
  'Vendors approached and managed on your behalf',
  'Competitive like-for-like quotes secured',
  'Vendor comparison and recommendation',
  'Single point of contact across all vendors',
  'Structured progress reviews and written summaries',
  'Milestone sign-off before payments released',
  'Final handover review and acceptance',
];

export default function DeliverPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; Deliver &middot; Project Delivery &amp; Vendor Management</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
              The right vendor. The right outcome.<br />
              <span className="text-[#219EBC]">On your terms.</span>
            </h1>
            <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl">
              Solution architecture, vendor brief, procurement, and project oversight. I own the outcome without doing the build &mdash; so the vendor delivers what your business actually needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                Start with Clarity first
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl lg:text-3xl font-bold text-[#F8F9FA] leading-snug mb-6">
              &ldquo;The most expensive technology decisions in this sector are made in the first meeting with a vendor &mdash; before anyone has written a brief.&rdquo;
            </blockquote>
            <p className="text-lg text-[#8ECAE6]">
              That is why Deliver exists. The brief comes first. The vendor comes second.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">&mdash; The process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">Brief first. Build second.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 hover:bg-white/[0.08] transition-colors">
                  <div className="text-5xl font-bold text-[#219EBC]/30 mb-4">{step.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#219EBC]/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[#219EBC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8F9FA] mb-3">{step.title}</h3>
                  <p className="text-[#8ECAE6] text-sm leading-relaxed">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-[#219EBC]/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; What&apos;s included</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-8">Everything you need to get the right outcome</h2>
              <div className="space-y-4">
                {includedItems.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#219EBC] mt-0.5 flex-shrink-0" />
                    <span className="text-[#023047]/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-[#023047] text-center">
              <h3 className="text-xl font-bold text-[#F8F9FA] mb-4">Pricing</h3>
              <p className="text-[#8ECAE6] text-lg leading-relaxed">
                Fixed fee or monthly retainer.<br />
                <span className="text-[#F8F9FA] font-semibold">From &pound;5,000 + VAT</span> (fixed)<br />
                or <span className="text-[#F8F9FA] font-semibold">from &pound;1,200/mo + VAT</span>.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  Book a free discovery call <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY HOOK */}
      <section className="py-16 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link href="/case-study" className="group inline-block">
            <p className="text-4xl lg:text-5xl font-bold text-[#023047] mb-2 group-hover:text-[#219EBC] transition-colors">
              &pound;154,000. 18 months. No vendor brief.
            </p>
            <p className="text-[#219EBC] font-semibold flex items-center justify-center gap-2">
              Read the case study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-6">Ready to get the brief right?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
            <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
              Start with Clarity first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
