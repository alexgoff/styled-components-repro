/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: { ssr: true },
  },
  experimental: {
    appDir: true,
  },
};
