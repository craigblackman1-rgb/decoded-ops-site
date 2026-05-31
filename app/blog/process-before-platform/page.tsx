import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Process Before Platform | Decoded Ops',
  description: 'The most expensive mistake in decorated goods: buying a platform before understanding your processes. Why new software doesn\'t fix broken operations — and what to do instead.',
  alternates: { canonical: '/blog/process-before-platform' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-06-17T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Operations',
    title: 'Process Before Platform',
    description: 'The most expensive mistake in decorated goods: buying a platform before understanding your processes. New software doesn\'t fix broken operations.',
    url: 'https://decodedops.co.uk/blog/process-before-platform',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Before Platform',
    description: 'New software doesn\'t fix broken operations. It digitises the chaos at higher speed.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Process Before Platform',
      datePublished: '2026-06-17T00:00:00Z',
      dateModified: '2026-06-17T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/process-before-platform',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/process-before-platform',
      description: 'Why decorated goods businesses that buy software before fixing their processes consistently get disappointing results — and what to do instead.',
      wordCount: 1350,
      articleSection: 'Operations',
      keywords: 'process improvement small business, process before technology, business process mapping, ERP implementation failure, operations improvement decorated goods',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do ERP and software implementations fail in decorated goods businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'The most common cause is implementing software onto broken processes. The new system automates what was already happening — including the inefficiencies, the workarounds, and the unclear ownership of tasks. The implementation adds cost and disruption but doesn\'t fix the underlying problems because those problems are in the process, not the software.' },
        },
        {
          '@type': 'Question',
          name: 'How do you map your actual business processes before a software implementation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start by following an order from the moment it arrives to the moment it\'s despatched — physically, if possible. Note every step, every decision point, every person involved, and every system or tool used. Then do it again for a problem order — one that went wrong or took longer than it should. The gap between the two describes your actual process, not the one you think you have.' },
        },
        {
          '@type': 'Question',
          name: 'When do you actually need new software in a decorated goods business?',
          acceptedAnswer: { '@type': 'Answer', text: 'When your processes are clear, documented, and consistently followed — and the system you have can\'t support those processes at the scale you need. New software should automate a good process, not replace a bad one. If the processes aren\'t clear first, new software doesn\'t solve the problem. It makes the problem run faster.' },
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
            Process Before Platform
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            The single most expensive mistake in this sector: buying a platform before understanding the processes it's supposed to support.
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
              I've worked with decorated goods businesses that spent between £50,000 and £500,000 on new ERP systems. They spent 12 to 18 months implementing. They went live. And in most cases, nothing significantly improved. Sometimes it got worse.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              The reason is always the same. They bought the platform before they understood the processes. The new software arrived on top of broken operations and digitised them. The mess just moved faster.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What Software Actually Does</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Software automates and accelerates. That's its value. But it automates and accelerates whatever is already happening — including the inefficiencies, the workarounds, the unclear handovers, and the processes that depend on one person who knows how things actually work.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If you have a broken order-to-production process, a new ERP doesn't fix the broken process. It puts it into a more expensive system. The order still gets lost between sales and production — it just gets lost in a different place. The artwork still doesn't reach production with the order — it just doesn't reach production faster.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Software is a lever. What it amplifies depends entirely on what's underneath it.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">How to Know If Your Processes Are Ready</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The test is simple: can you describe your order-to-despatch process, step by step, and have three different people in the business independently describe the same process in the same way?
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If the answer is no — if different people describe different steps, different handover points, different rules — then the process isn't clear. And if the process isn't clear to the people doing it, implementing it into a new system won't make it clear. It'll implement one version of it and create conflict with everyone who thought the process was different.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The process has to be agreed before the system is configured. Not during implementation. Not after go-live. Before.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Mapping Your Actual Process</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The most useful thing to do before evaluating any new platform is map how work actually flows in your business — not how you think it flows, and not how the manual says it should flow.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The method is straightforward. Follow a single order from the moment it arrives to the moment it's despatched. Write down every step. Note every person involved. Note every tool or system used at each step. Note every decision point and who makes it. Note where the order waits — and why.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Then follow a problem order — one that went wrong or took longer than it should. Map the same things. The gap between the two maps describes your actual process: what works, where it breaks, and why.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Most businesses find, when they do this exercise properly, that they have three to five significant process failures that are costing them time and money every week. Most of those failures can be addressed without new software. Fixing them first makes the subsequent software implementation — if one is needed — significantly more likely to succeed.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Three Bottleneck Rule</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              When you've mapped your processes, you'll typically find more problems than you can fix at once. The prioritisation framework I use is simple: identify the three bottlenecks that are costing you the most time, money, or customer satisfaction. Fix those first. Don't start on the rest until you've fixed the three.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The reason is resource and attention. Trying to fix ten things at once means nothing gets fixed properly. Fixing three things completely and verifiably gives you a better operation and momentum for the next three.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Once the top three are fixed and the processes are stable, the question of whether new software is needed becomes much clearer — because you now understand what the software needs to do, and you can assess whether what you have can support the improved process.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">When You Actually Need New Software</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You need new software when your processes are clear, documented, and consistently followed — and the system you have genuinely can't support those processes at the scale or in the way you need.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Not when the system is old. Not when a vendor tells you it's time to upgrade. Not because a competitor has a new system. When the process is clear and the current system is a genuine constraint.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              At that point, buying new software makes sense — because you know what it needs to do, you can configure it correctly from the start, and you can measure whether it's actually doing what you bought it for.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Common Questions</h2>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">Why do ERP implementations fail in decoration businesses?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The most common cause is implementing software onto broken processes. The new system automates what was already happening — including the inefficiencies. The implementation adds cost and disruption but doesn't fix the underlying problems because those are in the process, not the software.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How do you map your actual business processes?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Follow an order from arrival to despatch — physically if possible. Note every step, decision, person, and tool. Then follow a problem order. The gap between the two describes your real process: where it works and where it breaks.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">When do you actually need new software?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              When your processes are clear, documented, and consistently followed — and the current system is a genuine constraint. Not because it's old, not because a vendor says so. When the process is solid and the system can't keep up.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Process clarity is the foundation. Without it, no platform delivers what it promises.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                A Clarity Audit maps your actual processes, identifies the three changes that would make the biggest difference, and tells you clearly whether new software is the answer — or whether there's groundwork to do first.
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
