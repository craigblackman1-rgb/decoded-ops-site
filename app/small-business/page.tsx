import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Wrench, TrendingUp, Clock } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Small Business Operational Support | Decoded Ops',
  description: 'Remote operational and technology support for small businesses under £500k. Fixed prices. No minimum commitment. Clarity Check from £395.',
  alternates: { canonical: '/small-business' },
  openGraph: {
    type: 'website',
    title: 'Small Business Operational Support | Decoded Ops',
    description: 'Remote operational and technology support for small decoration, print, and workwear businesses. From £395. No jargon. No vendor agenda.',
    url: 'https://decodedops.co.uk/small-business',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Support | Decoded Ops',
    description: 'Remote ops support for small print and decoration businesses. From £395. Plain English.',
  },
};

const smallBizSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Small Business Operational Support',
      description: 'Remote operational and technology support for small print, embroidery, decoration, and workwear businesses. Fixed prices with no minimum commitment.',
      provider: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
      serviceType: 'Small Business Operational Support',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/small-business',
      offers: [
        { '@type': 'Offer', name: 'Clarity Check', price: '395', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Monthly Advisory', price: '395', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Quarterly Sprint', price: '995', priceCurrency: 'GBP' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'A small business operations consultant provides the operational and technology thinking that growing businesses need but cannot yet justify as a full-time hire. This includes system selection advice, process improvement, vendor oversight, and an AI readiness check — delivered on a fixed-price or retainer basis that fits a sub-£500k business.' },
        },
        {
          '@type': 'Question',
          name: 'Is this like managed IT support for small businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support services handle day-to-day IT issues. A small business operations consultant focuses on the strategic decisions: which systems to use, how to connect them, where processes are breaking down, and whether AI can genuinely help your business — not just keeping the lights on.' },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Sparkles,
    name: 'Clarity Check',
    price: '£395',
    tagline: 'The starting point. A remote operational review — honest, specific, actionable.',
    features: [
      '3-hour structured remote session',
      'Written findings summary — plain English',
      'Three priority actions identified',
      'Tech stack and AI readiness assessed',
      'Delivered within 5 working days',
    ],
    cta: 'Book your Clarity Check',
  },
  {
    icon: TrendingUp,
    name: 'Deliver',
    price: '£550/mo',
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
    price: '£770/mo',
    tagline: 'Focused transformation programme — one workstream at a time.',
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
    price: 'From £395/mo',
    tagline: 'Ongoing technology and operations support. Flexible days. Direct line to Craig.',
    tiers: [
      { name: 'Entry', price: '£395/mo', sessions: '2 × 4hr sessions' },
      { name: 'Mid', price: '£695/mo', sessions: '4 × 4hr sessions' },
      { name: 'Full', price: '£995/mo', sessions: '6 × 4hr sessions' },
    ],
    cta: 'Let\'s talk about what you need',
  },
];

export default function SmallBusinessPage() {
  return (
    <>
      <JsonLd data={smallBizSchema} />
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— For small businesses</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6 max-w-3xl mx-auto">
            Small business operations consultant. <span className="text-[#219EBC]">Technology and systems support without the enterprise price tag.</span>
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            The same operational thinking I bring to larger businesses — adapted for smaller ones. Remote delivery. 
            Fixed prices. No jargon. No vendor agenda.
          </p>
          <p className="text-sm text-[#023047]/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            A small business operations consultant covers what a full-time operations director would — technology decisions, vendor oversight, process improvement, and AI readiness — on a flexible, affordable basis built for businesses under £500k.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              See all pricing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">Fractional operations and technology support for small businesses</h2>
            <p className="text-[#023047]/70 text-lg">Each designed for a different situation. All delivered remotely. All with a direct line to me — not a junior team.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className="p-8 rounded-2xl border border-[#8ECAE6]/40 bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#219EBC]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#219EBC]" />
                  </div>
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#023047]">{service.name}</h3>
                    <span className="text-2xl font-bold text-[#219EBC]">{service.price}</span>
                  </div>
                  <p className="text-[#023047]/70 mb-6">{service.tagline}</p>
                  {'features' in service && (
                    <ul className="space-y-2 mb-6">
                      {service.features!.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[#023047]/70">
                          <CheckCircle2 size={16} className="text-[#219EBC] mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  {'tiers' in service && service.tiers && (
                    <div className="space-y-2 mb-6">
                      {service.tiers.map(tier => (
                        <div key={tier.name} className="flex items-center justify-between p-3 rounded-xl bg-[#023047]/5">
                          <span className="text-sm font-semibold text-[#023047]">{tier.name}</span>
                          <div className="text-right">
                            <div className="text-sm font-bold text-[#219EBC]">{tier.price}</div>
                            <div className="text-xs text-[#023047]/50">{tier.sessions}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#219EBC] hover:text-[#023047] transition-colors">
                    {service.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">Not sure which is right for you?</h2>
          <p className="text-[#8ECAE6] text-lg max-w-xl mx-auto mb-8">Answer two quick questions and I&apos;ll point you to the most relevant option.</p>
          <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
            Take the pricing questionnaire <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
