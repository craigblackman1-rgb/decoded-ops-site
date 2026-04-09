import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface Challenge { title: string; body: string }

interface SectorPageProps {
  sector: string;
  tagline: string;
  intro: string;
  heroImage?: string;
  heroGraphic?: ReactNode;
  challenges: Challenge[];
  whatIdo: string[];
  cta?: string;
}

export function SectorPage({ sector, tagline, intro, heroImage, heroGraphic, challenges, whatIdo, cta }: SectorPageProps) {
  const parts = tagline.split('||');
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-6">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— {sector}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F1923] leading-tight mb-6">
                {parts.map((part, i) =>
                  i % 2 === 0
                    ? <span key={i}>{part}</span>
                    : <span key={i} className="text-[#3A86FF]">{part}</span>
                )}
              </h1>
              <p className="text-lg text-[#0F1923]/70 leading-relaxed mb-8 max-w-xl">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
                  Book a free call <ArrowRight size={18} />
                </Link>
                <Link href="/audit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#3A86FF] text-[#3A86FF] font-semibold hover:bg-[#3A86FF]/10 transition-colors">
                  See how the audit works
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              {heroGraphic ? (
                <div className="w-full p-6 rounded-2xl bg-[#0F1923]/5 border border-[#93A8C0]/30">
                  {heroGraphic}
                </div>
              ) : heroImage ? (
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src={heroImage} alt={sector} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/40 to-transparent" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-28 bg-[#0F1923]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
              <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— Common challenges</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1923] mb-4">Where the problems tend to live</h2>
            <p className="text-[#0F1923]/60 text-lg">In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((c, i) => (
              <div key={c.title} className="group p-6 rounded-2xl border border-[#93A8C0]/40 bg-[#F8F9FA] hover:border-[#3A86FF]/40 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-[#93A8C0] mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-[#0F1923] mb-2">{c.title}</h3>
                <p className="text-sm text-[#0F1923]/60 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP — dark */}
      <section className="py-20 lg:py-28 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3A86FF]/20 border border-[#3A86FF]/30 mb-4">
                <span className="text-xs font-semibold text-[#93A8C0] tracking-wider uppercase">— How I help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">What the work actually looks like</h2>
              <p className="text-[#93A8C0] text-lg mb-8">A structured audit followed by specific, costed recommendations — no vague frameworks, no generic advice.</p>
              <div className="space-y-4">
                {whatIdo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                    <div className="w-7 h-7 rounded-full bg-[#3A86FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#3A86FF]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm text-[#93A8C0] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="p-8 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                <div className="text-2xl font-bold text-[#F8F9FA] mb-2">{cta || 'Ready to find out what it\'s costing you?'}</div>
                <p className="text-[#93A8C0] text-sm mb-6 leading-relaxed">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&apos;s happening in your business.</p>
                <div className="space-y-3 mb-8">
                  {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#93A8C0]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
                  Book a free call <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
