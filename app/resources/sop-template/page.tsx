import Link from 'next/link';
import { ArrowRight, CheckCircle2, Check } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Standard Operating Procedures for Decorated Goods Businesses',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/sop-template',
    },
  ],
};

export const metadata = {
  title: 'Free SOP Template for Decorated Goods | Decoded Ops',
  description: 'A free SOP template for garment decoration, print, and embroidery businesses. Includes a 7-step writing method, Process Register, and Improvement Log.',
  alternates: { canonical: '/resources/sop-template' },
  openGraph: {
    type: 'website',
    title: 'Free SOP Template for Decorated Goods | Decoded Ops',
    description: 'A free SOP template for garment decoration, print, and embroidery businesses. Includes a 7-step writing method, Process Register, and Improvement Log.',
    url: 'https://decodedops.co.uk/resources/sop-template',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SOP Template for Decorated Goods | Decoded Ops',
    description: 'A free SOP template for garment decoration, print, and embroidery businesses. Includes a 7-step writing method, Process Register, and Improvement Log.',
  },
};

const layers = [
  {
    n: '01', name: 'The Process Register', accent: '#219EBC',
    blurb: 'A map of every process in your business. Not the detailed steps, just what exists and how the processes connect. Order intake feeds into artwork approval, which feeds into production scheduling, which feeds into decoration, which feeds into QC and despatch.',
  },
  {
    n: '02', name: 'The SOPs', accent: '#8ECAE6',
    blurb: 'Detailed instructions for each process in the register. How to take an order. How to approve artwork. How to set up the heat press for a specific garment type. Each SOP is a standalone document someone can pick up and follow.',
  },
  {
    n: '03', name: 'The Improvement Log', accent: '#FFB703',
    blurb: 'Where you track changes. When someone finds a better way to do something, they update the SOP and log it here, so the system stays current instead of turning into a museum piece that gets outdated and ignored.',
  },
];

const steps = [
  { n: '1', title: 'Pick the right process to start with', body: 'Do not try to document everything at once. Pick the process that would cause the most damage if the person who does it was unavailable. For most businesses, that is order intake or production scheduling. Start there.' },
  { n: '2', title: 'Watch someone do it', body: 'Sit with the person who does the task. Watch them do it from start to finish. Do not ask them to explain it while they work, just watch. Then ask them to talk through it while you take notes. You will catch things in the watching that they forget to mention in the explaining.' },
  { n: '3', title: 'Write the steps in order', body: 'Write down every step in the sequence it happens. Do not assume anything is obvious. If they check a specific field in the system before proceeding, that is a step. If they call a supplier to confirm stock before placing an order, that is a step.' },
  { n: '4', title: 'Note the exceptions', body: 'Every process has exceptions. What happens if the customer requests a decoration method the shop does not offer? What happens if the stock is not available? What happens if the artwork file is the wrong format? Document these branches. They are where most errors happen.' },
  { n: '5', title: 'Review with the team', body: 'Show the draft SOP to the person who does the job and ask: is this right? Then show it to someone who does not do the job and ask: could you follow this? If the answer to either is no, revise it. The goal is accuracy and clarity, not perfection.' },
  { n: '6', title: 'Test it in production', body: 'The next time the task comes up, have someone who is not the usual person follow the SOP. If they can complete the task correctly using only the document, it works. If they get stuck, revise the SOP based on where they got stuck.' },
  { n: '7', title: 'Set a review date', body: 'An SOP that is not reviewed becomes outdated. Set a 6-month review cycle. When the process changes, update the SOP and log it in the Improvement Log. This keeps the system alive.' },
];

const templateContents = [
  'A structured document with sections for process name, owner, inputs, step-by-step procedure, exception handling, and review date.',
  'Prompts and examples filled in for the most common processes: order intake, artwork approval, heat press setup, embroidery machine setup, quality control inspection, and despatch.',
  'A one-page Process Register template to map your overall operation.',
  'An Improvement Log template to track changes over time.',
];

