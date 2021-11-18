/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['tetr.io'],
  },
  async redirects() {
    return [
      {
        source: '/users/:path*',
        destination: '/user/:path*',
        permanent: true,
      },
      {
        source: '/user',
        destination: '/',
        permanent: true,
      }
    ]
  }
}
