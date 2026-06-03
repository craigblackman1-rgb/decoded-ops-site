import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import BlogList from '@/components/BlogList';
import type { Metadata } from 'next';
import localBlogPosts from '@/data/blog-index.json';

const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Insights — Decoded Ops',
  description: 'Plain-English insights on operations, technology, and systems integration for print, embroidery, and decoration businesses. No jargon. No vendor agenda.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Insights — Decoded Ops',
    description: 'Plain-English insights on operations, technology, and systems integration for print, embroidery, and decoration businesses. No jargon. No vendor agenda.',
    url: 'https://decodedops.co.uk/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights — Decoded Ops',
    description: 'Plain-English insights on operations, technology, and systems integration for print, embroidery, and decoration businesses. No jargon. No vendor agenda.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://decodedops.co.uk/blog#collection',
  url: 'https://decodedops.co.uk/blog',
  name: 'Insights — Decoded Ops',
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
                    20 questions to evaluate your operations, technology, and processes. Use this before you hire a consultant — or to understand what an audit actually covers.
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
              These resources are free. An audit is where things get specific — every finding quantified, every recommendation costed, every next step mapped.
            </p>
            <Link href="/contact" className="blog-cta-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-colors" style={{ backgroundColor: 'var(--do-action-primary)', color: 'var(--do-action-primary-text)' }}>
              Book a free discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
