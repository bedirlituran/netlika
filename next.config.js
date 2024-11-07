/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbcdn.b-cdn.net', 'your-remote-domain.com'],
  },
  async rewrites() {
    return [
      // Gammanet API'yi yönlendirme
      {
        source: '/api/gammanet/:path*',  // API yolu
        destination: 'http://api.gammanet.az:8080/:path*', // Gammanet API URL'si
      },
      // SMS API'yi yönlendirme
      {
        source: '/api/sms/:path*',  // API yolu
        destination: 'https://sendsms.az/smxml/api/:path*', // SMS API URL'si
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/api/gammanet/:path*',  // Gammanet API için başlıklar
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',  // Tüm domainlerden erişime izin ver
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
      {
        source: '/api/sms/:path*',  // SMS API için başlıklar
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',  // Tüm domainlerden erişime izin ver
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
