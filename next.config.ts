import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/audit', destination: '/clarity', permanent: true },
      { source: '/fractional', destination: '/retained', permanent: true },
    ];
  },
};

export default nextConfig;
