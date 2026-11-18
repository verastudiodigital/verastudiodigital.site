import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/config/site';
import { createPageMetadata } from '@/lib/seo';
import { buildProfessionalServiceJsonLd } from '@/lib/structured-data';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({
    title: `${siteConfig.name} | ${siteConfig.positioning} en Cochabamba y Bolivia`,
    description: siteConfig.description,
    path: '/',
  }),
  title: {
    default: `${siteConfig.name} | ${siteConfig.positioning}`,
    template: `%s`,
  },
};

export const viewport: Viewport = {
  themeColor: '#0073F7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildProfessionalServiceJsonLd();

  return (
    <html
      lang="es-BO"
      className={inter.variable}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        className="flex min-h-screen flex-col bg-[#F5F8FC] text-[#172033]"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#0073F7] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Ir al contenido principal
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GoogleAnalytics />
        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
