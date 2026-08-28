import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { ReactNode } from 'react';
import { BreadcrumbSchema } from './BreadcrumbSchema';

interface ProblemPageProps {
  problem: string;
  headline: string;
  intro: string;
  heroImage?: string;
  heroGraphic?: ReactNode;
  symptoms: string[];
  causes: { title: string; body: string }[];
  howIHelp: string;
  /** Slug for breadcrumb URL (e.g. 'erp-implementation-failure') */
  slug?: string;
  /** Target service for the "Get this fixed" CTA — drives internal-linking topology */
  targetService?: { href: string; label: string; anchor: string };
  /** 2-4 sibling problem pages */
  relatedProblems?: { href: string; label: string }[];
  /** 1-3 related blog posts */
  relatedReading?: { href: string; label: string }[];
}

export function ProblemPage({ problem, headline, intro, heroImage, heroGraphic, symptoms, causes, howIHelp, slug, targetService, relatedProblems, relatedReading }: ProblemPageProps) {
  const parts = headline.split('||');
  return (
    <>
      {slug && (
        <BreadcrumbSchema items={[
          { name: 'Home', url: 'https://decodedops.co.uk/' },
          { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
          { name: problem, url: `https://decodedops.co.uk/problems/${slug}` },
        ]} />
      )}
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prussian-blue/10 border border-prussian-blue/20 mb-6">
                <span className="text-xs font-semibold text-prussian-blue tracking-wider uppercase">— {problem}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-prussian-blue leading-tight mb-6">
                {parts.map((part, i) =>
                  i % 2 === 0
                    ? <span key={i}>{part}</span>
                    : <span key={i} className="text-cerulean">{part}</span>
                )}
              </h1>
              <p className="text-lg text-prussian-blue/70 leading-relaxed mb-8 max-w-xl">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber text-prussian-blue font-semibold hover:bg-orange-brand transition-colors">
                  Talk about your situation <ArrowRight size={18} />
                </Link>
                <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-cerulean text-cerulean font-semibold hover:bg-cerulean/10 transition-colors">
                  See how the audit works
                </Link>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-cerulean hover:text-prussian-blue font-medium inline-flex items-center gap-1 mt-3">Or book a call directly <ArrowRight size={14} /></a>
            </div>
            <div className="flex items-center justify-center">
              {heroGraphic ? (
                <div className="w-full rounded-2xl overflow-hidden ring-1 ring-prussian-blue/10 shadow-lg">
                  {heroGraphic}
                </div>
              ) : heroImage ? (
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src={heroImage} alt={problem} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-prussian-blue/50 to-transparent" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS — dark */}
      <section className="py-16 bg-prussian-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cerulean/20 border border-cerulean/30 mb-8">
            <span className="text-xs font-semibold text-sky-blue tracking-wider uppercase">— Does this sound familiar?</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-off-white/5 border border-off-white/10">
                <span className="text-cerulean mt-0.5 font-bold">—</span>
                <span className="text-sm text-sky-blue leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-20 lg:py-28 bg-prussian-blue/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prussian-blue/10 border border-prussian-blue/20 mb-4">
              <span className="text-xs font-semibold text-prussian-blue tracking-wider uppercase">— Why it happens</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-prussian-blue mb-4">The root causes</h2>
            <p className="text-prussian-blue/70 text-lg">Understanding why the problem exists is the first step to fixing it — and knowing whether you&apos;re looking at a system problem or a process problem changes everything.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {causes.map((c, i) => (
              <div key={c.title} className="group p-6 rounded-2xl border border-sky-blue/40 bg-off-white hover:border-cerulean/40 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-sky-blue mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-prussian-blue mb-2">{c.title}</h3>
                <p className="text-sm text-prussian-blue/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="py-20 lg:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prussian-blue/10 border border-prussian-blue/20 mb-4">
                <span className="text-xs font-semibold text-prussian-blue tracking-wider uppercase">— How I help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-prussian-blue mb-6">What happens when you call</h2>
              <p className="text-prussian-blue/70 leading-relaxed text-lg">{howIHelp}</p>
            </div>
            <div className="rounded-2xl bg-cerulean/10 border border-cerulean/25 p-8">
              <div className="text-xl font-bold text-prussian-blue mb-2">Let&apos;s talk about what&apos;s happening</div>
              <p className="text-prussian-blue/70 text-sm mb-6 leading-relaxed">The first call is free. 60 minutes. No sales pitch — just a direct conversation about your situation.</p>
              <div className="space-y-3 mb-8">
                {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-prussian-blue/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-cerulean" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-amber text-prussian-blue font-semibold hover:bg-orange-brand transition-colors">
                Book a free call <ArrowRight size={18} />
              </Link>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-cerulean hover:text-prussian-blue font-medium inline-flex items-center gap-1 mt-3 text-center justify-center w-full">Or book a call directly <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* GET THIS FIXED — service routing + related problems + further reading */}
      {(targetService || (relatedProblems && relatedProblems.length > 0) || (relatedReading && relatedReading.length > 0)) && (
        <section className="py-16 lg:py-20 bg-off-white border-t border-prussian-blue/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {targetService && (
                <div className="rounded-2xl bg-prussian-blue text-white p-8">
                  <div className="text-xs font-semibold tracking-wider uppercase text-amber mb-3">Get this fixed</div>
                  <h3 className="text-2xl font-bold mb-3">{targetService.label}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{targetService.anchor}</p>
                  <Link href={targetService.href} className="inline-flex items-center gap-2 text-amber font-semibold hover:gap-3 transition-all">
                    See how it works <ArrowRight size={18} />
                  </Link>
                </div>
              )}
              {relatedProblems && relatedProblems.length > 0 && (
                <div className="rounded-2xl bg-white border border-prussian-blue/10 p-8">
                  <div className="text-xs font-semibold tracking-wider uppercase text-prussian-blue/60 mb-3">Related problems</div>
                  <h3 className="text-lg font-bold text-prussian-blue mb-4">You might also have</h3>
                  <ul className="space-y-3">
                    {relatedProblems.map(p => (
                      <li key={p.href}>
                        <Link href={p.href} className="text-prussian-blue hover:text-cerulean flex items-start gap-2 text-sm leading-snug">
                          <ArrowRight size={14} className="mt-1 flex-shrink-0 text-cerulean" />
                          <span>{p.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {relatedReading && relatedReading.length > 0 && (
                <div className="rounded-2xl bg-white border border-prussian-blue/10 p-8">
                  <div className="text-xs font-semibold tracking-wider uppercase text-prussian-blue/60 mb-3">Further reading</div>
                  <h3 className="text-lg font-bold text-prussian-blue mb-4">From the blog</h3>
                  <ul className="space-y-3">
                    {relatedReading.map(p => (
                      <li key={p.href}>
                        <Link href={p.href} className="text-prussian-blue hover:text-cerulean flex items-start gap-2 text-sm leading-snug">
                          <ArrowRight size={14} className="mt-1 flex-shrink-0 text-cerulean" />
                          <span>{p.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
