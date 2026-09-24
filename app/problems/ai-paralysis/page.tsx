import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { problemRouting } from '@/data/problem-routing';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

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
 const route = problemRouting['ai-paralysis'];
 return (
  <>
   <JsonLd data={aiParalysisSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'AI paralysis', url: 'https://decodedops.co.uk/problems/ai-paralysis' },
   ]} />
   {problemVideos['ai-paralysis'] && (
    <VideoSchema
     name={problemVideos['ai-paralysis'].title}
     description={problemVideos['ai-paralysis'].closeLine}
     youtubeId={problemVideos['ai-paralysis'].youtubeId}
     uploadDate={problemVideos['ai-paralysis'].uploadDate}
     durationSec={problemVideos['ai-paralysis'].durationSec}
    />
   )}

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
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a960" data-od-id="hero-evidence" data-motion data-no="DO-ART-960" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-960. An AI assistant window over a dimmed photograph. Someone asks which best-selling polos are about to run out. The assistant answers that it found the same polo in three places with three different stock figures, supplier feed 40, spreadsheet 12, ERP 0, and cannot say which one is right. The AI is only as good as the data underneath it.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-signage-58e48c.jpg" alt="" width="900" height="600"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>AI readiness</span><span>The question meets the data</span></div>
  <div class="body" aria-hidden="true">
    <div class="win">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Assistant ›</span> New question</span><span class="pill">AI</span></div>
      <div class="chat">
        <div class="bub bub--q m-rise" style="animation-delay:.1s"><small>You</small>Which of our best-selling polos are about to run out?</div>
        <div class="bub bub--a m-rise" style="animation-delay:.6s"><small>Assistant</small>I found the same polo in three places, with three different stock figures. I can't tell you which one is right.
          <div class="srcs">
            <div class="m-pop" style="animation-delay:1.1s"><span>Supplier feed</span><b>40</b></div>
            <div class="m-pop" style="animation-delay:1.3s"><span>Spreadsheet</span><b>12</b></div>
            <div class="x m-pop" style="animation-delay:1.5s"><span>ERP</span><b>0</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The AI is only as good as <em>the data underneath it.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-960 · Rev 01</span>
  </div>
