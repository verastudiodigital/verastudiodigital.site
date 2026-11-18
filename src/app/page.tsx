import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { createPageMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { DemosAndProductsSection } from '@/components/sections/DemosAndProductsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = createPageMetadata({
  title: `${siteConfig.name} | Presencia digital, desarrollo web y software comercial en Bolivia`,
  description:
    'Servicios de diseño web profesional, catálogos digitales interactivos, configuración de WhatsApp Business y software comercial en Cochabamba y toda Bolivia.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <DemosAndProductsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
