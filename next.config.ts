import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      // Preserva las URLs existentes en Google Play y AdMob (/listo/ y /lukio/)
      {
        source: '/listo',
        destination: '/listo/index.html',
      },
      {
        source: '/lukio',
        destination: '/lukio/index.html',
      },
      // Rutas limpias y directas para catálogos y menús de clientes
      {
        source: '/nadir-joyeria',
        destination: '/c/nadir-joyeria',
      },
      {
        source: '/nadir',
        destination: '/c/nadir-joyeria',
      },
      {
        source: '/joyeria-sasai',
        destination: '/c/nadir-joyeria',
      },
      {
        source: '/sasai',
        destination: '/c/nadir-joyeria',
      },
      {
        source: '/pedidos-comida',
        destination: '/c/pedidos-comida',
      },
      {
        source: '/comida',
        destination: '/c/pedidos-comida',
      },
      {
        source: '/distribuidora-abarrotes',
        destination: '/c/distribuidora-abarrotes',
      },
      {
        source: '/distribuidora',
        destination: '/c/distribuidora-abarrotes',
      },
      {
        source: '/pasteleria-lepetit',
        destination: '/c/pasteleria-lepetit',
      },
      {
        source: '/pasteleria',
        destination: '/c/pasteleria-lepetit',
      },
      {
        source: '/boutique-moda',
        destination: '/c/boutique-moda',
      },
      {
        source: '/boutique',
        destination: '/c/boutique-moda',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
