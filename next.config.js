/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbcdn.b-cdn.net', 'your-remote-domain.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/sms', // Frontend'den bu route'a istek yapılacak
        destination: 'https://sendsms.az/smxml/api', // Bu URL'ye yönlendirilecek
      },
    ];
  },
};

module.exports = nextConfig;

