import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';

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
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[#023047] mb-6">Blog Post Not Found</h1>
          <Link href="/blog" className="text-[#219EBC] font-semibold hover:underline">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  const pubDate = item.publishedDate ? new Date(item.publishedDate).toISOString() : new Date().toISOString();
  const displayDate = item.publishedDate
    ? new Date(item.publishedDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
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
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            {item.title}
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            {item.excerpt || ''}
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>By Craig Blackman</span>
            <span>·</span>
            <span>{displayDate}</span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </section>

      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]"
            dangerouslySetInnerHTML={{ __html: item.html || '' }}
          />
          <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
            <h3 className="text-lg font-bold text-[#023047] mb-3">
              Plain English. No jargon. No vendor agenda.
            </h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A Clarity Audit maps your actual operations, identifies the changes that will make the biggest difference, and gives you a plan you can act on. No reports you'll never read. No recommendations you can't implement.
            </p>
            <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              See Clarity <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
