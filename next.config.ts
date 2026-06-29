import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Required since Next.js 16: explicit quality allowlist
    qualities: [50, 75, 90],
    // Support both WebP and AVIF formats
    formats: ["image/avif", "image/webp"],
    // Allow external images from our text-to-image API
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coresg-normal.trae.ai",
        port: "",
        pathname: "/api/ide/v1/text_to_image",
      },
    ],
  },
};

export default nextConfig;
