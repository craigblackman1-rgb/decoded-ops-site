import Link from 'next/link';
import { ArrowRight, Download, Check, Languages, FileText, UserCheck, CalendarClock, PackageCheck, ShieldCheck } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { ThreeLayerSchematic } from '@/components/schematics/ThreeLayerSchematic';
import { SinglePointSchematic } from '@/components/schematics/SinglePointSchematic';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'The Decoded Method',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/decoded-method',
    },
  ],
};

export const metadata = {
  title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
  description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
  alternates: { canonical: '/resources/decoded-method' },
  openGraph: {
    type: 'website',
    title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
    description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
    url: 'https://decodedops.co.uk/resources/decoded-method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
    description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
  },
};

const principles = [
  'Plain English. If the least experienced person can\'t follow it without asking, it\'s still a draft.',
  'One page per process. If it needs more than a page, split it.',
  'Owner on everything. One named person. Not a team.',
  'Reviewed regularly. Quarterly for most; at each milestone for active builds.',
  'Delivery-linked. Every system handed over ships with its process pack. Handover is never verbal-only.',
  'ISO-ready, not ISO-burdened. Maps to ISO 9001 principles, without the certification weight.',
];

const processRegister = [
  { ref: 'DO-PR-001', process: 'Clarity Audit', status: 'active' },
  { ref: 'DO-PR-002', process: 'Clarity Audit & Report', status: 'active' },
  { ref: 'DO-PR-003', process: 'New Client Onboarding', status: 'active' },
  { ref: 'DO-PR-004', process: 'Proposal Build & Sign-off', status: 'active' },
  { ref: 'DO-PR-005', process: 'App Requirements Capture', status: 'active' },
  { ref: 'DO-PR-006', process: 'ERP/eCommerce Integration Scoping', status: 'active' },
  { ref: 'DO-PR-007', process: 'Monthly Retained Review', status: 'active' },
  { ref: 'DO-PR-008', process: 'Invoice & Billing Cycle', status: 'active' },
  { ref: 'DO-PR-009', process: 'Client Handover & Sign-off', status: 'draft' },
  { ref: 'DO-PR-010', process: 'Process Pack Production', status: 'draft' },
  { ref: 'DO-PR-011', process: 'LinkedIn Content Publishing', status: 'review' },
  { ref: 'DO-PR-012', process: 'Sub-contractor Engagement', status: 'draft' },
];

const layers = [
  {
    n: '01', name: 'The Process Register', accent: '#219EBC',
    blurb: "The spine. One row per process: what it's called, who owns it, and when it was last looked at. Often the first time a business has everything it does written down in one place.",
    fields: [
      ['Ref', 'a short code, e.g. TB-PR-001'],
      ['Owner', 'one named person, never "the team"'],
      ['Category', 'Delivery, Sales, Admin, Finance, Marketing, or Tech'],
      ['Status', 'active, draft, review, or archived'],
      ['Last reviewed', 'the month it was last checked'],
    ],
  },
  {
    n: '02', name: 'The SOPs', accent: '#8ECAE6',
    blurb: "The how-to layer. One page per process, a hard limit. If it needs more than a page, it's two processes, not one. Five sections, no more, no fewer.",
    fields: [
      ['What this process does', 'one sentence: what it produces and why it exists'],
      ['Trigger', 'the specific event that starts it, never "when needed"'],
      ['Steps', 'numbered, plain English, actionable'],
      ['What good looks like', 'a measurable outcome, so you know it worked'],
      ['AI skills', 'which tools to reach for, and in what order'],
    ],
  },
  {
    n: '03', name: 'The Improvement Log', accent: '#FFB703',
    blurb: "The Kaizen layer. When something breaks or gets better, you log it in three fields, nothing more. Every entry points back to the process it changed, so the register stays honest over time.",
    fields: [
      ['What broke', 'what was failing, inconsistent, or slow'],
      ['What changed', 'what you actually altered'],
      ['Result', 'what improved, and how you know'],
    ],
  },
];

const statusStyle: Record<string, string> = {
  active: 'bg-[#219EBC] text-white',
  draft: 'bg-[#8ECAE6] text-[#023047]',
  review: 'bg-[#FFB703] text-[#023047]',
};

