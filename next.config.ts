// next.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

initOpenNextCloudflareForDev();

module.exports = nextConfig;