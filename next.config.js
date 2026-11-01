const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: process.env.BASE_PATH || "",
  images: {
    domains: [
      "i.scdn.co",
      "upload.wikimedia.org",
      "cdn.hashnode.com",
      "cms.medina.dev",
      "volteclink.medina.dev"
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
