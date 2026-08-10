import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'Buy vs build : Decoded Ops',
 description: "The question isn't buy or build. It's how much of what you need the platform actually covers, what the rest costs to close, and whether that changes how you work. Sometimes the answer is buy, and the test has to be able to say so.",
 alternates: { canonical: '/problems/buy-vs-build' },
 openGraph: {
  title: 'Buy vs build : Decoded Ops',
  description: "The question isn't buy or build. It's how much of what you need the platform actually covers, what the rest costs to close, and whether that changes how you work.",
  url: 'https://decodedops.co.uk/problems/buy-vs-build',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Buy vs build : Decoded Ops',
  description: "The question isn't buy or build. It's how much of what you need the platform actually covers, and what the rest costs to close.",
 },
};

const buyVsBuildSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Should I buy off-the-shelf software or build custom for my print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: "Neither, framed as a binary. The real question is what percentage of what you actually need a platform covers. High coverage with a low cost to close the gap usually means buy. Low coverage, or a platform that forces you to change how you work, is where a purpose-built layer starts to make sense." },
    },
    {
     '@type': 'Question',
     name: 'What is the most common mistake when making a buy-vs-build technology decision?',
     acceptedAnswer: { '@type': 'Answer', text: "Treating the licence fee as the whole cost. The real comparison is coverage against the cost of closing the gap, plus what it costs to change how you work to fit the platform. Most of that never appears on a quote." },
    },
    {
     '@type': 'Question',
     name: 'How do I work out how much a platform actually covers?',
     acceptedAnswer: { '@type': 'Answer', text: 'Follow your processes from start to finish and note every point where the platform does not fit, in the order they happen. That list is the uncovered percentage, and it is the only reliable way to see it. A Clarity Audit does exactly this.' },
    },
    {
     '@type': 'Question',
     name: 'Does buying a platform sometimes turn out to be the right answer?',
     acceptedAnswer: { '@type': 'Answer', text: 'Often. High coverage and a low cost to change how you work means buy, clearly and quickly. The test has to be able to reach that answer, or it is not a real test.' },
    },
    {
     '@type': 'Question',
     name: 'What does buy plus a custom layer mean for a decorated-goods business?',
     acceptedAnswer: { '@type': 'Answer', text: 'The platform is right but leaves gaps: supplier feeds, artwork, reporting across more than one business. A purpose-built layer closes those gaps without touching what the platform already does well.' },
    },
   ],
  },
 ],
};

export default function BuyVsBuildPage() {
 return (
  <>
   <JsonLd data={buyVsBuildSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Buy vs build', url: 'https://decodedops.co.uk/problems/buy-vs-build' },
   ]} />

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The real question</span>
      <h1>It covers 25% of what you need. Do you buy it?</h1>
      <p className="lede">This gets asked in different words most weeks, usually framed as buy
       or build. It isn&apos;t really that question. If something covers a quarter of the job, the
       decision isn&apos;t about the quarter. It&apos;s about the other three quarters, and what
       closing them costs.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
      </div>
     </div>
     <figure className="evidence">
      <img src="/images/hero-craft.jpg"
       alt="Decorated garments staged on a production floor, the operation a platform decision has to actually serve." />
      <figcaption className="stamp">THE OPERATION DECIDES, NOT THE VENDOR</figcaption>
     </figure>
    </div>
   </section>

   {/* ── 2 · THE THREE QUESTIONS ───────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">Before you buy anything</span>
     <h2>Three questions that replace the binary.</h2>
     <p className="lede" style={{ marginTop: 16 }}>None of these require naming a platform. They
      work for whichever one you&apos;re looking at.</p>

     <div className="rungs">
      <article className="rung">
       <span className="kicker">Coverage</span>
       <h3>What percentage does it genuinely cover?</h3>
       <p>If the best thing on the market covers a quarter of the job, the question isn&apos;t
        whether to buy it. It&apos;s what closes the other three quarters, and what that costs.
        Usually nobody has priced it, so it gets treated as free. It isn&apos;t free, it&apos;s
        just invisible.</p>
      </article>

      <article className="rung">
       <span className="kicker">Fit</span>
       <h3>Does it work how you work?</h3>
       <p>Or do you rework the business to fit the software? Every platform encodes an
        assumption about how you should operate. Fine if you agree with it. Expensive if you
        don&apos;t, and the cost never appears on the quote.</p>
      </article>

      <article className="rung">
       <span className="kicker">Bloat</span>
       <h3>How much of it will you actually use?</h3>
       <p>Platforms are built to cover a hundred and one scenarios because they have to sell to
        everyone. You&apos;ll use maybe a fifth of it. You pay for all of it, and you carry the
        complexity of the rest for as long as you own it.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── 3 · THE ARITHMETIC ────────────────────────────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">The arithmetic</span>
     <h2>Three numbers, and you can work them out yourself.</h2>
     <p className="lede" style={{ marginTop: 16 }}>Nobody needs to sell you this. Follow your own
      processes and the numbers are already there.</p>

     <div className="steps">
      <article className="step">
       <p className="step-n">STEP 1</p>
       <h3>What it covers</h3>
       <p>Follow the workflow start to finish. Every point where the platform doesn&apos;t fit is
        part of the uncovered percentage.</p>
      </article>
      <article className="step">
       <p className="step-n">STEP 2</p>
       <h3>What the gap costs</h3>
       <p>Closing it with more software, or with someone&apos;s time every week. Both are real
        costs. Price whichever one you&apos;d actually choose.</p>
      </article>
      <article className="step step--last">
       <p className="step-n">STEP 3</p>
       <h3>What changing to fit it costs</h3>
       <p>What you&apos;d have to rework about how the business runs to use the platform as
        designed. That number is usually the one nobody wrote down.</p>
      </article>
     </div>

     <div className="inset">
      <b>Sometimes the answer is buy.</b> High coverage and a low cost to change how you work
      means buy it, clearly and quickly. This has to be able to come out that way, or it isn&apos;t
      a real test.
     </div>
    </div>
   </section>

   {/* ── PLATE · DO-ART-418 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-418" title="False binary → coverage test" rev="02" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Buy vs build framed as a straight choice</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">The gap the platform leaves is never priced</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">The cost of changing how you work is invisible</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Decision based on a sales pitch</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Three questions: coverage, fit, bloat</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">The gap costed, not assumed away</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Change cost priced before you commit</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Decision based on your own numbers</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>

   {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow eyebrow--amber">How I help</span>
     <h2>No vendor relationships. No platform I&apos;m paid to prefer.</h2>

     <div className="answer">
      <p>There are several good platforms in this sector. The right one depends on your
       business, and <b>I earn nothing from whichever you pick.</b></p>
      <p>What I bring is the sector experience to run the coverage test properly: what a
       platform actually handles in a decoration workflow, where it stops, and what it&apos;s
       worth closing that gap versus living with it.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>You can&apos;t run these numbers without seeing the operation.</h2>
     <p className="lede">Working out what percentage anything actually covers means following
      your processes from start to finish first. A Clarity Audit is a day on site, then the
      comparison in writing within five working days.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
      <Link className="btn-ghost btn-arrow" href="/clarity">See how a Clarity Audit works</Link>
     </div>
    </div>
   </section>
  </>
 );
}
