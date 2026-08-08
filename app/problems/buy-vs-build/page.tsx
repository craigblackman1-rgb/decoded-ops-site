import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'Buy vs build : Decoded Ops',
 description: "The question isn't buy or build. It's which platform fits, and what goes beside it. The ladder, buy, buy plus a custom layer, full custom as a last resort, and how an App Scoping Session settles it.",
 alternates: { canonical: '/problems/buy-vs-build' },
 openGraph: {
  title: 'Buy vs build : Decoded Ops',
  description: "The question isn't buy or build. It's which platform fits, and what goes beside it. The ladder, buy, buy plus a custom layer, full custom as a last resort, and how an App Scoping Session settles it.",
  url: 'https://decodedops.co.uk/problems/buy-vs-build',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Buy vs build : Decoded Ops',
  description: "The question isn't buy or build. It's which platform fits, and what goes beside it. The ladder, buy, buy plus a custom layer, full custom as a last resort, and how an App Scoping Session settles it.",
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
     acceptedAnswer: { '@type': 'Answer', text: "The question is not buy or build, it is which platform fits, and what gaps a custom layer closes. Most businesses land on buying a platform plus adding a custom layer beside it. Full custom is a last resort." },
    },
    {
     '@type': 'Question',
     name: 'What is the most common mistake when making a buy-vs-build technology decision?',
     acceptedAnswer: { '@type': 'Answer', text: "Letting whoever gets to you first frame the decision on their terms. A platform vendor pitches buy. A developer pitches build. Neither works the ladder for you." },
    },
    {
     '@type': 'Question',
     name: 'How do I know which rung I am on, buy, buy plus a custom layer, or full custom?',
     acceptedAnswer: { '@type': 'Answer', text: 'An App Scoping Session works the ladder in order: a written map of your workflow, a platform-fit assessment, and a scoped plan for what goes beside it. You get a written answer either way.' },
    },
    {
     '@type': 'Question',
     name: 'How much does it cost to have the buy-vs-build decision scoped properly?',
     acceptedAnswer: { '@type': 'Answer', text: 'An App Scoping Session costs £750 fixed, waived if you have had a Clarity Audit in the last six months. It produces a written assessment you own outright, a specification you could hand to any developer.' },
    },
    {
     '@type': 'Question',
     name: 'What does buy plus a custom layer mean for a decorated-goods business?',
     acceptedAnswer: { '@type': 'Answer', text: 'The platform is right but leaves gaps, supplier feeds, artwork, reporting across more than one business. A purpose-built layer closes those gaps without touching what the platform already does well.' },
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
      <span className="eyebrow">The problem</span>
      <h1>The question isn&apos;t buy or build. It&apos;s which platform, and what goes beside it.</h1>
      <p className="lede">Most businesses in this sector frame it as a straight choice, an
       off-the-shelf platform, or a full custom build. That&apos;s a false binary. The real question is
       which platform fits your decoration workflow, and where the gap it leaves needs a purpose-built
       layer beside it, not a rip-and-replace.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
      </div>
     </div>
     <figure className="evidence">
      <img src="/images/hero-craft.jpg"
       alt="Decorated garments staged on a production floor, the operation a platform decision has to actually serve." />
      <figcaption className="stamp">THE OPERATION DECIDES, NOT THE VENDOR</figcaption>
     </figure>
    </div>
   </section>

   {/* ── 2 · THE LADDER · evidence ─────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The ladder</span>
     <h2>Three rungs, climbed in order, never skipped.</h2>
     <p className="lede" style={{ marginTop: 16 }}>Buy where it fits. Add a layer where it&apos;s close but
      leaves gaps. Build from scratch only when nothing off the shelf comes close, and only after
      saying so in writing.</p>

     <div className="rungs">
      <article className="rung">
       <span className="kicker">Rung 1</span>
       <h3>Buy</h3>
       <p>If something on the market already fits, it goes on the table, named and priced. Track
        is the best platform I&apos;ve worked with in this sector, and I don&apos;t sell it or earn
        anything from recommending it. That&apos;s not a pitch, it costs me nothing to say it.</p>
      </article>

      <article className="rung rung--default">
       <span className="kicker">Rung 2 <span className="flag">The normal answer</span></span>
       <h3>Buy plus a custom layer</h3>
       <p>Usually the platform is right but leaves gaps, supplier feeds, artwork, reporting
        across more than one business. I show you what the gap costs to leave alone versus what
        it costs to close with a purpose-built layer, and let you weigh it up.</p>
      </article>

      <article className="rung rung--last">
       <span className="kicker">Rung 3 · Last resort</span>
       <h3>Full custom</h3>
       <p>If nothing off the shelf fits, that option goes on the table too, priced honestly,
        alongside everything else considered and why it didn&apos;t make the cut. Never a published
        price for a build like this. It&apos;s scoped, or it isn&apos;t offered at all.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── 3 · THE APP SCOPING SESSION · archetype 5 ──────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">How the decision gets made</span>
     <h2>A phased roadmap, not a guess.</h2>
     <p className="lede" style={{ marginTop: 16 }}>The App Scoping Session is how you find out which rung
      you&apos;re actually on, before any platform or build gets committed to.</p>

     <div className="steps">
      <article className="step">
       <p className="step-n">STEP 1</p>
       <h3>Map the workflow</h3>
       <p>What the business actually needs the platform to do, decoration methods, order
        volumes, the systems it has to talk to.</p>
      </article>
      <article className="step">
       <p className="step-n">STEP 2</p>
       <h3>Test platform fit</h3>
       <p>Where an off-the-shelf platform like Track covers it outright, and precisely where it
        doesn&apos;t, named gaps, not a vague sense of unease.</p>
      </article>
      <article className="step step--last">
       <p className="step-n">STEP 3</p>
       <h3>Scope what goes beside it</h3>
       <p>A written, priced plan for the layer that closes the gap, or, rarely, a case for full
        custom, made honestly and in writing.</p>
      </article>
     </div>

     <div className="inset">
      <b>App Scoping Session, £750 fixed.</b> Waived if you&apos;ve had a Clarity Audit in the last six
      months. This is the entry point for the systems line, not a Clarity Audit.
     </div>
    </div>
   </section>

   {/* ── PLATE · DO-ART-418 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-418" title="False binary → right rung" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Buy vs build framed as a straight choice</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Vendor demo sells features you&apos;ll never use</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Custom build: no idea of the cost</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Decision based on a sales pitch</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Three rungs: buy, layer, custom, in order</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Named platforms tested against your workflow</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Written scope and price before commitment</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Decision based on evidence, not persuasion</tspan></text>
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
     <h2>No vendor relationships. No preferred platform. Just what fits.</h2>

     <div className="answer">
      <p>I don&apos;t sell Track, or any other platform. <b>I have nothing to gain from which rung you
       end up on.</b></p>
      <p>What I bring is the sector expertise to tell buy from buy-plus-a-layer from genuinely
       needing custom, and the App Scoping Session to prove it in writing before you commit
       budget to any of them.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Find out which rung you&apos;re actually on.</h2>
     <p className="lede">An App Scoping Session, £750 fixed, waived if you&apos;ve had a Clarity Audit
      recently, settles buy vs build with a written answer, not a guess.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
      <Link className="btn-ghost btn-arrow" href="/apps/data-app">See the Data App</Link>
     </div>
    </div>
   </section>
  </>
 );
}
