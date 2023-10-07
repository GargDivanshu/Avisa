/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
    typescript: {
        ignoreBuildErrors: true,
      },
}

module.exports = nextConfig
