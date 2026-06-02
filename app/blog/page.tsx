import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';
import localBlogPosts from '@/data/blog-index.json';

const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Operations & Technology Insights | Decoded Ops Blog',
  description: 'Insights on operations, technology, and systems integration for print, embroidery, and decoration businesses.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Operations & Technology Insights | Decoded Ops Blog',
    description: 'Insights on operations, technology, and systems integration for print, embroidery, and decoration businesses.',
    url: 'https://decodedops.co.uk/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations & Technology Insights | Decoded Ops Blog',
    description: 'Insights on operations, technology, and systems integration for print, embroidery, and decoration businesses.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://decodedops.co.uk/blog#collection',
  url: 'https://decodedops.co.uk/blog',
  name: 'Operations & Technology Insights | Decoded Ops Blog',
  description: 'Insights on operations, technology, and systems integration for print, embroidery, and decoration businesses.',
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
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Blog & Resources
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed">
            Insights on operations, technology, and systems integration for print, embroidery, and decoration businesses.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 mb-20">
            {posts.map((post: any) => {
              const pubDate = post.date || post.publishedDate;
              const date = pubDate ? new Date(pubDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) : '';
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-8 rounded-2xl border border-[#8ECAE6]/40 hover:border-[#219EBC]/60 hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#219EBC]/10 border border-[#219EBC]/20 mb-4">
                        <span className="text-xs font-semibold text-[#219EBC] uppercase">{post.category}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-[#023047] group-hover:text-[#219EBC] transition-colors mb-3">
                        {post.title}
                      </h2>
                      <p className="text-[#023047]/70 leading-relaxed mb-4 max-w-2xl">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-2">
                      <ArrowRight size={24} className="text-[#219EBC] group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#023047]/60">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                    <span>•</span>
                    <span>By Craig Blackman</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-[#8ECAE6]/30 pt-16">
            <h2 className="text-3xl font-bold text-[#023047] mb-8">Free Resources</h2>
            <Link
              href="/resources/audit-checklist"
              className="group block p-8 rounded-2xl border border-[#219EBC]/40 hover:border-[#219EBC]/70 hover:shadow-md transition-all duration-300 bg-[#219EBC]/5"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
                    <span className="text-xs font-semibold text-[#219EBC] uppercase">Checklist</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#023047] group-hover:text-[#219EBC] transition-colors mb-3">
                    Operational Audit Checklist
                  </h3>
                  <p className="text-[#023047]/70 leading-relaxed max-w-2xl">
                    20 questions to evaluate your operations, technology, and processes. Use this before you hire a consultant—or to understand what an audit actually covers.
                  </p>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <ArrowRight size={24} className="text-[#219EBC] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Ready to dive deeper?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              These resources are free. An audit is where things get specific—every finding quantified, every recommendation costed, every next step mapped.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
