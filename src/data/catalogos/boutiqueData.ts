export interface BoutiqueColorOption {
  name: string;
  hex: string;
}

export interface BoutiqueProduct {
  id: string;
  brand: string;
  name: string;
  subtitle: string;
  priceBs: number;
  image: string;
  category: string;
  collection: string;
  sizes: string[];
  colors: BoutiqueColorOption[];
  colorName: string;
  composition: string;
  description: string;
  refCode: string;
  stockCount: number;
}

export const boutiqueProductsData: BoutiqueProduct[] = [
  {
    id: 'b-1',
    brand: 'RedValentino',
    name: 'Tulle Midi Evening Dress',
    subtitle: 'Vestido midi en tul plisado con forro de seda y lazo en cintura',
    priceBs: 969,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1000&auto=format&fit=crop&q=80',
    category: 'Vestidos de Noche',
    collection: 'Noche & Gala',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Red', hex: '#991B1B' },
      { name: 'Black', hex: '#18181B' },
      { name: 'Pink', hex: '#EC4899' },
    ],
    colorName: 'Red',
    composition: '100% Tul de poliamida italiana con forro de seda mulberry 100% natural',
    description:
      'Silueta romántica y estructurada que realza la figura con delicadeza. El corpiño ceñido se fusiona con una falda midi fluida de capas de tul vaporoso.',
    refCode: 'REF-BOU-RV01',
    stockCount: 3,
  },
  {
    id: 'b-2',
    brand: 'Costarellos',
    name: 'Leopard Print Silk Midi Skirt',
    subtitle: 'Falda evasé de seda natural con estampado animal contemporáneo',
    priceBs: 885,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=1000&auto=format&fit=crop&q=80',
    category: 'Faldas & Pantalones',
    collection: 'Casual Chic',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Yellow', hex: '#D97706' },
      { name: 'Black', hex: '#18181B' },
    ],
    colorName: 'Yellow',
    composition: '100% Seda crepé de chine de alta densidad, cremallera invisible trasera',
    description:
      'Movimiento fluido y caída impecable. Una prenda versátil ideal tanto para looks de día combinada con camisas de lino como para veladas formales con tops estructurados.',
    refCode: 'REF-BOU-CO02',
    stockCount: 4,
  },
  {
    id: 'b-3',
    brand: 'Safiyaa',
    name: 'Cape Crepe Cocktail Dress',
    subtitle: 'Vestido tubo en crepé elástico pesado con capa dorsal integrada',
    priceBs: 989,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1000&auto=format&fit=crop&q=80',
    category: 'Vestidos de Cóctel',
    collection: 'Noche & Gala',
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Pink', hex: '#EC4899' },
      { name: 'Red', hex: '#991B1B' },
      { name: 'White', hex: '#F5F5F4' },
    ],
    colorName: 'Pink',
    composition: '96% Poliéster de alta costura, 4% Elastano confort, forro satinado',
    description:
      'Elegancia escultórica. La capa dorsal fluye con el movimiento mientras el patrón ajustado esculpe una silueta pulida y vanguardista.',
    refCode: 'REF-BOU-SF03',
    stockCount: 2,
  },
  {
    id: 'b-4',
    brand: 'Jonathan Simkhai',
    name: 'Ribbed Knit Slit Dress',
    subtitle: 'Vestido midi de punto acanalado elástico con abertura lateral sutil',
    priceBs: 415,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=80',
    category: 'Prendas de Punto',
    collection: 'Casual Chic',
    sizes: ['S', 'M'],
    colors: [
      { name: 'White', hex: '#F5F5F4' },
      { name: 'Grey', hex: '#71717A' },
      { name: 'Black', hex: '#18181B' },
    ],
    colorName: 'White',
    composition: '80% Algodón orgánico mercerizado, 20% Hilo elástico confort',
    description:
      'El epítome del lujo silencioso y la comodidad cotidiana. Suave al tacto y termorregulador, perfecto para climas templados.',
    refCode: 'REF-BOU-JS04',
    stockCount: 5,
  },
  {
    id: 'b-5',
    brand: 'Max Mara',
    name: 'Safari Linen Wrap Dress',
    subtitle: 'Vestido camisero cruzado en lino puro lavado con cinturón de hebilla cuerno',
    priceBs: 489,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000&auto=format&fit=crop&q=80',
    category: 'Lino & Natural',
    collection: 'Lino Natural',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Yellow', hex: '#D97706' },
      { name: 'White', hex: '#F5F5F4' },
      { name: 'Grey', hex: '#71717A' },
    ],
    colorName: 'Yellow',
    composition: '100% Lino europeo cultivado de manera sostenible, sin químicos irritantes',
    description:
      'Fresco, noble y atemporal. Las fibras naturales de lino ofrecen una respiración perfecta mientras el corte cruzado se adapta cómodamente a diversas siluetas.',
    refCode: 'REF-BOU-MM05',
    stockCount: 6,
  },
  {
    id: 'b-6',
    brand: 'Eres',
    name: 'Strapless Bandeau Maxi Dress',
    subtitle: 'Maxi vestido escote palabra de honor en popelina de algodón satinada',
    priceBs: 285,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1000&auto=format&fit=crop&q=80',
    category: 'Vestidos de Verano',
    collection: 'Casual Chic',
    sizes: ['M', 'L'],
    colors: [
      { name: 'Red', hex: '#991B1B' },
      { name: 'Pink', hex: '#EC4899' },
    ],
    colorName: 'Red',
    composition: '100% Popelina de algodón egipcio de fibra extra larga',
    description:
      'Corte relajado y femenino con banda elástica interior que garantiza soporte total sin desplazamientos.',
    refCode: 'REF-BOU-ER06',
    stockCount: 2,
  },
];
