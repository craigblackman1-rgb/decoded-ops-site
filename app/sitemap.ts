import { MetadataRoute } from 'next'
import localBlogPosts from '@/data/blog-index.json'
import routeSlugs from '@/data/route-slugs.json'
import { locations } from '@/data/locations'

const BASE_URL = 'https://decodedops.co.uk'
const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000'

async function fetchBlogPosts() {
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

// Slugs are generated at BUILD time by scripts/generate-route-slugs.mjs (npm prebuild).
//
// Do NOT read the filesystem here. This sitemap is ISR because of the blog fetch above,
// so it re-executes inside the running container, where `output: 'standalone'` means the
// app/ source directory does not exist (the Dockerfile runner copies only public,
// .next/standalone and .next/static). A readdirSync here returns nothing and silently
// drops every problem, sector and tool URL from the sitemap.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogPosts();

  const problemSlugs = routeSlugs.problems
  const sectorSlugs = routeSlugs.sectors
  const toolSlugs = routeSlugs.tools

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/clarity`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/cookies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/deliver`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/apps`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/apps/data-app`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/apps/artwork-manager`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/apps/commerce`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/apps/crm`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/how-i-build`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/decoded-method`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/process-quality-system`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/problems`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/resources/six-sigma`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.65 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/resources/audit-checklist`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/resources/5-warning-signs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/resources/software-reviews`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/retained`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/small-business`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/transform`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies/cobra-workwear`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies/eternal-fitness`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies/hanicks`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies/tacklebag`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date || post.publishedDate || new Date()),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  const problemPages = problemSlugs.map(slug => ({
    url: `${BASE_URL}/problems/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.65,
  }))

  const sectorPages = sectorSlugs.map(slug => ({
    url: `${BASE_URL}/sectors/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  const toolPages = toolSlugs.map(slug => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Location hub pages
  const locationHubs = [
    { url: `${BASE_URL}/locations/fractional-cto`, priority: 0.75 },
    { url: `${BASE_URL}/locations/tech-audit`, priority: 0.75 },
  ].map(hub => ({
    url: hub.url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: hub.priority,
  }))

  // Location pages
  const locationPages = locations.flatMap(loc => [
    {
      url: `${BASE_URL}/locations/fractional-cto/${loc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations/tech-audit/${loc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ])

  return [
    ...staticPages,
    ...blogPages,
    ...problemPages,
    ...sectorPages,
    ...toolPages,
    ...locationHubs,
    ...locationPages,
  ]
}
