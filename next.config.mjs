/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  basePath: '/my-portfolio', // <-- CHANGE this to match your GitHub repo name
};

export default nextConfig;
