/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      images: {
        domains: ["lh3.googleusercontent.com"],
      },
      compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
      },
      env: {
        JWT_SECRET: "Y9/yr3NfXj4mKcp1PxX1Cnshb3Z7X+nHXwZWVkI3Uas=",
      },
    };
  }
  return {
    reactStrictMode: true,
    images: {
      domains: ["lh3.googleusercontent.com"],
    },
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
    env: {
      JWT_SECRET: "Y9/yr3NfXj4mKcp1PxX1Cnshb3Z7X+nHXwZWVkI3Uas=",
    },
  };
};

module.exports = nextConfig;
