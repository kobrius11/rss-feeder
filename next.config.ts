import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  // basePath: isProd ? '/rss-feeder' : '',
  images: {
    domains: ['blogger.googleusercontent.com'],
    unoptimized: true
  }
};

export default nextConfig;
