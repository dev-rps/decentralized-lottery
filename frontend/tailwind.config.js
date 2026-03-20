/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dangerously allow production builds to successfully complete even if
  // your project has TypeScript errors.
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
