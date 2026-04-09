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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-6">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— {problem}</span>
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
                  Talk about your situation <ArrowRight size={18} />
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
                  <img src={heroImage} alt={problem} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/50 to-transparent" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS — dark */}
      <section className="py-16 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3A86FF]/20 border border-[#3A86FF]/30 mb-8">
            <span className="text-xs font-semibold text-[#93A8C0] tracking-wider uppercase">— Does this sound familiar?</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                <span className="text-[#3A86FF] mt-0.5 font-bold">—</span>
                <span className="text-sm text-[#93A8C0] leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-20 lg:py-28 bg-[#0F1923]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
              <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— Why it happens</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1923] mb-4">The root causes</h2>
            <p className="text-[#0F1923]/60 text-lg">Understanding why the problem exists is the first step to fixing it — and knowing whether you&apos;re looking at a system problem or a process problem changes everything.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {causes.map((c, i) => (
              <div key={c.title} className="group p-6 rounded-2xl border border-[#93A8C0]/40 bg-[#F8F9FA] hover:border-[#3A86FF]/40 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-[#93A8C0] mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-[#0F1923] mb-2">{c.title}</h3>
                <p className="text-sm text-[#0F1923]/60 leading-relaxed">{c.body}</p>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— How I help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1923] mb-6">What happens when you call</h2>
              <p className="text-[#0F1923]/70 leading-relaxed text-lg">{howIHelp}</p>
            </div>
            <div className="rounded-2xl bg-[#3A86FF]/10 border border-[#3A86FF]/25 p-8">
              <div className="text-xl font-bold text-[#0F1923] mb-2">Let&apos;s talk about what&apos;s happening</div>
              <p className="text-[#0F1923]/60 text-sm mb-6 leading-relaxed">The first call is free. 60 minutes. No sales pitch — just a direct conversation about your situation.</p>
              <div className="space-y-3 mb-8">
                {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#0F1923]/70">
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
      </section>
    </>
  );
}
