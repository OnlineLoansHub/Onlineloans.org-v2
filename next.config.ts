import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Performance: Optimize for modern browsers - reduces legacy JavaScript
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year - long cache lifetime for repeat visits
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
            // Keep only critical preconnects (max 4): fonts for above-the-fold content
            // Analytics preconnects removed - they're loaded lazily anyway
            value:
              '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin',
          },
        ],
      },
    ];

    // Performance: Long cache lifetime for all static assets (speeds up repeat visits)
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
        source: '/:path*.:ext(svg|png|jpg|jpeg|webp|ico|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Performance: Cache CSS files - long cache lifetime
      {
        source: '/:path*\\.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Performance: Cache JS files - long cache lifetime
      {
        source: '/:path*\\.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Performance: Cache font files
      {
        source: '/:path*.:ext(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      }
    );

    // Production-only headers
    if (process.env.NODE_ENV === 'production') {
      // Additional production optimizations can go here
    }

    return headers;
  },
};

export default nextConfig;
