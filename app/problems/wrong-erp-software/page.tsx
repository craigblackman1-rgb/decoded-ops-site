import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';
import { NowAfterPlate } from '@/components/NowAfterPlate';

export const metadata: Metadata = {
 title: 'Wrong ERP software: Decoded Ops',
 description: "Chose an ERP that doesn't fit your operation? You're not alone. Here's how to evaluate ERP for print, embroidery, and decoration businesses, without the vendor bias.",
 alternates: { canonical: '/problems/wrong-erp-software' },
 openGraph: {
  title: 'Wrong ERP software: Decoded Ops',
  description: "Chose an ERP that doesn't fit your operation? You're not alone. Here's how to evaluate ERP for print, embroidery, and decoration businesses, without the vendor bias.",
  url: 'https://decodedops.co.uk/problems/wrong-erp-software',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Wrong ERP software: Decoded Ops',
  description: "Chose an ERP that doesn't fit your operation? You're not alone. Here's how to evaluate ERP for print, embroidery, and decoration businesses, without the vendor bias.",
 },
};

const wrongErpSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why does selecting ERP software based on a demo lead to problems?',
     acceptedAnswer: { '@type': 'Answer', text: 'Vendors are excellent at demos. They show you the things the software does well and move quickly past the things it does not. Without sector expertise on your side of the table, you are evaluating presentation skills.' },
    },
    {
     '@type': 'Question',
     name: 'Why should you write an independent vendor brief before selecting ERP?',
     acceptedAnswer: { '@type': 'Answer', text: 'A vendor brief, written by someone who understands your business model before you talk to any vendor, changes the selection process entirely. Without it, you are being sold to rather than making an informed choice.' },
    },
    {
     '@type': 'Question',
     name: 'Why are ERP reference sites in other sectors misleading?',
     acceptedAnswer: { '@type': 'Answer', text: 'Generic ERP vendors often have good reference sites in manufacturing or distribution. Those references do not tell you how the software performs in a decoration business with mixed methods, variable artwork, and short-run personalisation.' },
    },
    {
     '@type': 'Question',
     name: 'What is the total cost of ownership for an ERP system?',
     acceptedAnswer: { '@type': 'Answer', text: 'Implementation, training, customisation, integration, ongoing support. The total cost of ownership for an ERP is often two to three times the headline licence cost. That comparison rarely happens before selection.' },
    },
    {
     '@type': 'Question',
     name: 'How do I choose the right ERP for a print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Write the requirements brief before you speak to any vendor. The brief should document your actual workflows, decoration methods, artwork approval process, B2B ordering, eCommerce integration requirements, and how you manage blanks inventory. Once the brief exists, you can compare the systems on a like-for-like basis.' },
    },
    {
     '@type': 'Question',
     name: 'What ERP works with Shopify for an embroidery or decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Several ERPs in this sector can integrate with Shopify, but the quality of that integration varies significantly. The questions to ask are: does the integration handle personalisation data, not just order totals? Does stock sync in real time? And is the integration maintained by the ERP vendor or reliant on a third-party connector that could break? An independent ERP evaluation covers all of these.' },
    },
   ],
  },
 ],
};

