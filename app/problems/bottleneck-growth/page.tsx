import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'Growth bottleneck : Decoded Ops',
 description: "The business stops where you stop. When every decision still goes through the owner, purchase orders, artwork approvals, production scheduling, growth hits a hard ceiling. The fix is documented process that means the business runs without you in the room.",
 alternates: { canonical: '/problems/bottleneck-growth' },
 openGraph: {
  title: 'Growth bottleneck : Decoded Ops',
  description: "The business stops where you stop. When every decision still goes through the owner, growth hits a hard ceiling. The fix is documented process that means the business runs without you in the room.",
  url: 'https://decodedops.co.uk/problems/bottleneck-growth',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Growth bottleneck : Decoded Ops',
  description: "The business stops where you stop. When every decision still goes through the owner, growth hits a hard ceiling.",
 },
};

const bottleneckGrowthSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'How do I know if I&apos;m the bottleneck in my own business?',
     acceptedAnswer: { '@type': 'Answer', text: 'If orders stall when you are in a meeting, on holiday, or off sick, if staff ask you the same questions every week because there is no written answer, you are the bottleneck. The test is simple: can the business run for a full week without you making a single decision? If not, the operation is a dependency on one person.' },
    },
    {
     '@type': 'Question',
     name: 'What is the Process & Quality System and how does it fix the owner bottleneck?',
     acceptedAnswer: { '@type': 'Answer', text: 'The Process & Quality System is three documents in one loop. The Process Register lists every workflow the business runs. The SOPs describe how each one works in enough detail that someone who has never done it before can follow it. The Improvement Log captures every failure so the process gets sharper, not just the person. Together they turn what the owner knows into written process anyone can follow.' },
    },
    {
     '@type': 'Question',
     name: 'How do I delegate without the task coming back to me?',
     acceptedAnswer: { '@type': 'Answer', text: 'Handing off a task without a documented process guarantees it comes back, with a question, a mistake, or both. A written SOP means the answer is already on the page. The person doing the task follows the document, not your verbal instructions, and the result is repeatable regardless of who is in the chair.' },
    },
    {
     '@type': 'Question',
     name: 'What does a Clarity Audit do for a business where the owner is the bottleneck?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit maps every decision point still sitting on your desk, every approval, sign-off, and moment the business stops until you say yes. The written plan tells you which ones to document first, in what order, so the business starts running without you one process at a time.' },
    },
   ],
  },
 ],
};

export default function BottleneckGrowthPage() {
 return (
  <>
   <JsonLd data={bottleneckGrowthSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Growth bottleneck', url: 'https://decodedops.co.uk/problems/bottleneck-growth' },
   ]} />

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>The business stops where you stop.</h1>
      <p className="lede">Every purchase order, artwork approval, and production decision still goes
       through you. You don&rsquo;t want it to. Nobody else knows the process well
       enough to make the call. The business has grown past the point where one person can carry
       every decision, but the operation was never documented for anyone else to run it.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      </div>
     </div>
     <figure className="evidence">
      <img src="/images/hero-craft.jpg"
       alt="Production in progress, the work that still needs the owner to sign off every decision." />
      <figcaption className="stamp">THE DECISION BOTTLENECK IS YOU</figcaption>
     </figure>
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">Sound familiar?</span>
     <h2>Seven signs the owner is the bottleneck.</h2>
     <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the fix
      isn&apos;t working harder. It&apos;s documenting what you do so someone else can do it too.</p>

     <ul className="symptoms">
      <li>Orders stall when you&apos;re in a meeting, on holiday, or off sick</li>
      <li>Artwork approvals queue up waiting for your eye on every proof</li>
      <li>Production scheduling falls apart the moment you&apos;re not in the room</li>
      <li>Staff ask you the same questions every week because there&apos;s no written answer</li>
      <li>You can&apos;t remember the last time you took a full day off without checking in</li>
      <li>Growth feels like punishment, more of everything, all landing on you</li>
      <li>You&apos;ve tried to delegate, but the person you handed it to had no process to follow</li>
     </ul>
    </div>
   </section>

   {/* ── 3 · THE SOLUTION · Process & Quality System ─────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">The fix</span>
     <h2>A business that runs without you in the room.</h2>
     <p className="lede" style={{ marginTop: 16 }}>The Process &amp; Quality System is the delegation
      engine. It turns what you know into written process, so a purchase order gets approved the
      same way whether you&apos;re at your desk or on a beach.</p>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <article className="card cause">
       <span className="n">01</span>
       <h3>Map every decision that&apos;s still on your desk</h3>
       <p>Before you can delegate, you have to see the full picture, every approval, every sign-off,
        every moment the business stops until you say yes. Mapping it is the first step to moving
        it off your plate.</p>
      </article>
      <article className="card cause">
       <span className="n">02</span>
       <h3>Document the process, not the person</h3>
       <p>A process that lives in your head isn&apos;t a process. It&apos;s a dependency on one person.
        The SOP makes the decision repeatable by anyone who can read it, not just anyone who&apos;s
        worked beside you for five years.</p>
      </article>
      <article className="card cause">
       <span className="n">03</span>
       <h3>Delegate with a written rulebook, not verbal instructions</h3>
       <p>Handing off a task without a documented process guarantees it comes back to you, with a
        question, a mistake, or both. A written SOP means the answer is already on the page.</p>
      </article>
      <article className="card cause">
       <span className="n">04</span>
       <h3>Improve the process, not the firefighting</h3>
       <p>Once the process is written, you improve the process, not the crisis management.
        Every revision makes it sharper, and every revision happens once, not every time the
        same problem recurs.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── PLATE · DO-ART-413 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-413" title="Owner bottleneck → documented process" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Every decision waits for you</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Orders stall when you&apos;re away</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Staff ask the same questions weekly</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Growth means more on your plate</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Process Register names every workflow</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">SOPs make decisions repeatable</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Staff follow written process, not verbal</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Business runs without you in the room</tspan></text>
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
     <h2>You build the business. I build the system that runs it.</h2>

     <div className="answer">
      <p>A Clarity Audit maps every decision point that&apos;s still sitting on your desk, and the
       written plan tells you exactly which ones to document first. <b>The goal isn&apos;t more
       hours from you. It&apos;s the business running the same on a Tuesday whether you&apos;re there
       or not.</b></p>
      <p>From there, a Process &amp; Quality System turns that plan into SOPs your team can
       actually follow, not a consultancy document that sits in a drawer.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Find out what&apos;s still sitting on your desk that shouldn&apos;t be.</h2>
     <p className="lede">A Clarity Audit identifies every decision bottleneck in your operation,
      and the written plan tells you which one to move first.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      <Link className="btn btn-ghost btn-arrow" href="/deliver">See how Deliver works</Link>
     </div>
    </div>
   </section>
  </>
 );
}
