import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      { source: '/audit', destination: '/clarity', permanent: true },
      { source: '/fractional', destination: '/retained', permanent: true },
      { source: '/:path*', destination: 'https://decodedops.co.uk/:path*', permanent: true, has: [{ type: 'host', value: 'www.decodedops.co.uk' }] },
      { source: '/client-docs/:path*', destination: '/clients/login', permanent: false },
      // DS implementation work order (2026-07-31), Lane 0: old URLs being
      // retired in favour of new DS-ported routes built by later lanes.
      // Targets don't exist yet — that's expected, the other lanes build
      // them; the redirect just needs to be ready ahead of that landing.
      { source: '/decoded-data-app', destination: '/apps/data-app', permanent: true },
      { source: '/resources/software-reviews', destination: '/resources', permanent: true },
      { source: '/decoded-method', destination: '/resources/decoded-method', permanent: true },
      { source: '/sectors/workwear-teamwear', destination: '/sectors/workwear', permanent: true },
      { source: '/case-studies/hanicks', destination: '/case-studies/case-study-01', permanent: true },
      { source: '/case-studies/tacklebag', destination: '/case-studies/case-study-02', permanent: true },
      { source: '/case-studies/cobra-workwear', destination: '/case-studies/case-study-03', permanent: true },
      { source: '/apps/crm', destination: '/apps', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '0' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), midi=(), sync-xhr=(), microphone=(), camera=(), display-capture=(), publickey-credentials-get=()' },
          {
            key: 'Content-Security-Policy',
            // 'unsafe-eval' is added in development ONLY. Webpack dev mode (`next dev --webpack`)
            // uses eval for HMR and source maps, and without this React never hydrates locally,
            // which makes every interactive component look broken while testing. Production
            // headers are unchanged.
            value: `default-src 'self'; script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://analytics.ahrefs.com https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://analytics.ahrefs.com; frame-ancestors 'none'; form-action 'self'; base-uri 'self'; object-src 'none'`,
          },
        ],
      },
      {
        source: '/client-docs/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
        ],
      },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;