export default function SopTemplatePage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free resource</span>
          <h1>SOP template for decorated goods businesses</h1>
          <p className="lede">
            A free template and 7-step method for writing Standard Operating Procedures that your team can actually follow. Built for garment decoration, print, and embroidery businesses.
          </p>
        </div>
      </section>

      <section className="g-off section--tight">
        <div className="wrap" style={{ maxWidth: 720 }}>

          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: 64 }}>
            <h2>What the template includes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {templateContents.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                  <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 16, fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 60%, transparent)', marginBottom: 0 }}>
              The template takes about 30 minutes to fill in for your first process. Subsequent processes take less time because you are reusing the structure.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>What an SOP actually is</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              A Standard Operating Procedure is a written document that tells someone exactly how to do a specific task, in the right order, every time.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Not a textbook definition, not a quality manual gathering dust on a shelf. A working document someone on your team can pick up and follow, even when the person who normally does the job is off sick.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              An SOP answers three questions: Who does this task? What do they need before they start? What do they do, step by step? If your SOP answers all three, it works.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>Why decorated goods businesses specifically need SOPs</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Every order in garment decoration, print, and embroidery is potentially different. The customer wants a specific garment, a specific decoration method, a specific placement, a specific thread colour, a specific delivery date. Production sits between order and despatch. That middle section is where things go wrong.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Generic technology advice or off-the-shelf procedures do not help here because your operation is not generic. It is built around the specific combination of machines, materials, supplier relationships, and customer expectations that make your business work.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              I worked with a decorated goods business where the entire production schedule lived in the office manager&apos;s head. That person had been there 18 years. When they went on holiday, production slowed by 40%. Nobody knew why. The knowledge was not documented anywhere. The cost of that single undocumented role showed up every time they took leave. The cost of documenting the key processes was about two days of my time.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>The three documents that matter</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              An SOP does not exist in isolation. It is part of a three-layer system I call the Decoded Method. Every engagement I run builds this system.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {layers.map((layer) => (
                <div key={layer.n} style={{ padding: 24, borderRadius: 'var(--do-radius-xl)', background: 'var(--do-off-white)', borderLeft: `4px solid ${layer.accent}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 'var(--do-radius-lg)', background: 'var(--do-prussian-blue)', color: 'white', fontSize: 'var(--do-text-sm)', fontWeight: 800 }}>{layer.n}</span>
                    <h3 style={{ fontSize: 'var(--do-text-lg)', fontWeight: 700, color: 'var(--do-text-primary)', margin: 0 }}>{layer.name}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 75%, transparent)', marginBottom: 0 }}>{layer.blurb}</p>
                </div>
              ))}
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginTop: 24 }}>
              The order matters. You cannot write good SOPs until you know what processes you have. You cannot improve processes until they are documented. Document what exists, then improve it, then maintain it.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>How to write an SOP: step by step</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              Here is the practical method I use with every client. It works for any process in a decorated goods business.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {steps.map((step) => (
                <div key={step.n} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: 'var(--do-cerulean)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 'var(--do-text-sm)' }}>{step.n}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 4 }}>{step.title}</h3>
                    <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 75%, transparent)', marginBottom: 0 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>Why this matters more than ever</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              The businesses that will get the most value from AI, automation, and new systems in the next few years are the ones doing the boring stuff now. Documenting their processes. Cleaning their data. Connecting their systems.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              AI amplifies whatever is already there. Feed it undocumented processes held together by one or two people, and it just makes the chaos faster. Feed it documented, structured operations, and it makes those better and faster too.
            </p>
          </div>

          <div className="g-tint" style={{ borderRadius: 'var(--do-radius-2xl)', padding: 32, marginBottom: 64 }}>
            <h2>Key takeaways</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Start with the process that would cause the most damage if the person who does it was unavailable. That is where the risk is.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  One page per process. If it needs more than a page, split it into two processes.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Test every SOP with someone who does not normally do the job. If they get stuck, the SOP is the problem, not the person.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Set a 6-month review cycle. An SOP that is not reviewed becomes outdated and ignored.
                </p>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)' }}>
            <h3>Once you have your first SOPs written...</h3>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              The real value comes when every process in your business is documented, owned, and reviewed regularly. A Clarity engagement builds the full three-layer system with you, mapping what you do, who owns it, and where the gaps are.
            </p>
            <div className="btn-row" style={{ margin: 0, marginBottom: 12 }}>
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="btn btn--outline">
                See what Clarity covers
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-cerulean)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
          </div>

        </div>
      </section>
    </>
  );
}