</figure>` }} />
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The signs</span>
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

   {problemVideos['ai-paralysis'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['ai-paralysis'].youtubeId}
       title={problemVideos['ai-paralysis'].title}
       closeLine={problemVideos['ai-paralysis'].closeLine}
       app={problemVideos['ai-paralysis'].app}
       durationSec={problemVideos['ai-paralysis'].durationSec}
       playlistUrl={problemVideos['ai-paralysis'].playlistUrl}
      />
     </div>
    </section>
   )}

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

   {/* ── INLINE ARTWORK · DO-ART-718 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">The foundation · DO-ART-718</span>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw sw-doc a718" data-od-id="plate-method" data-motion data-no="DO-ART-718" data-rev="03" data-tx="photo"
        aria-label="Artwork DO-ART-718, the Decoded Method in three layers. Three documents over a photograph of an embroidery floor. A process register lists every process with a named owner role: enquiry to quote, sales lead; artwork approval, studio manager; goods in, warehouse lead; production planning, production manager; embroidery run, production supervisor; despatch, despatch lead; invoicing, accounts. A one-page SOP for despatch in five sections. An improvement log of three-line entries: what happened, why, and what changed.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-workshop-783ec1.jpg" alt="" width="1100" height="1224"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">The Decoded Method <span>· in plain English</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Three layers.</h3>
    <p>How a business runs, written down so it can be handed over instead of living in one person's head.</p>
    <ul class="keys">
      <li><b>01</b><span>Process register</span><small>one page</small></li>
      <li><b>02</b><span>One-page SOPs</span><small>five sections</small></li>
      <li><b>03</b><span>Improvement log</span><small>three lines</small></li>
    </ul>
    <span class="d17-mark">decodedops.co.uk · DO-ART-718 · Rev 03</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-r m-drop" style="animation-delay:.1s">
      <span class="tab">01</span>
      <span class="ref">PR-01 · Process register</span>
      <h4>Every process, one page</h4>
      <p class="sub">each process has a named owner · reviewed quarterly</p>
      <table class="reg">
        <tr><th>Process</th><th>Owner</th><th>SOP</th></tr>
        <tr><td>Enquiry to quote</td><td>Sales lead</td><td class="s">SOP-01</td></tr>
        <tr><td>Artwork approval</td><td>Studio manager</td><td class="s">SOP-02</td></tr>
        <tr><td>Goods in</td><td>Warehouse lead</td><td class="s">SOP-03</td></tr>
        <tr><td>Production planning</td><td>Production manager</td><td class="s">SOP-04</td></tr>
        <tr><td>Embroidery run</td><td>Production supervisor</td><td class="s">SOP-05</td></tr>
        <tr><td>Despatch</td><td>Despatch lead</td><td class="s">SOP-06</td></tr>
        <tr><td>Invoicing</td><td>Accounts</td><td class="s">SOP-07</td></tr>
      </table>
    </div>
    <div class="d17-doc sop doc-s m-drop" style="animation-delay:.4s">
      <span class="tab">02</span>
      <span class="ref">SOP-06 · Despatch</span>
      <h4>Despatch: pack and ship</h4>
      <p class="sub">Owner: Despatch lead · one page</p>
      <p class="h"><i>1</i>Purpose</p>
      <p class="p">Every order leaves complete, checked and booked the same way.</p>
      <p class="h"><i>2</i>When it applies</p>
      <p class="p">Any order marked ready to ship.</p>
      <p class="h"><i>3</i>Steps</p>
      <div class="line" style="width:92%"></div><div class="line" style="width:84%"></div><div class="line" style="width:70%"></div>
      <p class="h"><i>4</i>Checks</p>
      <div class="line" style="width:80%"></div>
      <p class="h"><i>5</i>If it goes wrong</p>
      <p class="p">Log it in the improvement log, three lines.</p>
    </div>
    <div class="d17-doc il doc-l m-drop" style="animation-delay:.7s">
      <span class="tab">03</span>
      <span class="ref">IL · Improvement log</span>
      <h4>Three lines, every time</h4>
      <div class="e"><div class="d"><b>Despatch</b>SOP-06</div>
        <div class="t"><span><em>What</em>Second box of a two-box order left behind.</span><span><em>Why</em>No box count on the packing check.</span><span><em>Change</em>Box count added to SOP-06, step 4.</span></div></div>
      <div class="e"><div class="d"><b>Artwork</b>SOP-02</div>
        <div class="t"><span><em>What</em>Proof approved on an old version.</span><span><em>Why</em>Versions sent by email.</span><span><em>Change</em>Approval recorded against the version.</span></div></div>
    </div>
  </div>
</figure>` }} />
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

    {/* ── RELATED LINKS ──────────────────────────────────────────────── */}
    {(route.relatedProblems.length > 0 || route.relatedSectors.length > 0 || route.relatedResources.length > 0) && (
     <section className="g-off">
      <div className="wrap">
       <div className="grid grid--3">
        {route.relatedProblems.length > 0 && (
         <article className="card">
          <span className="kicker">Related problems</span>
          <h3>You might also have</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
           {route.relatedProblems.map(p => (
            <li key={p.href} style={{ marginBottom: 10 }}>
             <Link href={p.href} className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
              {p.label}
             </Link>
            </li>
           ))}
          </ul>
         </article>
        )}
        {route.relatedSectors.length > 0 && (
         <article className="card">
          <span className="kicker">Related sectors</span>
          <h3>Adjacent trades</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
           {route.relatedSectors.map(s => (
            <li key={s.href} style={{ marginBottom: 10 }}>
             <Link href={s.href} className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
              {s.label}
             </Link>
            </li>
           ))}
          </ul>
         </article>
        )}
        {route.relatedResources.length > 0 && (
         <article className="card">
          <span className="kicker">Useful next steps</span>
          <h3>Resources</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
           {route.relatedResources.map(r => (
            <li key={r.href} style={{ marginBottom: 10 }}>
             <Link href={r.href} className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
              {r.label}
             </Link>
            </li>
           ))}
          </ul>
         </article>
        )}
       </div>
      </div>
     </section>
    )}

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
    <D17Motion />
   </>
  );
}
