import Link from 'next/link';
import { ArrowRight, CheckCircle2, Check } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Artwork Approval Workflow: From Brief to Sign-Off in 24 Hours',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/artwork-approval-playbook',
    },
  ],
};

export const metadata = {
  title: 'Artwork Approval Workflow Playbook | Decoded Ops',
  description: 'A five-step artwork approval workflow playbook for decoration businesses. Cut approval time to 24 hours with a structured brief and chase process.',
  alternates: { canonical: '/resources/artwork-approval-playbook' },
  openGraph: {
    type: 'website',
    title: 'Artwork Approval Workflow Playbook | Decoded Ops',
    description: 'A five-step artwork approval workflow playbook for decoration businesses. Cut approval time to 24 hours with a structured brief and chase process.',
    url: 'https://decodedops.co.uk/resources/artwork-approval-playbook',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artwork Approval Workflow Playbook | Decoded Ops',
    description: 'A five-step artwork approval workflow playbook for decoration businesses. Cut approval time to 24 hours with a structured brief and chase process.',
    images: [OG_IMAGE_PATH],
  },
};

const briefFields = [
  { label: 'Logo file', detail: 'Vector preferred. If they only have a JPEG or PNG, note the resolution and flag if rework will be needed.' },
  { label: 'Colours', detail: 'Pantone references where possible. "Blue" is not a colour specification.' },
  { label: 'Size', detail: 'Exact dimensions or a size code from your standard sizing guide.' },
  { label: 'Position', detail: 'Left chest, centre back, sleeve - with your standard placement reference to remove ambiguity.' },
  { label: 'Garment details', detail: 'Colour, fabric, any features near the print area (pockets, seams, buttons).' },
  { label: 'Decoration method', detail: 'Embroidery, screen print, heat transfer, DTG - confirmed, not assumed.' },
];

const proofItems = [
  'The design as it will appear on the garment - correct size, position, and colour',
  'The garment colour and style confirmed',
  'A measurement reference if size is part of the specification',
  'A clear approval request with a deadline: "Please approve or request changes by [date]. We cannot proceed to production without written confirmation."',
  'Two clear options: approve as shown, or request specific changes',
];

const faqs = [
  {
    q: 'Why does artwork approval take so long?',
    a: 'Almost always because the brief at the start was incomplete. When colours, file format, placement, or sizing are not confirmed before artwork is created, the revision cycle begins. A brief template that collects all requirements upfront dramatically reduces revision rounds.',
  },
  {
    q: 'What should an artwork approval proof include?',
    a: 'The design as it will appear on the garment, a clear approval request with a deadline, and two simple actions: approve as shown, or request specific changes. Ambiguous proofs generate ambiguous responses.',
  },
  {
    q: 'Can artwork approval be automated?',
    a: 'Yes. Production management platforms include proof delivery and tracked sign-off. The customer approves via a link; the sign-off is recorded and production is triggered automatically. For businesses processing 20+ jobs per week, this is worth implementing.',
  },
];

export default function ArtworkApprovalPlaybookPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* HERO — rt-split: copy left, DO-ART-989 right */}
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Free resource</span>
            <h1>Artwork approval playbook</h1>
            <p className="lede">
              A 5-step workflow to take artwork approval from brief to sign-off in 24 hours. Structured brief, proof standard, automated chase, and production release.
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a989" data-od-id="hero-art" data-motion data-no="DO-ART-989" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-989. Two documents for one example job over a graded photograph of a folded polo. The artwork brief, all six fields confirmed: logo file, vector; colours, Pantone references; size, 90 millimetres wide; position, left chest; garment, stone polo; method, embroidery. The proof: the design drawn on the garment at size and position, a clear request to approve or request changes by five tomorrow, two buttons, approve as shown or request changes, and an amber stamp: approved, released to production. Brief complete, one round, signed off.">
  <div class="d17-ph"><img src="/images/d17/resources/prod-polo-5947fe.webp" alt="" width="900" height="905"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Artwork approval</span><span>Example job</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-br m-drop" style="animation-delay:.05s">
      <span class="tab">01</span>
      <span class="ref">Artwork brief</span>
      <h4>All six confirmed</h4>
      <ul class="tl">
        <li><i class="y"></i><span>Logo file <em>Vector</em></span></li>
        <li><i class="y"></i><span>Colours <em>Pantone refs</em></span></li>
        <li><i class="y"></i><span>Size <em>90 mm wide</em></span></li>
        <li><i class="y"></i><span>Position <em>Left chest</em></span></li>
        <li><i class="y"></i><span>Garment <em>Stone polo</em></span></li>
        <li><i class="y"></i><span>Method <em>Embroidery</em></span></li>
      </ul>
    </div>
    <div class="d17-doc doc-pf m-drop" style="animation-delay:.4s">
      <span class="tab">03</span>
      <span class="ref">Proof · rev 1</span>
      <svg class="pf-shirt" viewBox="0 0 200 150"><path d="M62 14 L82 8 Q100 22 118 8 L138 14 L176 38 L162 66 L146 58 L146 142 L54 142 L54 58 L38 66 L24 38 Z"/><rect class="lg" x="116" y="42" width="22" height="12" rx="2"/><path class="dim" d="M116 62 H138 M116 59 V65 M138 59 V65"/><text x="127" y="75">90 mm</text></svg>
      <p class="ask">Please approve or request changes <b>by 17:00 tomorrow.</b></p>
      <div class="opts"><span class="ok">Approve as shown</span><span>Request changes</span></div>
    </div>
    <div class="rt-stamp m-pop" style="animation-delay:1.2s">Approved<small>Released to production</small></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Brief complete. <em>One round. Signed off.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-989 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 inline artwork DO-ART-990 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a990" data-od-id="plate-route" data-motion data-no="DO-ART-990" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-990, where the time goes. Started without a brief, the job loops: proof, changes, proof, changes, proof, and the time goes in the waiting between rounds, drawn hatched. Run to the playbook it is one line, in amber, inside 24 hours: one, the brief; two, artwork to a standard; three, the proof with a deadline; four, an automatic chase at 24 hours; five, sign-off releases the job to production.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sw-cap">
    <p class="k d17-mono">Artwork approval <span>· two routes</span></p>
    <div class="bar" aria-hidden="true"></div>
    <h3>The time goes in the gaps, not the artwork.</h3>
    <p>Every missing detail in the brief adds a round trip. Confirm it first and the route is a straight line.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-990 · Rev 01</span>
  </div>
  <div class="dw" aria-hidden="true">
    <svg class="q v-wide" viewBox="0 0 760 410">
      <defs>
        <pattern id="h990" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#023047" fill-opacity=".5"/><path d="M0 0 V10" stroke="#8ECAE6" stroke-opacity=".4" stroke-width="1.4"/></pattern>
      </defs>
      <text class="t-m" x="0" y="22">Started without a brief</text>
      <g>
        <rect class="bx" x="0" y="42" width="92" height="48" rx="6"/><text class="t" x="16" y="72">Proof</text>
        <rect x="92" y="54" width="44" height="24" fill="url(#h990)"/>
        <rect class="bx" x="136" y="42" width="92" height="48" rx="6"/><text class="t" x="148" y="72">Changes</text>
        <rect x="228" y="54" width="44" height="24" fill="url(#h990)"/>
        <rect class="bx" x="272" y="42" width="92" height="48" rx="6"/><text class="t" x="288" y="72">Proof</text>
        <rect x="364" y="54" width="44" height="24" fill="url(#h990)"/>
        <rect class="bx" x="408" y="42" width="92" height="48" rx="6"/><text class="t" x="420" y="72">Changes</text>
        <rect x="500" y="54" width="44" height="24" fill="url(#h990)"/>
        <rect class="bx" x="544" y="42" width="92" height="48" rx="6"/><text class="t" x="560" y="72">Proof</text>
        <path class="ln-d" d="M636 66 H700"/><text class="t-h" x="708" y="75">?</text>
        <text class="t-d" x="96" y="116">waiting</text><text class="t-d" x="232" y="116">waiting</text><text class="t-d" x="368" y="116">waiting</text><text class="t-d" x="504" y="116">waiting</text>
      </g>
      <text class="t-m t-a" x="0" y="196">Run to the playbook · inside 24 hours</text>
      <path class="ln-f" d="M40 226 V218 H700 V226"/>
      <path class="ln-a m-draw" pathLength="1" d="M40 280 H700" style="stroke-width:5"/>
      <g class="m-fade">
        <circle class="f-a" cx="40" cy="280" r="11"/><circle class="f-a" cx="205" cy="280" r="11"/><circle class="f-a" cx="370" cy="280" r="11"/><circle class="f-a" cx="535" cy="280" r="11"/><circle class="f-a" cx="700" cy="280" r="13"/>
      </g>
      <g>
        <text class="t-m" x="4" y="324">01</text><text class="t" x="4" y="350">The brief</text><text class="t-d" x="4" y="374">six fields</text>
        <text class="t-m" x="169" y="324">02</text><text class="t" x="169" y="350">To a standard</text><text class="t-d" x="169" y="374">same every time</text>
        <text class="t-m" x="334" y="324">03</text><text class="t" x="334" y="350">The proof</text><text class="t-d" x="334" y="374">with a deadline</text>
        <text class="t-m" x="499" y="324">04</text><text class="t" x="499" y="350">Auto chase</text><text class="t-d" x="499" y="374">at 24 hours</text>
        <text class="t-m t-a" x="640" y="324">05</text><text class="t t-a" x="640" y="350">Released</text><text class="t-d" x="640" y="374">sign-off triggers it</text>
      </g>
    </svg>
    <svg class="q v-tall" viewBox="0 0 340 600">
      <defs>
        <pattern id="h990t" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#023047" fill-opacity=".5"/><path d="M0 0 V10" stroke="#8ECAE6" stroke-opacity=".4" stroke-width="1.4"/></pattern>
      </defs>
      <text class="t-m" x="0" y="18">Started without a brief</text>
      <rect class="bx" x="0" y="34" width="96" height="44" rx="6"/><text class="t" x="14" y="62">Proof</text>
      <rect x="96" y="46" width="26" height="20" fill="url(#h990t)"/>
      <rect class="bx" x="122" y="34" width="96" height="44" rx="6"/><text class="t" x="132" y="62">Changes</text>
      <rect x="218" y="46" width="26" height="20" fill="url(#h990t)"/>
      <rect class="bx" x="244" y="34" width="96" height="44" rx="6"/><text class="t" x="258" y="62">Proof</text>
      <text class="t-d" x="0" y="104">round after round, waiting between</text>
      <text class="t-m t-a" x="0" y="160">Run to the playbook · 24 hours</text>
      <path class="ln-a" d="M22 190 V560" style="stroke-width:5"/>
      <circle class="f-a" cx="22" cy="196" r="10"/><circle class="f-a" cx="22" cy="286" r="10"/><circle class="f-a" cx="22" cy="376" r="10"/><circle class="f-a" cx="22" cy="466" r="10"/><circle class="f-a" cx="22" cy="556" r="12"/>
      <text class="t-m" x="52" y="190">01</text><text class="t" x="52" y="214">The brief, six fields</text>
      <text class="t-m" x="52" y="280">02</text><text class="t" x="52" y="304">Artwork to a standard</text>
      <text class="t-m" x="52" y="370">03</text><text class="t" x="52" y="394">Proof with a deadline</text>
      <text class="t-m" x="52" y="460">04</text><text class="t" x="52" y="484">Auto chase at 24 hours</text>
      <text class="t-m t-a" x="52" y="550">05</text><text class="t t-a" x="52" y="574">Sign-off releases it</text>
    </svg>
  </div>
