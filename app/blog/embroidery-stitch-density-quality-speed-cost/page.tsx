import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Embroidery Stitch Density: How It Affects Quality, Speed, and Cost | Decoded Ops',
  description: 'How stitch density decisions affect embroidery quality, production speed, and job cost — a practical guide for garment decoration businesses.',
  alternates: { canonical: '/blog/embroidery-stitch-density-quality-speed-cost' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-19T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Operations',
    title: 'Embroidery Stitch Density: How It Affects Quality, Speed, and Cost',
    description: 'How stitch density decisions affect embroidery quality, production speed, and job cost — a practical guide for garment decoration businesses.',
    url: 'https://decodedops.co.uk/blog/embroidery-stitch-density-quality-speed-cost',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Embroidery Stitch Density: How It Affects Quality, Speed, and Cost',
    description: 'How stitch density decisions affect embroidery quality, production speed, and job cost — a practical guide for garment decoration businesses.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Embroidery Stitch Density: How It Affects Quality, Speed, and Cost',
      datePublished: '2026-05-19T00:00:00Z',
      dateModified: '2026-05-19T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/embroidery-stitch-density-quality-speed-cost',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/embroidery-stitch-density-quality-speed-cost',
      description: 'How stitch density decisions affect embroidery quality, production speed, and job cost — and what to do when your current settings are costing you more than you think.',
      wordCount: 1400,
      articleSection: 'Operations',
      keywords: 'embroidery stitch density, embroidery production cost, embroidery quality control, stitch count, embroidery machine speed',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does stitch density affect embroidery production speed?',
          acceptedAnswer: { '@type': 'Answer', text: 'Higher stitch density means more stitches per design, which means more machine time per garment. A design running at 20,000 stitches due to high-density settings might legitimately run at 13,000 stitches with the same visual result — cutting run time by 35%. At volume, that difference determines whether you hit your delivery schedule or miss it.' },
        },
        {
          '@type': 'Question',
          name: 'Can stitch density affect how much a job costs to produce?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. If you price embroidery per thousand stitches, an over-dense digitised file inflates the stitch count and understates your margin. A design quoted at 8,000 stitches that actually runs at 14,000 due to density issues means you\'re subsidising every order. Reviewing density as part of pre-production sign-off closes that gap.' },
        },
        {
          '@type': 'Question',
          name: 'What is the right stitch density for polo shirts and workwear?',
          acceptedAnswer: { '@type': 'Answer', text: 'For standard woven workwear and polo shirts, fill density of 0.4–0.5mm and satin density of 0.4–0.45mm is a reliable starting point. Fabrics like fleece and towelling need lower density (0.5–0.6mm) to avoid distortion. Always test on the actual production fabric before approving a new design for a production run.' },
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
            Embroidery Stitch Density: How It Affects Quality, Speed, and Cost
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            The setting most businesses never look at — until rework, late jobs, and margin erosion force them to.
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
              Stitch density is one of those settings that nobody explains when you start out. You trust your digitiser, the machine runs, the embroidery looks reasonable — and you carry on. The problem is, wrong density compounds quietly. It shows up in your rework rate, your delivery schedule, and your margin, long before anyone notices that the root cause is a number in a digitising file.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What Stitch Density Actually Is</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Stitch density describes how tightly stitches are packed within a design — typically measured as the spacing between rows of fill stitches or between individual stitches in satin columns. It's expressed in millimetres. Lower numbers mean tighter spacing; higher numbers mean more spread.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The key point: density determines your stitch count. And your stitch count determines your run time, your thread consumption, and your production cost per garment. It also determines your quality. Both directions — too tight and too loose — cause problems.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Quality Problem</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Over-dense designs cause most of the quality failures I see in embroidery operations. When too many needle penetrations land in the same small area:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li><strong>Fabric puckers.</strong> The base material distorts under accumulated tension from too many stitches.</li>
              <li><strong>Needles break.</strong> The needle is being forced through already-packed ground — it hits previous stitches and snaps.</li>
              <li><strong>Thread breaks.</strong> As fabric distorts, tension builds and thread snaps mid-run.</li>
              <li><strong>The embroidery feels rigid.</strong> A heavily over-stitched logo on a soft polo shirt feels like a patch — hard and uncomfortable.</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Under-dense designs cause different problems: gaps in coverage, fuzzy edges on satin columns, colours that look washed out. Both extremes result in customer complaints and rework.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The frustrating thing is that density-related quality failures often get blamed on thread quality, needle type, or machine calibration. Those are easier things to investigate. The digitising file is rarely the first place people look — partly because it requires opening the file and knowing what you're looking at.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Speed Problem</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This is where density directly affects your schedule and your capacity.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A commercial embroidery machine running at 800 stitches per minute takes 25 minutes to complete a 20,000-stitch design. The same design, digitised with correct density settings for the fabric, might run at 13,000 stitches — 16 minutes per garment.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              On a single-head machine running an 8-hour shift:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li>At 20,000 stitches: roughly 19 garments</li>
              <li>At 13,000 stitches: roughly 30 garments</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              That's a 57% capacity increase from a digitising change. No new equipment. No additional headcount. The fix is in the file.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Multiply that across a multi-head machine and a full week's production, and the numbers become significant enough to change whether you hit delivery dates or miss them.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Cost Problem</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Most embroidery businesses price by stitch count. A job quoted at 8,000 stitches covers your machine time, thread, and overheads at that volume. If the file actually runs at 14,000 stitches because of high-density digitising, you're not pricing accurately.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The stitch count in the digitising brief and the stitch count the machine actually runs should match. If they don't — and in a lot of operations, they don't — you've got a systematic underpricing problem that only becomes visible when you audit your files.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Thread consumption is also directly tied to stitch count. Over-dense designs burn through thread faster, increasing material cost on every run. For a business doing thousands of garments a week, that adds up.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Density Benchmarks by Fabric</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              There's no single correct density setting. The right number depends on the fabric. These are reliable starting points:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li><strong>Woven workwear / twill:</strong> 0.4–0.45mm fill, 0.4mm satin</li>
              <li><strong>Polo shirt / piqué:</strong> 0.45–0.5mm fill, 0.45mm satin</li>
              <li><strong>Fleece / knit:</strong> 0.5–0.6mm fill — lower to prevent distortion</li>
              <li><strong>Structured caps:</strong> 0.4mm fill, lighter underlay to protect the cap shape</li>
              <li><strong>Towelling / terry:</strong> 0.5–0.6mm with a topping underlay to sit above the pile</li>
              <li><strong>Softshell / performance fabric:</strong> 0.45–0.5mm — watch for distortion with heavier designs</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Always test on the actual production fabric. A sew-out on a test piece of different material tells you very little. If a design is going on a heavyweight fleece, test it on that heavyweight fleece.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Fix: A Digitising Brief</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If you're using an external digitiser, or multiple digitisers, the single most effective thing you can do is create a digitising brief. A one-page document sent with every design request that specifies:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li>Garment type and fabric description</li>
              <li>Required fill density range</li>
              <li>Required satin density range</li>
              <li>Underlay preference</li>
              <li>Maximum stitch count (if throughput is constrained)</li>
              <li>Sew-out required before production approval: yes/no</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Without a brief, every digitiser uses their own defaults. Those defaults may work fine for the fabric they usually digitise for. They may not work for yours. The brief closes that gap before the file is built — not after the run comes off the machine wrong.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Building Density Into Pre-Production Sign-Off</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Density should be a checkpoint in your approval process, not something you discover after the fact. A basic pre-production check involves four steps:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li>Open the digitised file and check fill and satin density settings before sending to the machine.</li>
              <li>Run a sew-out on the production fabric — not a test piece of different material.</li>
              <li>Check for puckering, gaps, edge definition, and run time against expected stitch count.</li>
              <li>Approve or return for revision with specific comments, not vague feedback.</li>
            </ol>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This adds 15–20 minutes to the pre-production process for new designs. It saves hours of rework and the cost of re-embroidering garments that have already been sold to a customer.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">When Density Is a Symptom, Not the Root Cause</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Density problems in embroidery operations are usually a symptom of something bigger: no written standards, no pre-production process, no ownership of quality at the digitising stage.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Fixing density settings in individual files is a short-term fix. What actually changes results long-term is building a production standard — a document that sets the expected density range per fabric type, the sew-out requirement, and the sign-off process. Everyone working on production is working to the same specification.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              That document takes a few hours to write. It saves considerably more than that over the course of a year.
            </p>

            {/* FAQ */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Common Questions</h2>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How does stitch density affect embroidery production speed?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Higher density means more stitches per design, which means more machine time per garment. A design running at 20,000 stitches due to high-density settings might legitimately run at 13,000 stitches with no visible quality difference. At volume, that difference determines whether you hit your delivery schedule or miss it.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">Can stitch density affect job cost?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Yes. If you price by stitch count, an over-dense digitised file inflates the stitch count and understates your margin. A design quoted at 8,000 stitches that actually runs at 14,000 means you're subsidising every order. Reviewing density as part of pre-production sign-off closes that gap.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What density is right for polo shirts and workwear?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              For standard woven workwear and polo shirts, fill density of 0.4–0.5mm and satin of 0.4–0.45mm is a reliable starting point. Fleece and towelling need lower density (0.5–0.6mm) to avoid distortion. Always test on the actual production fabric before approving a run.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Rework, machine downtime, and quality complaints usually have operational causes — not just technical ones.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                A Clarity Audit looks at your full production operation — digitising standards, QC process, scheduling, and where the bottlenecks actually are — and gives you a prioritised plan to fix what's costing you the most.
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
