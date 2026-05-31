import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'When IT Support Is the Problem | Decoded Ops',
  description: 'For many decorated goods businesses, the IT support relationship is actively holding them back. Here is what good IT support looks like — and when it is time to change provider.',
  alternates: { canonical: '/blog/when-it-support-is-the-problem' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-06-10T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Technology',
    title: 'When IT Support Is the Problem',
    description: 'For many decorated goods businesses, the IT support relationship is actively holding them back. Here is what good IT support looks like and when to change.',
    url: 'https://decodedops.co.uk/blog/when-it-support-is-the-problem',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When IT Support Is the Problem',
    description: 'For many decorated goods businesses, the IT support relationship is actively holding them back. Here is what to look for and when to change.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'When IT Support Is the Problem',
      datePublished: '2026-06-10T00:00:00Z',
      dateModified: '2026-06-10T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/when-it-support-is-the-problem',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/when-it-support-is-the-problem',
      description: 'How to identify when your IT support provider is the constraint — and the questions to ask when evaluating whether to stay or switch.',
      wordCount: 1300,
      articleSection: 'Technology',
      keywords: 'IT support small business, managed IT service, IT support evaluation, IT support decorated goods, SME IT support',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What should good IT support look like for a decorated goods business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Good IT support understands your business software — not just generic Windows and Office, but the ERP, B2B portal, and any production management tools you run. It is proactive rather than reactive: identifying risks before they cause downtime rather than showing up after. Response times should be defined in writing, not vague. And the billing should be predictable — a fixed monthly fee rather than per-hour charges that incentivise slow resolution.' },
        },
        {
          '@type': 'Question',
          name: 'What are the signs your IT support is holding your business back?',
          acceptedAnswer: { '@type': 'Answer', text: 'The clearest signs are: they don\'t support your core business software; they block integrations or new tools on the grounds of security without explaining why; their response time to critical issues is measured in hours rather than minutes; you\'ve been told your hardware is fine when it clearly isn\'t; and they are billing you for time spent on problems that recur because the root cause isn\'t being fixed.' },
        },
        {
          '@type': 'Question',
          name: 'How should you switch IT support providers without disruption?',
          acceptedAnswer: { '@type': 'Answer', text: 'The key is having a transition plan that documents your current IT estate before the handover — all hardware, software licences, credentials, network configuration, and backup arrangements. Without documentation, the new provider inherits a black box. A good incoming provider will insist on a discovery process before taking over. If they don\'t ask for it, that\'s a warning sign.' },
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
            When IT Support Is the Problem
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            Your IT support company is meant to keep things running. For many decorated goods businesses, it's doing the opposite.
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
              I've walked into decorated goods businesses where the IT support relationship was the single biggest constraint on what the business could do. Not the ERP. Not the staff. The IT support company — a provider that didn't understand the software, blocked integrations for vague reasons, took days to respond to critical issues, and billed hourly for problems that kept recurring because the root cause was never fixed.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              The owner had been with them for years. The relationship felt too embedded to change. And so the business carried on, working around the IT support rather than with it.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Warning Signs</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The clearest indicators that your IT support is a problem rather than a solution:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li><strong>"We don't support that software."</strong> If your IT provider doesn't support your ERP or production management system — the core of how your business operates — that's a fundamental gap. Generic IT support that handles Windows and printers but not the systems you actually depend on isn't fit for purpose.</li>
              <li><strong>"That's a security risk."</strong> Used as a veto without explanation. There are genuine security considerations with integrations and cloud tools. But "security risk" said without specifics is often a way of avoiding work the provider doesn't know how to do.</li>
              <li><strong>Response times measured in days.</strong> If a critical system issue takes more than 2 hours to get a response during business hours, the service level doesn't match the support you need.</li>
              <li><strong>The same problems keep recurring.</strong> An IT support company that fixes symptoms without addressing root causes will bill you indefinitely for the same recurring issues. If you've reported the same problem more than twice, ask why the root cause hasn't been resolved.</li>
              <li><strong>You don't know what you're paying for.</strong> An IT support arrangement you can't explain — multiple invoices, unclear scope, ad hoc billing — is usually a sign the relationship was never scoped properly.</li>
            </ul>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What Good IT Support Looks Like</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Good IT support for a decorated goods business has a few defining characteristics:
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              It understands your stack. Not just Windows, Office, and the router — but your ERP, your B2B portal, your production management tool, and how they connect. When an integration has a problem, your IT support should be able to investigate it. If they can't, they shouldn't be your first call for systems issues.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              It's proactive. Monitoring that flags problems before they cause downtime is standard in a good managed IT service. You shouldn't be calling your IT provider because something has already broken — they should be calling you to let you know there's a risk before it materialises.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Response times are defined and contractual. Critical issue (business is down): 30-minute response, same-day resolution. Standard issue: 4-hour response, next business day resolution. These should be in writing and consistently delivered.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Pricing is predictable. A fixed monthly fee for a defined scope of support means you know what you're spending. Per-hour billing creates a perverse incentive for slow resolution and discourages you from calling when you should.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Evaluating Your Current Provider</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Before deciding to change, answer these questions about your current provider:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li>Do they support all the business-critical software you run — including the ERP and any specialist tools?</li>
              <li>Have they proactively identified and fixed a risk in the last 12 months, or do you only hear from them when something is already broken?</li>
              <li>What was the last critical issue, and how long did it take to resolve from the moment you called?</li>
              <li>Have you reported the same problem more than twice in the last year?</li>
              <li>Can you describe, clearly, what you're paying each month and what that covers?</li>
            </ol>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If more than two of these produce unsatisfactory answers, the relationship is worth reviewing.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Switching Without Disruption</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The main reason businesses don't switch IT support providers is fear of the transition. The fear is understandable. A poorly managed handover can cause disruption. A well-managed handover almost never does.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The key is documentation. Before any handover, you need a complete IT estate document: all hardware, all software licences, all credentials (stored securely), network configuration, backup arrangements, and any vendor contracts. Without this, the new provider inherits a black box and spends their first months discovering what's there rather than improving it.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A good incoming provider will insist on a discovery process before taking over the relationship. They want to know what they're taking on. If they don't ask for it — if they're willing to take over without understanding the estate — that's a warning sign about how they operate.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The outgoing provider should cooperate with the handover. Most MSA or IT support contracts include an obligation to cooperate. If yours doesn't, or if your current provider is obstructive during the transition, that tells you something about how they've been operating throughout the relationship.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Common Questions</h2>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What should good IT support look like?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              It understands your business software, is proactive rather than reactive, delivers defined response times contractually, and charges a predictable fixed monthly fee. If any of those four aren't true for your current provider, the relationship is worth reviewing.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What are the signs your IT support is holding you back?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              They don't support your core business software. They block integrations without explanation. Response to critical issues takes hours. The same problems keep recurring. You don't know what you're paying for each month.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How do you switch without disruption?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Document your full IT estate before the handover: hardware, software, credentials, network, backups. A good incoming provider will insist on a discovery process. A clean handover document makes the transition almost entirely risk-free.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">IT support issues don't just cost you money — they cap what your business can do.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                A Clarity Audit includes an assessment of your current IT environment and support arrangements, identifying where the infrastructure is the constraint and what needs to change.
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
