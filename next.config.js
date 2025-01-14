/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["coding-challenge-api.aerolab.co"]
  },
  optimizeFonts: false
}

module.exports = nextConfig
