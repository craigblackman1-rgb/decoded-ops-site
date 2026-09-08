import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

const PRODUCTION_HOST = 'decodedops.co.uk';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const hdrs = await headers();
  const host = hdrs.get('host') ?? '';
  const isProduction =
    host === PRODUCTION_HOST || host === `www.${PRODUCTION_HOST}`;

  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://decodedops.co.uk/sitemap.xml',
  };
}
