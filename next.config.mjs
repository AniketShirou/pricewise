/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Enables server actions (experimental feature)
    serverComponentsExternalPackages: ['mongoose'], // Adds 'mongoose' to external packages
  },
  images: {
    domains: ['m.media-amazon.com'], // Allows images from this domain
  }
}

export default nextConfig;
