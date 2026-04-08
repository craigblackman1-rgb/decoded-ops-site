import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-[#546A7B]/10 text-[#546A7B] rounded-full text-sm font-medium mb-8">
            About
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#393D3F] leading-tight mb-8 max-w-3xl">
            25 years in the sector.<br />
            <span className="text-[#62929E]">No vendor relationships.<br />No agenda.</span>
          </h1>
          <p className="text-xl font-light text-[#393D3F]/70 max-w-2xl leading-relaxed">
            Decoded Ops exists because the people selling technology to print and embroidery businesses rarely understand the businesses they&apos;re selling to. And the people who do understand the businesses don&apos;t always speak technology.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 lg:py-32 bg-[#393D3F]/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">The background</p>
          <h2 className="text-3xl font-bold text-[#393D3F] mb-8">Where this comes from</h2>
          <div className="space-y-5 text-[#393D3F]/70 leading-relaxed">
            <p>
              I&apos;ve spent 25 years working in and around the print, embroidery, workwear, and promotional merchandise sector. Not as a consultant who found it interesting — as someone who has lived the operational complexity firsthand.
            </p>
            <p>
              I understand what a hoop size means and why it affects your production schedule. I&apos;ve managed the artwork sign-off loop. I know what happens when your blank supplier runs out of stock on a Friday afternoon before a Monday delivery.
            </p>
            <p>
              That sector knowledge is the thing that makes everything else possible. When I sit across the table from a software vendor, I know what questions to ask and when the answers don&apos;t add up. When I walk your production floor, I know what I&apos;m looking at.
            </p>
            <p>
              Decoded Ops was built on one principle: that business owners in this sector deserve honest, independent advice from someone who actually understands their world.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">How I work</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">The things I won&apos;t compromise on</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Independence',
                body: 'No referral fees. No vendor relationships. No commission. Every recommendation is made on merit alone — and I&apos;ll tell you when the answer is to change nothing.',
              },
              {
                title: 'Plain English',
                body: 'Technology is often explained in a way that keeps you dependent on the person explaining it. I don&apos;t do that. You should be able to make your own informed decisions.',
              },
              {
                title: 'Honesty',
                body: 'If the audit finds nothing significant, I\'ll tell you that. If the problem is harder than you think, I\'ll tell you that too. The value is in the truth, not in the finding.',
              },
              {
                title: 'Specificity',
                body: 'Every finding is quantified. Every recommendation is costed. You don&apos;t get a slide deck of observations — you get a clear statement of what each problem is costing you.',
              },
            ].map(item => (
              <div key={item.title} className="group p-8 rounded-2xl border border-[#C6C5B9]/30 hover:border-[#62929E] hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-[#393D3F] mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-[#393D3F]/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62929E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to have the honest conversation?</h3>
            <p className="text-white/80 max-w-xl">Start with a free 60-minute call. No sales pitch. Just a conversation about what&apos;s happening in your business.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#62929E] text-sm font-semibold hover:bg-[#FDFDFF]/90 transition-colors">
            Book a free call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
