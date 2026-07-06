/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Nie blokuj builda na Vercelu z powodu lintu (ESLint nie jest skonfigurowany).
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
