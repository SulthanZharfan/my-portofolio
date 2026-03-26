import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'my-portofolio';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the app works correctly at sulthanzharfan.github.io/my-portofolio/
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
};

export default nextConfig;
