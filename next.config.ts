import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/best-dust-free-cat-litter", destination: "/best-cat-litter", permanent: true },
      { source: "/best-non-tracking-cat-litter", destination: "/best-cat-litter", permanent: true },
      { source: "/best-cat-litter-for-odor-control", destination: "/best-cat-litter", permanent: true },
    ];
  },
};

export default nextConfig;
