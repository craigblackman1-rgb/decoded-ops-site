import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'The Real Cost of a Failed ERP Project (And How to Avoid It) | Decoded Ops',
  description: 'A real case study: £150k spent, 18 months wasted, and a system that still didn\'t work. Here\'s the full cost breakdown — and what an upfront audit would have prevented.',
  alternates: { canonical: '/blog/the-real-cost-of-a-failed-erp-project' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-11T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'ERP',
    title: 'The Real Cost of a Failed ERP Project (And How to Avoid It) | Decoded Ops',
    description: 'A real case study: £150k spent, 18 months wasted, and a system that still didn\'t work. Here\'s the full cost breakdown — and what an upfront audit would have prevented.',
    url: 'https://decodedops.co.uk/blog/the-real-cost-of-a-failed-erp-project',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Real Cost of a Failed ERP Project (And How to Avoid It) | Decoded Ops',
    description: 'A real case study: £150k spent, 18 months wasted, and a system that still didn\'t work. Here\'s the full cost breakdown — and what an upfront audit would have prevented.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'The Real Cost of a Failed ERP Project (Print & Embroidery)',
      datePublished: '2026-05-11T00:00:00Z',
      dateModified: '2026-05-11T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/the-real-cost-of-a-failed-erp-project',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/the-real-cost-of-a-failed-erp-project',
      description: 'A real case study: £150k spent, 18 months wasted, and a system that still didn\'t work. Here\'s the full cost breakdown — and what an upfront audit would have prevented.',
      wordCount: 1700,
      articleSection: 'ERP',
      keywords: 'cost of failed erp project, erp project failure cost, failed erp implementation cost, erp write-off, ERP recovery cost',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a failed ERP implementation actually cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'One real example: £150k+ in direct costs, 18+ months to abandon, and approximately 125 hours per month of internal staff time wasted. The cost of the software is often the smallest line item.' },
        },
        {
          '@type': 'Question',
          name: 'Why do ERP implementations fail in print and embroidery businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Usually because the implementation was designed around the software\'s features rather than the business\'s actual workflows. No independent vendor brief, no proper requirements specification, no one accountable for outcomes.' },
        },
        {
          '@type': 'Question',
          name: 'How can I avoid an ERP implementation failure?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start with an independent operational and technology audit before you talk to any vendor. Write a vendor brief based on your actual business, not a demo. And have someone independent overseeing the implementation.' },
        },
        {
          '@type': 'Question',
          name: 'How much does ERP implementation cost for a small business?',
          acceptedAnswer: { '@type': 'Answer', text: 'For a small business in the print or embroidery sector, an ERP implementation typically costs £30,000–£120,000 in total, including software licences, implementation fees, internal staff time, and training. Without independent oversight, cost overruns of 30–60% are common. The implementation I describe in this article reached £250,000 in total cost against an original estimate of around £80,000.' },
        },
        {
          '@type': 'Question',
          name: 'Should I hire an ERP implementation consultant for a small manufacturing business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — particularly if you are selecting ERP without previous experience in the sector, or if the implementation involves connecting multiple systems (eCommerce, production, B2B ordering). An independent ERP implementation consultant writes the brief before you approach vendors, holds the vendor to account during delivery, and signs off milestones before payments are released. Against a £100,000+ implementation, the cost of independent oversight is modest.' },
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
            The Real Cost of a <span className="text-[#219EBC]">Failed ERP Project</span>
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            How much does a failed ERP implementation actually cost? More than the software. More than the implementation fees. And in most cases, far more than the upfront audit that would have prevented it.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>By Craig Blackman</span>
            <span>·</span>
            <span>May 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>
        </div>
      </section>

      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Project Nobody Talks About</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              I worked with a business that had spent 18 months and over £150,000 on an ERP implementation. They had the software licences, the customisations, the integrations — and a system that nobody in the business could actually use.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The production team had reverted to spreadsheets within three weeks of go-live. The finance team were running parallel manual processes because they didn't trust the data. The MD was spending 15 hours a week in operational meetings that should have been handled by the system.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              That £150,000 was written off. The system was eventually decommissioned and replaced. The total cost — software, implementation, internal time, lost productivity, and the replacement project — was closer to £250,000.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The frustrating part? A £10,000 operational audit before they selected the software would have identified every problem that later killed the project.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Why ERP implementation failure is so common in this sector</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              ERP implementation failure in the print and embroidery sector follows a predictable pattern. The same five mistakes appear across almost every failed or struggling implementation. Manufacturing ERP software is not inherently unreliable — but it is almost always implemented without the right brief, the right oversight, or the right internal ownership.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Real Cost Breakdown</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              When an ERP project fails, the cost is rarely just the software licence. Here's what the full picture looks like:
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Software Licences: £15,000–£50,000+</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The licences are usually the smallest cost. But they're the most visible, which is why they get the most attention. Most businesses focus on negotiating the licence fee down, while the real costs are accumulating elsewhere.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Implementation: £20,000–£80,000</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Implementation fees cover configuration, data migration, training, and go-live support. The problem is that these are estimated based on the vendor's standard template — not your actual business. When the template doesn't fit, the costs escalate.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Internal Time: £30,000–£100,000+</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This is the cost that never gets measured. The project manager who spends 20 hours a week on the implementation instead of their day job. The production manager who attends requirement workshops. The finance team who have to run dual processes during transition. In the project I mentioned above, internal time accounted for roughly half the total cost.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Lost Productivity: £20,000–£60,000</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              During and after a failed implementation, productivity drops. Orders take longer to process. Errors increase. The team spend more time working around the system than working in it. This cost continues for months or years after the implementation is abandoned.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Cost of Replacing: £50,000–£150,000</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If the implementation fails completely and you need to start over, you're looking at the entire cost again — plus the damage to team confidence and the reluctance to invest in a second system after the first one failed.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The five patterns behind every ERP implementation failure</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The print, embroidery, and decoration sector is not like manufacturing or distribution. Every order can be different. Personalisation data has to flow from order to production. Artwork approval is part of the workflow. Stock might be blank goods, finished goods, or held for specific customers.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Generic ERP systems are not designed for this. And even sector-specific systems need to be implemented correctly.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The most common failure pattern I see:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li><strong>No independent vendor brief.</strong> The business talks to vendors first, sees demos, and makes a decision based on presentation quality rather than fit.</li>
              <li><strong>Implementation scoped by the vendor.</strong> The vendor scopes what their software does, not what the business needs. Gaps are discovered after go-live.</li>
              <li><strong>No one accountable for outcomes.</strong> The project has a project manager, but nobody whose job depends on the system actually working for the business.</li>
              <li><strong>Employee buy-in assumed, not earned.</strong> The team who will use the system every day were not meaningfully involved in the selection or design.</li>
              <li><strong>Data quality ignored.</strong> The implementation proceeds on the assumption that existing data can be migrated as-is. It can't.</li>
            </ol>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What independent ERP oversight would have prevented</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              In the case I described at the start, an operational audit would have identified:
            </p>
            <ul className="space-y-3 my-6 pl-6 text-[#023047]/80">
              <li>The ERP didn't handle decoration methods the way the production team worked</li>
              <li>The eCommerce integration gap couldn't be bridged by the chosen platform</li>
              <li>The data migration would require months of preparation, not weeks</li>
              <li>The implementation timeline was unrealistic given the business's seasonal peaks</li>
              <li>The training approach assumed digital literacy that didn't exist on the production floor</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Every single one of these was identified after go-live — when fixing them cost ten times what it would have cost to address them before selection.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The 3x Clarity Guarantee</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The Clarity Audit costs between £2,500 and £12,000 depending on the size of your business. It comes with a guarantee: if the report doesn't identify at least three times the fee in recoverable cost or lost revenue, you get a full refund. No conditions. No questions.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Against a £150,000 ERP failure, that £10,000 audit isn't insurance. It's near-certain cost avoidance.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Thinking about a new ERP?</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                Before you talk to vendors, talk to someone who's seen this play out dozens of times. Our <Link href="/transform" className="text-[#219EBC] font-semibold underline underline-offset-2 hover:text-[#FB8500]">ERP implementation programme</Link> is built around exactly this — independent oversight, vendor accountability, and a clean exit if the project isn't tracking. Or start with <Link href="/problems/erp-implementation-failure" className="text-[#219EBC] font-semibold underline underline-offset-2 hover:text-[#FB8500]">why ERP projects fail in decorated goods businesses</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/transform" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  See the ERP implementation programme <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#023047]/20 text-[#023047] font-semibold hover:bg-[#023047]/5 transition-colors">
                  Or book a discovery call
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
