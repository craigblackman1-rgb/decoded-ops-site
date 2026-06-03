'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  publishedDate?: string;
  readTime: number;
  category: string;
  featuredImage?: string | null;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.category).filter(Boolean));
    return ['All', ...Array.from(cats).sort()];
  }, [posts]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter(p => p.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: activeCategory === cat ? 'var(--do-cerulean)' : 'transparent',
              color: activeCategory === cat ? '#fff' : 'var(--do-text-muted)',
              border: activeCategory === cat ? '1px solid var(--do-cerulean)' : '1px solid var(--do-border-subtle)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div className="space-y-8 mb-20">
        {filtered.map(post => {
          const pubDate = post.date || post.publishedDate;
          const date = pubDate
            ? new Date(pubDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
            : '';
          const thumbSrc = post.featuredImage || null;

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card group block rounded-2xl hover:shadow-md transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: 'var(--do-surface-page)', border: '1px solid var(--do-border-subtle)' }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Thumbnail */}
                {thumbSrc && (
                  <div className="sm:w-56 shrink-0">
                    <img
                      src={thumbSrc}
                      alt=""
                      className="w-full h-48 sm:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="min-w-0">
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                        style={{ backgroundColor: 'var(--do-cerulean)/0.1', border: '1px solid var(--do-cerulean)/0.2' }}
                      >
                        <span className="text-xs font-semibold uppercase" style={{ color: 'var(--do-cerulean)' }}>
                          {post.category}
                        </span>
                      </div>
                      <h2
                        className="text-xl lg:text-2xl font-bold transition-colors mb-3"
                        style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}
                      >
                        {post.title}
                      </h2>
                      <p className="leading-relaxed max-w-2xl" style={{ color: 'var(--do-text-muted)' }}>
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-2 hidden sm:block">
                      <ArrowRight
                        size={24}
                        className="group-hover:translate-x-2 transition-transform"
                        style={{ color: 'var(--do-cerulean)' }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--do-text-muted)', opacity: 0.7 }}>
                    <span>{date}</span>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}

        {filtered.length === 0 && (
          <p className="text-center py-12" style={{ color: 'var(--do-text-muted)' }}>
            No posts found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
