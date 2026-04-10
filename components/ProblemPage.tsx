import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ProblemPageProps {
  problem: string;
  headline: string;
  intro: string;
  heroImage?: string;
  heroGraphic?: ReactNode;
  symptoms: string[];
  causes: { title: string; body: string }[];
  howIHelp: string;
}

export function ProblemPage({ problem, headline, intro, heroImage, heroGraphic, symptoms, causes, howIHelp }: ProblemPageProps) {
  const parts = headline.split('||');
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— {problem}</span>
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
                  Talk about your situation <ArrowRight size={18} />
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
                  <img src={heroImage} alt={problem} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/50 to-transparent" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS — dark */}
      <section className="py-16 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-8">
            <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">— Does this sound familiar?</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                <span className="text-[#219EBC] mt-0.5 font-bold">—</span>
                <span className="text-sm text-[#8ECAE6] leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-20 lg:py-28 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Why it happens</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">The root causes</h2>
            <p className="text-[#023047]/60 text-lg">Understanding why the problem exists is the first step to fixing it — and knowing whether you&apos;re looking at a system problem or a process problem changes everything.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {causes.map((c, i) => (
              <div key={c.title} className="group p-6 rounded-2xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/40 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-[#8ECAE6] mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-[#023047] mb-2">{c.title}</h3>
                <p className="text-sm text-[#023047]/60 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— How I help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-6">What happens when you call</h2>
              <p className="text-[#023047]/70 leading-relaxed text-lg">{howIHelp}</p>
            </div>
            <div className="rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25 p-8">
              <div className="text-xl font-bold text-[#023047] mb-2">Let&apos;s talk about what&apos;s happening</div>
              <p className="text-[#023047]/60 text-sm mb-6 leading-relaxed">The first call is free. 60 minutes. No sales pitch — just a direct conversation about your situation.</p>
              <div className="space-y-3 mb-8">
                {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#023047]/70">
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
      </section>
    </>
  );
}
