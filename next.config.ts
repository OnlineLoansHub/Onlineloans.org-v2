import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

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
