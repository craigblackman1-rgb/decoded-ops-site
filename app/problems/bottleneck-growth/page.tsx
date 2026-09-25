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
 title: 'Growth Bottleneck Operations | Decoded Ops',
 description: "A growth bottleneck in operations usually means every decision still goes through the owner, purchase orders and artwork approvals included.",
 alternates: { canonical: '/problems/bottleneck-growth' },
 openGraph: {
  title: 'Growth Bottleneck Operations | Decoded Ops',
  description: "A growth bottleneck in operations usually means every decision still goes through the owner, purchase orders and artwork approvals included.",
  url: 'https://decodedops.co.uk/problems/bottleneck-growth',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Growth Bottleneck Operations | Decoded Ops',
  description: "A growth bottleneck in operations usually means every decision still goes through the owner, purchase orders and artwork approvals included.",
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
 const route = problemRouting['bottleneck-growth'];
 return (
  <>
   <JsonLd data={bottleneckGrowthSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Growth bottleneck', url: 'https://decodedops.co.uk/problems/bottleneck-growth' },
   ]} />
   {problemVideos['bottleneck-growth'] && (
    <VideoSchema
     name={problemVideos['bottleneck-growth'].title}
     description={problemVideos['bottleneck-growth'].closeLine}
     youtubeId={problemVideos['bottleneck-growth'].youtubeId}
     uploadDate={problemVideos['bottleneck-growth'].uploadDate}
     durationSec={problemVideos['bottleneck-growth'].durationSec}
    />
   )}

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
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a961" data-od-id="hero-evidence" data-motion data-no="DO-ART-961" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-961. A graded photograph of an embroidery floor, machines threaded and ready. Four tags are pinned across it: artwork proof sign-off, a supplier order, which machine takes the rush job, and a quote above list price. Every one reads waiting on the owner, and every lead runs to the owner's desk. Everything is ready to run, and everything is waiting on you.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-workshop-783ec1.webp" alt="" width="1100" height="1224"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>The bottleneck</span><span>Four decisions, one desk</span></div>
  <div class="stage" aria-hidden="true">
    <svg class="sx-lead" viewBox="0 0 560 470" preserveAspectRatio="none"><path d="M190 118 C230 200 250 330 272 420"/><path d="M380 150 C340 230 310 340 288 420"/><path d="M190 240 C230 300 256 360 276 420"/><path d="M380 290 C340 330 310 380 290 420"/></svg>
    <div class="sx-tag m-pop" style="left:4%;top:16%;animation-delay:.1s"><small>01 · Artwork</small>Proof sign-off<b>Waiting on <i>Owner</i></b></div>
    <div class="sx-tag m-pop" style="right:4%;top:23%;animation-delay:.3s"><small>02 · Purchasing</small>Supplier order<b>Waiting on <i>Owner</i></b></div>
    <div class="sx-tag m-pop" style="left:4%;top:42%;animation-delay:.5s"><small>03 · Production</small>Which machine for the rush job<b>Waiting on <i>Owner</i></b></div>
    <div class="sx-tag m-pop" style="right:4%;top:53%;animation-delay:.7s"><small>04 · Sales</small>Quote above list price<b>Waiting on <i>Owner</i></b></div>
    <div class="desk m-pop" style="animation-delay:1.1s">The owner's desk · 4 waiting</div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Everything is ready to run. <em>Everything is waiting on you.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-961 · Rev 01</span>
  </div>
</figure>` }} />
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The signs</span>
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

   {problemVideos['bottleneck-growth'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['bottleneck-growth'].youtubeId}
       title={problemVideos['bottleneck-growth'].title}
       closeLine={problemVideos['bottleneck-growth'].closeLine}
       app={problemVideos['bottleneck-growth'].app}
       durationSec={problemVideos['bottleneck-growth'].durationSec}
       playlistUrl={problemVideos['bottleneck-growth'].playlistUrl}
      />
     </div>
    </section>
   )}

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
       <p>Before you can delegate, you have to see the full picture: every approval, every sign-off,
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

   {/* ── INLINE ARTWORK · DO-ART-718 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">The method · DO-ART-718</span>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw sw-doc a718" data-od-id="plate-method" data-motion data-no="DO-ART-718" data-rev="03" data-tx="photo"
        aria-label="Artwork DO-ART-718, the Decoded Method in three layers. Three documents over a photograph of an embroidery floor. A process register lists every process with a named owner role: enquiry to quote, sales lead; artwork approval, studio manager; goods in, warehouse lead; production planning, production manager; embroidery run, production supervisor; despatch, despatch lead; invoicing, accounts. A one-page SOP for despatch in five sections. An improvement log of three-line entries: what happened, why, and what changed.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-workshop-783ec1.webp" alt="" width="1100" height="1224"></div>
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
    <D17Motion />
   </>
  );
}
