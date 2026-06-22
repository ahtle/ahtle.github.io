import type { NextConfig } from "next";

const isGithubPages = process.env.STATIC_EXPORT === "true";

const images: NextConfig["images"] = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "raw.githubusercontent.com",
      pathname: "/PokeAPI/sprites/**",
    },
  ],
};

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      images: { ...images, unoptimized: true },
    }
  : {
      output: "standalone",
      images,
    };

export default nextConfig;
