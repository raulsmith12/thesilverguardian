import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Static exports do not provide Next.js' runtime image optimizer.
  // Keep next/image's sizing and loading behavior while emitting direct asset URLs.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
