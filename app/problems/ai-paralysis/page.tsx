import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'AI paralysis: Decoded Ops',
 description: 'AI readiness for small business, answered honestly. What needs to be in place before AI can deliver value in a print, embroidery or decoration operation, and what is noise you can safely ignore.',
 alternates: { canonical: '/problems/ai-paralysis' },
 openGraph: {
  title: 'AI paralysis: Decoded Ops',
  description: 'AI readiness for small business, answered honestly. What needs to be in place before AI can deliver value in a print, embroidery or decoration operation, and what is noise you can safely ignore.',
  url: 'https://decodedops.co.uk/problems/ai-paralysis',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'AI paralysis: Decoded Ops',
  description: 'AI readiness for small business, answered honestly. What needs to be in place before AI can deliver value in a print, embroidery or decoration operation, and what is noise you can safely ignore.',
 },
};

const tier = {
 display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
 padding: '22px 26px', borderRadius: 'var(--do-radius-xl)',
} as const;

const tierHeading = { margin: '0 0 4px', fontFamily: 'var(--do-font-heading)', fontWeight: 700, fontSize: 'var(--do-text-xl)' } as const;
const tierBody = { margin: 0, fontSize: 'var(--do-text-sm)', opacity: 0.85 } as const;
const tierNo = { flex: '0 0 auto', fontSize: 'var(--do-text-xs)', letterSpacing: 'var(--do-tracking-wider)', textTransform: 'uppercase' as const, opacity: 0.6 } as const;

const aiParalysisSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: "Why are print and embroidery businesses being sold AI features they don't need?",
     acceptedAnswer: { '@type': 'Answer', text: "AI is being sold as magic, not as a tool. The AI narrative in the technology industry is built on transformational stories that rarely translate to operational reality. A business that prints and despatches physical products needs practical answers, not visionary promises." },
    },
    {
     '@type': 'Question',
     name: 'Do I need AI to stay competitive in the decorated goods industry?',
     acceptedAnswer: { '@type': 'Answer', text: "In most cases, no, not yet. What will make you uncompetitive is continuing with broken processes and disconnected systems while pretending the problem is that you haven't adopted AI." },
    },
    {
     '@type': 'Question',
     name: 'What should I fix before investing in AI for my print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Get your data clean and consistent, document your processes, and connect your core systems, orders, production, despatch. AI works best when applied to well-defined, well-documented processes with clean data. If orders are running on spreadsheets and manual workarounds, AI will amplify the chaos rather than reduce it.' },
    },
    {
     '@type': 'Question',
     name: 'How do I know if my business is ready for AI?',
     acceptedAnswer: { '@type': 'Answer', text: "The real question is whether your data is clean enough to feed into anything. The real barrier to AI adoption in this sector isn't the technology, it's that nobody's supplier data is clean and consistent. Start there." },
    },
    {
     '@type': 'Question',
     name: 'What does an honest AI readiness assessment look like?',
     acceptedAnswer: { '@type': 'Answer', text: 'An honest assessment looks at your current processes, data quality, technology stack and team capability, and tells you what needs to be in place before AI can deliver value, where the real opportunities are in your specific operation, and what is noise you can safely ignore. No hype. No vendor agenda.' },
    },
    {
     '@type': 'Question',
     name: 'Should a small print or embroidery business be using AI tools right now?',
     acceptedAnswer: { '@type': 'Answer', text: "In most cases, not yet, and that is not the same as never. The businesses that get value from AI are the ones that fix their processes and data foundations first. The real barrier to AI adoption in this sector isn't the technology, it's that nobody's supplier data is clean enough to feed into anything." },
    },
   ],
  },
 ],
};

