import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      // STATIC LANDER FIX — rewrite clean path to index.html
      {
        source: '/business-loan/restaurant-funding/florida',
        destination:
          '/business-loan/restaurant-funding/florida/index.html',
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value:
              '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=dns-prefetch',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
