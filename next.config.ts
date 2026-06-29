import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [{ loader: "@svgr/webpack", options: { svgo: false } }],
        as: "*.js",
      },
    },
  },
  sassOptions: {
    additionalData: `@use "${path.resolve("./src/app/styles/breakpoints")}" as *;`,
  },
  output: "standalone",
};

export default nextConfig;
