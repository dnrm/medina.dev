module.exports = {
  // reactStrictMode: true,
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
