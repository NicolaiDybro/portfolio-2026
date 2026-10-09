import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up the
  // stray package-lock.json in the parent directory.
  turbopack: {
    root: __dirname,
  },
  // Gift-card pages live in the separate "gavekort" Vercel project.
  async rewrites() {
    return [
      {
        source: "/G/:path*",
        destination: "https://gavekort-alpha.vercel.app/G/:path*",
      },
    ];
  },
};

export default nextConfig;
