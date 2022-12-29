/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'customValue',
  },
  compress: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
