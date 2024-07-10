/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c0.wallpaperflare.com',
      },
      {
        protocol: 'https',
        hostname: 'cs13.pikabu.ru',
      },
    ],
  },
}

export default nextConfig
