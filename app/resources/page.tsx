import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, AlertTriangle, Star, Workflow, Gauge, FileText, Palette, ListChecks, Calculator } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Free Resources for Print & Embroidery Businesses | Decoded Ops',
  description: 'Free operational resources for print, embroidery, and decoration businesses. Audit checklist, warning signs, SOP templates, and process guides.',
  alternates: { canonical: '/resources' },
  openGraph: {
    type: 'website',
    title: 'Free Resources | Decoded Ops',
    description: 'Free operational resources for print and decoration businesses. Audit checklists, warning signs, SOP templates, and process guides.',
    url: 'https://decodedops.co.uk/resources',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resources | Decoded Ops',
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
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Resources</span>
          <h1>Tools and guides <em>you can use today</em></h1>
          <p className="lede">
            Free resources built from real experience in print, embroidery, and decoration businesses. No fluff. No sign-up tricks. Just useful stuff.
          </p>
        </div>
      </section>

      {/* PLATE · DO-ART-308 */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Resource sequence &middot; DO-ART-308</span>
          <h2>Seven free resources, one order that makes them worth anything.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            They are a sequence, not a menu. Using them out of order wastes most of them. Choosing the platform first is step five done first, which is warning sign five.
          </p>

          <div className="plate-scroll">
            <div className="plate-frame" data-od-id="plate-resources">
              <Plate tone="dark" p="rsx" title="Seven resources, one order"
                     sub="They are a sequence, not a menu &middot; using them out of order wastes most of them"
                     no="DO-ART-308" rev="02" cls="DECODED OPS &middot; ISSUED">

                <g className="sk-fade sk-s2">
                  <text x="55" y="210" className="p-mono" fontSize="14" letterSpacing="2.6" opacity=".45">THE ORDER THEY ARE MEANT TO BE USED IN</text>
                </g>

                <g className="sk-fade sk-s3" filter="url(#rsx-shadow)">
                  <rect x="55" y="250" width="200" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="280" y="250" width="200" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="505" y="250" width="200" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="730" y="250" width="200" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="955" y="250" width="200" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="1180" y="250" width="200" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="1405" y="250" width="140" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                </g>

                <g className="sk-fade sk-s4">
                  <g className="p-cyan" fontFamily="var(--do-font-heading)" fontSize="13" fontWeight="700" letterSpacing="2.4">
                    <text x="75" y="294">01</text>
                    <text x="300" y="294">02</text>
                    <text x="525" y="294">03</text>
                    <text x="750" y="294">04</text>
                    <text x="975" y="294">05</text>
                    <text x="1200" y="294">06</text>
                    <text x="1425" y="294">07</text>
                  </g>
                  <g className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="20">
                    <text x="75" y="350">5 warning</text><text x="75" y="375">signs</text>
                    <text x="300" y="350">Audit</text><text x="300" y="375">checklist</text>
                    <text x="525" y="350">SOP</text><text x="525" y="375">template</text>
                    <text x="750" y="350">ERP</text><text x="750" y="375">selection</text>
                    <text x="975" y="350">Artwork</text><text x="975" y="375">approval</text>
                    <text x="1200" y="350">The Decoded</text><text x="1200" y="375">Method</text>
                    <text x="1425" y="350">Sigma,</text><text x="1425" y="375">explained</text>
                  </g>
                  <g className="p-mono" fontSize="13" opacity=".58">
                    <text x="75" y="430">Is anything</text><text x="75" y="450">actually wrong?</text>
                    <text x="300" y="430">Where exactly,</text><text x="300" y="450">across six areas</text>
                    <text x="525" y="430">Write it down</text><text x="525" y="450">so it survives</text>
                    <text x="750" y="430">Pick the right</text><text x="750" y="450">platform</text>
                    <text x="975" y="430">Brief to</text><text x="975" y="450">sign-off</text>
                    <text x="1200" y="430">Document the</text><text x="1200" y="450">whole operation</text>
                    <text x="1425" y="430">How bad,</text><text x="1425" y="450">per million</text>
                  </g>
                </g>

                <g>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M259 400 H275" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M484 400 H500" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M709 400 H725" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M934 400 H950" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M1159 400 H1175" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M1384 400 H1400" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                </g>

                <g className="sk-fade sk-s6">
                  <rect x="55" y="620" width="1490" height="120" rx="10" fill="url(#rsx-amber)" className="p-samber" strokeWidth="1.1" strokeOpacity=".45"/>
                  <text x="81" y="660" className="p-amber" fontSize="14" letterSpacing="2.4" fontWeight="600">THE ORDER MATTERS</text>
                  <text x="81" y="698" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="25">Choosing the platform first is step five done first, which is warning sign five.</text>
                  <text x="81" y="728" className="p-mono" fontSize="17" opacity=".62">The seven resources are free. Doing them in this order is what makes them worth anything.</text>
                </g>
              </Plate>
            </div>
          </div>
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
    </>
  );
}
