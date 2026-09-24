import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

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
   {problemVideos['ops-in-owners-head'] && (
    <VideoSchema
     name={problemVideos['ops-in-owners-head'].title}
     description={problemVideos['ops-in-owners-head'].closeLine}
     youtubeId={problemVideos['ops-in-owners-head'].youtubeId}
     uploadDate={problemVideos['ops-in-owners-head'].uploadDate}
     durationSec={problemVideos['ops-in-owners-head'].durationSec}
    />
   )}

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
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a972" data-od-id="hero-evidence" data-motion data-no="DO-ART-972" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-972. A process register screen over a dimmed photograph of the embroidery floor. Seven processes, enquiry to quote, artwork proofing, the rush-order supplier, embroidery digitising, goods in, despatch and invoicing. Every row has the same owner, the owner, and every row is marked not written. Seven processes, one head to keep them in.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-workshop-783ec1.jpg" alt="" width="1100" height="963"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>In the owner's head</span><span>Process register, as it stands</span></div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Method ›</span> Process register</span><span class="pill">DRAFT</span></div>
    <div class="win-flat">
      <h5>Process register</h5>
      <p class="s">Every process the business runs, and who owns it</p>
      <table class="tbl">
        <tr><th>Process</th><th>Owner</th><th>Written down</th></tr>
        <tr class="m-fade" style="animation-delay:0.15s"><td>Enquiry to quote</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.27s"><td>Artwork proofing</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.39s"><td>Rush-order supplier</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.51s"><td>Embroidery digitising</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.63s"><td>Goods in</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.75s"><td>Despatch</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.87s"><td>Invoicing</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
      </table>
      <div class="win-foot"><b>7 processes</b><span>1 owner · 0 written down</span></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Seven processes. <em>One head to keep them in.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-972 · Rev 01</span>
  </div>
</figure>` }} />
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The signs</span>
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

   {problemVideos['ops-in-owners-head'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['ops-in-owners-head'].youtubeId}
       title={problemVideos['ops-in-owners-head'].title}
       closeLine={problemVideos['ops-in-owners-head'].closeLine}
       app={problemVideos['ops-in-owners-head'].app}
       durationSec={problemVideos['ops-in-owners-head'].durationSec}
       playlistUrl={problemVideos['ops-in-owners-head'].playlistUrl}
      />
     </div>
    </section>
   )}

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

   {/* ── INLINE ARTWORK · DO-ART-718 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">The register, finished · DO-ART-718</span>
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
    <D17Motion />
   </>
  );
}
