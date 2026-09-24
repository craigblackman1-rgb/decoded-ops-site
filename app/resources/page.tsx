import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, AlertTriangle, Star, Workflow, Gauge, FileText, Palette, ListChecks, Calculator } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-resources.css';

export const metadata: Metadata = {
  title: 'Free Resources for Print & Embroidery Businesses: Decoded Ops',
  description: 'Free operational resources for print, embroidery, and decoration businesses. Audit checklist, warning signs, SOP templates, and process guides.',
  alternates: { canonical: '/resources' },
  openGraph: {
    type: 'website',
    title: 'Free Resources: Decoded Ops',
    description: 'Free operational resources for print and decoration businesses. Audit checklists, warning signs, SOP templates, and process guides.',
    url: 'https://decodedops.co.uk/resources',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resources: Decoded Ops',
    description: 'Free operational resources for print and decoration businesses.',
  },
};

const resources = [
  {
    icon: ClipboardCheck,
    title: 'Operational Audit Checklist',
    desc: 'A practical checklist to evaluate your operations, technology, and processes. Use this before you hire a consultant.',
    href: '/resources/audit-checklist',
  },
  {
    icon: AlertTriangle,
    title: '5 Warning Signs Your Systems Are Holding You Back',
    desc: 'Five signs that your current technology is costing you more than a replacement would. Practical and straight-talking.',
    href: '/resources/5-warning-signs',
  },
  {
    icon: ListChecks,
    title: 'SOP Template for Decorated Goods',
    desc: 'A free template and 7-step method for writing Standard Operating Procedures that your team can actually follow.',
    href: '/resources/sop-template',
  },
  {
    icon: Workflow,
    title: 'ERP Selection Playbook',
    desc: 'A plain-English guide to ERP for decorated goods: what it is, when you need it, how to choose, and the pitfalls.',
    href: '/resources/erp-selection-playbook',
  },
  {
    icon: Palette,
    title: 'Artwork Approval Playbook',
    desc: 'A 5-step workflow to take artwork approval from brief to sign-off in 24 hours.',
    href: '/resources/artwork-approval-playbook',
  },
  {
    icon: FileText,
    title: 'The Decoded Method',
    desc: 'A three-layer system for documenting how your business runs: Process Register, one-page SOPs, and an Improvement Log.',
    href: '/resources/decoded-method',
  },
  {
    icon: Gauge,
    title: 'What 5 & 6 Sigma Mean for Your Operation',
    desc: 'What 3, 4, 5 and 6 Sigma actually mean for a print and embroidery business, and why closing the gap is about process, not machinery.',
    href: '/resources/six-sigma',
  },
  {
    icon: Calculator,
    title: 'Capacity Planning Calculator',
    desc: 'Work out how many jobs your machines can actually produce per week — real throughput, not the spec sheet number.',
    href: '/resources/capacity-planner',
  },
  {
    icon: Calculator,
    title: 'Seasonal Capacity Calculator',
    desc: 'See where your capacity gap or surplus lands across the year by plotting seasonal demand against your real output.',
    href: '/resources/seasonal-capacity',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Resources', url: 'https://decodedops.co.uk/resources' },
      ]} />
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Resources</span>
            <h1>Tools and guides <em>you can use today</em></h1>
            <p className="lede">
              Free resources built from real experience in print, embroidery, and decoration businesses. No fluff. No sign-up tricks. Just useful stuff.
            </p>
          </div>

          {/* D17 hero artwork DO-ART-980 */}
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a980" data-od-id="hero-art" data-motion data-no="DO-ART-980" data-rev="01" data-tx="poster"
        aria-label="Artwork DO-ART-980. Three free documents pinned over a graded photograph of a workbench: the operational audit checklist, the SOP template and the ERP selection playbook. Below them, the order that makes the resources worth anything, drawn as a route: one, recognise, the five warning signs; two, check, the operational audit checklist; three, measure, the capacity and seasonal calculators; four, document, the Decoded Method, the SOP template, the artwork approval playbook and the Sigma playbook; five, in amber, choose, the ERP selection playbook, last. Choose the platform first and step five is done first.">
  <div class="d17-ph"><img src="/images/d17/resources/gen-bench-flatlay-v2-215572.jpg" alt="" width="900" height="900"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Free resources</span><span>One order, five steps</span></div>
  <div class="prints" aria-hidden="true">
    <div class="d17-doc pr pr-1 m-drop" style="animation-delay:.05s">
      <span class="tab">02</span>
      <span class="ref">Checklist · 7 areas</span>
      <h4>Operational audit</h4>
      <ul class="tl">
        <li><i class="y"></i>Backups tested quarterly?</li>
        <li><i class="y"></i>Orders re-keyed anywhere?</li>
        <li class="h"><i class="q"></i>Cost per order?</li>
      </ul>
    </div>
    <div class="d17-doc pr pr-2 m-drop" style="animation-delay:.25s">
      <span class="tab">04</span>
      <span class="ref">SOP · template</span>
      <h4>Process, owner, steps</h4>
      <div class="lines"><i style="width:92%"></i><i style="width:74%"></i><i style="width:86%"></i><i style="width:58%"></i></div>
      <p class="phase">Review date · 6 months</p>
    </div>
    <div class="d17-doc cov-dark pr pr-3 m-drop" style="animation-delay:.45s">
      <span class="tab">05</span>
      <span class="ref">Playbook</span>
      <h4>ERP selection, brief first</h4>
      <div class="lines"><i style="width:80%"></i><i style="width:64%"></i></div>
    </div>
  </div>
  <ol class="rt-route" aria-hidden="true">
    <li class="m-rise" style="animation-delay:.6s"><span class="n">01 · Recognise</span><b>Five warning signs</b></li>
    <li class="m-rise" style="animation-delay:.8s"><span class="n">02 · Check</span><b>Operational audit checklist</b></li>
    <li class="m-rise" style="animation-delay:1s"><span class="n">03 · Measure</span><b>Capacity and seasonal calculators</b></li>
    <li class="m-rise" style="animation-delay:1.2s"><span class="n">04 · Document</span><b>The Decoded Method, SOPs, artwork, Sigma</b></li>
    <li class="end m-rise" style="animation-delay:1.5s"><span class="n">05 · Choose</span><b>ERP selection, last</b></li>
  </ol>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Choose the platform first, <em>and step five is done first.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-980 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      <section className="g-off">
        <div className="wrap">
          <div className="grid grid--3">
            {resources.map(r => {
              const Icon = r.icon;
              return (
                <Link key={r.href} href={r.href} className="card">
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--do-radius-xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={24} style={{ color: 'var(--do-cerulean)' }} />
                  </div>
                  <h2 style={{ fontSize: 'var(--do-text-xl)' }}>{r.title}</h2>
                  <p>{r.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-cerulean)' }}>
                    Read more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <D17Motion />
    </>
  );
}
