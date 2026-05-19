import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'What Happens When Your Systems Go Down? Build Your Recovery Plan | Decoded Ops',
  description: "Most small print and decoration businesses have no disaster recovery plan. Here's what a DRP data recovery plan needs to cover — before the crisis, not during it.",
  alternates: { canonical: '/blog/what-happens-when-your-systems-go-down' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-06-08T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Operations',
    title: 'What Happens When Your Systems Go Down? Build Your Recovery Plan',
    description: "Most small print and decoration businesses have no disaster recovery plan. Here's what a DRP data recovery plan needs to cover — before the crisis, not during it.",
    url: 'https://decodedops.co.uk/blog/what-happens-when-your-systems-go-down',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Happens When Your Systems Go Down? Build Your Recovery Plan',
    description: "Most small print and decoration businesses have no disaster recovery plan. Here's what a DRP data recovery plan needs to cover — before the crisis, not during it.",
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'What Happens When Your Systems Go Down',
      datePublished: '2026-06-08T00:00:00Z',
      dateModified: '2026-06-08T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/what-happens-when-your-systems-go-down',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/what-happens-when-your-systems-go-down',
      description: 'Most businesses don\'t have a disaster recovery plan. Here\'s what happens when your systems go down — and what to do before they do.',
      wordCount: 1500,
      articleSection: 'Operations',
      keywords: 'disaster recovery, system outage, business continuity, IT backup, operational resilience, print business',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long can my business afford to be without its systems?',
          acceptedAnswer: { '@type': 'Answer', text: 'For most print and embroidery businesses, the answer is measured in hours, not days. Every hour of downtime means lost orders, halted production, and missed despatch deadlines that compound quickly.' },
        },
        {
          '@type': 'Question',
          name: 'What systems should I prioritise in a disaster recovery plan?',
          acceptedAnswer: { '@type': 'Answer', text: 'Order management, production scheduling, and despatch are typically the most critical. But the right answer depends on your specific business — which is why a proper assessment matters before you write the plan.' },
        },
        {
          '@type': 'Question',
          name: 'Can cloud software protect me from downtime?',
          acceptedAnswer: { '@type': 'Answer', text: 'Cloud reduces some risks but introduces others — internet dependency, provider outages, and multi-system recovery complexity. Cloud is not a disaster recovery plan.' },
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
            What Happens When
            <span className="text-[#219EBC]"> Your Systems Go Down</span>
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            It happens on a Tuesday morning. You arrive, make coffee, sit down at your desk — and nothing works. Server down. Hosting gone. Ransomware. Whatever the cause, the result is the same: your business has stopped.
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

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Tuesday Morning Scenario</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Your phone rings at 8:47am. It's your production manager. "The system's down. I can't access orders. Nobody can log in. What do we do?"
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You call your IT support. They say they'll look into it. An hour passes. Then two. By 11am you're asking your team to write down orders on paper and figure out what's already in production from memory.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              By 3pm you're calling customers to explain that their orders will be delayed. By 5pm you're calculating what this day has cost you — and realising you don't have a clear answer.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This scenario plays out in businesses like yours every week. And most of them don't have a plan for it.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Cost of Not Being Prepared</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              When I ask business owners how much a day of downtime would cost, they usually underestimate by a factor of three. Here's what's actually lost:
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Orders You Can't Process</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Every order that comes in while your systems are down either doesn't get captured or has to be manually re-entered later. Some will be lost entirely. Customers who don't get order confirmations will call. Customers who don't get responses will buy elsewhere.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Production That Stops</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Your production team can't work without orders, specs, and artwork. Even if you can manually re-create some information, the delay compounds across every job in progress. Despatch deadlines are missed. Overtime is required to catch up.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Data You Can't Recover</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If the outage involves data loss — corrupted database, failed backup, ransomware — the cost becomes permanent. Order history, customer records, artwork files, pricing structures. Some of that data cannot be recreated.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Reputation You Can't Rebuild Quickly</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Your customers don't care about your IT problems. They care that their orders didn't arrive. A significant outage can damage relationships that took years to build.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Why Most Businesses Don't Have a Plan</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              I've asked dozens of business owners why they don't have a disaster recovery plan. The answers are almost always the same:
            </p>
            <ul className="space-y-3 my-6 pl-6 text-[#023047]/80">
              <li>"It won't happen to us" — because it hasn't happened yet</li>
              <li>"Our hosting provider handles that" — they don't, not in the way you need</li>
              <li>"We don't have time to write a plan" — which is exactly why you need one</li>
              <li>"We'll figure it out when it happens" — you will, but it will cost ten times more than planning in advance</li>
            </ul>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What a Good DR Plan Looks Like</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A disaster recovery plan for a small or medium business doesn't need to be a 50-page document. It needs to answer four questions clearly:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li><strong>What systems do we protect first?</strong> Not every system needs instant recovery. Prioritise based on business impact.</li>
              <li><strong>How fast does each system need to come back?</strong> Your recovery time objective (RTO). Hours, not days, for critical systems.</li>
              <li><strong>How recent does the recovered data need to be?</strong> Your recovery point objective (RPO). Can you lose an hour of data? A day? A week?</li>
              <li><strong>Who does what when it happens?</strong> Clear roles. No ambiguity. Everyone knows their job.</li>
            </ol>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              And one more thing: <strong>test it.</strong> A DR plan that has never been tested is a wish, not a plan. Schedule a test day. See what breaks. Fix it. Test again.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What You Can Do Today</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You don't need a full audit to start improving your resilience. Here are three things you can do this week:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li><strong>Find your backups.</strong> Do you know where your backups are stored? When they last ran? Whether they can actually be restored? Find out. Today.</li>
              <li><strong>Identify your critical path.</strong> What's the one system you cannot operate without for more than a few hours? That's your priority.</li>
              <li><strong>Write down the recovery steps.</strong> Who do you call when the system goes down? What do they need access to? Write it down and put it somewhere accessible even when the network is down.</li>
            </ol>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              These three steps will put you ahead of most businesses in your sector. A full disaster recovery plan — tailored to your technology stack, your business model, and your risk tolerance — is what comes next.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Worried about downtime?</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                I can assess your current technology stack and recovery capabilities in a single day. You'll get a practical DR plan with clear priorities, realistic recovery times, and a test schedule that proves it works.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
