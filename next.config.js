/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbcdn.b-cdn.net', 'your-remote-domain.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api',  // /api ile başlayan her isteği
        destination: 'http://api.gammanet.az:8080',  // Gerçek API adresine yönlendir
      },
      {
        source: '/api/sms',
        destination: 'https://sendsms.az/smxml/api',  // SMS API
      },
    ];
  },
};

module.exports = nextConfig;
