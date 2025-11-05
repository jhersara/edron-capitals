import { env } from 'prisma/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configuración de Turbopack
  turbopack: {
    // Puedes agregar configuraciones específicas de Turbopack aquí si es necesario
  },

  // Migrado: images.domains -> images.remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'edroncapitals.com',
      },
      // Agrega más patrones según necesites
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Variables de entorno (se mantiene igual)
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_FUND_NAME: process.env.NEXT_PUBLIC_FUND_NAME,
  },

  // Configuración para producción (se mantiene igual)
  compress: true,
  poweredByHeader: false,

  // Webpack config - Mantener solo si es estrictamente necesario
  // Si no tienes dependencias que requieran esta configuración, puedes eliminarla
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  }
};

export default nextConfig;