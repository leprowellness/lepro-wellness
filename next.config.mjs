/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Force all traffic to https://www.leprowellnesscenter.ca
  // This fixes the Google indexing redirect failures
  async redirects() {
    return [
      // http://leprowellnesscenter.ca → https://www.leprowellnesscenter.ca
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'leprowellnesscenter.ca' }],
        destination: 'https://www.leprowellnesscenter.ca/:path*',
        permanent: true,
      },
      // http://www.leprowellnesscenter.ca → https://www.leprowellnesscenter.ca
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.leprowellnesscenter.ca' }],
        destination: 'https://www.leprowellnesscenter.ca/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
