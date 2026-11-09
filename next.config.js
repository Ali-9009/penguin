/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      
      {
        source: "/contact",
        destination: "/",
        permanent: false,
      },
      {
        source: "/coa",
        destination: "/",
        permanent: false,
      },
      {
        source: "/account",
        destination: "/",
        permanent: false,
      },
      {
        source: "/faqs",
        destination: "/",
        permanent: false,
      },
      {
        source: "/partner-program",
        destination: "/",
        permanent: false,
      },
      {
        source: "/track-order",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default config;
