/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  basePath: "/Cat-astrophic",
  assetPrefix: "/Cat-astrophic/",
};

export default nextConfig;
