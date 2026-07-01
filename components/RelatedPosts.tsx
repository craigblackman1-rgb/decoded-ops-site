import Link from 'next/link';

const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate?: string;
  wordCount?: number;
}

async function fetchPublishedPosts(): Promise<RelatedPost[]> {
  try {
    const res = await fetch(`${HUB_API}/api/content/index`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.items || [];
  } catch {
    return [];
  }
}

export default async function RelatedPosts({ currentSlug, cluster }: { currentSlug: string; cluster?: string }) {
  if (!cluster) return null;

  const posts = await fetchPublishedPosts();
  const related = posts
    .filter((p) => p.slug !== currentSlug && (p as any).cluster === cluster)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-12" style={{ borderTop: '1px solid var(--do-border-subtle)' }}>
      <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
        More in this topic
      </h3>
      <div className="space-y-6">
        {related.map((post: any) => {
          const pubDate = post.publishedDate;
          const date = pubDate ? new Date(pubDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : '';
          const readTime = post.wordCount ? Math.max(1, Math.round(post.wordCount / 200)) : undefined;
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card-subtle group block p-6 rounded-xl transition-all duration-200 hover:shadow-sm"
              style={{ backgroundColor: 'var(--do-surface-page)', border: '1px solid var(--do-border-subtle)' }}
            >
              <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--do-cerulean)] transition-colors" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
                {post.title}
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--do-text-muted)' }}>
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--do-text-muted)', opacity: 0.6 }}>
                {date && <span>{date}</span>}
                {date && readTime && <span>·</span>}
                {readTime && <span>{readTime} min read</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
