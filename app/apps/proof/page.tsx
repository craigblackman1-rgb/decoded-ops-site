import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Decoded Proof: Decoded Ops',
  description: 'Revision control for embroidery and print artwork: every version, every colourway, one audit trail. Customers approve their own proofs. Machine-ready files go straight to the floor.',
  alternates: { canonical: '/apps/proof' },
  openGraph: {
    type: 'website',
    title: 'Decoded Proof: Decoded Ops',
    description: 'Revision control for embroidery and print artwork: every version, every colourway, one audit trail. Customers approve their own proofs. Machine-ready files go straight to the floor.',
    url: 'https://decodedops.co.uk/apps/proof',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Proof: Decoded Ops',
    description: 'Artwork revision control for embroidery and print, with customer proofing and machine-ready delivery built in.',
    images: [OG_IMAGE_PATH],
  },
};

const artworkManagerFaqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Decoded Proof do?',
          acceptedAnswer: { '@type': 'Answer', text: "It's revision control for artwork: every format and every version of every logo, versioned with a full audit trail, with the colourways and thread library held against the job. Customers approve their own proofs instead of an email chain, and the approved file goes straight to the machine in its native format." },
        },
        {
          '@type': 'Question',
          name: 'How does customer proofing work?',
          acceptedAnswer: { '@type': 'Answer', text: 'Customers get their own accounts and approve their own proofs. The approval is recorded against the version that was actually approved. No more chasing a reply on an email thread with six people on it and three versions attached.' },
        },
        {
          '@type': 'Question',
          name: 'What happens to an approved design?',
          acceptedAnswer: { '@type': 'Answer', text: 'It goes to the machine in its native format (Tajima, Barudan, Happy, with DST as the fallback, hot folders for DTF and DTG), so the file the floor gets is the file the machine wants, not something a person has to convert first.' },
        },
      ],
    },
  ],
};

