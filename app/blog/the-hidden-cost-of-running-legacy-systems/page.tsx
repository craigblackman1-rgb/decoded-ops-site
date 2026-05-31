import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'The Hidden Cost of Running Legacy Systems | Decoded Ops',
  description: 'That ERP you have been meaning to replace for five years is costing you more than you think. Not just licence fees — lost productivity, manual workarounds, and missed opportunities.',
  alternates: { canonical: '/blog/the-hidden-cost-of-running-legacy-systems' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-06-12T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Technology',
    title: 'The Hidden Cost of Running Legacy Systems',
    description: 'That ERP you have been meaning to replace for five years is costing you more than you think — in productivity, workarounds, and missed opportunity.',
    url: 'https://decodedops.co.uk/blog/the-hidden-cost-of-running-legacy-systems',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hidden Cost of Running Legacy Systems',
    description: 'That ERP you have been meaning to replace is costing you more than you think — in productivity, workarounds, and missed opportunity.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'The Hidden Cost of Running Legacy Systems',
      datePublished: '2026-06-12T00:00:00Z',
      dateModified: '2026-06-12T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/the-hidden-cost-of-running-legacy-systems',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/the-hidden-cost-of-running-legacy-systems',
      description: 'The real cost of keeping legacy systems in place — direct costs, hidden workaround costs, and opportunity costs — and how to decide whether to replace, defer, or tolerate.',
      wordCount: 1350,
      articleSection: 'Technology',
      keywords: 'legacy system migration, legacy ERP cost, replace legacy software, legacy system risk, software modernisation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you calculate the true cost of a legacy system?',
          acceptedAnswer: { '@type': 'Answer', text: 'The true cost has three layers: direct costs (licence fees, support contracts, hardware, IT time), hidden costs (manual workarounds, dual data entry, reporting workarounds, staff time spent compensating for system limitations), and opportunity costs (customers you can\'t serve, integrations you can\'t build, capabilities your competitors have that you don\'t). Most businesses only see the first layer. Adding the second and third typically doubles or triples the number.' },
        },
        {
          '@type': 'Question',
          name: 'When should a decorated goods business replace its legacy ERP?',
          acceptedAnswer: { '@type': 'Answer', text: 'Replace when: the workaround cost exceeds the replacement cost over a 3-year horizon; the system is preventing you from serving a customer segment or offering a capability you need commercially; the vendor has stopped actively developing the product; or the security and compliance risk of continuing is unacceptable. Don\'t replace because it\'s old, or because a vendor has told you it\'s time. Replace because the business case is clear.' },
        },
        {
          '@type': 'Question',
          name: 'What is the risk of delaying a legacy system replacement?',
          acceptedAnswer: { '@type': 'Answer', text: 'The main risks are: workaround costs continuing to compound; increasing difficulty finding support resources familiar with older systems; security vulnerabilities that aren\'t being patched; and a growing gap between your capabilities and your competitors\'. The longer a replacement is deferred, the more embedded the workarounds become and the more complex the eventual migration.' },
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
            The Hidden Cost of Running Legacy Systems
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            That system you've been meaning to replace for five years is costing you more than the licence fee. Most of the cost is invisible — until you add it up.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>By Craig Blackman</span>
            <span>·</span>
            <span>June 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <p className="text-[#023047]/80 leading-relaxed mb-6 text-lg italic">
              Every decorated goods business I've worked with has at least one system they've been "meaning to replace." Sometimes it's the ERP. Sometimes it's the website. Sometimes it's a production management tool that was built when the business was a quarter of its current size. And the reason it hasn't been replaced is always the same: the known cost of replacement feels higher than the pain of staying put.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              The problem with that calculation is that most of the cost of staying put is invisible. You see the licence fee and the support contract. You don't see the hours your team spends compensating for what the system can't do.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Direct Costs</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The direct costs of a legacy system are the ones that appear on invoices: annual licence fee, support contract, hardware maintenance, and IT time spent keeping the system running. These are visible and usually easy to quantify.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              What's less visible is that legacy system support costs tend to increase over time, not decrease. As fewer providers support older systems, the cost of specialist support rises. Hardware that runs an old on-premise system eventually needs replacing — and may require significant work to get the legacy application running on newer infrastructure.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Hidden Workaround Costs</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This is where most of the real cost sits. A legacy system doesn't do something the business needs, so the team builds a workaround. The workaround becomes the process. Nobody questions it because it's "how we do things here." The cost never appears on an invoice.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Common workarounds I find in decorated goods businesses:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li><strong>Manual data rekeying.</strong> Orders taken on one system, manually entered into another. Purchase orders raised in the ERP, manually entered into the supplier portal. Invoices received electronically, manually typed into the accounts system. Each rekey takes time and introduces error risk.</li>
              <li><strong>Spreadsheet bridges.</strong> A spreadsheet that sits between two systems that don't talk to each other. Someone updates it daily. When that person is on holiday, it doesn't get updated, and both systems diverge.</li>
              <li><strong>Reporting workarounds.</strong> The ERP can't produce the report that management needs, so someone exports the data monthly and builds the report in Excel. It takes 4 hours. It's wrong sometimes. Nobody knows when.</li>
              <li><strong>Dual approval processes.</strong> The system doesn't enforce the approval process, so it's enforced via email. The email chain is the audit trail. Tracking down a historical approval takes 30 minutes of inbox searching.</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              To quantify the workaround cost, ask this: how many hours per week does your team spend doing something that should be automatic? Put a value on that time. Multiply by 52. That number is often larger than the cost of replacing the system.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Opportunity Costs</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Opportunity costs are the hardest to quantify but often the largest. They're the things you can't do because the system won't support them.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Examples:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li>You can't offer a B2B portal because the ERP doesn't support the integration required</li>
              <li>You can't take on a corporate account that requires EDI connectivity</li>
              <li>You can't onboard a wholesale supplier because the integration isn't possible</li>
              <li>You can't offer real-time order tracking to customers because the data isn't accessible</li>
              <li>You can't make quick pricing decisions because the margin analysis takes a day to produce</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              None of those appear on a balance sheet as a legacy system cost. But each one represents revenue that's going somewhere else.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Decision Framework: Replace, Defer, or Tolerate</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Not every legacy system needs replacing immediately. The decision should be made against a clear framework:
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              <strong>Replace now</strong> if: the workaround cost over 3 years exceeds the replacement cost; the system is preventing a commercially significant capability; the security or compliance risk is unacceptable; or the vendor has stopped developing the product.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              <strong>Defer</strong> if: the workaround cost is quantified and manageable; a replacement project is planned and scoped for a defined future date; and there is a clear owner of the deferral decision who will review it at the agreed point.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              <strong>Tolerate</strong> if: the system functions adequately for its specific scope; workarounds are minimal; and the cost of replacement significantly exceeds the cost of continuing for the foreseeable planning horizon.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The mistake is making these decisions without doing the cost calculation. Most businesses tolerate legacy systems by default rather than by decision. The difference matters — because a decision to tolerate includes a review date and a cost cap. Default tolerance has neither.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Common Questions</h2>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How do you calculate the true cost of a legacy system?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Three layers: direct costs (licence, support, hardware), hidden workaround costs (staff time compensating for what the system can't do), and opportunity costs (revenue and capability you can't access). Most businesses only see the first layer. The second and third typically double the number.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">When should you replace a legacy ERP?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              When the workaround cost over 3 years exceeds the replacement cost, when the system is blocking a commercial capability you need, or when the security risk is unacceptable. Don't replace because it's old — replace because the business case is clear.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What happens if you keep delaying replacement?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Workaround costs compound. Support resources become harder to find. Workarounds become more embedded and harder to remove. The eventual migration becomes more complex. Delay has a cost — it's just deferred rather than immediate.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">The decision to replace, defer, or tolerate should be made deliberately — not by default.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                A Clarity Audit calculates the real cost of your current systems, maps the workarounds that have become invisible, and gives you a clear recommendation with the numbers to support it.
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
