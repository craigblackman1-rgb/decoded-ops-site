import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';

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
  driveTime?: string;
  localFact?: string;
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
  driveTime,
  localFact,
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
      <section className="g-off">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px, 8vw, 64px)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>— {badge}</span>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-cerulean) 20%, transparent)' }}>
                  <MapPin size={12} style={{ color: 'var(--do-cerulean)' }} />
                  <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--do-tracking-wider)', color: 'var(--do-cerulean)' }}>{county}</span>
                </div>
              </div>
              <h1 className="h1">
                {parts.map((part, i) =>
                  i % 2 === 0
                    ? <span key={i}>{part}</span>
                    : <span key={i} className="h1 em" style={{ color: 'var(--do-cerulean)', fontFamily: 'var(--do-font-heading)', display: 'inline' }}>{part}</span>
                )}
              </h1>
              <p className="lede">{intro}</p>
              <div className="btn-row">
                <Link href="/contact" className="btn btn--primary">
                  Book a free call <ArrowRight size={18} />
                </Link>
                <Link href={serviceUrl} className="btn btn--outline">
                  {serviceLabel}
                </Link>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-cerulean)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', borderRadius: 'var(--do-radius-2xl)', overflow: 'hidden', boxShadow: 'var(--do-shadow-lg)' }}>
                <SystemsDisconnectedGraphic connected variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="g-white" style={{ borderBottom: '1px solid var(--do-border-subtle)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'start' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: 22 }}>— {town}</span>
              <h2 className="h2" style={{ fontSize: 'var(--do-text-2xl)' }}>
                What this looks like for {town} businesses
              </h2>
            </div>
            <div>
              <p style={{ color: 'var(--do-text-secondary)', fontSize: 'var(--do-text-lg)', lineHeight: 1.75 }}>{localContext}</p>
              <p style={{ color: 'var(--do-text-secondary)', fontSize: 'var(--do-text-lg)', lineHeight: 1.75, marginTop: 16 }}>
                The work I do is the same wherever the business is based — a structured, independent look at what&apos;s running, what it costs, and what it&apos;s holding back. But the conversation starts with understanding what&apos;s specific to this business, in this town, in this market.
              </p>
              {(driveTime || localFact) && (
                <div className="card" style={{ marginTop: 24, display: 'flex', gap: 32, flexDirection: 'row' }}>
                  {driveTime && (
                    <div>
                      <div style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-cerulean)', textTransform: 'uppercase', letterSpacing: 'var(--do-tracking-wide)', marginBottom: 4 }}>From Worthing</div>
                      <div style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>{driveTime}</div>
                    </div>
                  )}
                  {localFact && (
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-cerulean)', textTransform: 'uppercase', letterSpacing: 'var(--do-tracking-wide)', marginBottom: 4 }}>{town}</div>
                      <div style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>{localFact}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="g-tint">
        <div className="wrap">
          <div style={{ maxWidth: '42ch', marginBottom: 64 }}>
            <span className="eyebrow" style={{ marginBottom: 22 }}>— Where the cost hides</span>
            <h2 className="h2">The problems that tend to appear</h2>
            <p className="lede">
              These are the patterns I see most often in {service.toLowerCase()} engagements. They look different in every business — but the underlying structure is almost always the same.
            </p>
          </div>
          <div className="grid grid--2">
            {painPoints.map((p, i) => (
              <div
                key={p.title}
                className="card"
              >
                <div style={{ fontSize: 'var(--do-text-3xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-sky-blue)', marginBottom: 16 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="h3" style={{ marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)', lineHeight: 1.75, marginBottom: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="g-navy">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px, 8vw, 80px)', alignItems: 'start' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: 22 }}>— How I help</span>
              <h2 className="h2">What the work actually looks like</h2>
              <p className="lede">
                No frameworks. No generic recommendations. A structured, independent process that produces specific answers for this business.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
                {whatIdo.map((item, i) => (
                  <div
                    key={i}
                    className="card"
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-cerulean)' }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-on-dark)', opacity: 0.72, lineHeight: 1.75, marginBottom: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* STICKY CTA CARD */}
            <div style={{ position: 'sticky', top: 112 }}>
              <div className="card" style={{ padding: 32 }}>
                <div style={{ fontSize: 'var(--do-text-2xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-on-dark)', marginBottom: 8 }}>{cta}</div>
                <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-on-dark)', opacity: 0.72, lineHeight: 1.75, marginBottom: 24 }}>
                  The first conversation is free and there&apos;s no obligation. Just a call about what&apos;s happening in your business and whether I can help.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {[
                    'No vendor relationships or commission',
                    'Worked at every level — warehouse floor to boardroom',
                    '3× Clarity Guarantee on audit work',
                    'Based in the South East, on-site across Sussex and Surrey',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 'var(--do-text-sm)', color: 'var(--do-text-on-dark)', opacity: 0.72 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--do-cerulean)', marginTop: 7, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn--primary" style={{ width: '100%' }}>
                  Book a free call <ArrowRight size={18} />
                </Link>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-on-dark)', opacity: 0.72, fontWeight: 'var(--do-weight-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 12 }}>Or book a call directly <ArrowRight size={14} /></a>
                <p style={{ fontSize: 'var(--do-text-xs)', color: 'var(--do-text-on-dark)', opacity: 0.4, textAlign: 'center', marginTop: 16, marginBottom: 0 }}>
                  Serving {town} and across {county}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY LOCATIONS */}
      <section className="g-off">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-subtle)', fontWeight: 'var(--do-weight-medium)', letterSpacing: 'var(--do-tracking-wider)', textTransform: 'uppercase', marginBottom: 8 }}>Also serving</p>
          <p style={{ color: 'var(--do-text-secondary)' }}>
            {county} · East Sussex · West Sussex · Surrey —{' '}
            <Link href={serviceUrl} style={{ color: 'var(--do-cerulean)', textDecoration: 'underline' }}>
              view all locations
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