export default function ArtworkManagerPage() {
  return (
    <>
      <JsonLd data={artworkManagerFaqSchema} />
      {/* 1 · HERO SPLIT */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <p className="eyebrow">Decoded Proof &middot; artwork revision control</p>
            <h1>Every version. The one they actually approved.</h1>
            <div className="hero-body">
              <p>An artwork vault across embroidery and print formats, with full revision control and an
                audit trail. Colourways and thread libraries are held against the job, not scattered
                across folders and someone&rsquo;s memory. Customers approve their own proofs instead of an
                email chain, and the approved file goes straight to the floor in the format the machine
                actually wants.</p>
            </div>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
              <Link className="btn btn--ghost btn-arrow" href="#terms">Read the terms first</Link>
            </div>
          </div>

          <div className="hero-shot">
            {/* DO-ART-944 r01 · product-screen mock-up (D17, after proof-versions-01). The
                 approval history for one crest: v5 a draft production cannot pull, v4 sent,
                 opened and signed off by the customer contact and now in production, v3 with
                 changes requested. Roles, never people's names; generic job reference. Graded
                 thread-spool photo behind (the thread library). In-page draw: versions rise,
                 the APPROVED stamp lands on v4. */}
            <figure className="d17 sx a944" aria-label="Product screen DO-ART-944. The Decoded Proof approval history for a left breast crest, over a graded photograph of thread spools on an embroidery machine. Version 5 is a draft that has not been sent, so production cannot pull it. Version 4 was sent to the customer, opened twice and signed off by the customer contact, and is in production as a machine-ready stitch file. Version 3 had changes requested. Every version kept, sign-off stamped against the one they actually saw."
              dangerouslySetInnerHTML={{ __html: `
<div class="d17-ph"><img src="/images/d17/apps-cases/thread-spools-ba5d03.jpg" alt="" width="900" height="600" /></div>
<div class="d17-scan" aria-hidden="true"></div>
<div class="sx-top d17-mono" aria-hidden="true"><span>Proof · approvals</span><span>Founding clients</span></div>
<div class="stage" aria-hidden="true">
  <div class="mw">
    <div class="mw-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Artwork › EMB-0142 ›</span> Approvals</span><span class="pill pill--a">AUDIT TRAIL</span></div>
    <div class="mw-main">
      <p class="s" style="margin:0">Customer account · left breast crest · 90 × 90 mm</p>
      <h5 style="margin-top:4px">Approval history</h5>
      <p class="s">5 versions · sent to the customer contact</p>
      <div class="ver m-rise" style="animation-delay:.1s"><span class="v">v5</span><div><div class="t">Uploaded 9 Sep, 10:12 <span class="tag">Draft, not sent</span></div>
        <div class="m">Stitch density tweak on the outline · not approved, so production can't pull it</div></div></div>
      <div class="ver ver--ok m-rise" style="animation-delay:.3s"><span class="v">v4</span><div><div class="t">Sent 5 Sep, 09:15 <span class="tag">Approved</span> <span class="tag tag--a">In production</span></div>
        <div class="m">Opened twice · signed off 5 Sep, 14:32</div>
        <div class="say"><small>Customer sign-off · customer contact</small>That's the one, go ahead with this.</div>
        <div class="file"><span>Machine-native</span><span>DST fallback</span><span>Thread list attached</span></div></div></div>
      <div class="ver ver--old m-rise" style="animation-delay:.45s"><span class="v">v3</span><div><div class="t">Sent 2 Sep, 16:40 <span class="tag">Changes requested</span></div>
        <div class="m">Can the gold be the darker thread?</div></div></div>
    </div>
  </div>
  <div class="apv m-pop" style="animation-delay:.9s">Approved · v4</div>
</div>
<div class="sx-foot">
  <div class="sx-bar" aria-hidden="true"></div>
  <p class="sx-say">Every version kept. <em>Sign-off stamped against the one they saw.</em></p>
  <span class="d17-mark">decodedops.co.uk · DO-ART-944 · Rev 01</span>
</div>
` }} />
            <p className="shot-caption">Customers approve their own proofs against the exact version that
              was shown. No email chain, no lost approvals.</p>
          </div>
        </div>
      </section>

      {/* 2 · FEATURES TRIPLET */}
      <section className="g-white">
        <div className="wrap">
          <p className="eyebrow">Three parts</p>
          <h2>Revision control, proofing, and delivery to the machine.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Artwork is the thing that goes wrong quietly. Wrong
            version stitched, a colourway approved for one job and used on the next, a proof approved in
            an email nobody can find. All three of those are the same problem: no record of which
            version was the real one.</p>

          <div className="grid grid--3">
            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" /><circle cx="12" cy="12" r="3.2" />
                  <path d="M12 4v2M12 18v2" />
                </svg>
              </div>
              <h3>The vault</h3>
              <p>Every format and every version of every logo in one place, with full revision history:
                you can prove which file went to the machine, and when. The colourways and thread
                library that go with each design are held against the job, not against a folder
                somewhere else, so the right thread is never a guess.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.5 6.5 10 17l-5-5" /><path d="M3.5 20.5h17" />
                </svg>
              </div>
              <h3>Customer proofing</h3>
              <p>Customers get their own accounts and approve their own proofs. No more chasing a reply
                on an email thread with six people on it and three versions attached.</p>
              <p>The approval is recorded against the version that was actually approved.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7h9l3 3h4v8H4z" /><path d="M8 7V4.5h5" />
                </svg>
              </div>
              <h3>Machine delivery</h3>
              <p>Tajima, Barudan and Happy native formats, with DST as the fallback. Hot folders for DTF
                and DTG.</p>
              <p>The file the floor gets is the file the machine wants, not something a person has to
                convert first.</p>
            </div>
          </div>

          <p style={{ marginTop: 24, maxWidth: '68ch' }}>Bought standalone, Proof also includes an embedded
            CRM: pipeline and client records, in the same place as the artwork.</p>
        </div>
      </section>

      {/* 2a · VAULT TO FLOOR PLATE · DO-ART-945 (supersedes 106 on this page) */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">Flow · DO-ART-945</p>
          <h2>Vault to floor, one tracked path.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Three connected stages. No email chain between
            them.</p>

          {/* DO-ART-945 r01 · journey/route poster with pinned prints (D17, the 831 recipe).
               Three stations on one route: the vault (thread spools, the colourways that go with
               the logo), customer proofing (a proof sheet stamped against v4), machine delivery
               (the embroidery floor). The email chain is struck off the line between vault and
               proof; amber runs from the approval to the machine. Stacks vertically on phones.
               In-page draw: the route runs, the prints drop, the floor lands in amber.
               Supersedes DO-ART-106 here. */}
          <figure className="d17 sw a945" aria-label="Route poster DO-ART-945. One file, tracked from the vault to the machine. Station one, the vault: every format and every version of every logo, with the thread library and colourways, pinned with a photograph of thread spools. Station two, customer proofing: the customer approves the proof themselves, recorded against version 4, pinned with a proof sheet; there is no email chain between the vault and the proof. Station three, machine delivery: the approved file arrives in the machine's native format, DST as the fallback, hot folders for DTF and DTG, pinned with a photograph of an embroidery floor."
            dangerouslySetInnerHTML={{ __html: `
<div class="gridl" aria-hidden="true"></div>
<div class="hd">
  <div class="k d17-mono">Vault to floor · one tracked path</div>
  <h3>One file, tracked from the vault to the machine.</h3>
</div>
<div class="cols">
  <div class="pin p1 m-drop" style="animation-delay:.2s" aria-hidden="true"><i class="tack"></i>
    <div class="print"><img src="/images/d17/apps-cases/thread-spools-dada9d.jpg" alt="" /><span>Thread library · colourways</span></div></div>
  <div class="pin p2 m-drop" style="animation-delay:.5s" aria-hidden="true"><i class="tack"></i>
    <div class="proof"><span class="ref">EMB-0142 · proof · v4</span><h4>Left breast crest</h4>
      <div class="crest"><svg viewBox="0 0 80 80"><path d="M40 6 L70 16 V40 C70 58 56 70 40 76 C24 70 10 58 10 40 V16 Z" fill="#023047" /><path d="M40 16 L60 23 V40 C60 53 51 61 40 66 C29 61 20 53 20 40 V23 Z" fill="none" stroke="#FFB703" stroke-width="3" /><circle cx="40" cy="41" r="9" fill="#8ECAE6" /></svg>
        <dl><dt>Size</dt><dd>90 × 90 mm</dd><dt>Thread</dt><dd>4 colours</dd><dt>Sign-off</dt><dd>Customer contact</dd></dl></div>
      <div class="approved" style="margin-top:10px">Approved · v4</div></div></div>
  <div class="pin p3 m-drop" style="animation-delay:.8s" aria-hidden="true"><i class="tack"></i>
    <div class="print"><img src="/images/d17/apps-cases/hero-workshop-187638.jpg" alt="" /><span>The floor · machine-ready file</span></div></div>
  <div class="rline" aria-hidden="true">
    <svg viewBox="0 0 1064 64" preserveAspectRatio="none">
      <path class="m-draw" pathLength="1" d="M10 32 H532" fill="none" stroke="#8ECAE6" stroke-width="6" stroke-linecap="round" />
      <path class="m-draw" pathLength="1" style="animation-delay:.9s" d="M532 32 H1054" fill="none" stroke="#FFB703" stroke-width="6" stroke-linecap="round" />
    </svg>
    <i class="dot" style={{ left: '15.4%' }}></i><i class="dot" style={{ left: '50%' }}></i><i class="dot dot--a m-pop" style={{ left: '84.6%', animationDelay: '1.8s' }}></i>
    <span class="nomail"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="16" height="12" rx="2" /><path d="M2 6l8 5 8-5" /><path d="M1 18L19 2" stroke="#FFB703" stroke-width="2" /></svg>No email chain</span>
  </div>
  <div class="st t1"><span class="n">Station 01</span><h4>The vault</h4>
    <p>Every format, every version of every logo, with the thread library and colourways.</p></div>
  <div class="st t2"><span class="n">Station 02</span><h4>Customer proofing</h4>
    <p>The customer approves their own proof, recorded against the version they saw.</p></div>
  <div class="st st--end t3"><span class="n">Station 03</span><h4>Machine delivery</h4>
    <p>Native formats, DST as the fallback, hot folders for DTF and DTG.</p></div>
</div>
<div class="foot"><span class="k d17-mono">Vault · proof · floor</span><span class="d17-mark">decodedops.co.uk · DO-ART-945 · Rev 01</span></div>
` }} />
        </div>
      </section>

      {/* 3 · FOUNDING-CLIENT TERMS */}
      <section className="g-navy" id="terms">
        <div className="wrap">
          <p className="eyebrow">Said plainly</p>
          <h2>Built for one job: proving which version is real.</h2>

          <div className="panel" style={{ marginTop: 36, maxWidth: '78ch' }}>
            <h3>How Proof is priced right now</h3>
            <p>Proof runs on founding-client terms while the first names go on the reference list: full
              implementation pricing, with the first six months of support included at no extra cost,
              in exchange for being one of the first named references. That&rsquo;s the whole arrangement.
              It isn&rsquo;t a discount dressed as an offer, and it isn&rsquo;t a pilot you&rsquo;re paying to be part
              of. You get the implementation you paid for, and I get a name I can point at.</p>
          </div>

          <figure className="pull" style={{ marginTop: 44 }}>
            <cite>Craig Blackman &middot; Decoded Ops</cite>
          </figure>
        </div>
      </section>

      {/* 4 · COMPARISON TABLE */}
      <section className="g-white" id="pricing">
        <div className="wrap">
          <p className="eyebrow">What each tier covers</p>
          <h2>Two tiers. No third one hiding.</h2>

          <div className="inset">
            <b>Which tier fits depends on your setup.</b> Which formats, which machines, how many
            customers proofing. That gets worked out in conversation before anyone quotes a number.
          </div>

          <div className="table-wrap">
            <table className="ds-table">
              <caption>Decoded Proof</caption>
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Core</th>
                  <td className="scope">Vault, versioning, audit trail, thread library</td>
                </tr>
                <tr>
                  <th scope="row">Connected <span className="star">Most take this</span></th>
                  <td className="scope">Adds the customer proofing portal and machine delivery</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">There&rsquo;s no third tier for this product. If what you need is bigger
            than Connected, that&rsquo;s a different conversation and it starts with a Clarity Audit, not a
            tier list.</p>
          <p className="table-foot">What this costs depends on scope, so it&rsquo;s quoted once I know what your setup needs rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link href="/pricing" style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>
        </div>
      </section>

      {/* 5 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Talk about getting your artwork under control.</h2>
          <p className="lede">An hour on what you&rsquo;re running today, formats, machines and how proofing
            works now. If your artwork problem is smaller than this, I&rsquo;ll tell you that, and that&rsquo;s the
            end of it.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See the other systems</Link>
          </div>
        </div>
      </section>

      <D17Motion />
    </>
  );
}
