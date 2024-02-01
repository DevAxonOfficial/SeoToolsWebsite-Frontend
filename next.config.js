/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.producthunt.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