export default function DecodedMethodPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free playbook</span>
          <h1>The Decoded Method</h1>
          <p className="lede">
            A three-layer system for documenting how your business actually runs. Plain English, one page per process, built to be handed over instead of held in one person&apos;s head.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <a href="/downloads/decoded-method.pdf" download className="btn btn--primary">
              <Download size={18} /> Download the playbook
            </a>
            <Link href="/clarity" className="btn btn--outline">
              See what Clarity covers
            </Link>
          </div>
          <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)', marginTop: 12 }}>7-page PDF. No email required.</p>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2>Why most process documentation fails</h2>
          <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
            Most businesses keep their processes in one place: someone&apos;s head. It works, right up until that person is on holiday, off sick, or leaves. Then the process leaves with them, and everyone else is guessing.
          </p>
          <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
            The usual fix is a giant quality manual. That fails for the opposite reason: it&apos;s too long to keep up to date, so it goes stale, and once it&apos;s stale nobody trusts it.
          </p>
          <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
            The Decoded Method is the middle path. ISO 9001 principles without the ISO overhead. A continuous improvement habit without the ceremony. Lean enough to actually keep alive.
          </p>
          <div style={{ marginTop: 32, borderRadius: 'var(--do-radius-2xl)', overflow: 'hidden', border: '1px solid var(--do-border-subtle)' }}>
            <SinglePointSchematic tone="light" />
          </div>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <h2>Three layers, each with a job</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 70%, transparent)' }}>
              Together they make a system you can hand to a new starter and trust them to follow. Here is how the three layers connect.
            </p>
          </div>

          <div style={{ marginTop: 48, borderRadius: 'var(--do-radius-2xl)', overflow: 'hidden', border: '1px solid var(--do-border-subtle)' }}>
            <ThreeLayerSchematic tone="dark" />
          </div>

          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
            {layers.map((layer) => (
              <div key={layer.n}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 'var(--do-radius-xl)', background: 'var(--do-prussian-blue)', color: 'white', fontWeight: 800, boxShadow: `inset 4px 0 0 ${layer.accent}` }}>{layer.n}</span>
                  <h3 style={{ fontSize: 'var(--do-text-xl)', fontWeight: 700, color: 'var(--do-text-primary)' }}>{layer.name}</h3>
                </div>
                <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 75%, transparent)', marginTop: 16 }}>{layer.blurb}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
                  {layer.fields.map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', gap: 10, fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
                      <Check size={16} style={{ flexShrink: 0, marginTop: 2, color: 'var(--do-cerulean)' }} />
                      <span><strong style={{ color: 'var(--do-text-primary)' }}>{k}</strong> - {v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="g-tint">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2>The six principles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 40 }}>
            {principles.map((p, i) => {
              const [head, ...rest] = p.split('. ');
              const Icon = [Languages, FileText, UserCheck, CalendarClock, PackageCheck, ShieldCheck][i];
              return (
                <div key={i} style={{ padding: 24, borderRadius: 'var(--do-radius-xl)', background: 'white', borderLeft: '4px solid var(--do-cerulean)', border: '1px solid var(--do-border-subtle)', borderLeftWidth: 4, borderLeftColor: 'var(--do-cerulean)', display: 'flex', gap: 16 }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 'var(--do-radius-lg)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} style={{ color: 'var(--do-cerulean)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--do-text-primary)', margin: 0 }}>{head}.</h3>
                    <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 70%, transparent)', marginTop: 6 }}>{rest.join('. ')}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2>The register we run Decoded Ops on</h2>
          <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 70%, transparent)', marginBottom: 40 }}>
            Twelve processes, each owned, each with a status. The same artefact a Clarity engagement produces for a client, usually the first time they&apos;ve seen their whole operation on one page.
          </p>
          <div style={{ borderRadius: 'var(--do-radius-2xl)', overflow: 'hidden', border: '1px solid var(--do-border-subtle)' }}>
            <table style={{ width: '100%', fontSize: 'var(--do-text-sm)', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--do-prussian-blue)', color: 'white' }}>
                  <th style={{ textAlign: 'left', fontWeight: 600, padding: '14px 20px', width: 128 }}>Ref</th>
                  <th style={{ textAlign: 'left', fontWeight: 600, padding: '14px 20px' }}>Process</th>
                  <th style={{ textAlign: 'left', fontWeight: 600, padding: '14px 20px', width: 112 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {processRegister.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? 'var(--do-off-white)' : 'white' }}>
                    <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--do-text-primary)' }}>{row.ref}</td>
                    <td style={{ padding: '12px 20px', color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>{row.process}</td>
                    <td style={{ padding: '12px 20px' }}>
                      <span className={statusStyle[row.status]} style={{ padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)' }}>
            <h3>Get the whole playbook, free</h3>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Seven pages: the three layers with worked examples, the six principles, and a self-assessment scorecard to see where your operation stands right now. No email required.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
              <a href="/downloads/decoded-method.pdf" download className="btn btn--primary">
                <Download size={18} /> Download the playbook
              </a>
              <Link href="/contact" className="btn btn--outline">
                Book a discovery call
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-cerulean)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
            <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 60%, transparent)', marginTop: 20, marginBottom: 0 }}>
              Want it run across your own operation? A Clarity engagement builds your Process Register with you, mapping what you do, who owns it, and where the gaps are. Retained clients get the Method as a living hub I host and keep current, not a document that goes stale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
