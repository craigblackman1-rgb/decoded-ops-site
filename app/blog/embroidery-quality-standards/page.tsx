import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Embroidery Quality Standards: How to Reduce Rework and Returns | Decoded Ops',
  description: 'Set embroidery quality standards that reduce rework, customer complaints, and returns. Checklist and process guide for decorated goods production managers.',
  alternates: { canonical: '/blog/embroidery-quality-standards' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-28T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Operations',
    title: 'Embroidery Quality Standards: How to Reduce Rework and Returns',
    description: 'Set embroidery quality standards that reduce rework, customer complaints, and returns. Checklist and process guide for decorated goods production managers.',
    url: 'https://decodedops.co.uk/blog/embroidery-quality-standards',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Embroidery Quality Standards: How to Reduce Rework and Returns',
    description: 'Set embroidery quality standards that reduce rework, customer complaints, and returns. Checklist and process guide for decorated goods production managers.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Embroidery Quality Standards: Reducing Rework and Returns',
      datePublished: '2026-05-28T00:00:00Z',
      dateModified: '2026-05-28T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/embroidery-quality-standards',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/embroidery-quality-standards',
      description: 'How to set and enforce embroidery quality standards that reduce rework rates, customer complaints, and returns in decorated goods production.',
      wordCount: 1300,
      articleSection: 'Operations',
      keywords: 'embroidery quality standards, embroidery quality control, embroidery QC process, reducing embroidery rework, decorated goods quality management, embroidery production standards',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the key quality standards for embroidery production?',
          acceptedAnswer: { '@type': 'Answer', text: 'Core embroidery quality standards cover five areas: registration accuracy (placement within a defined tolerance, typically ±2mm), coverage (no visible gaps or base fabric showing through fill areas), thread tension (no loops, puckering, or loose threads on the reverse), trimming (all jump stitches and thread tails cleanly trimmed), and colour accuracy (thread colours matching the approved specification). Each standard should have a defined pass/fail criterion, not a subjective assessment.' },
        },
        {
          '@type': 'Question',
          name: 'What causes embroidery rework and how do I reduce it?',
          acceptedAnswer: { '@type': 'Answer', text: 'The most common causes of embroidery rework are: incorrect digitising (wrong density, missing underlay, poor stitch sequence), machine setup errors (wrong thread colour loaded, incorrect tension), and pre-production approval failures (design approved on wrong fabric or without sew-out test). Most rework is preventable — it happens upstream in the process, not on the machine. Fixing the digitising brief, sew-out approval, and machine setup checklist reduces rework rates more than post-production QC checks alone.' },
        },
        {
          '@type': 'Question',
          name: 'How do I set up a QC process for embroidery production?',
          acceptedAnswer: { '@type': 'Answer', text: 'An effective embroidery QC process has three stages: pre-production (sew-out approval on production fabric before the run), in-production (check first-off piece against approved sew-out, sample check mid-run), and post-production (visual inspection of finished goods before despatch). Define the sampling rate for each stage, the pass/fail criteria, and what action is required on a fail. Document QC results so you can track rework rates over time.' },
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
            Embroidery Quality Standards: Reducing Rework and Returns
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            Undefined quality standards mean every operator decides what &quot;good enough&quot; looks like. That&apos;s where rework comes from.
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

      {/* CONTENT */}
      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <p className="text-[#023047]/80 leading-relaxed mb-6 text-lg italic">
              The cost of embroidery rework isn&apos;t just the garment. It&apos;s the machine time, the operator time, the delayed despatch, and occasionally a customer you don&apos;t see again.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              Most rework is preventable. It comes from inconsistent standards — not inconsistent effort — and it&apos;s fixed by defining what good looks like and building the checks that catch deviation before it reaches despatch.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Five Quality Dimensions for Embroidery</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Embroidery quality can be assessed across five dimensions. Each needs a defined standard — not a general expectation:
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">1. Registration Accuracy</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Is the design placed correctly on the garment? Registration tolerance should be defined: typically ±2mm from the specified placement point. Outside that tolerance is a reject.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Registration errors come from inconsistent hooping. Garments not hooped at the same tension and position will run differently. A hooping guide or template for your most common garment types removes this variable.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">2. Coverage</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Fill areas should have consistent coverage with no gaps showing the base fabric. Gaps indicate under-density in the digitised file, incorrect underlay, or thread tension problems.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Define the acceptance standard: zero visible gaps in fill areas under normal viewing conditions (arm&apos;s length, standard lighting). Any design with visible coverage gaps fails.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">3. Thread Tension</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Correct thread tension shows no bobbin thread on the top surface and no loop or pull on the underside. Tension problems manifest as:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li><strong>Top tension too tight</strong> — bobbin thread visible on the front, puckering around the design</li>
              <li><strong>Top tension too loose</strong> — looping on the front, uneven stitch formation</li>
              <li><strong>Fabric puckering</strong> — the fabric distorted around the design, particularly at fill borders</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">4. Trimming</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              All jump stitches (thread connections between design elements that aren&apos;t cut automatically) and thread tails should be trimmed cleanly. Untrimmed threads are the most visible and most preventable quality failure in embroidery.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If your machine doesn&apos;t have an auto-trim function, build manual trimming into the post-production check. This adds 30–60 seconds per garment but prevents customer complaints.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">5. Colour Accuracy</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Thread colours should match the approved specification. This means maintaining a reference thread chart and checking against it — not just loading the closest spool from stock.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Keep a physical record of the approved thread colours for each customer&apos;s standard designs. Reorders should use the same thread reference, not a visual match on the day.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Three-Stage QC Process</h2>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Stage 1: Pre-Production (Sew-Out Approval)</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Before any production run, the digitised design must be sewn out on the production fabric and approved against the original specification.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The sew-out check verifies all five quality dimensions on the actual production material. Issues found at this stage are fixed in the digitised file before production starts — at zero waste cost.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              New designs must always have a sew-out. Reorders on a different fabric type (even the same garment in a different weight) should also have a sew-out — don&apos;t assume a file that worked on one fabric will work on another.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Stage 2: In-Production Checks</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Two in-production checkpoints:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li><strong>First-off check</strong> — the first garment off the machine on every production run is checked against the approved sew-out before the run continues. This catches machine setup errors before they affect the full batch.</li>
              <li><strong>Mid-run sample</strong> — on runs over 50 pieces, check one piece every 20–25 garments. Machines can drift (tension, thread supply, hooping quality). Mid-run checks catch drift before it affects the whole batch.</li>
            </ol>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Stage 3: Post-Production Inspection</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Before despatch, inspect a sample of finished garments. On batches under 50: check 100%. On batches of 50–200: check at least 20%. On batches over 200: check 10% minimum.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The post-production check should explicitly look for trimming failures, as these are the most likely to be missed in the production flow. A single loose thread tail on a customer&apos;s new workwear order is an avoidable complaint.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Tracking Rework Rates</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You can&apos;t manage what you don&apos;t measure. Start tracking rework events — when a garment fails QC and requires either re-embroidery or replacement.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Record: the failure type (registration, tension, coverage, trimming, colour), the production stage at which it was caught (pre-production, in-production, post-production, customer complaint), and the root cause where identifiable.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Review this data monthly. The top three failure types tell you where to focus process improvement. A rework rate above 2–3% on standard production runs suggests a systematic process problem rather than isolated incidents.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Where Quality Standards Live</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Quality standards are only useful if they&apos;re accessible at the point of use. A document in a filing cabinet doesn&apos;t help an operator on the production floor.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              For each of the five quality dimensions, create a one-page visual reference: what a pass looks like, what a fail looks like, and the acceptance criterion in plain language. Laminate it and post it at each machine.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This isn&apos;t about not trusting your team. It&apos;s about removing the subjectivity that creates inconsistency between operators and shifts.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Rework rates above 2–3% in embroidery production are almost always a process problem, not a people problem.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                An audit maps your current QC process against best practice, identifies the specific gaps, and gives you a prioritised improvement plan with the cost-per-rework calculation to justify each change.
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
