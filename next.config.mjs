/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "maysarabucket.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
