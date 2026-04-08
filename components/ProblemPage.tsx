import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProblemPageProps {
  problem: string;
  headline: string;
  intro: string;
  symptoms: string[];
  causes: { title: string; body: string }[];
  howIHelp: string;
}

export function ProblemPage({ problem, headline, intro, symptoms, causes, howIHelp }: ProblemPageProps) {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-[#546A7B]/10 text-[#546A7B] rounded-full text-sm font-medium mb-8">
            {problem}
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#393D3F] leading-tight mb-8 max-w-3xl">
            {headline.split('||').map((part, i) =>
              i % 2 === 0
                ? <span key={i}>{part}</span>
                : <span key={i} className="text-[#62929E]">{part}</span>
            )}
          </h1>
          <p className="text-xl font-light text-[#393D3F]/70 max-w-2xl leading-relaxed mb-10">
            {intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#62929E] text-white rounded-lg hover:bg-[#546A7B] transition-colors font-semibold">
              Talk about your situation <ArrowRight size={18} />
            </Link>
            <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C6C5B9] text-[#393D3F] rounded-lg hover:border-[#62929E] hover:text-[#62929E] transition-colors font-semibold">
              See how the audit works
            </Link>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="py-16 bg-[#393D3F]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#62929E] mb-6">Does this sound familiar?</p>
          <div className="grid md:grid-cols-2 gap-3">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#62929E] mt-0.5">—</span>
                <span className="text-sm text-[#C6C5B9] leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-24 lg:py-32 bg-[#393D3F]/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">Why it happens</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">The root causes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {causes.map(c => (
              <div key={c.title} className="group p-8 rounded-2xl border border-[#C6C5B9]/30 bg-[#FDFDFF] hover:border-[#62929E] hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-[#393D3F] mb-3">{c.title}</h3>
                <p className="text-sm text-[#393D3F]/60 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">How I help</p>
          <h2 className="text-3xl font-bold text-[#393D3F] mb-6">What happens when you call</h2>
          <p className="text-[#393D3F]/70 leading-relaxed text-lg">{howIHelp}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62929E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">Let&apos;s talk about what&apos;s happening</h3>
            <p className="text-white/80 max-w-xl">The first call is free. 60 minutes. No sales pitch — just a direct conversation about your situation.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#62929E] text-sm font-semibold hover:bg-[#FDFDFF]/90 transition-colors">
            Book a free call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
