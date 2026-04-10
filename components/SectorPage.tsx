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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— {sector}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
                {parts.map((part, i) =>
                  i % 2 === 0
                    ? <span key={i}>{part}</span>
                    : <span key={i} className="text-[#219EBC]">{part}</span>
                )}
              </h1>
              <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  Book a free call <ArrowRight size={18} />
                </Link>
                <Link href="/audit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                  See how the audit works
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              {heroGraphic ? (
                <div className="w-full p-6 rounded-2xl bg-[#023047]/5 border border-[#8ECAE6]/30">
                  {heroGraphic}
                </div>
              ) : heroImage ? (
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src={heroImage} alt={sector} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/40 to-transparent" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-28 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Common challenges</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">Where the problems tend to live</h2>
            <p className="text-[#023047]/60 text-lg">In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((c, i) => (
              <div key={c.title} className="group p-6 rounded-2xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/40 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-[#8ECAE6] mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-[#023047] mb-2">{c.title}</h3>
                <p className="text-sm text-[#023047]/60 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
                <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">— How I help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">What the work actually looks like</h2>
              <p className="text-[#8ECAE6] text-lg mb-8">A structured audit followed by specific, costed recommendations — no vague frameworks, no generic advice.</p>
              <div className="space-y-4">
                {whatIdo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                    <div className="w-7 h-7 rounded-full bg-[#219EBC]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#219EBC]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm text-[#8ECAE6] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="p-8 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                <div className="text-2xl font-bold text-[#F8F9FA] mb-2">{cta || 'Ready to find out what it\'s costing you?'}</div>
                <p className="text-[#8ECAE6] text-sm mb-6 leading-relaxed">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&apos;s happening in your business.</p>
                <div className="space-y-3 mb-8">
                  {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#8ECAE6]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#219EBC]" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
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
