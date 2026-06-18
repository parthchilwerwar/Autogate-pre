import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

// Next.js 16 — Turbopack is the default bundler. No webpack overrides.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so a stray parent lockfile doesn't
  // get inferred as the root (Turbopack otherwise warns and walks up the tree).
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;
