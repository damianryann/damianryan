/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'damianryan-cms.up.railway.app',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
