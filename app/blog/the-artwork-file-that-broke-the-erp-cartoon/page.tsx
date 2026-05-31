import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'The Artwork File That Broke the ERP | Decoded Ops',
  description: 'A low-res JPEG. An order in the system with no artwork attached. Production stops. It happens every day in decoration businesses. Here is what a proper artwork-to-production workflow looks like.',
  alternates: { canonical: '/blog/the-artwork-file-that-broke-the-erp-cartoon' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-06-05T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Workflow',
    title: 'The Artwork File That Broke the ERP',
    description: 'A low-res JPEG. An order in the system with no artwork attached. Production stops. It happens every day in decoration businesses. Here is what a proper artwork-to-production workflow looks like.',
    url: 'https://decodedops.co.uk/blog/the-artwork-file-that-broke-the-erp-cartoon',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Artwork File That Broke the ERP',
    description: 'A low-res JPEG. An order in the system with no artwork attached. Production stops. It happens every day in decoration businesses.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'The Artwork File That Broke the ERP',
      datePublished: '2026-06-05T00:00:00Z',
      dateModified: '2026-06-05T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/the-artwork-file-that-broke-the-erp-cartoon',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/the-artwork-file-that-broke-the-erp-cartoon',
      description: 'Why the artwork file is the most disruptive unresolved problem in decoration production — and what a proper artwork-to-production workflow actually looks like.',
      wordCount: 1300,
      articleSection: 'Workflow',
      keywords: 'artwork file management, artwork to production workflow, decoration ERP artwork, garment decoration workflow, artwork approval production',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do decoration businesses struggle to attach artwork to orders in their ERP?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most ERP systems weren\'t built with artwork management in mind. They handle product codes, quantities, and prices well. Artwork — which might be a 50MB vector file that needs to be linked to a specific customer, design version, and position on the garment — is typically handled through email, shared folders, or a separate system. The result is artwork that exists somewhere, but isn\'t reliably connected to the order the production team is working from.' },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of artwork not being attached to an order when it reaches production?',
          acceptedAnswer: { '@type': 'Answer', text: 'Typically 2–3 hours of production time per incident. The production team stops the job, chases the sales rep or account manager who placed the order, waits for the artwork to arrive, and then needs to re-slot the job into the production schedule. If the artwork needs rework (low resolution, wrong format), that extends the delay. Across a business doing 50 orders per week, even occasional artwork failures add up to a significant overhead.' },
        },
        {
          '@type': 'Question',
          name: 'What does a proper artwork-to-production workflow look like?',
          acceptedAnswer: { '@type': 'Answer', text: 'A proper workflow has one rule: no order progresses to production without approved artwork attached. The order management system enforces this at the point of entry — if artwork isn\'t uploaded and approved, the order stays in a pre-production queue. Production only ever works from orders that have cleared the artwork check. The production team never needs to chase artwork because they never receive an order without it.' },
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
            The Artwork File That Broke the ERP
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            A low-res JPEG. An order with no artwork attached. Production stops. This happens every day in decoration businesses — and it doesn't have to.
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

      {/* CONTENT */}
      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <p className="text-[#023047]/80 leading-relaxed mb-6 text-lg italic">
              A sales rep takes an order. The customer sends a logo over email — a JPEG pulled from their website, 72dpi, 200 pixels wide. The rep enters the order into the system. The artwork field either doesn't exist, or the rep attaches the JPEG without checking whether it's usable. The order reaches production. Production picks it up, opens the file, and immediately knows there's a problem.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              Production stops. Someone chases the rep. The rep chases the customer. The customer doesn't have a vector file. An hour and a half later, the artwork is still not sorted, the job is not in progress, and two other orders are stacking up behind it.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              This scenario plays out in decorated goods businesses every single day. It's so common that most teams have accepted it as part of the job. It isn't. It's a process failure — and it's one of the most fixable problems in the sector.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Why It Keeps Happening</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The artwork problem persists for two reasons. First, most ERP and order management systems weren't built with artwork in mind. They handle SKUs, quantities, prices, and customer records well. Artwork — a file that might be 50MB, needs to be version-controlled, linked to a specific design and position, and approved before production — is an afterthought in most systems. It either goes into a shared folder somewhere, gets emailed around, or gets attached as an unvalidated file that nobody checks until production opens it.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Second, the failure point isn't visible to the person who causes it. The sales rep who attaches the wrong file gets no immediate feedback. The problem surfaces two days later when production picks up the order. By then, the rep has moved on to the next thing and the production team are the ones dealing with the fallout.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What It Actually Costs</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Each artwork failure typically costs 2–3 hours of production time. That's the time to identify the problem, trace who owns the artwork, contact the sales rep, wait for them to contact the customer, receive the correct file, check it's usable, and re-slot the job into the production schedule.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              For a business handling 50 orders per week, even a 10% artwork failure rate means 5 jobs per week hitting this problem. At 2.5 hours each, that's 12.5 hours of production disruption per week — before you account for the impact on the jobs that get delayed as a result.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The commercial cost adds to it. Jobs that are delayed because artwork isn't ready miss delivery dates. Customers who experience this once might forgive it. Customers who experience it repeatedly find another supplier.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What a Proper Artwork Workflow Looks Like</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The fix is a rule with teeth: no order progresses to production without approved artwork attached.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              That rule needs to be enforced by the system, not by a person checking manually. In a properly configured workflow:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li><strong>Order entry captures artwork requirements at the point of entry.</strong> The order can't be saved without specifying what artwork is needed, where it's going on the garment, and what format is required.</li>
              <li><strong>Artwork is attached and validated before the order moves status.</strong> Not attached as a file — validated as meeting the production spec. Vector format, minimum resolution, correct colour profile if required.</li>
              <li><strong>Customer sign-off is recorded against the order.</strong> The proof approval is logged in the system, not held in someone's email inbox.</li>
              <li><strong>Production only receives orders that have cleared the artwork check.</strong> The production queue contains only orders where all pre-production requirements are met. No exceptions.</li>
            </ol>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Under this model, the production team never chases artwork. They never receive an order they can't act on. The pre-production team deal with artwork issues before the order reaches production, which is the right place to deal with them.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Getting There: The Implementation Gap</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Most decoration businesses know this is the right approach. The gap is implementation. Either the ERP doesn't support this kind of workflow, or the process isn't configured correctly, or there's a cultural problem where sales reps push orders through regardless because production is seen as "their problem."
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              All three are fixable. If the ERP doesn't support artwork management, there are specialist production management tools that do — and they can sit alongside the ERP rather than replacing it. If the process isn't configured, that's a configuration project. If it's a cultural problem, it's a management decision about what the minimum standard for an order entry actually is.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              None of these fixes require a new ERP. They require someone to decide that the artwork problem is worth solving — and then commit to the process change required to solve it.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Common Questions</h2>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">Why do decoration businesses struggle to attach artwork to orders in their ERP?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Most ERPs weren't built with artwork management in mind. Artwork files are typically handled through email or shared folders, disconnected from the order. The result is artwork that exists somewhere but isn't reliably linked to the specific order production is working from.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What does it cost when artwork isn't ready when an order reaches production?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Typically 2–3 hours of production time per incident. Across a business doing 50 orders per week with a 10% failure rate, that's 12+ hours of production disruption weekly — before the impact on delayed jobs is counted.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What does a proper artwork-to-production workflow look like?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              One rule: no order progresses to production without approved artwork attached. The system enforces this — orders without validated, signed-off artwork stay in pre-production. Production only ever receives orders they can act on immediately.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Artwork chaos is a symptom of a workflow that was never properly designed.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                A Clarity Audit maps your order-to-production process and identifies the gaps — including where artwork is the bottleneck and what it would take to fix it.
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
