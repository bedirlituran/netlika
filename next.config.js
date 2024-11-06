/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbcdn.b-cdn.net', 'your-remote-domain.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // /api ile başlayan tüm isteklere
        destination: 'http://api.gammanet.az:8080/:path*',  // Gerçek API adresine yönlendirilmeli
      },
      {
        source: '/api/sms',
        destination: 'https://sendsms.az/smxml/api',  // SMS API
      },
    ];
  },
};

module.exports = nextConfig;
