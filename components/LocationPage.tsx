import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

interface PainPoint {
  title: string;
  body: string;
}

export interface LocationPageProps {
  town: string;
  county: string;
  service: string;
  badge: string;
  tagline: string;
  intro: string;
  localContext: string;
  painPoints: PainPoint[];
  whatIdo: string[];
  cta: string;
  serviceUrl: string;
  serviceLabel: string;
}

export function LocationPage({
  town,
  county,
  service,
  badge,
  tagline,
  intro,
  localContext,
  painPoints,
  whatIdo,
  cta,
  serviceUrl,
  serviceLabel,
}: LocationPageProps) {
  const parts = tagline.split('||');

  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— {badge}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#219EBC]/10 border border-[#219EBC]/20">
                <MapPin size={12} className="text-[#219EBC]" />
                <span className="text-xs font-semibold text-[#219EBC] tracking-wider uppercase">{county}</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
              {parts.map((part, i) =>
                i % 2 === 0
                  ? <span key={i}>{part}</span>
                  : <span key={i} className="text-[#219EBC]">{part}</span>
              )}
            </h1>
            <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-2xl">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors"
              >
                Book a free call <ArrowRight size={18} />
              </Link>
              <Link
                href={serviceUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors"
              >
                {serviceLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#8ECAE6]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— {town}</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#023047]">
                What this looks like for {town} businesses
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-[#023047]/70 text-lg leading-relaxed">{localContext}</p>
              <p className="text-[#023047]/70 text-lg leading-relaxed mt-4">
                The work I do is the same wherever the business is based — a structured, independent look at what&apos;s running, what it costs, and what it&apos;s holding back. But the conversation starts with understanding what&apos;s specific to this business, in this town, in this market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 lg:py-28 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Where the cost hides</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">
              The problems that tend to appear
            </h2>
            <p className="text-[#023047]/70 text-lg">
              These are the patterns I see most often in {service.toLowerCase()} engagements. They look different in every business — but the underlying structure is almost always the same.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((p, i) => (
              <div
                key={p.title}
                className="group p-6 rounded-2xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#8ECAE6] mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-[#023047] mb-2">{p.title}</h3>
                <p className="text-sm text-[#023047]/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
                <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">— How I help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">
                What the work actually looks like
              </h2>
              <p className="text-[#8ECAE6] text-lg mb-8">
                No frameworks. No generic recommendations. A structured, independent process that produces specific answers for this business.
              </p>
              <div className="space-y-4">
                {whatIdo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#219EBC]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#219EBC]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm text-[#8ECAE6] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* STICKY CTA CARD */}
            <div className="lg:sticky lg:top-28">
              <div className="p-8 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                <div className="text-2xl font-bold text-[#F8F9FA] mb-2">{cta}</div>
                <p className="text-[#8ECAE6] text-sm mb-6 leading-relaxed">
                  The first conversation is free and there&apos;s no obligation. Just a call about what&apos;s happening in your business and whether I can help.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'No vendor relationships or commission',
                    'Worked at every level — warehouse floor to boardroom',
                    '3× Clarity Guarantee on audit work',
                    'Based in the South East, on-site across Sussex and Surrey',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-[#8ECAE6]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#219EBC] mt-1.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors"
                >
                  Book a free call <ArrowRight size={18} />
                </Link>
                <p className="text-xs text-[#8ECAE6]/60 text-center mt-4">
                  Serving {town} and across {county}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY LOCATIONS */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-[#023047]/50 font-medium tracking-wider uppercase mb-2">Also serving</p>
          <p className="text-[#023047]/70">
            {county} · East Sussex · West Sussex · Surrey —{' '}
            <Link href={serviceUrl} className="text-[#219EBC] hover:underline">
              view all locations
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
