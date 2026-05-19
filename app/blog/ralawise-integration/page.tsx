import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Ralawise Integration: Automating Your Wholesale Orders | Decoded Ops',
  description: 'How to integrate Ralawise with your ERP or order management system. Reduce manual data entry and speed up fulfilment for your decorated goods business.',
  alternates: { canonical: '/blog/ralawise-integration' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-21T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Operations',
    title: 'Ralawise Integration: Automating Your Wholesale Orders',
    description: 'How to integrate Ralawise with your ERP or order management system. Reduce manual data entry and speed up fulfilment for your decorated goods business.',
    url: 'https://decodedops.co.uk/blog/ralawise-integration',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ralawise Integration: Automating Your Wholesale Orders',
    description: 'How to integrate Ralawise with your ERP or order management system. Reduce manual data entry and speed up fulfilment for your decorated goods business.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Ralawise Integration: Automating Your Wholesale Order Flow',
      datePublished: '2026-05-21T00:00:00Z',
      dateModified: '2026-05-21T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/ralawise-integration',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/ralawise-integration',
      description: 'How to integrate Ralawise with your ERP or order management system to reduce manual data entry, speed up fulfilment, and eliminate procurement errors.',
      wordCount: 1200,
      articleSection: 'Operations',
      keywords: 'Ralawise integration, Ralawise API, wholesale order automation, garment decoration supplier integration, ERP integration for print, decorated goods wholesale',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Ralawise have an API for integration?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ralawise offers API access that allows businesses to retrieve product data, check stock availability, and place orders programmatically. The level of API access and functionality available can depend on your account type and trading volume. Contact Ralawise directly or through their trade portal to discuss integration options for your business.' },
        },
        {
          '@type': 'Question',
          name: 'What are the options for integrating Ralawise with an ERP system?',
          acceptedAnswer: { '@type': 'Answer', text: 'Integration options range from manual data export/import (CSV-based), through middleware platforms that sync Ralawise data with your ERP automatically, to direct API integration built specifically for your system. The right approach depends on your order volume, existing technology stack, and budget. Middleware solutions often provide the fastest route to automation without custom development.' },
        },
        {
          '@type': 'Question',
          name: 'How much manual work does Ralawise integration eliminate?',
          acceptedAnswer: { '@type': 'Answer', text: 'Businesses placing regular wholesale orders with Ralawise typically spend 30–90 minutes per day on manual data entry, stock checking, and order tracking. A working integration eliminates most of this — orders flow directly from your system to Ralawise without re-keying, and stock levels update automatically. The exact saving depends on order volume and how many SKUs you manage.' },
        },
      ],
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <JsonLd data={schema} />
      {/* HERO */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Ralawise Integration: How to Automate Your Wholesale Order Flow
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            What connecting Ralawise to your ERP or order system actually involves — and why the manual alternative is costing you more than you think.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>By Craig Blackman</span>
            <span>·</span>
            <span>May 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <p className="text-[#023047]/80 leading-relaxed mb-6 text-lg italic">
              If you're placing regular wholesale orders with Ralawise manually, you're doing one of the most automatable jobs in your operation by hand — every single day.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              Checking stock, placing purchase orders, reconciling deliveries, updating your own system. It's tedious, it's error-prone, and it's the kind of work that delays fulfilment when it goes wrong. Integration fixes all of that.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What the Manual Workflow Actually Costs</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Before discussing integration options, it's worth quantifying the current problem. A typical manual Ralawise workflow for a busy decorated goods business looks something like this:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li>Receive a customer order</li>
              <li>Log into Ralawise portal and check stock for required SKUs</li>
              <li>Place purchase order manually, re-keying the data from your customer order</li>
              <li>Monitor Ralawise for order confirmation and despatch notification</li>
              <li>Update your ERP or order management system with the purchase order reference and expected delivery</li>
              <li>Reconcile delivery against purchase order when goods arrive</li>
              <li>Update stock records</li>
            </ol>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Each step is manual. Each step is a potential error. And each step takes time — typically 15–25 minutes per distinct purchase order, not counting reconciliation. At 5–10 Ralawise purchase orders per day, that's 1.5–4 hours of admin per day on just one supplier.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What Ralawise Integration Looks Like</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A working Ralawise integration changes that workflow fundamentally. The key data flows that integration enables are:
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Stock Availability</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Rather than manually checking Ralawise stock before each order, your system queries the Ralawise API automatically. When a customer order comes in for a product that sources from Ralawise, your system checks availability in real time and alerts you only if there's a problem.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Automated Purchase Order Creation</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              When a customer order is confirmed, your system creates the corresponding Ralawise purchase order automatically — pulling the right SKUs, quantities, and delivery details without re-keying. The purchase order is submitted via API.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Order Status and Tracking</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Order confirmations, despatch notifications, and tracking references flow back from Ralawise into your system automatically. Your team sees the status in your own system rather than having to log into the Ralawise portal to check.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Product and Pricing Data</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Ralawise product catalogues and pricing can be synced to your system on a schedule, so your quotes and customer pricing always reflect current wholesale costs — without manual updates.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Integration Options: From Simple to Full</h2>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Option 1: Scheduled Data Sync (CSV / SFTP)</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The lightest-touch integration. Ralawise generates export files on a schedule; your system imports them. This works for product data and stock level updates but doesn't support real-time order submission. Better than fully manual, but still requires some human touchpoints.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Option 2: Middleware Platform</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Middleware tools (such as Patchworks, SKUVault, or similar connectors) sit between Ralawise and your ERP and handle the data flow. These are faster to implement than custom development and don't require in-house technical resource to build.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The trade-off is ongoing subscription cost and dependence on the middleware vendor's Ralawise connector staying current with API changes.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Option 3: Direct API Integration</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A custom integration built directly against the Ralawise API. This is the most capable option — you can implement exactly the data flows your business needs, with full control over error handling and business logic.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The cost is higher upfront (development time) and you need to manage the integration going forward as the Ralawise API evolves.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Before You Build: Questions to Answer First</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Integration projects fail when the business requirements aren't clear before development starts. Before commissioning any integration work, define:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li>Which data flows are in scope (stock check, order creation, order status, product data, invoices)?</li>
              <li>What does your ERP or order management system support on the inbound side?</li>
              <li>What are the error handling requirements — what should happen when a Ralawise SKU is out of stock?</li>
              <li>What's the required frequency of sync — real time, hourly, daily?</li>
              <li>Who owns the integration post-launch — internal IT, your ERP vendor, or a third party?</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              These questions define the scope of the project and determine which integration approach is appropriate.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Payback Period</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Integration has an upfront cost. The question is how quickly it pays back against the manual alternative.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If your current manual process costs 2 hours of admin per day (at an all-in staff cost of £15–20/hour), that's £30–40/day, or roughly £7,500–10,000 per year. A middleware integration costing £3,000–5,000 to implement and £1,200/year to maintain pays back inside 12 months.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The calculation changes at higher order volumes — and doesn't include the value of eliminated errors, faster fulfilment, and staff time redirected to higher-value work.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Supplier integrations are one of the highest-ROI automation investments for decorated goods businesses.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                If you want to understand what integration would actually cost and save in your specific setup, an audit gives you the numbers — and a clear implementation path.
              </p>
              <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                See Clarity <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
