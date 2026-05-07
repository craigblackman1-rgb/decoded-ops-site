import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/audit', destination: '/clarity', permanent: true },
      { source: '/fractional', destination: '/retained', permanent: true },
      { source: '/:path*', destination: 'https://decodedops.co.uk/:path*', permanent: true, has: [{ type: 'host', value: 'www.decodedops.co.uk' }] },
    ];
  },
};

export default nextConfig;
