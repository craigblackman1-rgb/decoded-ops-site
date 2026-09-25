import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Wrench, Clock } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { PhotoPiece } from '@/components/PhotoPiece';

export const metadata: Metadata = {
  title: 'Small Business Technology Consultant | Decoded Ops',
  description: 'A small business technology consultant for companies under £1m turnover. Fixed prices and structured sessions, with the same independent advice.',
  alternates: { canonical: '/small-business' },
  openGraph: {
    type: 'website',
    title: 'Small Business Technology Consultant | Decoded Ops',
    description: 'A small business technology consultant for companies under £1m turnover. Fixed prices and structured sessions, with the same independent advice.',
    url: 'https://decodedops.co.uk/small-business',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Technology Consultant | Decoded Ops',
    description: 'A small business technology consultant for companies under £1m turnover. Fixed prices and structured sessions, with the same independent advice.',
  },
};

const smallBizSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Small Business Operational Support',
      description: 'Remote operations and technology consultancy for businesses under £1m. Fixed prices, structured sessions, and the same independent advice, without the big-business price tag.',
      provider: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
      serviceType: 'Small Business Operational Support',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/small-business',
      offers: [
        { '@type': 'Offer', name: 'Clarity Check', price: '595', priceCurrency: 'GBP' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this right for businesses under £1m turnover?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every product on this page is specifically designed for smaller businesses. Remote delivery. Fixed prices. No minimum commitment on the Clarity Check.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need to commit to anything upfront?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. The Clarity Check is a one-off fixed fee with no commitment. Monthly services have minimum terms set at the audit.' },
        },
        {
          '@type': 'Question',
          name: 'What does a small business operations consultant actually do?',
          acceptedAnswer: { '@type': 'Answer', text: 'A small business operations consultant provides the operational and technology thinking that growing businesses need but cannot yet justify as a full-time hire. This includes system selection advice, process improvement, and vendor oversight, delivered on a fixed-price or retainer basis.' },
        },
        {
          '@type': 'Question',
          name: 'Is this like managed IT support for small businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support services handle day-to-day IT issues. A small business operations consultant focuses on the strategic decisions: which systems to use, how to connect them, and where processes are breaking down.' },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Sparkles,
    name: 'Clarity Check',
    tagline: 'The starting point. A remote operational review: honest, specific, actionable.',
    price: '£595',
    priceNote: 'fixed',
    features: [
      '3-hour structured remote session',
      'Written findings summary, plain English',
      'Three priority actions identified',
      'The systems you use and AI readiness assessed',
      'Delivered within 5 working days',
    ],
    cta: 'Book your Clarity Check',
  },
];

export default function SmallBusinessPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Small Business Consulting', url: 'https://decodedops.co.uk/small-business' },
      ]} />
      <JsonLd data={smallBizSchema} />

      {/* HERO */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720, textAlign: 'center' }}>
          <span className="eyebrow" style={{ marginBottom: 22 }}>For small businesses</span>
          <h1 className="h1">Small business operations consultant. <em>Technology and systems support without the big-business price tag.</em></h1>
          <p className="lede">
            The same operational thinking I bring to larger businesses, adapted for smaller ones. Remote delivery. Fixed prices. No jargon. No vendor agenda.
          </p>
          <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)', maxWidth: '48ch', margin: '0 auto 16px' }}>
            A small business operations consultant covers what a full-time operations director would: technology decisions, vendor oversight, and process improvement, on a flexible, affordable basis built for businesses under £1m.
          </p>
          <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-subtle)', marginBottom: 32 }}>By Craig Blackman, 25 years in print &amp; embroidery operations</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn--primary">
              See all pricing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* EVIDENCE PHOTO · DO-ART-915 */}
      <section className="g-white ev-band" data-od-id="evidence">
        <div className="wrap">
          <PhotoPiece
            src="/images/money/cat-promo-2026-09.webp"
            width={1600}
            height={1067}
            alt="Two plain white ceramic mugs, handles outward, side by side on a white surface."
            no="DO-ART-915"
            rev="01"
            eyebrow="Evidence · Small business"
            caption="Small shop, same standards"
            focus="50% 50%"
          />
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="g-off">
        <div className="wrap">
          <div style={{ maxWidth: '42ch', marginBottom: 64 }}>
            <h2 className="h2">Start with a Clarity Check</h2>
            <p className="lede">A fixed-price remote diagnostic, delivered by me, not a junior team.</p>
          </div>
          <div className="grid grid--2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--do-radius-xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={24} style={{ color: 'var(--do-cerulean)' }} />
                  </div>
                  <h3 style={{ fontSize: 'var(--do-text-xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-primary)', marginBottom: 8 }}>{service.name}</h3>
                  <div style={{ marginBottom: 16 }}>
                    <span className="price" style={{ fontSize: 'var(--do-text-lg)' }}>{service.price}</span>
                    <span className="num" style={{ color: 'var(--do-text-muted)', marginLeft: 6 }}>{service.priceNote}</span>
                  </div>
                  <p style={{ color: 'var(--do-text-muted)', fontSize: 'var(--do-text-sm)', marginBottom: 24, lineHeight: 1.75 }}>{service.tagline}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24, flex: 1, padding: 0, listStyle: 'none' }}>
                    {service.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--do-cerulean)', marginTop: 2, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn btn--outline" style={{ alignSelf: 'flex-start' }}>
                    {service.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)', marginTop: 24, lineHeight: 1.75 }}>
            Beyond the Clarity Check, it&apos;s the same services and the same from-prices as everywhere else on this site.
            See <Link href="/pricing" style={{ color: 'var(--do-text-cerulean)', fontWeight: 600 }}>full pricing</Link> for details.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="g-navy">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="h2">Not sure which is right for you?</h2>
          <p className="lede">Answer two quick questions and I&apos;ll point you to the most relevant option.</p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link href="/pricing" className="btn btn--primary">
              See all pricing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
