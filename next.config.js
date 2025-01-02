/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable Image Optimization for static export mode
  },
  // distDir: 'dist',
  basePath: '/avira-tech-revamp2',
};

export default nextConfig;
