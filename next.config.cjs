// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placekitten.com'], // Placeholder domains for development
  },
  // Enable SWR for Progressive Web App capabilities
 // swcMinify: true,
};

module.exports = nextConfig;
