import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      path: "path-browserify",
    };

    config.resolve.alias = {
      "node:path": "path-browserify",
    };

    return config;
  },
};

export default withMDX(config);
