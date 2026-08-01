import Link from 'next/link';

const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate?: string;
  wordCount?: number;
  category?: string;
  cluster?: string;
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
    <div className="related" data-od-id="related-posts">
      <h3>Related reading</h3>
      <div className="related-list">
        {related.map((post: any) => {
          const tag = post.category || post.cluster || cluster;
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <span>{post.title}</span>
              <span className="tag">{tag}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
