/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // activate only before build/deactivate in development
  trailingSlash: true,
}  

module.exports = nextConfig
