import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { ReactNode } from 'react';
import { BreadcrumbSchema } from './BreadcrumbSchema';

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
  /** Slug for breadcrumb URL */
  slug?: string;
  /** Primary commercial endpoint for this sector */
  targetService?: { href: string; label: string; anchor: string };
  /** 3 most relevant problem pages for this sector */
  relatedProblems?: { href: string; label: string }[];
}

export function SectorPage({ sector, tagline, intro, heroImage, heroGraphic, challenges, whatIdo, cta, slug, targetService, relatedProblems }: SectorPageProps) {
  const parts = tagline.split('||');
  return (
    <>
      {slug && (
        <BreadcrumbSchema items={[
          { name: 'Home', url: 'https://decodedops.co.uk/' },
          { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
          { name: sector, url: `https://decodedops.co.uk/sectors/${slug}` },
        ]} />
      )}
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prussian-blue/10 border border-prussian-blue/20 mb-6">
                <span className="text-xs font-semibold text-prussian-blue tracking-wider uppercase">— {sector}</span>
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
                  Book a free call <ArrowRight size={18} />
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
                  <img src={heroImage} alt={sector} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-prussian-blue/40 to-transparent" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-28 bg-prussian-blue/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prussian-blue/10 border border-prussian-blue/20 mb-4">
              <span className="text-xs font-semibold text-prussian-blue tracking-wider uppercase">— Common challenges</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-prussian-blue mb-4">Where the problems tend to live</h2>
            <p className="text-prussian-blue/70 text-lg">In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((c, i) => (
              <div key={c.title} className="group p-6 rounded-2xl border border-sky-blue/40 bg-off-white hover:border-cerulean/40 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-sky-blue mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-prussian-blue mb-2">{c.title}</h3>
                <p className="text-sm text-prussian-blue/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP — dark */}
      <section className="py-20 lg:py-28 bg-prussian-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cerulean/20 border border-cerulean/30 mb-4">
                <span className="text-xs font-semibold text-sky-blue tracking-wider uppercase">— How I help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-off-white mb-4">What the work actually looks like</h2>
              <p className="text-sky-blue text-lg mb-8">A structured audit followed by specific, costed recommendations — no vague frameworks, no generic advice.</p>
              <div className="space-y-4">
                {whatIdo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-off-white/5 border border-off-white/10">
                    <div className="w-7 h-7 rounded-full bg-cerulean/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cerulean">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm text-sky-blue leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="p-8 rounded-2xl bg-off-white/5 border border-off-white/10">
                <div className="text-2xl font-bold text-off-white mb-2">{cta || 'Ready to find out what it\'s costing you?'}</div>
                <p className="text-sky-blue text-sm mb-6 leading-relaxed">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&apos;s happening in your business.</p>
                <div className="space-y-3 mb-8">
                  {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-sky-blue">
                      <div className="w-1.5 h-1.5 rounded-full bg-cerulean" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-amber text-prussian-blue font-semibold hover:bg-orange-brand transition-colors">
                  Book a free call <ArrowRight size={18} />
                </Link>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-sky-blue hover:text-white font-medium inline-flex items-center gap-1 mt-3 text-center justify-center w-full">Or book a call directly <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR CROSS-LINKS — target service + 3 relevant problems */}
      {(targetService || (relatedProblems && relatedProblems.length > 0)) && (
        <section className="py-16 lg:py-20 bg-off-white border-t border-prussian-blue/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {targetService && (
                <div className="rounded-2xl bg-prussian-blue text-white p-8">
                  <div className="text-xs font-semibold tracking-wider uppercase text-amber mb-3">The work in this sector</div>
                  <h3 className="text-2xl font-bold mb-3">{targetService.label}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{targetService.anchor}</p>
                  <Link href={targetService.href} className="inline-flex items-center gap-2 text-amber font-semibold hover:gap-3 transition-all">
                    See how it works <ArrowRight size={18} />
                  </Link>
                </div>
              )}
              {relatedProblems && relatedProblems.length > 0 && (
                <div className="rounded-2xl bg-white border border-prussian-blue/10 p-8">
                  <div className="text-xs font-semibold tracking-wider uppercase text-prussian-blue/60 mb-3">Most common in {sector.toLowerCase()}</div>
                  <h3 className="text-lg font-bold text-prussian-blue mb-4">The problems we see most often</h3>
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
            </div>
          </div>
        </section>
      )}
    </>
  );
}
