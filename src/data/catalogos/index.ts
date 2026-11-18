import { nadirJoyeriaProducts, type JoyeriaProduct } from './nadirJoyeriaData';
import { foodProductsData, type FoodProduct } from './comidaDeliveryData';
import { distribuidoraProductsData, type DistribItem } from './distribuidoraAbarrotesData';
import { pasteleriaProductsData, type PasteleriaProduct } from './pasteleriaData';
import { boutiqueProductsData, type BoutiqueProduct } from './boutiqueData';

export {
  nadirJoyeriaProducts,
  nadirJoyeriaProducts as joyeriaSasaiProducts,
  foodProductsData,
  distribuidoraProductsData,
  pasteleriaProductsData,
  boutiqueProductsData,
};

export type {
  JoyeriaProduct,
  FoodProduct,
  DistribItem,
  PasteleriaProduct,
  BoutiqueProduct,
};

export interface CatalogMetadata {
  slug: string;
  aliases: string[];
  businessName: string;
  categoryName: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  badge: string;
  phoneWhatsApp: string;
  fullUrl: string;
}

export const CATALOGS_REGISTRY: Record<string, CatalogMetadata> = {
  'nadir-joyeria': {
    slug: 'nadir-joyeria',
    aliases: ['nadir', 'joyeria-nadir', 'joyeria-sasai', 'sasai', 'joyeria'],
    businessName: 'Nadir Joyería',
    categoryName: 'Alta Joyería & Orfebrería de Autor',
    seoTitle: 'Nadir Joyería | Catálogo Editorial de Joyas & Orfebrería de Autor',
    seoDescription:
      'Catálogo editorial de alta orfebrería de Nadir Joyería: anillos, aretes, collares y pulseras en Oro 14K, Plata 925 y gemas finas con pedidos por WhatsApp.',
    heroHeadline: 'Nadir Joyería',
    heroSubheadline: 'Esculturas en metales nobles para llevar en la piel.',
    badge: 'Alta Joyería',
    phoneWhatsApp: '59176406512',
    fullUrl: 'https://verastudiodigital.site/c/nadir-joyeria',
  },
  'joyeria-sasai': {
    slug: 'nadir-joyeria',
    aliases: ['sasai', 'joyeria'],
    businessName: 'Nadir Joyería',
    categoryName: 'Alta Joyería & Orfebrería de Autor',
    seoTitle: 'Nadir Joyería | Catálogo Editorial de Joyas & Orfebrería de Autor',
    seoDescription:
      'Catálogo editorial de alta orfebrería de Nadir Joyería: anillos, aretes, collares y pulseras en Oro 14K, Plata 925 y gemas finas con pedidos por WhatsApp.',
    heroHeadline: 'Nadir Joyería',
    heroSubheadline: 'Esculturas en metales nobles para llevar en la piel.',
    badge: 'Alta Joyería',
    phoneWhatsApp: '59176406512',
    fullUrl: 'https://verastudiodigital.site/c/nadir-joyeria',
  },
  'pedidos-comida': {
    slug: 'pedidos-comida',
    aliases: ['comida', 'restaurante', 'burgers', 'delivery'],
    businessName: 'Fuego & Brasa Burgers & Pizza',
    categoryName: 'Restaurante & Delivery de Comida Rápida Gourmet',
    seoTitle: 'Fuego & Brasa | Pedidos de Comida & Delivery en Cochabamba',
    seoDescription:
      'Menú digital con pedidos directos a WhatsApp: Hamburguesas smash artesanales, pizzas a la piedra, alitas crujientes y combos.',
    heroHeadline: 'Fuego & Brasa',
    heroSubheadline: 'Burgers artesanales a la parrilla y pizzas a la piedra con envío directo.',
    badge: 'Gastronomía & Delivery',
    phoneWhatsApp: '59176406512',
    fullUrl: 'https://verastudiodigital.site/c/pedidos-comida',
  },
  'distribuidora-abarrotes': {
    slug: 'distribuidora-abarrotes',
    aliases: ['distribuidora', 'abarrotes', 'mayorista'],
    businessName: 'Distribuidora Mayorista Los Andes',
    categoryName: 'Provisión Mayorista para Tiendas de Barrio & Minimarkets',
    seoTitle: 'Distribuidora Mayorista Los Andes | Provisión de Abarrotes en Bolivia',
    seoDescription:
      'Pedidos mayoristas directos para tiendas de barrio, minimarkets y pulperías: papel higiénico, galletas Mabel’s, aceites Fino, detergentes OMO y dulces.',
    heroHeadline: 'Distribuidora Mayorista Los Andes',
    heroSubheadline: 'Provisión confiable por fardos y cajas con reparto directo a tu tienda.',
    badge: 'Mayorista B2B Tiendas',
    phoneWhatsApp: '59176406512',
    fullUrl: 'https://verastudiodigital.site/c/distribuidora-abarrotes',
  },
  'pasteleria-lepetit': {
    slug: 'pasteleria-lepetit',
    aliases: ['pasteleria', 'lepetit', 'reposteria'],
    businessName: 'Le Petit Atelier Pâtisserie',
    categoryName: 'Alta Pastelería & Repostería Fina',
    seoTitle: 'Le Petit Atelier | Pastelería Fina & Tortas de Autor',
    seoDescription:
      'Catálogo de repostería francesa artesanal: milhojas, cheesecakes, shoux de autor y tortas de celebración con encargo por WhatsApp.',
    heroHeadline: 'Le Petit Atelier',
    heroSubheadline: 'Repostería francesa con ingredientes nobles y presentación impecable.',
    badge: 'Pastelería Boutique',
    phoneWhatsApp: '59176406512',
    fullUrl: 'https://verastudiodigital.site/c/pasteleria-lepetit',
  },
  'boutique-moda': {
    slug: 'boutique-moda',
    aliases: ['boutique', 'moda'],
    businessName: 'Maison Véra Boutique',
    categoryName: 'Moda Femenina & Colección de Temporada',
    seoTitle: 'Maison Véra | Boutique Femenina & Tendencias',
    seoDescription:
      'Colección cápsula de vestidos de gala, lino natural, prendas de punto y calzado exclusivo con asesoría directa por WhatsApp.',
    heroHeadline: 'Maison Véra',
    heroSubheadline: 'Prendas esenciales confeccionadas con tejidos nobles y diseño contemporáneo.',
    badge: 'Boutique de Autor',
    phoneWhatsApp: '59176406512',
    fullUrl: 'https://verastudiodigital.site/c/boutique-moda',
  },
};

export function resolveCatalogSlug(slug: string): CatalogMetadata | undefined {
  const normalized = slug.toLowerCase();
  if (CATALOGS_REGISTRY[normalized]) {
    return CATALOGS_REGISTRY[normalized];
  }
  for (const item of Object.values(CATALOGS_REGISTRY)) {
    if (item.slug === normalized || item.aliases.includes(normalized)) {
      return item;
    }
  }
  return undefined;
}
