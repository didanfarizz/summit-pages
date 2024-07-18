/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@prisma/client'] = false;
    }
    return config;
  },
};

export default nextConfig;
