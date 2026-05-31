import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'B2B Portal Down on Christmas Jumper Day | Decoded Ops',
  description: 'December 23rd. Your B2B portal is down. Customers can\'t order. Your phone is ringing. The host says "known issue, no ETA." Here is how to prevent it.',
  alternates: { canonical: '/blog/b2b-portal-down-on-christmas-jumper-day-cartoon' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-06-07T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Technology',
    title: 'B2B Portal Down on Christmas Jumper Day',
    description: 'December 23rd. Your B2B portal is down. Here is why it happens, what it costs, and the infrastructure that prevents it.',
    url: 'https://decodedops.co.uk/blog/b2b-portal-down-on-christmas-jumper-day-cartoon',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Portal Down on Christmas Jumper Day',
    description: 'December 23rd. Your B2B portal is down. Here is what to do and how to prevent it.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'B2B Portal Down on Christmas Jumper Day',
      datePublished: '2026-06-07T00:00:00Z',
      dateModified: '2026-06-07T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/b2b-portal-down-on-christmas-jumper-day-cartoon',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/b2b-portal-down-on-christmas-jumper-day-cartoon',
      description: 'Why B2B portals go down at the worst possible moments in the decoration sector — and the monitoring, escalation, and fallback processes that prevent it becoming a crisis.',
      wordCount: 1200,
      articleSection: 'Technology',
      keywords: 'B2B portal downtime, ecommerce uptime, B2B portal monitoring, business continuity ecommerce, decorated goods B2B portal',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you monitor a B2B portal for downtime beyond "is the server up?"',
          acceptedAnswer: { '@type': 'Answer', text: 'Server uptime monitoring tells you the server is running. It doesn\'t tell you the checkout is working, the search is returning results, or a customer can actually complete an order. Synthetic transaction monitoring — automated tests that simulate a real user journey at regular intervals — catches the failures that uptime monitoring misses. If the checkout fails a synthetic test at 3am, you find out at 3am, not when a customer calls at 9.' },
        },
        {
          '@type': 'Question',
          name: 'What should a fallback order process include when a B2B portal is down?',
          acceptedAnswer: { '@type': 'Answer', text: 'A documented fallback process for portal downtime should include: a contact mechanism to notify affected customers (email list or automated message), a temporary order form or phone order process that allows orders to continue, clear ownership of who manages the fallback (not everyone and therefore no one), and a process for importing the fallback orders into the main system when the portal recovers.' },
        },
        {
          '@type': 'Question',
          name: 'What causes B2B portals to go down during peak trading periods?',
          acceptedAnswer: { '@type': 'Answer', text: 'Peak periods bring the highest traffic loads, often at the same time as end-of-year infrastructure changes, hosting provider maintenance windows, and reduced support staffing. A portal that handles average load without issue may not handle 5x average load. Load testing — simulating peak traffic before peak season — identifies capacity issues before customers do.' },
        },
      ],
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            B2B Portal Down on Christmas Jumper Day
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            It's December 23rd. The portal has been down since 3am. Customers can't order. The host says "known issue, no ETA." This happens every year. It doesn't have to.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>By Craig Blackman</span>
            <span>·</span>
            <span>June 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <p className="text-[#023047]/80 leading-relaxed mb-6 text-lg italic">
              Ask any decorated goods business that runs a B2B portal whether they've experienced a portal outage during Christmas jumper season and most of them will tell you yes. Some will tell you it happened more than once. And almost all of them will say they still don't have a proper fallback in place.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Why Peak Season Is Also Risk Season</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The December period is the highest-volume trading window for a significant proportion of decorated goods businesses — Christmas jumpers, corporate gifts, charity fundraising. It's also the period when infrastructure is most at risk.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Peak traffic loads stress systems that handle average load without issue. Hosting providers often schedule maintenance windows in late November and December, before the period when their support teams are on reduced staffing. And the people inside your business who would normally manage a portal crisis may also be on reduced availability.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              None of this is inevitable. It's a planning failure — specifically, a failure to think through what happens when the portal goes down at the worst possible moment.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What the Downtime Actually Costs</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The direct cost is orders not placed. For a B2B portal processing £20,000 of orders per day during December, a 24-hour outage is £20,000 of revenue at risk — some of which will be recovered when the portal comes back, some of which won't because customers found another supplier or the deadline passed.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The indirect cost is relationship damage. A customer who can't order from you when they need to may forgive it once. If it happens twice, or if the communication during the outage is poor, they'll have a quiet conversation with another supplier.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The management cost is the team time consumed by a crisis that didn't have to be a crisis. Phone calls fielded, orders manually taken, emails responded to, escalations managed with the hosting provider — all while the normal pre-Christmas workload is still running.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Monitoring That Actually Works</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Most portal monitoring is limited to uptime monitoring: is the server responding? That's not the same as "can a customer actually place an order."
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A server can be running and returning responses while the checkout is broken, search is returning no results, or the payment gateway isn't connecting. Uptime monitoring misses all of those. You find out when a customer calls.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Synthetic transaction monitoring runs automated tests that simulate a real customer journey — search for a product, add to basket, proceed to checkout — at regular intervals. If any step fails, an alert fires. You find out at 3am when it breaks, not at 9am when the calls start.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This is not expensive to set up. Services that run synthetic monitoring cost a few hundred pounds a year. The monitoring itself takes a few hours to configure. The return on investment from catching one peak-season outage early is immediate.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Fallback Process</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Monitoring catches downtime early. A fallback process means it doesn't have to stop orders. The fallback needs three things:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li><strong>A customer communication.</strong> An automated message to affected customers — or at minimum, a banner message on your homepage — that acknowledges the problem, provides a phone number or email for orders, and gives an estimated resolution time if known. Silence is worse than a clear message.</li>
              <li><strong>A temporary order mechanism.</strong> A simple order form, a phone number that goes to a staffed line, or an email address that goes directly to someone who can process it. Not "email info@" and hope. A defined channel with a defined owner.</li>
              <li><strong>A reconciliation process.</strong> When the portal recovers, the orders taken through the fallback mechanism need to be entered into the main system. This should be documented before it's needed — not figured out on the day.</li>
            </ol>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Before Peak Season: The Checklist</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Every decorated goods business running a B2B portal should run through this before the December period:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li>Is synthetic transaction monitoring in place and alerting to the right people?</li>
              <li>Has the portal been load tested for peak traffic? (Not just average traffic.)</li>
              <li>Is there a documented fallback process for portal downtime?</li>
              <li>Does the hosting provider have a clear escalation path and SLA for critical issues?</li>
              <li>Have you confirmed the support staffing level at your hosting provider over the Christmas period?</li>
              <li>Is there someone with admin access to the portal available on call during peak trading?</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              None of this takes long to check. All of it is significantly easier to sort in October than on December 23rd.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Common Questions</h2>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How do you monitor beyond "is the server up?"</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Synthetic transaction monitoring — automated tests that simulate a real customer journey at regular intervals. If the checkout fails at 3am, you find out at 3am, not when a customer calls at 9.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What should a fallback order process include?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Customer communication acknowledging the issue, a temporary order mechanism (phone or email with a defined owner), and a documented process for importing fallback orders when the portal recovers.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">Why do portals go down during peak periods?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Peak traffic loads stress systems sized for average load. Hosting providers often schedule maintenance before the period. Support staffing is reduced. Load testing before peak season — not after — identifies capacity issues before customers do.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">A B2B portal outage at peak season is an operational risk, not just a technical one.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                A Clarity Audit includes an assessment of your ecommerce infrastructure and business continuity arrangements — identifying the risks before they become incidents.
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
