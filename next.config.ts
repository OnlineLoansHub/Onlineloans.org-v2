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
        destination: '/business-loan/restaurant-funding/florida/index.html',
      },
    ];
  },

  async headers() {
    const headers: Array<{
      source: string;
      headers: Array<{ key: string; value: string }>;
    }> = [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value:
              '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=dns-prefetch, <https://t.contentsquare.net>; rel=preconnect, <https://www.googletagmanager.com>; rel=preconnect, <https://server-ol-v2-fcaa9dab215e.herokuapp.com>; rel=preconnect',
          },
        ],
      },
    ];

    if (process.env.NODE_ENV === 'production') {
      headers.push(
        {
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/:path*.:ext(svg|png|jpg|jpeg|webp|ico)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        // Performance: Cache CSS files in production
        {
          source: '/:path*\\.css',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        // Performance: Cache JS files in production
        {
          source: '/:path*\\.js',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        }
      );
    }

    return headers;
  },
};

export default nextConfig;
