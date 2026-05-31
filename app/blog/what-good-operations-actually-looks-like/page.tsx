import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'What Good Operations Actually Looks Like | Decoded Ops',
  description: 'Most decorated goods business owners have never experienced good operations. They\'ve been firefighting so long that nothing on fire feels like success. Here is what good actually looks like.',
  alternates: { canonical: '/blog/what-good-operations-actually-looks-like' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-06-08T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Operations',
    title: 'What Good Operations Actually Looks Like',
    description: 'Most decorated goods business owners have never experienced good operations. Here is what good actually looks like in a print, embroidery, or workwear business.',
    url: 'https://decodedops.co.uk/blog/what-good-operations-actually-looks-like',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Good Operations Actually Looks Like',
    description: 'Most decorated goods business owners have never experienced good operations. Here is what good actually looks like.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'What Good Operations Actually Looks Like',
      datePublished: '2026-06-08T00:00:00Z',
      dateModified: '2026-06-08T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/what-good-operations-actually-looks-like',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/what-good-operations-actually-looks-like',
      description: 'What good operations actually look like in a decorated goods or workwear business — and why most owners have never experienced it.',
      wordCount: 1300,
      articleSection: 'Operations',
      keywords: 'operations management small business, good business operations, decorated goods operations, workwear business systems, operations improvement',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you know if your business operations are good or just tolerable?',
          acceptedAnswer: { '@type': 'Answer', text: 'The test is whether the business runs to the same standard when you\'re not there. If things slow down, fall through the cracks, or generate customer complaints when the owner is out, the operations are person-dependent rather than system-dependent. Good operations means the processes work consistently regardless of who is running them on a given day.' },
        },
        {
          '@type': 'Question',
          name: 'What does good stock management look like in a decoration business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Stock accuracy within 1% of what the system says, real-time visibility of available stock at the point of order entry, automated reorder triggers that prevent stockouts, and a clear process for managing returned or rejected garments. The team should never need to physically count stock to answer a customer question about availability.' },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to fix bad operations in a decorated goods business?',
          acceptedAnswer: { '@type': 'Answer', text: 'The most significant improvements typically come within 90 days of identifying and addressing the top three operational problems. A full systems and process transformation takes 6–18 months depending on complexity. The first step is understanding where the biggest losses are — which is what a Clarity Audit is designed to provide.' },
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
            What Good Operations Actually Looks Like
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            Most business owners I work with have never experienced good operations. They've been firefighting so long that "nothing's on fire" feels like success.
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
              The owners of decorated goods businesses who come to me with the most serious problems aren't usually aware that the problems are serious. They've been living with them for years. The manual workarounds, the daily firefighting, the "we'll sort that properly when we have time" — it's all become the background noise of running the business. They've normalised the dysfunction.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              So before talking about what's broken and how to fix it, it's worth describing what good operations actually looks like. Not an ideal that requires 18 months and half a million pounds of system investment. Just the functional baseline that a well-run business in this sector achieves.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Orders Flow Without People Pushing Them</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              In a well-run decorated goods business, an order placed on the B2B portal appears in the production queue without anyone manually rekeying it. Stock is reserved automatically. Artwork requirements are captured at the point of order entry. The production team sees what needs to be made and when.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Nobody is copying data from a portal into a spreadsheet. Nobody is emailing the production team to let them know an order has arrived. Nobody is checking whether the stock was available before the system confirmed the order.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If you've been running on manual processes for long enough, this sounds aspirational. It isn't. This is what a properly configured system does. The question is whether yours is configured to do it.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Artwork Is Attached Before It Reaches Production</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Good operations means the production team never receives an order they can't act on. Artwork is validated, approved, and attached to the order as part of the pre-production process. If it isn't, the order doesn't move to production.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This sounds obvious. In most decoration businesses, the reality is that artwork arrives separately — by email, WhatsApp, via a shared folder that half the team knows about — and somebody in production has to find and match it to the order. Sometimes they can. Sometimes they can't. Sometimes they use the wrong version.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Stock Is Accurate</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              When the system says you have 47 large navy polo shirts, you actually have 47 large navy polo shirts. Not 38 because someone picked but didn't book out. Not 52 because a return was received but never booked in.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Stock accuracy within 1% is achievable without a warehouse management system and without a full-time stock controller. It requires a clear process for every stock movement — goods in, goods out, picking, returns, adjustments — and it requires people to follow that process consistently.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The businesses with stock problems almost always have process adherence problems, not system problems. The system already records the transaction; the person isn't recording the transaction in the system.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Team Knows What to Work On</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              In good operations, the production team starts the day knowing what's in the queue, what's due when, and what the priority order is. They don't need to ask a manager. They don't check a whiteboard that may or may not be current. The production schedule is visible, accurate, and maintained.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Management doesn't spend the morning telling people what to do. Management can look at the schedule and see whether the day's work will complete on time — and if it won't, they know which jobs are at risk and why.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">You Can Answer Status Questions in Seconds</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A customer calls to ask where their order is. In good operations, you type the order number and in 10 seconds you can tell them: it's in production, artwork was approved on Tuesday, it's due for despatch Thursday.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              In most businesses I walk into, this question triggers a chain of internal calls and emails. "Let me just check with production." The answer comes back 20 minutes later. Sometimes it's wrong.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Real-time order visibility isn't a luxury for large operations. It's a baseline expectation for any business that wants to retain customers.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Month-End Is Not a Crisis</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              In well-run businesses, month-end reporting is not an event that consumes a week of management time. The numbers are captured throughout the month. The reports generate from the system. The management accounts are available within a few days of month-end close.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If month-end at your business involves a heroic effort from the accounts team to reconcile spreadsheets, chase numbers from different departments, and manually build reports that should exist in the system — that's a sign that your data and processes aren't integrated. It's a symptom worth fixing.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Business Runs Without You</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The real test of good operations is whether the business runs to the same standard when you're not there. If things slow down, fall through the cracks, or generate customer complaints when you're on holiday, the operations are person-dependent. Specifically: they depend on you.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Good operations means the processes work consistently regardless of who is running them on a given day. New staff can be trained against documented processes. Cover arrangements work because the process is clear. The business doesn't need its owner to be present to function well.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This is the difference between owning a business and owning a job. Getting there requires process documentation, system configuration, and time. But the starting point is understanding what "there" looks like — which is why I always begin with a description of the target before working backwards to the plan.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Common Questions</h2>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How do you know if your operations are good or just tolerable?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The test is whether the business runs to the same standard when you're not there. If it doesn't, the operations are person-dependent — specifically dependent on you. That's the clearest sign that the processes need formalising.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What does good stock management look like?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Accuracy within 1%, real-time visibility at the point of order entry, automated reorder triggers, and a clear process for every stock movement. The team should never need to count stock to answer a customer availability question.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How long does it take to fix bad operations?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The most significant improvements come within 90 days of addressing the top three operational problems. A full transformation takes 6–18 months. The first step is understanding where the biggest losses are.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Knowing what good looks like is the start. Understanding the gap between where you are and where you need to be is the work.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                A Clarity Audit maps your current operations against a clear benchmark, identifies the three changes that would make the biggest difference, and gives you a plan that's actionable — not a report that sits on a shelf.
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
