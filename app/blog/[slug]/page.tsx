import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';
import localBlogPosts from '@/data/blog-index.json';

const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function extractFaqSchema(html: string) {
  const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
  const matches: string[] = [];
  let match;
  while ((match = h2Regex.exec(html)) !== null) {
    matches.push(match[0]);
  }
  const entries = matches.slice(0, 6).map(h2 => {
    const q = h2.replace(/<[^>]+>/g, '').trim();
    return {
      '@type': 'Question',
      name: q.endsWith('?') ? q : q + '?',
      acceptedAnswer: { '@type': 'Answer', text: q },
    };
  });
  if (entries.length < 2) return null;
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: entries };
}

function buildArticleSchema(item: any, slug: string, pubDate: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: item.seo?.title || item.title,
        datePublished: pubDate,
        dateModified: pubDate,
        author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
        publisher: {
          '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk',
          address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' },
        },
        image: 'https://decodedops.co.uk/opengraph-image',
        url: `https://decodedops.co.uk/blog/${slug}`,
        mainEntityOfPage: `https://decodedops.co.uk/blog/${slug}`,
        description: item.seo?.description || item.excerpt || item.title,
        wordCount: (item.html || '').replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length,
        articleSection: 'Operations',
        keywords: (item.title || '').toLowerCase().split(' ').slice(0, 8).join(', '),
      },
    ],
  };
}

async function fetchBlogPost(slug: string) {
  const res = await fetch(`${HUB_API}/api/content/detail?slug=${encodeURIComponent(slug)}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.item || null;
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${HUB_API}/api/content/index`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map((item: any) => ({ slug: item.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await fetchBlogPost(slug);
  if (!item) return { title: 'Blog Post Not Found' };

  const pubDate = item.publishedDate ? new Date(item.publishedDate).toISOString() : new Date().toISOString();
  const title = item.seo?.title || `${item.title} | Decoded Ops`;
  const description = item.seo?.description || item.excerpt || item.title;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      publishedTime: pubDate,
      authors: ['https://decodedops.co.uk/about'],
      section: 'Operations',
      title,
      description,
      url: `https://decodedops.co.uk/blog/${slug}`,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const item = await fetchBlogPost(slug);

  if (!item) {
    return (
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20" style={{ backgroundColor: 'var(--do-surface-page)' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>Post Not Found</h1>
          <Link href="/blog" className="font-semibold hover:underline" style={{ color: 'var(--do-cerulean)' }}>
            <span className="inline-flex items-center gap-2"><ArrowLeft size={16} /> Back to Insights</span>
          </Link>
        </div>
      </section>
    );
  }

  const pubDate = item.publishedDate ? new Date(item.publishedDate).toISOString() : new Date().toISOString();
  const displayDate = item.publishedDate
    ? new Date(item.publishedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';
  const wordCount = (item.html || '').replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  const articleSchema = buildArticleSchema(item, slug, pubDate);
  const faqSchema = extractFaqSchema(item.html || '');

  const schemas: Record<string, unknown>[] = [articleSchema];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      {schemas.map((s, i) => <JsonLd key={i} data={s} />)}

      {/* Article header */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16" style={{ backgroundColor: 'var(--do-surface-page)' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:underline" style={{ color: 'var(--do-cerulean)' }}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: 'var(--do-cerulean)/0.1', border: '1px solid var(--do-cerulean)/0.2' }}>
            <span className="text-xs font-semibold uppercase" style={{ color: 'var(--do-cerulean)' }}>{item.category || 'Insights'}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
            {item.title}
          </h1>
          {item.excerpt && (
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--do-text-muted)' }}>
              {item.excerpt}
            </p>
          )}
          <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--do-text-muted)', opacity: 0.7 }}>
            <span>Craig Blackman</span>
            <span>·</span>
            <span>{displayDate}</span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div
            className="do-blog-prose"
            dangerouslySetInnerHTML={{ __html: item.html || '' }}
          />

          {/* CTA box */}
          <div className="mt-12 p-8 rounded-2xl" style={{ backgroundColor: 'var(--do-cerulean)/0.08', border: '1px solid var(--do-cerulean)/0.2' }}>
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
              Plain English. No jargon. No vendor agenda.
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--do-text-muted)' }}>
              A Clarity Audit maps your actual operations, identifies the changes that will make the biggest difference, and gives you a plan you can act on. No reports you&apos;ll never read. No recommendations you can&apos;t implement.
            </p>
            <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-colors" style={{ backgroundColor: 'var(--do-action-primary)', color: 'var(--do-action-primary-text)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--do-action-primary-hover)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--do-action-primary)'; }}>
              See Clarity <ArrowRight size={18} />
            </Link>
          </div>

          {/* Related posts */}
          {(() => {
            const allPosts = localBlogPosts.items || [];
            const related = allPosts
              .filter((p: any) => p.slug !== slug && p.category === item.category)
              .slice(0, 3);
            if (related.length === 0) return null;
            return (
              <div className="mt-16 pt-12" style={{ borderTop: '1px solid var(--do-border-subtle)' }}>
                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
                  More in {item.category}
                </h3>
                <div className="space-y-6">
                  {related.map((post: any) => {
                    const pubDate = post.date || post.publishedDate;
                    const date = pubDate ? new Date(pubDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : '';
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block p-6 rounded-xl transition-all duration-200 hover:shadow-sm"
                        style={{ backgroundColor: 'var(--do-surface-page)', border: '1px solid var(--do-border-subtle)' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--do-cerulean)/0.4'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--do-border-subtle)'; }}
                      >
                        <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--do-cerulean)] transition-colors" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
                          {post.title}
                        </h4>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--do-text-muted)' }}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--do-text-muted)', opacity: 0.6 }}>
                          <span>{date}</span>
                          <span>·</span>
                          <span>{post.readTime} min read</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      </section>
    </>
  );
}
