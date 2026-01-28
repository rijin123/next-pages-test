import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.GITHUB_PAGES ? "/<repo-name>" : "",
  assetPrefix: process.env.GITHUB_PAGES ? "/<repo-name>/" : "",
};

export default nextConfig;
