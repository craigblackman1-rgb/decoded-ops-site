import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import BlogList from '@/components/BlogList';
import { Plate } from '@/components/Plate';
import type { Metadata } from 'next';
import localBlogPosts from '@/data/blog-index.json';

const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Insights | Decoded Ops',
  description: 'Plain-English insights on operations, technology, and systems integration for print, embroidery, and decoration businesses. No jargon. No vendor agenda.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Insights | Decoded Ops',
    description: 'Plain-English insights on operations, technology, and systems integration for print, embroidery, and decoration businesses. No jargon. No vendor agenda.',
    url: 'https://decodedops.co.uk/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | Decoded Ops',
    description: 'Plain-English insights on operations, technology, and systems integration for print, embroidery, and decoration businesses. No jargon. No vendor agenda.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://decodedops.co.uk/blog#collection',
  url: 'https://decodedops.co.uk/blog',
  name: 'Insights | Decoded Ops',
  description: 'Plain-English insights on operations, technology, and systems integration for print, embroidery, and decoration businesses.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

async function fetchBlogIndex() {
  try {
    const res = await fetch(`${HUB_API}/api/content/index`, {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      const data = await res.json();
      return data.items || [];
    }
  } catch {}
  return localBlogPosts.items || [];
}

export default async function BlogPage() {
  const posts = await fetchBlogIndex();
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Insights', url: 'https://decodedops.co.uk/blog' },
      ]} />
      <JsonLd data={blogSchema} />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20" style={{ backgroundColor: 'var(--do-surface-page)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: 'var(--do-prussian-blue)/0.08', border: '1px solid var(--do-prussian-blue)/0.15' }}>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--do-prussian-blue)' }}>Insights</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
            Things I&apos;ve learned the hard way
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--do-text-muted)' }}>
            Plain-English writing on operations, technology, and systems integration for print, embroidery, and decoration businesses. No jargon. No vendor agenda.
          </p>
        </div>
      </section>

      {/* PLATE · DO-ART-211 */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Content breakdown &middot; DO-ART-211</span>
          <h2>28 posts across seven subjects.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            Where the writing actually goes, counted from the index not estimated. Two thirds of it is operations and technology. Every post lands on the same rule.
          </p>

          <div className="plate-scroll">
            <div className="plate-frame" data-od-id="plate-blog">
              <Plate tone="dark" p="blx" title="28 posts, seven subjects"
                     sub="Where the writing actually goes · counted from the index, not estimated"
                     no="DO-ART-211" rev="01" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s2">
                  <text x="80" y="196" className="p-mono" fontSize="14" letterSpacing="2.6" opacity=".45">POSTS BY SUBJECT</text>
                </g>

                <g className="sk-fade sk-s3">
                  <g className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="22" textAnchor="end">
                    <text x="370" y="256">Operations</text>
                    <text x="370" y="326">Technology</text>
                    <text x="370" y="396">ERP</text>
                    <text x="370" y="466">Integration</text>
                    <text x="370" y="536">Workflow</text>
                    <text x="370" y="606">Quality</text>
                    <text x="370" y="676">Marketing</text>
                  </g>
                </g>

                {/* bars: 100px per post */}
                <g className="sk-fade sk-s4">
                  <rect x="400" y="234" width="900" height="30" rx="4" fill="var(--do-cerulean)" opacity=".85"/>
                  <rect x="400" y="304" width="800" height="30" rx="4" fill="var(--do-cerulean)" opacity=".78"/>
                  <rect x="400" y="374" width="400" height="30" rx="4" fill="var(--do-cerulean)" opacity=".68"/>
                  <rect x="400" y="444" width="300" height="30" rx="4" fill="var(--do-sky-blue)" opacity=".6"/>
                  <rect x="400" y="514" width="200" height="30" rx="4" fill="var(--do-sky-blue)" opacity=".5"/>
                  <rect x="400" y="584" width="100" height="30" rx="4" fill="var(--do-sky-blue)" opacity=".42"/>
                  <rect x="400" y="654" width="100" height="30" rx="4" fill="var(--do-sky-blue)" opacity=".42"/>
                </g>
                <g className="sk-fade sk-s5" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="26" fill="var(--do-off-white)">
                  <text x="1324" y="258">9</text><text x="1224" y="328">8</text><text x="824" y="398">4</text>
                  <text x="724" y="468">3</text><text x="624" y="538">2</text><text x="524" y="608">1</text><text x="524" y="678">1</text>
                </g>

                {/* gridline at the top count */}
                <g className="sk-fade sk-s5">
                  <line x1="400" y1="222" x2="400" y2="696" className="p-scyan" strokeWidth=".8" strokeOpacity=".3"/>
                </g>

                <g className="sk-fade sk-s6">
                  <rect x="80" y="716" width="1460" height="60" rx="10" fill="url(#blx-amber)" className="p-samber" strokeWidth="1.1" strokeOpacity=".45"/>
                  <text x="106" y="754" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="22">Two thirds of it is operations and technology. Every post lands on the same rule: process and data before automation.</text>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <BlogList posts={posts} />

          <div className="border-t pt-16" style={{ borderColor: 'var(--do-border-subtle)' }}>
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>Free Resources</h2>
            <Link
              href="/resources/audit-checklist"
              className="blog-card group block p-8 rounded-2xl hover:shadow-md transition-all duration-300"
              style={{ backgroundColor: 'var(--do-cerulean)/0.05', border: '1px solid var(--do-cerulean)/0.3' }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--do-cerulean)/0.15', border: '1px solid var(--do-cerulean)/0.3' }}>
                    <span className="text-xs font-semibold uppercase" style={{ color: 'var(--do-cerulean)' }}>Checklist</span>
                  </div>
                  <h3 className="text-2xl font-bold transition-colors mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
                    Operational Audit Checklist
                  </h3>
                  <p className="leading-relaxed max-w-2xl" style={{ color: 'var(--do-text-muted)' }}>
                    20 questions to check your operations, technology, and processes. Use it before you hire a consultant, or to see what an audit actually covers.
                  </p>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" style={{ color: 'var(--do-cerulean)' }} />
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-16 p-8 rounded-2xl" style={{ backgroundColor: 'var(--do-surface-dark)' }}>
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-on-dark)' }}>Ready to dive deeper?</h3>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--do-sky-blue)' }}>
              These resources are free. An audit is where things get specific. I quantify every finding, cost every recommendation, and map your next steps.
            </p>
            <Link href="/contact" className="blog-cta-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-colors" style={{ backgroundColor: 'var(--do-action-primary)', color: 'var(--do-action-primary-text)' }}>
              Book a free discovery call <ArrowRight size={18} />
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8ECAE6] hover:text-white font-medium inline-flex items-center gap-1 mt-3">Or book a call directly <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
