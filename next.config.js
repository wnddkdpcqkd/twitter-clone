/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "t1.daumcdn.net"],
  },
};

module.exports = nextConfig;
