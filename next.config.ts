import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=dns-prefetch',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
