/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbcdn.b-cdn.net', 'your-remote-domain.com'],
  },
  async rewrites() {
    return [
    
      {
        // /api/sms adresi ile gelen istekler 'sendsms.az' yönlendirilir
        source: '/api/sms',
        destination: 'https://sendsms.az/smxml/api',
      },
    ];
  },
};

module.exports = nextConfig;
