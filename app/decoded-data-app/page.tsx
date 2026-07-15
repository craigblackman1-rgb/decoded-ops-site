import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Database, RefreshCw, Layers } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

// Target keyword: product data management / supplier feed sanitisation / eCommerce-ERP integration
export const metadata: Metadata = {
  title: 'Decoded Data App — Supplier Feeds, Stock & ERP Integration | Decoded Ops',
  description: 'A custom-built data layer for decorated goods and multi-channel businesses — supplier feed sanitisation, SKU standardisation, and clean ERP integration. Built per client, not sold off the shelf.',
  alternates: { canonical: '/decoded-data-app' },
  openGraph: {
    type: 'website',
    title: 'Decoded Data App — Supplier Feeds, Stock & ERP Integration | Decoded Ops',
    description: 'A custom-built data layer for decorated goods and multi-channel businesses — supplier feed sanitisation, SKU standardisation, and clean ERP integration.',
    url: 'https://decodedops.co.uk/decoded-data-app',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Data App — Supplier Feeds, Stock & ERP Integration | Decoded Ops',
    description: 'A custom-built data layer for decorated goods and multi-channel businesses — supplier feed sanitisation, SKU standardisation, and clean ERP integration.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Decoded Data App',
      description: 'A custom-built data layer for print, decoration, and multi-channel eCommerce businesses — supplier feed sanitisation, SKU and stock standardisation, and direct ERP integration. Priced and built per client, not sold as off-the-shelf software.',
      provider: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      serviceType: 'Product Data Management and ERP Integration',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/decoded-data-app',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Decoded Data App an off-the-shelf product?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. It is built per client as part of a Deliver or Transform engagement — the module is scoped to your suppliers, channels, and target ERP, not a generic SaaS tool you sign up for. Get in touch to discuss what a build would look like for your data.' },
        },
        {
          '@type': 'Question',
          name: 'Does this replace my ERP?',
          acceptedAnswer: { '@type': 'Answer', text: 'No — it does the job most ERPs assume is already done before implementation starts: standardising SKUs and stock data, sanitising supplier feeds, and handling channel-specific quirks like Amazon FBA. It feeds clean data into the ERP and keeps running after go-live.' },
        },
        {
          '@type': 'Question',
          name: 'When should this be built — before or after the ERP goes in?',
          acceptedAnswer: { '@type': 'Answer', text: 'Before, wherever possible. Data prep left until ERP implementation starts is the single biggest source of avoidable project cost — every hour spent cleaning and standardising data ahead of time is an hour not spent firefighting mid-implementation.' },
        },
      ],
    },
  ],
};

const capabilities = [
  {
    icon: Database,
    title: 'SKU and stock standardisation',
    desc: 'Bin locations, SKU conventions, and stock data get a proper home before an ERP arrives — not retrofitted around whatever the software expects.',
  },
  {
    icon: RefreshCw,
    title: 'Supplier feed sanitisation',
    desc: 'Feeds that were never designed to hold this much detail reliably get cleaned and normalised automatically, replacing spreadsheets and manual re-keying.',
  },
  {
    icon: Layers,
    title: 'Channel-aware automation',
    desc: "Marketplace channels with their own rules — Amazon FBA's inventory and shipping confirmation flows, for example — get handled explicitly, not bolted on as an afterthought.",
  },
];

export default function DecodedDataAppPage() {
  return (
    <main>
      <JsonLd data={schema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Decoded Data App', url: 'https://decodedops.co.uk/decoded-data-app' },
      ]} />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Decoded Data App</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            The data layer your ERP was never going to build for you
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed">
            Most ERP implementations assume the data prep is already done. It never is. The Decoded Data App is a custom-built module — standardising SKUs and stock, sanitising supplier feeds, and handling channel quirks like Amazon FBA — built into a Deliver or Transform engagement, not bought off a pricing page.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-[#023047] mb-4">Why this exists</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            Choosing the right ERP is rarely the hard part. What breaks projects is everything around it — stock and SKU data spread across spreadsheets with no single source of truth, supplier feeds that were never designed to hold this much detail, and marketplace channels that don't behave like a normal sales channel. Data prep left until implementation starts becomes the client's problem to sort out on the way. This module exists to do that work first, properly, and keep doing it after go-live.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">What it covers</h2>
          <div className="space-y-6 mb-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#219EBC]/10 border border-[#219EBC]/25 flex items-center justify-center">
                  <cap.icon size={20} className="text-[#219EBC]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#023047] mb-1">{cap.title}</h3>
                  <p className="text-[#023047]/80 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25 mb-8">
            <h3 className="text-lg font-bold text-[#023047] mb-3">Why it comes before the ERP, not after</h3>
            <p className="text-[#023047]/80 leading-relaxed">
              The instinct is always to wait until the ERP is fully implemented before touching the data problem. That's backwards. Every hour spent cleaning and standardising data before implementation starts is an hour that doesn't get spent firefighting during it — and the module doesn't get thrown away once the ERP lands. It keeps running the feeds and connections most ERPs were never designed to handle on their own.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">Built per client, not sold off the shelf</h2>
          <div className="space-y-4 mb-8">
            {[
              'Scoped to your suppliers, channels, and target ERP — not a generic tool you configure yourself',
              'Priced as a standalone build within a Deliver or Transform engagement, never as a subscription',
              'Designed to keep running after your ERP goes live, not replaced by it',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="text-[#023047]/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">Live examples</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-4">
            Two client engagements currently run a version of this module — proof, not a pitch deck.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <Link href="/case-studies/tacklebag" className="block p-6 rounded-2xl border border-[#023047]/15 hover:border-[#219EBC]/50 transition-colors">
              <p className="text-xs font-semibold text-[#219EBC] uppercase tracking-wider mb-2">TackleBag</p>
              <p className="text-sm text-[#023047]/80 leading-relaxed">A Stock Control module with SKU standards and bin locations built in, feeding a Khaos Control implementation still in progress.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#023047] mt-3">Read the case study <ArrowRight size={14} /></span>
            </Link>
            <Link href="/case-studies/hanicks" className="block p-6 rounded-2xl border border-[#023047]/15 hover:border-[#219EBC]/50 transition-colors">
              <p className="text-xs font-semibold text-[#219EBC] uppercase tracking-wider mb-2">Hanicks</p>
              <p className="text-sm text-[#023047]/80 leading-relaxed">The IBasis App — interfacing with suppliers, Khaos Control, and Amazon FBA, plus reporting drawn directly from accounts.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#023047] mt-3">Read the case study <ArrowRight size={14} /></span>
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Recognise this pattern?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              If your stock and supplier data is spread across spreadsheets and you're eyeing an ERP, a Clarity Audit is the fastest way to find out what's actually going on before you commit to anything — including whether a data module like this one makes sense for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                See other client work
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8ECAE6] hover:text-white font-medium inline-flex items-center gap-1 mt-3">Or book a call directly <ArrowRight size={14} /></a>
          </div>

        </div>
      </section>
    </main>
  );
}
