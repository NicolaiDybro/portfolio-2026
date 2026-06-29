import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up the
  // stray package-lock.json in the parent directory.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
