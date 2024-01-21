/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbcdn.b-cdn.net', 'your-remote-domain.com'],
  },
};

module.exports = nextConfig;

