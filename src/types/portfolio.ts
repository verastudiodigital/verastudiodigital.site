export type PortfolioCategory =
  | 'todos'
  | 'diseno-web'
  | 'catalogos-digitales'
  | 'redes-sociales'
  | 'automatizacion-administrativa'
  | 'soluciones-comerciales';

export interface PortfolioCategoryOption {
  id: PortfolioCategory;
  label: string;
}

export type PortfolioKind = 'producto-propio' | 'demostracion';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'todos'>;
  categoryLabel: string;
  solutionType: string;
  kind: PortfolioKind;
  badgeText: string;
  description: string;
  objective: string;
  solutionSummary: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  mockupVariant:
    | 'listo-app'
    | 'lukio-app'
    | 'web-corporativa'
    | 'catalogo-digital'
    | 'catalogo-joyeria'
    | 'catalogo-pasteleria'
    | 'pedidos-comida'
    | 'distribuidora-abarrotes'
    | 'redes-sociales'
    | 'sistema-admin'
    | 'whatsapp-business'
    | 'misalon-platform'
    | 'panito-platform';
  externalUrl?: string;
  externalLabel?: string;
  relatedServiceSlug?: string;
}
