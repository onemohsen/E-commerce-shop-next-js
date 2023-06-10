/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, /* TODO: change to true */
  images: {
    domains: ["localhost", "127.0.0.1", "picsum.photos"]
  },
}

module.exports = nextConfig
