import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
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
        image: item.featuredImage ? `https://decodedops.co.uk${item.featuredImage}` : 'https://decodedops.co.uk/opengraph-image',
        url: `https://decodedops.co.uk/blog/${slug}`,
        mainEntityOfPage: `https://decodedops.co.uk/blog/${slug}`,
        description: item.seo?.description || item.excerpt || item.title,
        wordCount: (item.html || '').replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length,
        articleSection: 'Operations',
        keywords: item.primary_keyword || (item.title || '').toLowerCase().split(' ').slice(0, 8).join(', '),
      },
    ],
  };
}

async function fetchBlogPost(slug: string) {
  try {
    const res = await fetch(`${HUB_API}/api/content/detail?slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.item || null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${HUB_API}/api/content/index`, {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      const data = await res.json();
      return (data.items || []).map((item: any) => ({ slug: item.slug }));
    }
  } catch {}
  return (localBlogPosts.items || []).map((item: any) => ({ slug: item.slug }));
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
      images: [{ url: item.featuredImage || '/opengraph-image', width: 1200, height: 630 }],
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

  if (!item || item.status === 'archived') {
    notFound();
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
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Insights', url: 'https://decodedops.co.uk/blog' },
        { name: item.title, url: `https://decodedops.co.uk/blog/${slug}` },
      ]} />

      {/* Article header */}
      <section className="g-off" data-od-id="header">
        <div className="wrap post-header">
          <Link href="/blog" className="back-link">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <span className="eyebrow">{item.category || 'Insights'}</span>
          <h1 className="h1">{item.title}</h1>
          {item.excerpt && <p className="lede">{item.excerpt}</p>}
          <div className="post-meta" data-od-id="post-meta">
            <span>Craig Blackman</span>
            <span>{displayDate}</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Inline image 1 */}
      {item.images?.[0] && (
        <section className="g-white">
          <div className="wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.images[0]}
              alt=""
              className="rounded-2xl shadow-sm w-full"
              style={{ border: '1px solid var(--do-border-subtle)' }}
              loading="lazy"
            />
          </div>
        </section>
      )}

      {/* Article body */}
      <section className="g-white" data-od-id="article">
        <div className="wrap prose">
          <div
            className="do-blog-prose"
            dangerouslySetInnerHTML={{ __html: item.html || '' }}
          />

          {/* Inline image 2 */}
          {item.images?.[1] && (
            <div className="mt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.images[1]}
                alt=""
                className="w-full rounded-2xl shadow-sm"
                style={{ border: '1px solid var(--do-border-subtle)' }}
                loading="lazy"
              />
            </div>
          )}

          {/* CTA box */}
          <div className="post-cta" data-od-id="post-cta">
            <h3 className="h3">Plain English. No jargon. No vendor agenda.</h3>
            <p>
              A Clarity Audit maps your actual operations, identifies the changes that will make the biggest difference, and gives you a plan you can act on. No reports you&apos;ll never read. No recommendations you can&apos;t implement.
            </p>
            <Link href="/clarity" className="btn btn--primary">
              See Clarity <ArrowRight size={18} />
            </Link>
          </div>

          {/* Related posts by cluster */}
          <RelatedPosts currentSlug={slug} cluster={item.cluster} />
        </div>
      </section>
    </>
  );
}
