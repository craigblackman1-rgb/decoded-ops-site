import Link from 'next/link';
import { ArrowRight, Shield, Wrench, Brain } from 'lucide-react';
import { CredentialsGraphic } from '@/components/graphics/CredentialsGraphic';
import { ExpertiseTimelineGraphic } from '@/components/graphics/ExpertiseTimelineGraphic';

const values = [
  { icon: Shield, title: 'Independence',     desc: "No referral fees. No vendor relationships. No commission. Every recommendation is made on merit alone — and I'll tell you when the answer is to change nothing." },
  { icon: Brain,  title: 'Plain English',     desc: "Technology is often explained in a way that keeps you dependent on the person explaining it. I don't do that. You should be able to make your own informed decisions." },
  { icon: Wrench, title: 'Honesty',           desc: "If the audit finds nothing significant, I'll tell you that. If the problem is harder than you think, I'll tell you that too. The value is in the truth, not in the finding." },
  { icon: Shield, title: 'Specificity',       desc: "Every finding is quantified. Every recommendation is costed. You don't get a slide deck of observations — you get a clear statement of what each problem is costing you." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-6">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— About Craig Blackman</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F1923] leading-tight mb-6">
                25 years in the sector.<br />
                <span className="text-[#3A86FF]">No vendor ties.<br />No agenda.</span>
              </h1>
              <p className="text-lg text-[#0F1923]/70 leading-relaxed mb-8 max-w-xl">
                Decoded Ops exists because the people selling technology to print and embroidery businesses rarely understand the businesses they&apos;re selling to. And the people who do understand the businesses don&apos;t always speak technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
                  Start with a free call <ArrowRight size={18} />
                </Link>
                <Link href="/audit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#3A86FF] text-[#3A86FF] font-semibold hover:bg-[#3A86FF]/10 transition-colors">
                  See the audit
                </Link>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-bold text-[#0F1923]">25+</div>
                  <div className="text-sm text-[#0F1923]/60">Years in print &amp; embroidery</div>
                </div>
                <div className="w-px bg-[#93A8C0]" />
                <div>
                  <div className="text-2xl font-bold text-[#0F1923]">0</div>
                  <div className="text-sm text-[#0F1923]/60">Vendor relationships</div>
                </div>
                <div className="w-px bg-[#93A8C0]" />
                <div>
                  <div className="text-2xl font-bold text-[#0F1923]">100%</div>
                  <div className="text-sm text-[#0F1923]/60">Independent</div>
                </div>
              </div>
            </div>
            {/* Credentials graphic */}
            <div className="hidden lg:flex items-center justify-center order-first lg:order-last">
              <CredentialsGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* STORY — dark */}
      <section className="py-20 lg:py-28 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3A86FF]/20 border border-[#3A86FF]/30 mb-4">
                <span className="text-xs font-semibold text-[#93A8C0] tracking-wider uppercase">— The background</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-8">Where this comes from</h2>
              <div className="space-y-5 text-[#93A8C0] leading-relaxed">
                <p>I&apos;ve spent 25 years working in and around the print, embroidery, workwear, and promotional merchandise sector. Not as a consultant who found it interesting — as someone who has lived the operational complexity firsthand.</p>
                <p>I understand what a hoop size means and why it affects your production schedule. I&apos;ve managed the artwork sign-off loop. I know what happens when your blank supplier runs out of stock on a Friday afternoon before a Monday delivery.</p>
                <p>That sector knowledge is the thing that makes everything else possible. When I sit across the table from a software vendor, I know what questions to ask and when the answers don&apos;t add up. When I walk your production floor, I know what I&apos;m looking at.</p>
                <p>Decoded Ops was built on one principle: that business owners in this sector deserve honest, independent advice from someone who actually understands their world.</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <ExpertiseTimelineGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
              <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— How I work</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1923] mb-4">The things I won&apos;t compromise on</h2>
            <p className="text-[#0F1923]/60 text-lg">These aren&apos;t marketing principles. They&apos;re the reason I built Decoded Ops independently.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(v => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="group p-6 rounded-2xl border border-[#93A8C0]/40 hover:border-[#3A86FF]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#3A86FF]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#3A86FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F1923] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#0F1923]/60 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-[#0F1923]/5 border-t border-[#93A8C0]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#0F1923] mb-1">Ready to have the honest conversation?</h3>
            <p className="text-sm text-[#0F1923]/60">Start with a free 60-minute call. No sales pitch. Just a conversation about what&apos;s happening in your business.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] text-sm font-semibold hover:bg-[#1D3557] transition-colors">
            Book a free call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
