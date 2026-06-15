/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
