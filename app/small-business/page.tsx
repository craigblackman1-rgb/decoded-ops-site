import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Wrench, TrendingUp, Clock, Brain, Zap } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Operations & Technology Consultant for Small Businesses | Decoded Ops',
  description: 'Remote operations and technology consultancy for businesses under £500k. Fixed prices, structured sessions, and the same independent advice, without the big-business price tag.',
  alternates: { canonical: '/small-business' },
  openGraph: {
    type: 'website',
    title: 'Operations & Technology Consultant for Small Businesses | Decoded Ops',
    description: 'Remote operations and technology consultancy for businesses under £500k. Fixed prices, structured sessions, and the same independent advice, without the big-business price tag.',
    url: 'https://decodedops.co.uk/small-business',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations & Technology Consultant for Small Businesses | Decoded Ops',
    description: 'Remote operations and technology consultancy for businesses under £500k. Fixed prices, structured sessions, and the same independent advice, without the big-business price tag.',
  },
};

const smallBizSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Small Business Operational Support',
      description: 'Remote operations and technology consultancy for businesses under £500k. Fixed prices, structured sessions, and the same independent advice, without the big-business price tag.',
      provider: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
      serviceType: 'Small Business Operational Support',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/small-business',
      offers: [
        { '@type': 'Offer', name: 'Clarity Check', price: '595', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Retained', price: '360', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Quarterly Sprint', price: '995', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'AI Readiness Check', price: '395', priceCurrency: 'GBP' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this right for businesses under £500k turnover?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every product on this page is specifically designed for smaller businesses. Remote delivery. Fixed prices. No minimum commitment on the Clarity Check.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need to commit to anything upfront?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. The Clarity Check is a one-off fixed fee with no commitment. Monthly and sprint options have a 3-month minimum with 30 days written notice after.' },
        },
        {
          '@type': 'Question',
          name: 'What does a small business operations consultant actually do?',
          acceptedAnswer: { '@type': 'Answer', text: 'A small business operations consultant provides the operational and technology thinking that growing businesses need but cannot yet justify as a full-time hire. This includes system selection advice, process improvement, vendor oversight, and an AI readiness check, delivered on a fixed-price or retainer basis that fits a sub-£500k business.' },
        },
        {
          '@type': 'Question',
          name: 'Is this like managed IT support for small businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support services handle day-to-day IT issues. A small business operations consultant focuses on the strategic decisions: which systems to use, how to connect them, where processes are breaking down, and whether AI can genuinely help your business, not just keeping the lights on.' },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Sparkles,
    name: 'Clarity Check',
    price: '£595',
    tagline: 'The starting point. A remote operational review: honest, specific, actionable.',
    features: [
      '3-hour structured remote session',
      'Written findings summary, plain English',
      'Three priority actions identified',
      'Tech stack and AI readiness assessed',
      'Delivered within 5 working days',
    ],
    cta: 'Book your Clarity Check',
  },
  {
    icon: TrendingUp,
    name: 'Deliver',
    price: '£795/mo',
    tagline: 'Keep a project moving with remote project delivery and vendor management.',
    features: [
      '90-minute remote working sessions',
      'Vendor management and procurement support',
      'Project oversight and milestone tracking',
      'Written progress summaries',
      'Practical tools and frameworks',
    ],
    cta: 'Book a discovery call',
  },
  {
    icon: Wrench,
    name: 'Transform',
    price: '£1,095/mo',
    tagline: 'Focused transformation programme, one workstream at a time.',
    features: [
      '90-minute remote working sessions',
      'Single focused workstream',
      'ERP, eCommerce, or process redesign',
      'Vendor selection and oversight',
      'Milestone-based delivery',
    ],
    cta: 'Request a proposal',
  },
  {
    icon: Clock,
    name: 'Retained',
    price: 'From £360/mo',
    tagline: 'Ongoing technology and operations support. Flexible days. Direct line to Craig.',
    tiers: [
      { name: 'Entry', price: '£360/mo', sessions: '2 × 4hr sessions' },
      { name: 'Mid', price: '£720/mo', sessions: '4 × 4hr sessions' },
      { name: 'Full', price: '£1,080/mo', sessions: '6 × 4hr sessions' },
    ],
    cta: 'Let\'s talk about what you need',
  },
  {
    icon: Brain,
    name: 'AI Readiness Check',
    price: '£395',
    tagline: 'An honest, independent assessment of whether AI can help your business right now, and what needs fixing first.',
    features: [
      '90-minute structured remote session',
      'Data quality and process readiness review',
      'One or two concrete next steps if AI can help',
      'Explicitly includes "not yet" as a valid outcome',
      'Written assessment delivered within 3 working days',
    ],
    cta: 'Book an AI Readiness Check',
  },
  {
    icon: Zap,
    name: 'Quarterly Sprint',
    price: '£995',
    tagline: 'A single intensive session each quarter: an outside look at the whole operation without a monthly commitment.',
    features: [
      'Half-day remote or on-site session (travel at cost)',
      'Review of what\'s changed since last session',
      '2–3 named priorities for the quarter ahead',
      'Short written summary delivered within 3 days',
      'No minimum commitment, booked fresh each quarter',
    ],
    cta: 'Book a Quarterly Sprint',
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
          <h1 className="h1">Small business operations consultant. <em>Technology and systems support without the enterprise price tag.</em></h1>
          <p className="lede">
            The same operational thinking I bring to larger businesses, adapted for smaller ones. Remote delivery. Fixed prices. No jargon. No vendor agenda.
          </p>
          <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)', maxWidth: '48ch', margin: '0 auto 16px' }}>
            A small business operations consultant covers what a full-time operations director would: technology decisions, vendor oversight, process improvement, and AI readiness, on a flexible, affordable basis built for businesses under £500k.
          </p>
          <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-subtle)', marginBottom: 32 }}>By Craig Blackman, 25 years in print &amp; embroidery operations</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn--primary">
              See all pricing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Small business visual strip */}
      <section className="g-navy" style={{ padding: '32px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: 600, margin: '0 auto', padding: 16, borderRadius: 'var(--do-radius-2xl)', background: 'color-mix(in srgb, var(--do-off-white) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--do-off-white) 10%, transparent)' }}>
            <svg viewBox="0 0 500 80" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', width: '100%' }}>
              <rect x="20" y="15" width="100" height="50" rx="8" fill="color-mix(in srgb, var(--do-cerulean) 15%, transparent)" stroke="var(--do-cerulean)" strokeWidth="1.5" />
              <text x="70" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--do-cerulean)">CLARITY</text>
              <text x="70" y="52" textAnchor="middle" fontSize="8" fill="var(--do-sky-blue)">£595</text>

              <text x="140" y="44" textAnchor="middle" fontSize="16" fill="var(--do-sky-blue)" opacity="0.5">→</text>

              <rect x="160" y="15" width="100" height="50" rx="8" fill="color-mix(in srgb, var(--do-cerulean) 15%, transparent)" stroke="var(--do-cerulean)" strokeWidth="1.5" />
              <text x="210" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--do-cerulean)">DELIVER</text>
              <text x="210" y="52" textAnchor="middle" fontSize="8" fill="var(--do-sky-blue)">£795/mo</text>

              <text x="280" y="44" textAnchor="middle" fontSize="16" fill="var(--do-sky-blue)" opacity="0.5">→</text>

              <rect x="300" y="15" width="100" height="50" rx="8" fill="color-mix(in srgb, var(--do-cerulean) 15%, transparent)" stroke="var(--do-cerulean)" strokeWidth="1.5" />
              <text x="350" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--do-cerulean)">TRANSFORM</text>
              <text x="350" y="52" textAnchor="middle" fontSize="8" fill="var(--do-sky-blue)">£1,095/mo</text>

              <text x="420" y="44" textAnchor="middle" fontSize="16" fill="var(--do-sky-blue)" opacity="0.5">→</text>

              <rect x="440" y="15" width="40" height="50" rx="8" fill="color-mix(in srgb, var(--do-amber) 15%, transparent)" stroke="var(--do-amber)" strokeWidth="1.5" />
              <text x="460" y="38" textAnchor="middle" fontSize="7" fontWeight="700" fill="var(--do-amber)">RETAINED</text>
              <text x="460" y="52" textAnchor="middle" fontSize="7" fill="var(--do-sky-blue)">£360+</text>
            </svg>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="g-off">
        <div className="wrap">
          <div style={{ maxWidth: '42ch', marginBottom: 64 }}>
            <h2 className="h2">Fractional operations and technology support for small businesses</h2>
            <p className="lede">Each designed for a different situation. All delivered remotely. All with a direct line to me, not a junior team.</p>
          </div>
          <div className="grid grid--3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--do-radius-xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={24} style={{ color: 'var(--do-cerulean)' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
                    <h3 style={{ fontSize: 'var(--do-text-xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-primary)' }}>{service.name}</h3>
                    <span style={{ fontSize: 'var(--do-text-2xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-cerulean)' }}>{service.price}</span>
                  </div>
                  <p style={{ color: 'var(--do-text-muted)', fontSize: 'var(--do-text-sm)', marginBottom: 24, lineHeight: 1.75 }}>{service.tagline}</p>
                  {'features' in service && (
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24, flex: 1, padding: 0, listStyle: 'none' }}>
                      {service.features!.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--do-cerulean)', marginTop: 2, flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  {'tiers' in service && service.tiers && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                      {service.tiers.map(tier => (
                        <div key={tier.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderRadius: 'var(--do-radius-lg)', background: 'color-mix(in srgb, var(--do-prussian-blue) 5%, transparent)' }}>
                          <span style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)' }}>{tier.name}</span>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-cerulean)' }}>{tier.price}</div>
                            <div style={{ fontSize: 'var(--do-text-xs)', color: 'var(--do-text-subtle)' }}>{tier.sessions}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <Link href="/contact" className="btn btn--outline" style={{ alignSelf: 'flex-start' }}>
                    {service.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="g-navy">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="h2">Not sure which is right for you?</h2>
          <p className="lede">Answer two quick questions and I&apos;ll point you to the most relevant option.</p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link href="/pricing" className="btn btn--primary">
              Take the pricing questionnaire <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
