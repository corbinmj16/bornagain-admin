/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "bornagainbucket.nyc3.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
