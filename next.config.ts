import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Required since Next.js 16: explicit quality allowlist
    qualities: [50, 75, 90],
    // Support both WebP and AVIF formats
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