export default function AiParalysisPage() {
 return (
  <>
   <JsonLd data={aiParalysisSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'AI paralysis', url: 'https://decodedops.co.uk/problems/ai-paralysis' },
   ]} />

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>You don&apos;t need AI. You need your data in one place.</h1>
      <p className="lede">Every software vendor is adding AI features. Every conference talk is about
       AI. But when you ask what AI actually means for a print, embroidery or decoration
       business, the answers are vague, generic, or non-existent. The real barrier to AI adoption
       in this sector isn&apos;t the technology. It&apos;s that nobody&apos;s supplier data is clean enough to
       feed into anything.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Get an honest assessment</Link>
      </div>
     </div>
     <figure className="evidence">
      <img src="/images/hero-craft.jpg"
       alt="A working decoration floor, the physical operation AI is supposed to improve." />
      <figcaption className="stamp">THE OPERATION COMES FIRST</figcaption>
     </figure>
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">Sound familiar?</span>
     <h2>Seven versions of the same stuck.</h2>
     <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the problem
      isn&apos;t that you&apos;re behind. It&apos;s that nobody has given you a straight answer.</p>

     <ul className="symptoms">
      <li>You feel pressure to &ldquo;have an AI strategy&rdquo; but don&apos;t know where to start</li>
      <li>Vendors are selling AI features you didn&apos;t ask for and can&apos;t see the value of</li>
      <li>You&apos;ve been told AI will transform your business, but nobody can say how</li>
      <li>You&apos;re worried about being left behind but don&apos;t want to invest in hype</li>
      <li>Your team are experimenting with ChatGPT but there&apos;s no coherent approach</li>
      <li>You suspect AI could help somewhere, but you don&apos;t know where</li>
      <li>Every article you read contradicts the last one</li>
     </ul>
    </div>
   </section>

   {/* ── 3 · THE RIGHT ORDER ────────────────────────────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">The right order</span>
     <h2>You can&apos;t automate what hasn&apos;t been documented.</h2>
     <p className="lede" style={{ marginTop: 16 }}>AI is the top layer. It rests on everything underneath
      it. Most businesses are being sold the top layer while the bottom two are still missing,
      which is why the results disappoint and the cynicism deepens.</p>

     <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 14, marginTop: 36, maxWidth: 820 }}>
      <div style={{ ...tier, border: '1px solid color-mix(in srgb, var(--do-amber) 45%, transparent)', background: 'color-mix(in srgb, var(--do-amber) 14%, transparent)' }}>
       <div>
        <h3 style={tierHeading}>Clean, consistent data</h3>
        <p style={tierBody}>Everything above rests on this</p>
       </div>
       <span style={tierNo}>Layer 1</span>
      </div>
      <div style={{ ...tier, border: '1px solid color-mix(in srgb, var(--do-sky-blue) 30%, transparent)', background: 'var(--do-surface-raised)' }}>
       <div>
        <h3 style={tierHeading}>Documented process</h3>
        <p style={tierBody}>Written down, repeatable, the same on Tuesday</p>
       </div>
       <span style={tierNo}>Layer 2</span>
      </div>
      <div style={{ ...tier, border: '1px solid color-mix(in srgb, var(--do-sky-blue) 30%, transparent)', background: 'var(--do-surface-raised)' }}>
       <div>
        <h3 style={tierHeading}>Connected systems</h3>
        <p style={tierBody}>Orders, production and despatch actually talking</p>
       </div>
       <span style={tierNo}>Layer 3</span>
      </div>
      <div style={{ ...tier, border: '1px solid color-mix(in srgb, var(--do-amber) 45%, transparent)', background: 'color-mix(in srgb, var(--do-amber) 14%, transparent)' }}>
       <div>
        <h3 style={tierHeading}>AI</h3>
        <p style={tierBody}>Where everyone is being told to start</p>
       </div>
       <span style={tierNo}>Layer 4</span>
      </div>
     </div>

     <p className="lede" style={{ marginTop: 30 }}>AI works best when applied to well-defined,
      well-documented processes with clean data. If orders, production and despatch are running on
      spreadsheets and manual workarounds, <b>AI will amplify the chaos rather than reduce it.</b></p>
    </div>
   </section>

   {/* ── PLATE · DO-ART-417 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-417" title="AI hype → grounded assessment" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Pressure to have an AI strategy</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Vendors selling features you didn&apos;t ask for</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">No clear use case for your operation</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Fear of being left behind</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Honest assessment of where AI actually fits</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">No vendor agenda, no tool to sell</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Specific use cases mapped to your workflow</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Confidence to invest or to wait</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>

   {/* ── 4 · CAUSES ────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap">
     <span className="eyebrow">Why this happens</span>
     <h2>Four reasons the question stays unanswered.</h2>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <article className="card cause">
       <span className="n">01</span>
       <h3>AI is being sold as magic, not as a tool</h3>
       <p>The AI narrative in the technology industry is built on transformational stories that
        rarely translate to operational reality. A business that prints and despatches physical
        products needs practical answers, not visionary promises.</p>
      </article>
      <article className="card cause">
       <span className="n">02</span>
       <h3>No process foundation to apply AI to</h3>
       <p>Most businesses in this sector have undocumented processes, inconsistent data, and
        systems that don&apos;t talk to each other. An AI readiness assessment tells you whether your
        data and processes are ready, or whether foundational fixes come first.</p>
      </article>
      <article className="card cause">
       <span className="n">03</span>
       <h3>The wrong question is being asked</h3>
       <p>&ldquo;How do we adopt AI?&rdquo; is the wrong question. The right one is &ldquo;what specific operational
        problems do we have that AI might help solve?&rdquo; Without that reframing, AI adoption becomes
        a solution in search of a problem.</p>
      </article>
      <article className="card cause">
       <span className="n">04</span>
       <h3>Fear of missing out is driving decisions</h3>
       <p>The fear that competitors will adopt AI and pull ahead creates pressure to do something,
        anything. That pressure leads to buying AI tools without a clear use case, which wastes
        investment and reinforces the cynicism that stopped the business engaging in the first
        place.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── 5 · HOW I HELP ─────────────────────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow eyebrow--amber">How I help</span>
     <h2>An honest answer, with no vendor agenda.</h2>

     <div className="answer">
      <p>I give you an honest, grounded assessment of where AI can actually help your business
       right now. <b>I&apos;m not here to sell you an AI tool.</b></p>
      <p>I look at your current processes, your data quality, your technology stack and your team&apos;s
       capability, and I tell you what needs to be in place before AI can deliver value, where the
       real opportunities are in your specific operation, and what&apos;s noise you can safely ignore.</p>
     </div>
    </div>
   </section>

   {/* ── 6 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Find out what AI could actually do for you.</h2>
     <p className="lede">Sixty minutes, free, no obligation. If the honest answer is &ldquo;not yet&rdquo;, I&apos;ll
      tell you that, and tell you what to fix instead.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a discovery call</Link>
      <Link className="btn btn-ghost btn-arrow" href="/clarity">See how a Clarity Audit works</Link>
     </div>
    </div>
   </section>
  </>
 );
}
