import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectorPageProps {
  sector: string;
  tagline: string;
  intro: string;
  challenges: { title: string; body: string }[];
  whatIdo: string[];
  cta?: string;
}

export function SectorPage({ sector, tagline, intro, challenges, whatIdo, cta }: SectorPageProps) {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-[#546A7B]/10 text-[#546A7B] rounded-full text-sm font-medium mb-8">
            {sector}
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#393D3F] leading-tight mb-8 max-w-3xl">
            {tagline.split('||').map((part, i) =>
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
              Book a free call <ArrowRight size={18} />
            </Link>
            <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C6C5B9] text-[#393D3F] rounded-lg hover:border-[#62929E] hover:text-[#62929E] transition-colors font-semibold">
              See how the audit works
            </Link>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-24 lg:py-32 bg-[#393D3F]/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">Common challenges</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">Where the problems tend to live</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map(c => (
              <div key={c.title} className="group p-8 rounded-2xl border border-[#C6C5B9]/30 bg-[#FDFDFF] hover:border-[#62929E] hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-[#393D3F] mb-3">{c.title}</h3>
                <p className="text-sm text-[#393D3F]/60 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">How I help</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">What the work actually looks like</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {whatIdo.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#62929E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[#62929E]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <span className="text-sm text-[#393D3F]/70 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 bg-[#62929E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">{cta || 'Ready to find out what it\'s costing you?'}</h3>
            <p className="text-white/80 max-w-xl">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&apos;s happening in your business.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#62929E] text-sm font-semibold hover:bg-[#FDFDFF]/90 transition-colors">
            Book a free call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