export default function WrongERPSoftwarePage() {
 return (
  <>
   <JsonLd data={wrongErpSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Wrong ERP software', url: 'https://decodedops.co.uk/problems/wrong-erp-software' },
   ]} />

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>The ERP looked right in the demo. It doesn&apos;t fit how your business works.</h1>
      <p className="lede">Buying the wrong ERP is one of the most expensive mistakes you can make in
       this sector. The cost isn&apos;t just the software. It&apos;s the setup, the disruption, the
       workarounds that pile up, and the productivity you never get back. Most of the time it
       was avoidable, if someone independent had checked the fit before the contracts were
       signed.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
      </div>
     </div>
     <figure className="evidence">
      <img src="/images/sectors/thread-spools.jpg"
       alt="Thread spools racked on a decoration-floor machine, the real operation an ERP is supposed to serve." />
      <figcaption className="stamp">THE OPERATION, NOT THE SOFTWARE</figcaption>
     </figure>
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">Sound familiar?</span>
     <h2>Seven signs the system doesn&apos;t fit.</h2>
     <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the problem
      usually isn&apos;t your team. It&apos;s what got signed off before anyone on your side wrote a brief.</p>

     <ul className="symptoms">
      <li>The system can&apos;t handle how you actually decorate without heavy customisation</li>
      <li>You&apos;re running manual processes alongside the system because it can&apos;t replace them</li>
      <li>The vendor keeps telling you it&apos;s a configuration issue, not a software limitation</li>
      <li>Your team have found ways around the system rather than working within it</li>
      <li>Customisation costs have passed the original software licence</li>
      <li>You chose it based on a demo that showed a different kind of business</li>
      <li>The vendor&apos;s support team doesn&apos;t understand your industry</li>
     </ul>
    </div>
   </section>

   {/* ── 3 · CAUSES ────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap">
     <span className="eyebrow">Why this happens</span>
     <h2>Four reasons the wrong system gets bought.</h2>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <article className="card cause">
       <span className="n">01</span>
       <h3>Selected on demo, not on fit</h3>
       <p>Vendors are excellent at demos. They show you what the software does well and move
        quickly past what it doesn&apos;t. Without someone on your side who knows the sector, you&apos;re
        judging presentation skills, not fit. The only fair test is against a written brief that
        describes your actual business.</p>
      </article>
      <article className="card cause">
       <span className="n">02</span>
       <h3>No independent specification written first</h3>
       <p>A brief written by someone who understands your business before you talk to any vendor
        changes everything. Without it, you&apos;re being sold to rather than making a choice.</p>
      </article>
      <article className="card cause">
       <span className="n">03</span>
       <h3>Reference sites in a different sector</h3>
       <p>Generic vendors often have great references in manufacturing or distribution. Those
        don&apos;t tell you how the software handles decoration: mixed methods, changing artwork, and
        short runs with personalisation.</p>
      </article>
      <article className="card cause">
       <span className="n">04</span>
       <h3>The total cost wasn&apos;t modelled</h3>
       <p>Setup, training, customisation, integration, ongoing support. The full cost of an ERP is
        often two to three times the licence fee. That comparison rarely happens before you
        sign.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── PLATE · DO-ART-411 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
      <Plate tone="dark" no="DO-ART-411" title="Wrong platform → right fit" rev="01" cls="DECODED OPS · ISSUED">
       <NowAfterPlate
        now={[
          'ERP built for distribution, not decoration',
          'Decoration BOMs tracked in spreadsheets',
          'Blank vs finished stock confused',
          "Vendor doesn't understand your workflow",
        ]}
        after={[
          'Platform fit assessed before purchase',
          'BOMs modelled properly for decoration',
          'Blank-to-finished mapping automated',
          'Platform chosen for your actual workflow',
        ]}
       />
      </Plate>
    </div>
   </section>

   {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow eyebrow--amber">How I help</span>
     <h2>An honest read on stay or move, then a brief that doesn&apos;t repeat the mistake.</h2>

     <div className="answer">
      <p>If you&apos;re in a system that doesn&apos;t fit, I give you an honest assessment of your
       options. Sometimes there&apos;s more in the existing system than you&apos;re using, and the
       implementation was poor, not the software. Sometimes the software genuinely isn&apos;t right
       and you need to plan a managed exit.</p>
      <p>Either way, I help you understand <b>the real cost of staying versus moving</b>, and if
       you&apos;re moving, I write the independent vendor brief that makes sure the next ERP is chosen
       on fit, not on how good the demo looked.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Book a free discovery call.</h2>
     <p className="lede">An hour on what&apos;s actually going wrong with the system you&apos;re running today,
      and whether the fix is process, configuration, or a managed move to something that fits.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
      <Link className="btn btn-ghost btn-arrow" href="/clarity">See how a Clarity Audit works</Link>
     </div>
    </div>
   </section>
  </>
 );
}
