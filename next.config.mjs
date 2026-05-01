/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Allows all paths from this host
      },
      {
        protocol: "https",
        hostname: "**.istockphoto.com", // The double asterisk covers all iStock subdomains
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
