/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbcdn.b-cdn.net', 'your-remote-domain.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/sms',
        destination: 'https://sendsms.az/smxml/api', 
      },
      {
        source: '/api/gammanet', 
        destination: 'http://api.gammanet.az',
      },
    ];
  },
};

module.exports = nextConfig;
