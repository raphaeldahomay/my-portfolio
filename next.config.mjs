/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/my-portfolio' : '', // <-- CHANGE this to match your GitHub repo name
};

export default nextConfig;
