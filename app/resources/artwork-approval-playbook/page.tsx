import Link from 'next/link';
import { ArrowRight, CheckCircle2, Check } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

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
  title: 'Artwork Approval Playbook: Brief to Sign-Off | Decoded Ops',
  description: 'A 5-step artwork approval workflow for decoration businesses. Cut approval time to 24 hours with a structured brief, proof standard, and chase process.',
  alternates: { canonical: '/resources/artwork-approval-playbook' },
  openGraph: {
    type: 'website',
    title: 'Artwork Approval Playbook: Brief to Sign-Off | Decoded Ops',
    description: 'A 5-step artwork approval workflow for decoration businesses. Cut approval time to 24 hours with a structured brief, proof standard, and chase process.',
    url: 'https://decodedops.co.uk/resources/artwork-approval-playbook',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artwork Approval Playbook: Brief to Sign-Off | Decoded Ops',
    description: 'A 5-step artwork approval workflow for decoration businesses. Cut approval time to 24 hours with a structured brief, proof standard, and chase process.',
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
    a: 'Almost always because the brief at the start was incomplete. When colours, file format, placement, or sizing are not confirmed before artwork is created, the revision cycle begins. A brief template that collects all requirements upfront reduces revision rounds from 3-5 to 1 in most cases.',
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

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free resource</span>
          <h1>Artwork approval playbook</h1>
          <p className="lede">
            A 5-step workflow to take artwork approval from brief to sign-off in 24 hours. Structured brief, proof standard, automated chase, and production release.
          </p>
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
    </>
  );
}
