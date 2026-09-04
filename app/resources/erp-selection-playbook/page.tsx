import Link from 'next/link';
import { ArrowRight, CheckCircle2, Check, AlertTriangle } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'ERP Selection for Decorated Goods: A Plain-English Buying Guide',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/erp-selection-playbook',
    },
  ],
};

export const metadata = {
  title: 'ERP Selection Guide for Decorated Goods | Decoded Ops',
  description: 'A plain-English ERP guide for decorated goods: what it is, when you need it, how to choose, and the pitfalls specific to garment decoration.',
  alternates: { canonical: '/resources/erp-selection-playbook' },
  openGraph: {
    type: 'website',
    title: 'ERP Selection Guide for Decorated Goods | Decoded Ops',
    description: 'A plain-English ERP guide for decorated goods: what it is, when you need it, how to choose, and the pitfalls specific to garment decoration.',
    url: 'https://decodedops.co.uk/resources/erp-selection-playbook',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Selection Guide for Decorated Goods | Decoded Ops',
    description: 'A plain-English ERP guide for decorated goods: what it is, when you need it, how to choose, and the pitfalls specific to garment decoration.',
  },
};

const erpCapabilities = [
  'Stock is checked and reserved automatically',
  'Production is scheduled based on available capacity',
  'Purchase orders are raised if materials need ordering',
  'The customer gets a delivery date based on real data',
  'Invoicing happens from the same order record',
];

const dontNeed = [
  'You process fewer than 20 orders per day',
  'Your product range is small enough that one person can hold it in their head',
  'Your current setup (spreadsheets + accounting software + a basic website) is not causing errors or delays',
  'You are not planning significant growth',
];

const doNeed = [
  'Orders are being re-keyed between systems',
  'Stock accuracy is below 90%',
  'You cannot give customers accurate delivery dates',
  'Month-end takes days of manual reconciliation',
  'You are adding staff but not increasing output per person',
  'You want to grow but the current operation cannot handle more volume',
];

const warningSigns = [
  { label: 'Buying an ERP before an audit', detail: 'You need to understand your current operation before you can specify what a new system needs to do.' },
  { label: 'Letting the vendor scope their own implementation', detail: 'They will scope for the software, not for your business.' },
  { label: 'Choosing based on a demo', detail: 'Demos show what the software does well, not where the gaps are for your specific business model.' },
  { label: 'Underestimating data migration', detail: 'Most implementation failures trace back to data quality, not software capability.' },
];

const systems = [
  { name: 'OrderWise', strength: 'Strong for wholesale and distribution', weakness: 'Gaps in mixed decoration methods' },
  { name: 'Panta ERP', strength: 'Built for garment decoration, strong on production workflow', weakness: 'Limited eCommerce integration' },
  { name: 'DecoNetwork', strength: 'Strong on eCommerce and decoration management', weakness: 'Weaker on financial controls' },
  { name: 'ShirtWorks', strength: 'Sector-specific MIS, strong on screen print workflow', weakness: '' },
  { name: 'Cin7', strength: 'Inventory-focused', weakness: 'Requires middleware for decoration-specific workflows' },
];

const selectionSteps = [
  { n: '1', title: 'Audit first', body: 'Understand your current processes and costs before specifying requirements.' },
  { n: '2', title: 'Write the brief', body: 'Your requirements, structured for vendor evaluation. Your order types, decoration methods, production workflows, integration requirements, and data volumes.' },
  { n: '3', title: 'Approach vendors', body: 'Manage the process, not the other way around.' },
  { n: '4', title: 'Evaluate on a like-for-like basis', body: 'Compare responses against your written brief.' },
  { n: '5', title: 'Negotiate with independent support', body: 'Pricing, scope, and commercial terms reviewed by someone who has done it before.' },
];

const pitfalls = [
  {
    title: 'Buying a system designed for the wrong decoration mix',
    body: 'An ERP that works brilliantly for a screen print shop will fail in a business that runs embroidery and DTG alongside screen printing - because the production workflow, costing logic, and scheduling constraints are fundamentally different for each method. Some of the most expensive ERP mistakes I have seen came from businesses that bought a system optimised for one decoration method while running three.',
  },
  {
    title: 'Assuming the system handles artwork management',
    body: 'Most general ERPs do not. They might store a file attachment against an order, but they will not manage the approval loop, the revision history, or the handoff between customer sign-off and production. If you process more than 20 artwork files per day, an ERP without artwork workflow will create a manual overhead that erodes every efficiency gain the system was supposed to deliver.',
  },
  {
    title: 'Ignoring the B2B portal requirement',
    body: 'If your wholesale or corporate customers place orders through a portal, the ERP must either include a portal or integrate cleanly with one. Post-selection portal integration is expensive, brittle, and often delayed. The portal question should be on the vendor brief, not discovered after the contract is signed.',
  },
  {
    title: 'Confusing stock management with supply chain visibility',
    body: 'An ERP that tracks finished goods inventory does not automatically give you visibility of incoming blank stock, work-in-progress, or supplier lead times. For a garment decoration business, the gap between what is on order and what is on the shelf is where the operational risk lives.',
  },
];

const preparation = [
  {
    title: 'Get your data clean',
    body: 'Your current stock records, product codes, customer lists, and supplier terms are the foundation your ERP will be built on. If the data in your spreadsheets is inconsistent, incomplete, or duplicated, the ERP will inherit those problems - and amplify them. Data migration is the single most common cause of ERP implementation delays and budget overruns. Clean it before you move it.',
  },
  {
    title: 'Document your processes as they actually run',
    body: 'Not as the procedure manual says they should run. Map each order from intake to invoice: who touches it, what systems it passes through, where the delays happen, where the errors get introduced. This process map becomes the spec your ERP vendor will build to. If you give them an idealised version instead of the real one, the system will be configured for a business that does not exist.',
  },
  {
    title: 'Assign internal ownership',
    body: 'An ERP implementation needs a named person inside the business who owns the project from the business side - not the vendor\'s project manager, not an external consultant, but someone who lives with the outcome every day. This person does not need to be technical. They need to understand the operations, have authority to make decisions, and be available for the duration of the project.',
  },
];

export default function ErpSelectionPlaybookPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free resource</span>
          <h1>ERP selection playbook for decorated goods</h1>
          <p className="lede">
            A plain-English guide to ERP for garment decoration, print, and embroidery businesses. What it is, when you need it, how to choose, and the pitfalls specific to your sector.
          </p>
        </div>
      </section>

      <section className="g-off section--tight">
        <div className="wrap" style={{ maxWidth: 720 }}>

          <div style={{ marginBottom: 64 }}>
            <h2>What ERP actually means</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              ERP stands for Enterprise Resource Planning. That is the formal name. What it actually means is a system that connects the different parts of your business - orders, stock, production, purchasing, accounts - so they all work from the same data.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Without an ERP, a typical decorated goods business runs on: an accounting package for the finances, a spreadsheet for stock, another spreadsheet for production scheduling, email for artwork approval, and a separate eCommerce platform for online orders. None of them talk to each other. Someone - often several people - spends hours every day manually moving data between them.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              An ERP creates a single source of truth. When a customer order comes in:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              {erpCapabilities.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: 2, color: 'var(--do-cerulean)' }} />
                  <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Every department works from the same information. No manual re-entry. No reconciliation between systems. No &quot;which version of the order is the right one?&quot; conversations.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>Does your business need one?</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              Not every business needs an ERP. Here is how to tell.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <div style={{ padding: 24, borderRadius: 'var(--do-radius-xl)', background: 'var(--do-off-white)', border: '1px solid var(--do-border-subtle)' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 16 }}>You probably do not need one if</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {dontNeed.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 75%, transparent)' }}>
                      <span style={{ flexShrink: 0, marginTop: 2, color: 'var(--do-cerulean)' }}>-</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: 24, borderRadius: 'var(--do-radius-xl)', background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-amber) 30%, transparent)' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 16 }}>You probably do need one if</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {doNeed.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 75%, transparent)' }}>
                      <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: 2, color: 'var(--do-cerulean)' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>The warning signs</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              If you are considering an ERP, watch out for these patterns:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {warningSigns.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 16, borderRadius: 'var(--do-radius-lg)', background: 'var(--do-off-white)' }}>
                  <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: 2, color: 'var(--do-orange)' }} />
                  <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
                    <strong style={{ color: 'var(--do-text-primary)' }}>{item.label}</strong> - {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="g-tint" style={{ borderRadius: 'var(--do-radius-2xl)', padding: 32, marginBottom: 64 }}>
            <h2>The honest view</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Most businesses I work with do not need a new ERP. They need to use their current system properly, fix their processes, and connect the systems they already have. An ERP implementation is expensive, disruptive, and risky. It should only be the answer when the current setup genuinely cannot be fixed.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
              A Clarity Audit will tell you whether your problem is the system, the implementation, or the process - and what the most cost-effective next step actually is.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>The systems worth considering</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              The ERP landscape for decorated goods businesses in the UK includes:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {systems.map((sys) => (
                <div key={sys.name} style={{ padding: 20, borderRadius: 'var(--do-radius-xl)', background: 'var(--do-off-white)', border: '1px solid var(--do-border-subtle)' }}>
                  <h3 style={{ fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 4 }}>{sys.name}</h3>
                  <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 75%, transparent)', marginBottom: 0 }}>
                    <span style={{ color: 'var(--do-cerulean)' }}>{sys.strength}</span>
                    {sys.weakness && <span> - {sys.weakness}</span>}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginTop: 24 }}>
              Each has strengths and weaknesses. The right one depends on your business model, your decoration mix, and your growth trajectory. There is no universally correct answer - which is why the brief has to come first.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>The process that works</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {selectionSteps.map((step) => (
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
            <h2>Where I stand</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              One thing this playbook should say plainly: I build one of the systems in this market. The Data App grew out of Clarity Audits where the brief came back and nothing off the shelf covered it. That does not change a word of the process above. Write the brief, score every candidate against it, and treat mine with the same suspicion you would treat any vendor demo. If another system covers your brief, buy that one. The playbook only works if it works against me too.
            </p>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>Common pitfalls specific to garment decoration</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              ERP selection in the garment decoration sector has pitfalls that do not appear in other industries. Knowing them in advance saves months of wasted evaluation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {pitfalls.map((pitfall, i) => (
                <div key={i}>
                  <h3 style={{ fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 8 }}>{pitfall.title}</h3>
                  <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>{pitfall.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2>How to prepare before you buy</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              If the honest assessment lands on &quot;we do need an ERP&quot;, do not start shopping. Start preparing. The businesses that get the best outcomes do three things before they ever talk to a vendor.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {preparation.map((item, i) => (
                <div key={i}>
                  <h3 style={{ fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>{item.body}</p>
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
                  Most businesses do not need a new ERP. They need to use what they have properly and fix their processes first.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Write the vendor brief before you talk to any vendor. Without it, every demo looks impressive because the vendor controls what they show you.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  A Clarity Audit identifies what you actually need before you spend anything on software.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Clean your data and document your real processes before you start talking to vendors. The ERP will inherit whatever you give it.
                </p>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)' }}>
            <h3>Not sure whether you need an ERP?</h3>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              A Clarity Audit maps your current operation, identifies where the real problems are, and tells you whether the answer is a new system, a better implementation of what you have, or fixing the processes underneath. From GBP 1,500.
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
