import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Screen Printing vs Heat Transfer: Which is Better for Your Business? | Decoded Ops',
  description: 'Compare screen printing and heat transfer for decorated goods. Operations breakdown covering cost, quality, throughput, and when to choose each method.',
  alternates: { canonical: '/blog/screen-printing-vs-heat-transfer' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-22T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Operations',
    title: 'Screen Printing vs Heat Transfer: Which is Better for Your Business?',
    description: 'Compare screen printing and heat transfer for decorated goods. Operations breakdown covering cost, quality, throughput, and when to choose each method.',
    url: 'https://decodedops.co.uk/blog/screen-printing-vs-heat-transfer',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screen Printing vs Heat Transfer: Which is Better for Your Business?',
    description: 'Compare screen printing and heat transfer for decorated goods. Operations breakdown covering cost, quality, throughput, and when to choose each method.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Screen Printing vs Heat Transfer: An Operations Comparison',
      datePublished: '2026-05-22T00:00:00Z',
      dateModified: '2026-05-22T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/screen-printing-vs-heat-transfer',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/screen-printing-vs-heat-transfer',
      description: 'A practical operations comparison of screen printing and heat transfer decoration methods — covering setup costs, throughput, quality, and which works best at different order volumes.',
      wordCount: 1400,
      articleSection: 'Operations',
      keywords: 'screen printing vs heat transfer, screen printing operations, heat transfer printing, decorated goods production methods, print decoration comparison, screen printing setup cost',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is screen printing or heat transfer better for small orders?',
          acceptedAnswer: { '@type': 'Answer', text: 'Heat transfer is generally better for small orders. Screen printing requires screen setup (burning screens, mixing inks) which creates a fixed cost per design that only becomes economical at higher quantities — typically 24+ garments per design. Heat transfer has low or no setup cost per design, making it more cost-effective for orders under 20–24 pieces.' },
        },
        {
          '@type': 'Question',
          name: 'What are the setup costs for screen printing vs heat transfer?',
          acceptedAnswer: { '@type': 'Answer', text: 'Screen printing setup costs typically include screen burning (£15–30 per colour), screen reclamation after the job, and ink preparation. For a 4-colour design, setup adds £60–120 per job. Heat transfer setup cost is minimal — file preparation and transfer production, typically £5–15 per design regardless of order size.' },
        },
        {
          '@type': 'Question',
          name: 'Which lasts longer — screen printed or heat transfer decoration?',
          acceptedAnswer: { '@type': 'Answer', text: 'High-quality screen printing with plastisol inks typically outlasts heat transfer on cotton garments — it bonds with the fabric fibres rather than sitting on top. However, quality DTF (Direct to Film) transfers have improved significantly and can achieve comparable durability if applied correctly. The garment material, wash care, and application quality are as important as the method itself.' },
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
            Screen Printing vs Heat Transfer: An Operations Comparison
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            Not a quality argument — an operations one. Which method is right depends on your order profile, not the conventional wisdom.
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
              The screen printing vs heat transfer debate in decorated goods is usually framed as a quality question. It&apos;s actually an operations question.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              Both methods can produce excellent results. The difference is where each one creates costs, complexity, and throughput constraints — and which method fits your order profile.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Core Operational Difference</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Screen printing has high setup cost and low per-unit cost at volume. Heat transfer has low setup cost and higher per-unit cost at volume.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This single difference determines which method is right for any given job — and why businesses that have both capabilities can switch between them depending on order size.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Screen Printing: The Operations Reality</h2>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Setup</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Before a single garment is printed, you need to burn screens (one per colour), mix inks, and set up the press. A 4-colour design may take 45–90 minutes of setup time before production starts.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Setup cost is fixed regardless of how many garments you're printing. That means the per-unit setup cost falls dramatically as quantity increases — and is prohibitively high on short runs.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Throughput</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Once set up, a manual carousel screen press can print 60–100 garments per hour. An automatic press can reach 500+ per hour. At high volumes, nothing beats it for throughput.
            </p>

            <h3 className="text-xl font-semibold text="[#023047] mt-10 mb-4">Ink and Substrate Constraints</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Screen printing works best on flat, smooth surfaces. Irregular garment areas, thick seams, and pockets create registration problems. Colour gradients and photographic images require additional screens or halftone techniques that increase complexity and cost.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Breakdown Point</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              For most decorated goods businesses, screen printing becomes economically competitive at around 24–36 garments per design. Below that, the setup cost makes the per-unit cost uncompetitive.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Heat Transfer: The Operations Reality</h2>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Setup</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Heat transfer setup is minimal. Transfers are produced (or ordered pre-made), and each garment takes the same time to press regardless of design complexity. A 6-colour design costs no more to set up than a 1-colour design.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This makes heat transfer highly suited to mixed-size orders and one-offs where screen printing setup cost is unjustifiable.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Throughput</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Heat press throughput is limited by the dwell time per garment. A typical application takes 10–20 seconds per piece. At 15 seconds dwell time, a single press can produce around 200–240 garments per hour — if the operator is efficient and transfers are pre-cut and ready.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This is lower than screen printing at high volume, but requires no setup time between different designs. Switching between jobs is instant.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">Per-Unit Cost</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Transfer material cost is typically £0.30–£1.50 per garment depending on transfer type, size, and complexity. At high volumes, this consumable cost makes heat transfer less competitive than screen printing — where the only consumable is ink.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">When to Use Each Method</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This isn't a "choose one" decision for most businesses — it's a "use the right tool for each job" question.
            </p>
            <ul className="space-y-3 my-6 pl-6 list-disc text-[#023047]/80">
              <li><strong>Use screen printing for:</strong> High-volume runs (50+ units per design), standardised designs with limited colour changes, promotional merchandise in bulk, where lowest per-unit cost at volume is critical</li>
              <li><strong>Use heat transfer for:</strong> Short runs and one-offs, personalised garments (names, numbers), orders with many different designs in small quantities, mixed-order batches where setup time would kill margins, photographic or full-colour designs</li>
            </ul>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Scheduling Impact</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The most significant operational difference between the two methods isn't cost or quality — it's scheduling flexibility.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Screen printing works best when you batch similar jobs together to amortise setup. This creates scheduling complexity: you need to hold orders until you have enough volume in a design to justify a run, which creates lead time pressure.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Heat transfer is more flexible. Jobs can be processed individually or in small batches without the same setup overhead. This reduces work-in-progress and allows faster turnaround on mixed-order schedules.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Businesses that handle both types of work — high-volume screen print runs and short-run individual orders — need a production scheduling system that distinguishes between them and routes jobs to the right capability without manual intervention.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Method choice is a production planning decision — not just a sales conversation.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                If your current production mix means you're using the wrong method for some jobs, an operations audit will find it — and show you the cost.
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
