import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, AlertTriangle, Star, Workflow, Gauge } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Free Resources for Print & Embroidery Businesses | Decoded Ops',
  description: 'Free operational resources for print, embroidery, and decoration businesses. Audit checklist, warning signs guide, and independent software reviews.',
  alternates: { canonical: '/resources' },
  openGraph: {
    type: 'website',
    title: 'Free Resources | Decoded Ops',
    description: 'Free operational resources for print and decoration businesses. Audit checklists, warning signs, and software reviews.',
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
    icon: Star,
    title: 'Software Reviews',
    desc: 'Honest, independent reviews of ERP, eCommerce, and production software used in this sector. No affiliate links. No sponsors.',
    href: '/resources/software-reviews',
  },
  {
    icon: Workflow,
    title: 'The Decoded Method',
    desc: 'A three-layer system for documenting how your business runs: Process Register, one-page SOPs, and an Improvement Log. Plain English, built to hand over.',
    href: '/resources/decoded-method',
  },
  {
    icon: Gauge,
    title: 'What 5 & 6 Sigma Mean for Your Operation',
    desc: 'What 3, 4, 5 and 6 Sigma actually mean for a print and embroidery business, and why closing the gap is about process, not machinery.',
    href: '/resources/six-sigma',
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
            Free resources built from real experience in print, embroidery, and decoration businesses. No fluff. No lead-gen tricks. Just useful stuff.
          </p>
        </div>
      </section>

      {/* PLATE · DO-ART-308 */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Resource sequence &middot; DO-ART-308</span>
          <h2>Five free resources, one order that makes them worth anything.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            They are a sequence, not a menu. Using them out of order wastes most of them. Choosing the platform first is step five done first — which is warning sign five.
          </p>

          <div className="plate-scroll">
            <div className="plate-frame" data-od-id="plate-resources">
              <Plate tone="dark" p="rsx" title="Five resources, one order"
                     sub="They are a sequence, not a menu · using them out of order wastes most of them"
                     no="DO-ART-308" rev="01" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s2">
                  <text x="55" y="210" className="p-mono" fontSize="14" letterSpacing="2.6" opacity=".45">THE ORDER THEY ARE MEANT TO BE USED IN</text>
                </g>

                <g className="sk-fade sk-s3" filter="url(#rsx-shadow)">
                  <rect x="55" y="250" width="270" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="360" y="250" width="270" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="665" y="250" width="270" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="970" y="250" width="270" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="1275" y="250" width="270" height="300" rx="10" fill="url(#rsx-node)" className="p-node" strokeWidth="1.1"/>
                </g>

                <g className="sk-fade sk-s4">
                  <g className="p-cyan" fontFamily="var(--do-font-heading)" fontSize="15" fontWeight="700" letterSpacing="2.4">
                    <text x="81" y="294">01 · RECOGNISE</text>
                    <text x="386" y="294">02 · ASSESS</text>
                    <text x="691" y="294">03 · MEASURE</text>
                    <text x="996" y="294">04 · DOCUMENT</text>
                    <text x="1301" y="294">05 · CHOOSE</text>
                  </g>
                  <g className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="24">
                    <text x="81" y="366">5 warning</text><text x="81" y="396">signs</text>
                    <text x="386" y="366">Audit</text><text x="386" y="396">checklist</text>
                    <text x="691" y="366">Six Sigma,</text><text x="691" y="396">explained</text>
                    <text x="996" y="366">The Decoded</text><text x="996" y="396">Method</text>
                    <text x="1301" y="366">Software</text><text x="1301" y="396">reviews</text>
                  </g>
                  <g className="p-mono" fontSize="15" opacity=".58">
                    <text x="81" y="446">Is anything</text><text x="81" y="470">actually wrong?</text>
                    <text x="386" y="446">Where exactly,</text><text x="386" y="470">across six areas</text>
                    <text x="691" y="446">How bad, in</text><text x="691" y="470">defects per million</text>
                    <text x="996" y="446">Write it down so</text><text x="996" y="470">it survives you</text>
                    <text x="1301" y="446">Only now pick</text><text x="1301" y="470">the platform</text>
                  </g>
                </g>

                <g>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M329 400 H354" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M634 400 H659" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M939 400 H964" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                  <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M1244 400 H1269" fill="none" strokeWidth="2" markerEnd="url(#rsx-ah)"/>
                </g>

                <g className="sk-fade sk-s6">
                  <rect x="55" y="620" width="1490" height="120" rx="10" fill="url(#rsx-amber)" className="p-samber" strokeWidth="1.1" strokeOpacity=".45"/>
                  <text x="81" y="660" className="p-amber" fontSize="14" letterSpacing="2.4" fontWeight="600">THE ORDER MATTERS</text>
                  <text x="81" y="698" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="25">Choosing the platform first is step five done first — which is warning sign five.</text>
                  <text x="81" y="728" className="p-mono" fontSize="17" opacity=".62">The five resources are free. Doing them in this order is what makes them worth anything.</text>
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
