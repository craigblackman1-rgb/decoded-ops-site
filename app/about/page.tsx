import Link from 'next/link';
import { ArrowRight, Shield, Wrench, Brain } from 'lucide-react';

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
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-6">
                <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— About Craig Blackman</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#393D3F] leading-tight mb-6">
                25 years in the sector.<br />
                <span className="text-[#62929E]">No vendor ties.<br />No agenda.</span>
              </h1>
              <p className="text-lg text-[#393D3F]/70 leading-relaxed mb-8 max-w-xl">
                Decoded Ops exists because the people selling technology to print and embroidery businesses rarely understand the businesses they&apos;re selling to. And the people who do understand the businesses don&apos;t always speak technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#62929E] text-[#FDFDFF] font-semibold hover:bg-[#546A7B] transition-colors">
                  Start with a free call <ArrowRight size={18} />
                </Link>
                <Link href="/audit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#62929E] text-[#62929E] font-semibold hover:bg-[#62929E]/10 transition-colors">
                  See the audit
                </Link>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-bold text-[#393D3F]">25+</div>
                  <div className="text-sm text-[#393D3F]/60">Years in print &amp; embroidery</div>
                </div>
                <div className="w-px bg-[#C6C5B9]" />
                <div>
                  <div className="text-2xl font-bold text-[#393D3F]">0</div>
                  <div className="text-sm text-[#393D3F]/60">Vendor relationships</div>
                </div>
                <div className="w-px bg-[#C6C5B9]" />
                <div>
                  <div className="text-2xl font-bold text-[#393D3F]">100%</div>
                  <div className="text-sm text-[#393D3F]/60">Independent</div>
                </div>
              </div>
            </div>
            {/* Image with badge */}
            <div className="relative order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Craig Blackman — Decoded Ops"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#62929E] flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-[#FDFDFF]">25+</span>
                <span className="text-xs text-[#FDFDFF]/80 text-center leading-tight px-1">years in the sector</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY — dark */}
      <section className="py-20 lg:py-28 bg-[#393D3F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#62929E]/20 border border-[#62929E]/30 mb-4">
                <span className="text-xs font-semibold text-[#C6C5B9] tracking-wider uppercase">— The background</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#FDFDFF] mb-8">Where this comes from</h2>
              <div className="space-y-5 text-[#C6C5B9] leading-relaxed">
                <p>I&apos;ve spent 25 years working in and around the print, embroidery, workwear, and promotional merchandise sector. Not as a consultant who found it interesting — as someone who has lived the operational complexity firsthand.</p>
                <p>I understand what a hoop size means and why it affects your production schedule. I&apos;ve managed the artwork sign-off loop. I know what happens when your blank supplier runs out of stock on a Friday afternoon before a Monday delivery.</p>
                <p>That sector knowledge is the thing that makes everything else possible. When I sit across the table from a software vendor, I know what questions to ask and when the answers don&apos;t add up. When I walk your production floor, I know what I&apos;m looking at.</p>
                <p>Decoded Ops was built on one principle: that business owners in this sector deserve honest, independent advice from someone who actually understands their world.</p>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Operations consulting"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#393D3F]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 lg:py-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
              <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— How I work</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-4">The things I won&apos;t compromise on</h2>
            <p className="text-[#393D3F]/60 text-lg">These aren&apos;t marketing principles. They&apos;re the reason I built Decoded Ops independently.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(v => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="group p-6 rounded-2xl border border-[#C6C5B9]/40 hover:border-[#62929E]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#62929E]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#62929E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#393D3F] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#393D3F]/60 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-[#393D3F]/5 border-t border-[#C6C5B9]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#393D3F] mb-1">Ready to have the honest conversation?</h3>
            <p className="text-sm text-[#393D3F]/60">Start with a free 60-minute call. No sales pitch. Just a conversation about what&apos;s happening in your business.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#62929E] text-[#FDFDFF] text-sm font-semibold hover:bg-[#546A7B] transition-colors">
            Book a free call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
