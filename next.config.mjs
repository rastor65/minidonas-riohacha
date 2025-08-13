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
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/minidonas-riohacha' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/minidonas-riohacha' : '',
}

export default nextConfig
