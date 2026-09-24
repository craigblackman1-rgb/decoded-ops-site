import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-resources.css';

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
  title: 'Free Technology & Operations Audit Checklist: Decoded Ops',
  description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses. Free to download.',
  alternates: { canonical: '/resources/audit-checklist' },
  openGraph: {
    type: 'website',
    title: 'Free Technology & Operations Audit Checklist: Decoded Ops',
    description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses. Free to download.',
    url: 'https://decodedops.co.uk/resources/audit-checklist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Technology & Operations Audit Checklist: Decoded Ops',
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
      {/* HERO — rt-split: copy left, DO-ART-983 right */}
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Free resource</span>
            <h1>Operational audit checklist</h1>
            <p className="lede">
              36 questions to evaluate your operations, technology, and processes. Use this before you hire a consultant, or to understand what an audit actually covers.
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a983" data-od-id="hero-art" data-motion data-no="DO-ART-983" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-983. The operational audit checklist on a clipboard over a graded photograph of an embroidery floor, part-worked as an example. Backups automated and tested quarterly: yes. Paying for licences no longer used: yes. Orders re-keyed from the website into the ERP: yes. Cost per order including labour, materials and overhead: can't answer, marked in amber. What the slowest process is and why: can't answer, in amber. A note pinned beside it: the ones you can't answer are where the cost is.">
  <div class="d17-ph"><img src="/images/d17/resources/hero-workshop-23d6be.jpg" alt="" width="900" height="842"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Audit checklist</span><span>Example, part-worked</span></div>
  <div class="stage" aria-hidden="true">
    <div class="clip m-drop" style="animation-delay:.05s"><i></i></div>
    <div class="d17-doc doc-k m-drop" style="animation-delay:.05s">
      <span class="ref">Operational audit · checklist</span>
      <h4>Answer honestly. No scoring.</h4>
      <p class="phase">IT infrastructure &amp; security</p>
      <ul class="tl">
        <li class="m-fade" style="animation-delay:.5s"><i class="y"></i>Are backups automated, and tested quarterly?</li>
        <li class="m-fade" style="animation-delay:.65s"><i class="y"></i>Paying for licences you no longer use?</li>
      </ul>
      <p class="phase">eCommerce &amp; digital sales</p>
      <ul class="tl">
        <li class="m-fade" style="animation-delay:.8s"><i class="y"></i>Do you re-key website orders into your ERP?</li>
      </ul>
      <p class="phase">Costs &amp; financial</p>
      <ul class="tl">
        <li class="h m-fade" style="animation-delay:1s"><i class="q"></i>Your actual cost per order, all in?</li>
      </ul>
      <p class="phase">Processes &amp; operations</p>
      <ul class="tl">
        <li class="h m-fade" style="animation-delay:1.15s"><i class="q"></i>Which process takes longest, and why?</li>
      </ul>
    </div>
    <div class="note-y m-pop" style="animation-delay:1.4s">The ones you can't answer <b>are where the cost is.</b></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Seven areas. <em>The gaps are the point.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-983 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 inline artwork DO-ART-984 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a984" data-od-id="plate-structure" data-motion data-no="DO-ART-984" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-984, the audit structure. Six areas you can check today: IT infrastructure and security, six questions; systems and software, five; eCommerce and digital sales, five; processes and operations, six; inventory and stock, five; costs and financial, five. All six feed the seventh, in amber: growth and strategic, four questions that only the first six can answer.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sw-cap">
    <p class="k d17-mono">Audit structure <span>· seven areas</span></p>
    <div class="bar" aria-hidden="true"></div>
    <h3>Six you can check today. The seventh, only the checking answers.</h3>
    <p>Work the six in any order. Growth is last on purpose: you can't plan it until you know what the first six say.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-984 · Rev 01</span>
  </div>
  <div class="dw" aria-hidden="true">
    <svg class="q v-wide" viewBox="0 0 760 420">
      <g class="m-fade">
        <rect class="bx" x="0" y="10" width="116" height="118" rx="8"/><text class="t-m" x="12" y="36">01</text><text class="t" x="12" y="66">IT &amp;</text><text class="t" x="12" y="88">security</text><text class="t-d" x="12" y="114">6 questions</text>
        <rect class="bx" x="128" y="10" width="116" height="118" rx="8"/><text class="t-m" x="140" y="36">02</text><text class="t" x="140" y="66">Systems &amp;</text><text class="t" x="140" y="88">software</text><text class="t-d" x="140" y="114">5 questions</text>
        <rect class="bx" x="256" y="10" width="116" height="118" rx="8"/><text class="t-m" x="268" y="36">03</text><text class="t" x="268" y="66">eCommerce</text><text class="t" x="268" y="88">&amp; digital</text><text class="t-d" x="268" y="114">5 questions</text>
        <rect class="bx" x="384" y="10" width="116" height="118" rx="8"/><text class="t-m" x="396" y="36">04</text><text class="t" x="396" y="66">Processes &amp;</text><text class="t" x="396" y="88">operations</text><text class="t-d" x="396" y="114">6 questions</text>
        <rect class="bx" x="512" y="10" width="116" height="118" rx="8"/><text class="t-m" x="524" y="36">05</text><text class="t" x="524" y="66">Inventory</text><text class="t" x="524" y="88">&amp; stock</text><text class="t-d" x="524" y="114">5 questions</text>
        <rect class="bx" x="640" y="10" width="116" height="118" rx="8"/><text class="t-m" x="652" y="36">06</text><text class="t" x="652" y="66">Costs &amp;</text><text class="t" x="652" y="88">financial</text><text class="t-d" x="652" y="114">5 questions</text>
      </g>
      <path class="ln m-draw" pathLength="1" d="M58 128 V190 H698 V128 M186 128 V190 M314 128 V190 M442 128 V190 M570 128 V190"/>
      <path class="ln m-draw" pathLength="1" d="M378 190 V262" marker-end="url(#ah984)"/>
      <text class="t-m" x="392" y="232">Only once these are answered</text>
      <g class="m-pop" style="animation-delay:1.6s">
        <rect class="bx-a" x="198" y="270" width="360" height="130" rx="10"/>
        <text class="t-m t-a" x="222" y="302">07 · Last on purpose</text>
        <text class="t-h" x="222" y="340">Growth &amp; strategic</text>
        <text class="t-d" x="222" y="376">4 questions only the first six can answer</text>
      </g>
      <defs><marker id="ah984" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker></defs>
    </svg>
    <svg class="q v-tall" viewBox="0 0 340 560">
      <g>
        <rect class="bx" x="0" y="0" width="164" height="86" rx="8"/><text class="t-m" x="12" y="24">01</text><text class="t" x="12" y="50">IT &amp; security</text><text class="t-d" x="12" y="74">6 questions</text>
        <rect class="bx" x="176" y="0" width="164" height="86" rx="8"/><text class="t-m" x="188" y="24">02</text><text class="t" x="188" y="50">Systems</text><text class="t-d" x="188" y="74">5 questions</text>
        <rect class="bx" x="0" y="98" width="164" height="86" rx="8"/><text class="t-m" x="12" y="122">03</text><text class="t" x="12" y="148">eCommerce</text><text class="t-d" x="12" y="172">5 questions</text>
        <rect class="bx" x="176" y="98" width="164" height="86" rx="8"/><text class="t-m" x="188" y="122">04</text><text class="t" x="188" y="148">Processes</text><text class="t-d" x="188" y="172">6 questions</text>
        <rect class="bx" x="0" y="196" width="164" height="86" rx="8"/><text class="t-m" x="12" y="220">05</text><text class="t" x="12" y="246">Inventory</text><text class="t-d" x="12" y="270">5 questions</text>
        <rect class="bx" x="176" y="196" width="164" height="86" rx="8"/><text class="t-m" x="188" y="220">06</text><text class="t" x="188" y="246">Costs</text><text class="t-d" x="188" y="270">5 questions</text>
      </g>
      <path class="ln" d="M82 282 V316 H258 V282 M170 316 V372" marker-end="url(#ah984t)"/>
      <text class="t-m" x="182" y="348">Then</text>
      <rect class="bx-a" x="0" y="380" width="340" height="130" rx="10"/>
      <text class="t-m t-a" x="18" y="412">07 · Last on purpose</text>
      <text class="t-h" x="18" y="450">Growth &amp; strategic</text>
      <text class="t-d" x="18" y="484">Only the first six can answer it</text>
      <defs><marker id="ah984t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker></defs>
    </svg>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* CONTENT */}
      <section className="g-off section--tight">
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
                  If your systems don&apos;t integrate, you are paying a significant amount in manual workarounds.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Inventory accuracy problems cost more than most businesses realise.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)', marginTop: 64 }}>
            <h3>Once you've worked through this checklist...</h3>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              The real value is in seeing what you don't know. If there are gaps, an audit finds them, puts a number on them, and gives you a plan to fix them.
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
