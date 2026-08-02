import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "operational audit checklist" (secondary: "technology audit checklist small business")
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Operational Audit Checklist',
      description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/audit-checklist',
    },
  ],
};

export const metadata = {
  title: 'Free Technology & Operations Audit Checklist | Decoded Ops',
  description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses. Free to download.',
  alternates: { canonical: '/resources/audit-checklist' },
  openGraph: {
    type: 'website',
    title: 'Free Technology & Operations Audit Checklist | Decoded Ops',
    description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses. Free to download.',
    url: 'https://decodedops.co.uk/resources/audit-checklist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Technology & Operations Audit Checklist | Decoded Ops',
    description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses. Free to download.',
  },
};

const checklist = [
  {
    section: 'IT Infrastructure & Security',
    items: [
      'Do you know what happens to your data if a key team member leaves?',
      'Are backups automated, and do you test them quarterly?',
      'Do you have a password policy (not all passwords are the same across systems)?',
      'Who has access to your financial systems, and is it reviewed annually?',
      'Are you paying for software licenses you no longer use?',
      'Do you know what IT costs you annually (licenses, hardware, support)?',
    ]
  },
  {
    section: 'Systems & Software',
    items: [
      'List every system you use: ERP, eCommerce, accounting, CRM, MIS, etc. Do they integrate?',
      'For each system, do you know: cost per month, how many people use it, and when it was last updated?',
      'Are there manual workarounds in your workflow that are actually compensating for system limitations?',
      'Have you outgrown your current system, or are you making it work through effort?',
      'Is your ERP still being actively supported by the vendor, or are you on old versions?',
    ]
  },
  {
    section: 'eCommerce & Digital Sales',
    items: [
      'If you sell online, does your eCommerce platform talk to your ERP automatically?',
      'Can customers upload custom artwork, and can the system validate it?',
      'Is inventory in your eCommerce platform synced in real-time with your warehouse?',
      'Do you manually re-key orders from your website into your ERP?',
      'Are you losing orders or customers because your online process is broken?',
    ]
  },
  {
    section: 'Processes & Operations',
    items: [
      'Map your main workflows: order to invoice, stock to despatch, artwork to production. Are they documented?',
      'For each workflow, what are the manual steps that shouldn\'t be manual?',
      'How much time per week is spent on re-keying data, re-entering information, or manually reconciling systems?',
      'Do you have duplicate data entry anywhere (same information entered into two systems)?',
      'What process takes the longest, and why?',
      'If a key person leaves, would someone else know how their workflow actually works?',
    ]
  },
  {
    section: 'Inventory & Stock',
    items: [
      'How often do you do physical stock counts? How often do the numbers not match your system?',
      'Do you know the cost of holding excess inventory?',
      'Are there stock items you never use?',
      'How many orders are affected by stock-outs or inaccurate inventory each month?',
      'Is your inventory in one system or spread across multiple places (spreadsheets, warehouse notes, system)?',
    ]
  },
  {
    section: 'Costs & Financial',
    items: [
      'What are your total technology costs (software, licenses, hosting, support, IT staff)?',
      'Are you billing your customers accurately and capturing all billable work?',
      'Do you know your actual cost-per-order (including labor, materials, overhead)?',
      'Are there revenue leaks (jobs underpriced, orders not invoiced, discounts not tracked)?',
      'How long does it take from invoice to cash (days sales outstanding)?',
    ]
  },
  {
    section: 'Growth & Strategic',
    items: [
      'If you want to grow 20% next year, what technology or processes would need to change?',
      'Are there revenue lines (new products, new channels, new markets) you can\'t pursue with your current setup?',
      'What do your fastest-growing competitors do differently operationally?',
      'Are you ready to hire new staff, and would they be able to learn your workflows?',
    ]
  },
];

export default function ChecklistPage() {
  return (
    <>
      <JsonLd data={schema} />
      {/* HERO */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free resource</span>
          <h1>Operational audit checklist</h1>
          <p className="lede">
            20 questions to evaluate your operations, technology, and processes. Use this before you hire a consultant, or to understand what an audit actually covers.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>

          {/* Intro */}
          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: 64 }}>
            <h2>How to use this checklist</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Go through each section and answer the questions honestly. You don't need to score yourself or mark items as "good" or "bad." The goal is to identify where you have gaps or uncertainties.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
              The items you can't answer are the most valuable. They're where the hidden costs usually are.
            </p>
          </div>

          {/* Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {checklist.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 style={{ paddingBottom: 16, marginBottom: 24, borderBottom: '1px solid var(--do-border-subtle)' }}>
                  {section.section}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 16, borderRadius: 'var(--do-radius-lg)', background: 'var(--do-off-white)' }}>
                      <div style={{ flexShrink: 0, marginTop: 4 }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--do-cerulean)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'color-mix(in srgb, var(--do-cerulean) 30%, transparent)' }} />
                        </div>
                      </div>
                      <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="g-tint" style={{ marginTop: 64, borderRadius: 'var(--do-radius-2xl)', padding: 32 }}>
            <h2>Key takeaways</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  If you can't answer 5+ questions, you probably have a bigger operational problem than you realize.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  The items about "manual work" and "re-keying" are where the money is hiding.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  If your systems don't integrate, you're paying 3-5% of revenue in manual workarounds.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Inventory accuracy problems typically cost 1-3% of stock value per year.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)', marginTop: 64 }}>
            <h3>Once you've worked through this checklist...</h3>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              The real value is in understanding what you don't know. If there are gaps, an audit identifies them formally, quantifies them, and gives you a roadmap to fix them.
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
