'use client';

import Link from 'next/link';
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

function PostMeta({ date, readTime }: { date: string; readTime: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--do-text-xs)', color: 'var(--do-text-muted)' }}>
      <span>{date}</span>
      <span aria-hidden="true">&middot;</span>
      <span>{readTime} min read</span>
    </div>
  );
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const leadPost = posts[0];

  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.category).filter(Boolean));
    return ['All', ...Array.from(cats).sort()];
  }, [posts]);

  const gridPosts = useMemo(() => {
    const remaining = posts.slice(1);
    if (activeCategory === 'All') return remaining;
    return remaining.filter(p => p.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <div>
      {/* Lead post */}
      {leadPost && (
        <div style={{ marginBottom: 56 }}>
          <Link
            href={`/blog/${leadPost.slug}`}
            className="focus-visible:outline-3 focus-visible:outline-[var(--do-cerulean)] focus-visible:outline-offset-3"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 1fr',
              alignItems: 'stretch',
              background: 'var(--do-surface-raised)',
              border: '1px solid var(--do-border-subtle)',
              borderRadius: 'var(--do-radius-2xl)',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color var(--do-duration-normal) var(--do-ease-default), box-shadow var(--do-duration-normal) var(--do-ease-default)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--do-cerulean)';
              e.currentTarget.style.boxShadow = 'var(--do-shadow-md)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--do-border-subtle)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {leadPost.featuredImage && (
              <img
                src={leadPost.featuredImage}
                alt=""
                style={{ width: '100%', height: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="inline-block text-xs font-semibold tracking-wide uppercase" style={{ alignSelf: 'flex-start', color: 'var(--do-cerulean)', padding: '4px 11px', borderRadius: 9999, background: 'rgba(33,158,188,0.1)', border: '1px solid rgba(33,158,188,0.28)' }}>
                {leadPost.category}
              </span>
              <h2 className="font-bold leading-tight" style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: 'var(--do-text-3xl)', color: 'var(--do-text-primary)', margin: '14px 0' }}>
                {leadPost.title}
              </h2>
              <p style={{ fontSize: 'var(--do-text-base)', lineHeight: 'var(--do-leading-relaxed)', color: 'var(--do-text-secondary)', margin: 0 }}>
                {leadPost.excerpt}
              </p>
              <div style={{ marginTop: 18 }}>
                <PostMeta
                  date={leadPost.date || leadPost.publishedDate ? new Date(leadPost.date || leadPost.publishedDate!).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) : ''}
                  readTime={leadPost.readTime}
                />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Filter rail */}
      <div
        className="flex flex-wrap gap-2 items-center"
        role="group"
        aria-label="Filter by category"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          margin: '0 0 28px',
          padding: '16px 0',
          background: 'var(--do-surface-page)',
          borderBottom: '1px solid var(--do-border-subtle)',
        }}
      >
        {categories.map(cat => (
          <button
            key={cat}
            type="button"
            aria-pressed={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className="focus-visible:outline-3 focus-visible:outline-[var(--do-cerulean)] focus-visible:outline-offset-2"
            style={{
              fontFamily: 'var(--do-font-body)',
              fontSize: 'var(--do-text-sm)',
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: 9999,
              cursor: 'pointer',
              minHeight: 38,
              background: activeCategory === cat ? 'var(--do-prussian-blue)' : 'transparent',
              color: activeCategory === cat ? 'var(--do-off-white)' : 'var(--do-text-secondary)',
              border: activeCategory === cat ? '1px solid var(--do-prussian-blue)' : '1px solid var(--do-border-subtle)',
              transition: 'background-color var(--do-duration-fast) var(--do-ease-default), border-color var(--do-duration-fast) var(--do-ease-default)',
            }}
          >
            {cat}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--do-font-body)', fontSize: 'var(--do-text-xs)', color: 'var(--do-text-muted)', letterSpacing: '0.06em' }}>
          {gridPosts.length} post{gridPosts.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: 72 }}>
        {gridPosts.map(post => {
          const pubDate = post.date || post.publishedDate;
          const date = pubDate
            ? new Date(pubDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
            : '';

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="focus-visible:outline-3 focus-visible:outline-[var(--do-cerulean)] focus-visible:outline-offset-[-3px] rounded-2xl"
              style={{
                background: 'var(--do-surface-raised)',
                border: '1px solid var(--do-border-subtle)',
                borderRadius: 'var(--do-radius-2xl)',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'border-color var(--do-duration-normal) var(--do-ease-default), box-shadow var(--do-duration-normal) var(--do-ease-default)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--do-cerulean)';
                e.currentTarget.style.boxShadow = 'var(--do-shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--do-border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {post.featuredImage && (
                <img
                  src={post.featuredImage}
                  alt=""
                  style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
                  loading="lazy"
                />
              )}
              <div style={{ padding: '24px 26px 26px' }}>
                <span className="inline-block text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--do-cerulean)', padding: '4px 11px', borderRadius: 9999, background: 'rgba(33,158,188,0.1)', border: '1px solid rgba(33,158,188,0.28)' }}>
                  {post.category}
                </span>
                <h3 className="font-bold leading-snug" style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: 'var(--do-text-xl)', color: 'var(--do-text-primary)', margin: '14px 0 10px' }}>
                  {post.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 'var(--do-text-sm)',
                    color: 'var(--do-text-secondary)',
                    margin: '0 0 18px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.excerpt}
                </p>
                <PostMeta date={date} readTime={post.readTime} />
              </div>
            </Link>
          );
        })}

        {gridPosts.length === 0 && (
          <p className="text-center py-12" style={{ color: 'var(--do-text-muted)', gridColumn: '1 / -1' }}>
            No posts found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