</figure>` }} />
        </div>
      </section>

      <section className="g-off section--tight">
        <div className="wrap" style={{ maxWidth: 720 }}>

          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)', marginBottom: 64 }}>
            <h2>Where the time actually goes</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Artwork approval is the single biggest schedule killer in most decoration businesses. Not because customers are difficult. Not because the artwork is complicated. Because the process starts without enough information, and every gap in that information adds a round trip to a process that should be linear.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
              The time is going in the gaps between rounds - not in the artwork creation itself. And most of those rounds exist because the requirements were not confirmed before work started.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--do-border-subtle)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: 'var(--do-cerulean)', color: 'white', fontWeight: 700, fontSize: 'var(--do-text-sm)' }}>1</span>
              <h2>The artwork brief</h2>
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              The brief is where most of the time is saved or lost. If you start artwork without a completed brief, you are accepting the revision cycle as an inevitable part of the process. It is not.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              A brief template that every order passes through before artwork is started should capture:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
              {briefFields.map((field) => (
                <div key={field.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: 16, borderRadius: 'var(--do-radius-lg)', background: 'var(--do-off-white)' }}>
                  <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: 2, color: 'var(--do-cerulean)' }} />
                  <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
                    <strong style={{ color: 'var(--do-text-primary)' }}>{field.label}</strong> - {field.detail}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginTop: 20, fontWeight: 500 }}>
              If any of these are missing, the brief goes back before artwork is started. Not after.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--do-border-subtle)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: 'var(--do-cerulean)', color: 'white', fontWeight: 700, fontSize: 'var(--do-text-sm)' }}>2</span>
              <h2>Artwork creation with a standard</h2>
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Once the brief is complete, artwork is created against a documented standard - not to whatever the individual artist thinks looks right.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              That standard includes: the templates you use for each garment type, the font rules if the design includes text, how you represent the garment in the proof (flat render, photographic mock-up, or simple line drawing), and what the proof document itself should contain before it is sent.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Without a standard, two people creating proofs for the same type of job will produce different-looking documents. Customers who have seen one format get confused by another. Consistency reduces the customer&apos;s cognitive load and speeds sign-off.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--do-border-subtle)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: 'var(--do-cerulean)', color: 'white', fontWeight: 700, fontSize: 'var(--do-text-sm)' }}>3</span>
              <h2>The proof</h2>
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              A proof that gets signed off quickly is one that leaves nothing open to interpretation. It should show:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
              {proofItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: 2, color: 'var(--do-cerulean)' }} />
                  <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginTop: 20 }}>
              The deadline is important. Proofs sent without a deadline have no urgency. Proofs sent with &quot;please confirm by 5pm tomorrow&quot; get responses faster - because the customer understands what happens if they do not.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--do-border-subtle)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: 'var(--do-cerulean)', color: 'white', fontWeight: 700, fontSize: 'var(--do-text-sm)' }}>4</span>
              <h2>Managing the response</h2>
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              The most common failure point in approval workflows is what happens after the proof is sent. The ball is in the customer&apos;s court - and nobody is tracking whether it comes back.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Your system should flag a proof as awaiting sign-off the moment it is sent, and trigger an automatic chase if no response is received within a defined window - typically 24 hours. That chase is a reminder, not a complaint: &quot;Just checking you have received the artwork for your order - please let us know if you have any questions.&quot;
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              The alternative - relying on someone to remember to chase - produces inconsistent results and lost days when people are busy.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--do-border-subtle)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: 'var(--do-cerulean)', color: 'white', fontWeight: 700, fontSize: 'var(--do-text-sm)' }}>5</span>
              <h2>Sign-off to production release</h2>
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              When sign-off arrives, the job should move to production without an additional decision point. Sign-off is the trigger - not a signal for someone to manually review the approval and decide whether to release the job.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              In a properly structured workflow, sign-off updates the order status automatically, the production queue is updated, and the relevant team is notified. The customer&apos;s reply to a proof email is not the end of the process - it is the start of the production process.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>Automating the workflow</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Several production management platforms include proof delivery and sign-off tracking as standard features. The customer receives a link, views the proof on a web page, and clicks to approve or request changes. The sign-off is recorded with a timestamp. Production can be triggered automatically.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              This eliminates the email thread, creates an audit trail, and removes the manual step of checking whether a proof has been approved before releasing a job. For businesses processing more than 20-30 jobs per week, it is worth implementing.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              For smaller operations, a structured email template with a clear approval link and a tracked chase sequence achieves most of the same result without a platform investment.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>Common questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 style={{ fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 8 }}>{faq.q}</h3>
                  <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="g-tint" style={{ borderRadius: 'var(--do-radius-2xl)', padding: 32, marginBottom: 64 }}>
            <h2>Key takeaways</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  The brief is where most time is saved or lost. Never start artwork without a completed brief.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Proofs need a deadline and two clear options: approve or request changes. Ambiguous proofs generate ambiguous responses.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Chase automatically if no response within 24 hours. Relying on memory produces inconsistent results.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Sign-off should trigger production automatically. No second decision point.
                </p>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)' }}>
            <h3>Once your artwork workflow is structured...</h3>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              The real value comes when artwork approval connects to production scheduling, costing, and despatch without manual handoffs. That is what a Clarity engagement maps out across your whole operation.
            </p>
            <div className="btn-row" style={{ margin: 0, marginBottom: 12 }}>
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="btn btn--outline">
                See what an audit covers
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-cerulean)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
          </div>

        </div>
      </section>
      <D17Motion />
    </>
  );
}
