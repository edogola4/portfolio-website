import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Read configuration from next-intl.config.* at the project root
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placekitten.com'
      }
    ]
  },
};

export default withNextIntl(nextConfig);
