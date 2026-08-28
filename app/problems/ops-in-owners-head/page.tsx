import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: "Ops in the owner's head: Decoded Ops",
 description: "If you got hit by a bus tomorrow, nobody would know how to run your business. Why every decorated-goods operation needs documented process, and how the Decoded Method builds one that lives outside the owner's head.",
 alternates: { canonical: '/problems/ops-in-owners-head' },
 openGraph: {
  title: "Ops in the owner's head: Decoded Ops",
  description: "If you got hit by a bus tomorrow, nobody would know how to run your business. Why every decorated-goods operation needs documented process.",
  url: 'https://decodedops.co.uk/problems/ops-in-owners-head',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: "Ops in the owner's head: Decoded Ops",
  description: "If you got hit by a bus tomorrow, nobody would know how to run your business.",
 },
};

const opsInOwnersHeadSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'What happens if nobody but the owner knows how the business runs?',
     acceptedAnswer: { '@type': 'Answer', text: 'The business is not sellable, not scalable, and not resilient, regardless of what the turnover says. If you are off for a week and decisions just wait until you are back, the operation is a dependency on one person, not a system anyone else can run.' },
    },
    {
     '@type': 'Question',
     name: 'What is the Decoded Method?',
     acceptedAnswer: { '@type': 'Answer', text: 'The Decoded Method is three documents in one continuous loop. The Process Register lists everything the business does. The SOPs describe how each workflow runs in enough detail for a newcomer to follow. The Improvement Log captures every failure so the process sharpens, not just the person. The loop, map, document, check, log, improve, keeps it current without it feeling like a second job.' },
    },
    {
     '@type': 'Question',
     name: 'How do I start moving the operation out of my head?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit maps every process that currently lives in your head, and the written plan tells you which ones to document first, in what order, at what level of detail. Not a generic template. Your actual business, captured while you are still in the room to explain it.' },
    },
    {
     '@type': 'Question',
     name: 'Can a business be sold if the operations are not documented?',
     acceptedAnswer: { '@type': 'Answer', text: 'A business where the operations live in the owner\'s head is rarely saleable at its true value. Buyers price in the risk that the knowledge walks out the door with the owner. Documented process, Process Register, SOPs, Improvement Log, turns that risk into an asset any buyer can inspect and trust.' },
    },
   ],
  },
 ],
};

export default function OpsInOwnersHeadPage() {
 return (
  <>
   <JsonLd data={opsInOwnersHeadSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: "Ops in the owner's head", url: 'https://decodedops.co.uk/problems/ops-in-owners-head' },
   ]} />

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>If you got hit by a bus tomorrow, nobody would know how to run your business.</h1>
      <p className="lede">It&apos;s the conversation every owner dreads, and avoids. How the artwork gets
       proofed, which supplier gets the rush order, what the embroidery digitising workflow looks
       like, all of it lives in your head and nowhere else. Your business isn&apos;t a system. It&apos;s
       a dependency on one person being available every day.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      </div>
     </div>
     <figure className="evidence">
      <img src="/images/hero-craft.jpg"
       alt="Print and decoration samples, the work that only you know how to route, approve and schedule." />
      <figcaption className="stamp">YOU ARE THE BUSINESS CONTINUITY PLAN</figcaption>
     </figure>
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">Sound familiar?</span>
     <h2>Seven signs the operation lives in your head.</h2>
     <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the business
      isn&apos;t sellable, isn&apos;t scalable, and isn&apos;t resilient, regardless of what the turnover says.</p>

     <ul className="symptoms">
      <li>If you&apos;re off for a week, decisions just wait until you&apos;re back</li>
      <li>Your staff describe what they do as &ldquo;whatever the boss says&rdquo; rather than a named process</li>
      <li>A new starter takes months to become useful because there&apos;s nothing written to learn from</li>
      <li>Supplier relationships are personal, not documented, only you know who to call and why</li>
      <li>You&apos;ve thought about selling the business but can&apos;t imagine it running without you</li>
      <li>When something goes wrong, the fix is you working late, not a process improving</li>
      <li>You&apos;ve tried writing things down before, but keeping it current felt like a second job</li>
     </ul>
    </div>
   </section>

   {/* ── 3 · THE SOLUTION · Decoded Method ──────────────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">The fix</span>
     <h2>The Decoded Method, process that lives on paper, not in a person.</h2>
     <p className="lede" style={{ marginTop: 16 }}>Three documents, one loop. The Process Register lists
      everything the business does. The SOPs describe how, in enough detail that someone who&apos;s never
      done it before can follow it. The Improvement Log captures every time something goes wrong so
      the process gets sharper, not just the person.</p>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <article className="card cause">
       <span className="n">01</span>
       <h3>Process Register, name everything the business does</h3>
       <p>Before you can document a process, you have to know it exists. The register lists every
        workflow, from artwork proofing to supplier onboarding, so nothing is invisible just
        because it&apos;s routine.</p>
      </article>
      <article className="card cause">
       <span className="n">02</span>
       <h3>SOPs, write it once, follow it every time</h3>
       <p>An SOP isn&apos;t a training manual. It&apos;s the step-by-step that means someone who&apos;s never
        done it before gets the same result as someone who&apos;s been doing it for years.</p>
      </article>
      <article className="card cause">
       <span className="n">03</span>
       <h3>Improvement Log, every failure makes the process better</h3>
       <p>When something goes wrong, it goes in the log: what happened, why, what changed. Over
        time, the process becomes the sum of everything the business has learned, not just what
        one person remembers.</p>
      </article>
      <article className="card cause">
       <span className="n">04</span>
       <h3>The loop, map, document, check, log, improve</h3>
       <p>It&apos;s not a one-off exercise. The Process &amp; Quality System is a continuous loop that
        keeps the documentation current without it feeling like a second job.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── PLATE · DO-ART-414 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-414" title="In your head → on the page" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Artwork proofing: only you know the steps</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Supplier routing: personal relationships</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">No written process for anyone to follow</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Business isn&apos;t sellable as-is</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Process Register: every workflow named</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">SOPs: step-by-step, anyone can follow</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Improvement Log: failures sharpen process</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Business knowledge lives outside one person</tspan></text>
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
     <h2>The business knowledge moves from your head onto the page.</h2>

     <div className="answer">
      <p>A Clarity Audit maps every process that currently lives in your head, and the written plan
       tells you which ones to document first, in what order, at what level of detail. <b>Not a
       generic template. Your actual business, captured while you&apos;re still in the room to
       explain it.</b></p>
      <p>From there, the Decoded Method builds a living system (Process Register, SOPs,
       Improvement Log) that keeps the documentation current without you having to do it all
       yourself.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Get the business out of your head and onto the page.</h2>
     <p className="lede">A Clarity Audit captures what only you know, before it&apos;s too late to ask.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      <Link className="btn btn-ghost btn-arrow" href="/deliver">See how Deliver works</Link>
     </div>
    </div>
   </section>
  </>
 );
}
