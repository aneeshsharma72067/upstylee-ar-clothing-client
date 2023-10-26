/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:5000/api/:path*", // Proxy API requests to the backend
      },
      {
        source: "/:path*",
        destination: "/:path*", // Exclude dynamic routes from rewriting
      },
    ];
  },
};

module.exports = nextConfig;
