import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "imgur.com" }, { hostname: "drive.usercontent.google.com"  }, { hostname: "drive.google.com" }],
  },
};

export default nextConfig;
