import type { NavItem } from '@/types/site';

export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export const legalNavigation: NavItem[] = [
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Listo – Aviso de Pagos QR', href: '/listo' },
  { label: 'LUKIO: Gimnasia Mental', href: '/lukio' },
];
