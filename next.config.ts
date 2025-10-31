import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Force HTTPS
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://ajagunla1.com/:path*',
        permanent: true,
      },
      // Redirect www to root domain
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ajagunla1.com' }],
        destination: 'https://ajagunla1.com/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.pinpoint.ng',
      },
      {
        protocol: 'https',
        hostname: 'static.ajagunla1.com',
      },
    ],
  },
};

export default nextConfig;
