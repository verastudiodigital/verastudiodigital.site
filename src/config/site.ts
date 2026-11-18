import type { SiteConfig } from '@/types/site';

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://verastudiodigital.site';

export const siteConfig: SiteConfig = {
  name: 'Vera Studio Digital',
  shortName: 'Vera Studio',
  slogan: 'Servicios de Marketing Digital',
  positioning: 'Soluciones digitales para negocios',
  description:
    'Ayudamos a los negocios a mejorar su presencia digital, organizar sus operaciones y optimizar sus procesos comerciales mediante diseño, desarrollo web y herramientas tecnológicas.',
  url: rawSiteUrl.replace(/\/+$/, ''),
  locale: 'es_BO',
  country: 'Bolivia',
  city: 'Cochabamba',
  coverage: 'Cochabamba y otros departamentos de Bolivia (atención presencial o remota según proyecto)',
  ownerName: 'Omar Vera Huanca',
  logo: {
    horizontal: '/brand/logo-horizontal.png',
    square: '/brand/logo-square.png',
    alt: 'Vera Studio Digital',
  },
  colors: {
    primary: '#0073F7',
    primaryDark: '#063B79',
    background: '#F5F8FC',
    surface: '#FFFFFF',
    textMain: '#172033',
    textMuted: '#64748B',
    border: '#E2E8F0',
  },
  contact: {
    whatsappNumber: '59176406512',
    whatsappDisplay: '+591 76406512',
    email: 'verastudiodigital@gmail.com',
  },
  socials: [
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/VeraStudioDigital/',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      href: 'https://www.tiktok.com/@vera_studio_digital',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      href: 'https://www.youtube.com/@VeraStudioDigital',
    },
  ],
  defaultWhatsappMessage:
    'Hola Vera Studio Digital, quisiera información y asesoramiento sobre sus soluciones digitales para mi negocio.',
};
