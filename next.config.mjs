import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      path: require.resolve("path-browserify"),
    };

    config.resolve.alias = {
      "node:path": require.resolve("path-browserify"),
    };

    return config; // Ensure the modified config is returned
  },
};

export default withMDX(config);
