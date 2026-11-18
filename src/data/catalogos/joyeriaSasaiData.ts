export interface JoyeriaVariant {
  name: string;
  priceBs: number;
  priceUsd: number;
  note: string;
}

export interface JoyeriaProduct {
  id: string;
  name: string;
  subtitle: string;
  category: 'Anillos' | 'Aretes' | 'Collares' | 'Pulseras';
  basePriceBs: number;
  basePriceUsd: number;
  image: string;
  wornImage: string;
  detailImage: string;
  badge?: string;
  refCode: string;
  leadTime: string;
  description: string;
  craftDetails: string[];
  variants: JoyeriaVariant[];
  sizes?: string[];
}

export const joyeriaSasaiProducts: JoyeriaProduct[] = [
  {
    id: 'bond-cuff',
    name: 'Bond Cuff',
    subtitle: 'Brazalete escultórico de curvas continuas y porte envolvente',
    category: 'Pulseras',
    basePriceBs: 1350,
    basePriceUsd: 192,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1000&auto=format&fit=crop&q=80',
    wornImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1000&auto=format&fit=crop&q=80',
    detailImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1000&auto=format&fit=crop&q=80',
    badge: 'Signature Piece',
    refCode: 'REF-SAS-BC01',
    leadTime: 'Made to order · 5 a 7 días hábiles de manufactura artesanal',
    description:
      'El brazalete Bond Cuff redefine la orfebrería contemporánea con una silueta fluida y pura que abraza la muñeca como una escultura viva. Fundido en metal macizo de peso generoso y pulido a mano para lograr un acabado sedoso e imperecedero.',
    craftDetails: [
      'Latón macizo de alta joyería con triple baño galvánico de Oro 14K (3 micras) o Plata Esterlina 925 pura',
      'Pulido a mano en taller de orfebrería con nanoprotección cerámica anti-desgaste',
      'Cierre arquitectónico de curvatura ergonómica confortable para porte prolongado',
      'Grabado con sello de contraste artesanal y número de edición',
    ],
    variants: [
      {
        name: 'Gold plated brass',
        priceBs: 1350,
        priceUsd: 192,
        note: 'Made to order · Acabado oro cálido satinado artesanal',
      },
      {
        name: 'Sterling silver',
        priceBs: 2750,
        priceUsd: 395,
        note: 'Made to order · Plata pura maciza 925 con baño de rodio protector',
      },
      {
        name: 'Solid 18K Yellow Gold',
        priceBs: 6900,
        priceUsd: 980,
        note: 'Edición limitada de alta orfebrería en oro macizo nacional de 18K',
      },
    ],
    sizes: ['S (Muñeca 14.5 - 15.5 cm)', 'M (Muñeca 16.0 - 17.0 cm)', 'L (Muñeca 17.5 - 18.5 cm)'],
  },
  {
    id: 'bond-ear-cuff',
    name: 'Bond Ear Cuff',
    subtitle: 'Ear cuff escultórico sin perforación auricular',
    category: 'Aretes',
    basePriceBs: 840,
    basePriceUsd: 120,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&auto=format&fit=crop&q=80',
    wornImage: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=1000&auto=format&fit=crop&q=80',
    detailImage: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=1000&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    refCode: 'REF-SAS-EC02',
    leadTime: 'Disponible en taller para entrega inmediata',
    description:
      'Silueta pura inspirada en la escultura minimalista. Se desliza suavemente sobre el cartílago superior sin necesidad de perforación, ofreciendo una estética vanguardista con máxima sujeción, firmeza y ligereza absoluta.',
    craftDetails: [
      'Geometría anatómica suave que no ejerce presión dolorosa',
      'Plata esterlina 925 libre de níquel, apta para las pieles más reactivas',
      'Acabado espejo de alto brillo con tratamiento anti-alergénico',
      'Incluye estuche rígido de gamuza y certificado de autenticidad',
    ],
    variants: [
      {
        name: 'Gold plated brass',
        priceBs: 840,
        priceUsd: 120,
        note: 'Made to order · Baño dorado brillante de alta duración',
      },
      {
        name: 'Sterling silver',
        priceBs: 1260,
        priceUsd: 180,
        note: 'Made to order · Plata de ley 925 pura con baño de platino',
      },
    ],
    sizes: ['Talla Única (Ajustable con suave presión manual)'],
  },
  {
    id: 'bond-ring',
    name: 'Bond Ring',
    subtitle: 'Anillo con lazo escultórico entrelazado',
    category: 'Anillos',
    basePriceBs: 1260,
    basePriceUsd: 180,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1000&auto=format&fit=crop&q=80',
    wornImage: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=1000&auto=format&fit=crop&q=80',
    detailImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&auto=format&fit=crop&q=80',
    badge: 'Iconic Design',
    refCode: 'REF-SAS-BR03',
    leadTime: 'Elaborado sobre pedido en 4 a 6 días hábiles',
    description:
      'Una creación escultórica que gira en torno a un lazo continuo con terminación orgánica. Su presencia en la mano equilibra volumen y ligereza, diseñada tanto para llevar en solitario como apilada.',
    craftDetails: [
      'Cuerpo esculpido en cera perdida con acabado pulido satinado',
      'Perfil contorneado confort-fit para uso prolongado sin rozamiento',
      'Latón noble con micras de oro o plata esterlina certificada',
      'Grabado interior con punzón de orfebre',
    ],
    variants: [
      {
        name: 'Gold plated brass',
        priceBs: 1260,
        priceUsd: 180,
        note: 'Made to order · Vermeil de oro 14K cálido',
      },
      {
        name: 'Sterling silver',
        priceBs: 1930,
        priceUsd: 276,
        note: 'Made to order · Plata 925 sólida con nanoprotección',
      },
    ],
    sizes: ['Talla 5 (15.7 mm)', 'Talla 6 (16.5 mm)', 'Talla 7 (17.3 mm)', 'Talla 8 (18.1 mm)'],
  },
  {
    id: 'bond-pinky-ring',
    name: 'Bond Pinky Ring',
    subtitle: 'Anillo de meñique con nudo arquitectónico de perfil curvo',
    category: 'Anillos',
    basePriceBs: 1190,
    basePriceUsd: 170,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&auto=format&fit=crop&q=80',
    wornImage: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=1000&auto=format&fit=crop&q=80',
    detailImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&auto=format&fit=crop&q=80',
    badge: 'Atelier Favorite',
    refCode: 'REF-SAS-BP04',
    leadTime: 'Manufactura artesanal en taller: 5 días hábiles',
    description:
      'Diseñado específicamente para el dedo meñique con una proporción compacta y potente. Su nudo fluido aporta un toque distintivo y vanguardista que eleva cualquier estilo.',
    craftDetails: [
      'Cuerpo vaciado en metal macizo con peso equilibrado',
      'Interior confort-fit redondeado para máxima comodidad cotidiana',
      'Bisel pulido que no engancha tejidos ni ropa delicada',
      'Disponible en baño de oro amarillo o plata 925',
    ],
    variants: [
      {
        name: 'Gold plated brass',
        priceBs: 1190,
        priceUsd: 170,
        note: 'Made to order · Baño de oro amarillo satinado',
      },
      {
        name: 'Sterling silver',
        priceBs: 1770,
        priceUsd: 253,
        note: 'Made to order · Plata esterlina maciza 925',
      },
    ],
    sizes: ['Talla 3 (14.1 mm)', 'Talla 4 (14.9 mm)', 'Talla 5 (15.7 mm)'],
  },
  {
    id: 'double-loop-earrings',
    name: 'Double Loop Earrings',
    subtitle: 'Aretes con doble aro entrelazado de caída asimétrica',
    category: 'Aretes',
    basePriceBs: 1120,
    basePriceUsd: 160,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=1000&auto=format&fit=crop&q=80',
    wornImage: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=1000&auto=format&fit=crop&q=80',
    detailImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&auto=format&fit=crop&q=80',
    badge: 'New Arrival',
    refCode: 'REF-SAS-DL05',
    leadTime: 'Disponible en taller para envío express',
    description:
      'Par de aretes con doble aro entrelazado que proyectan dinamismo y elegancia con cada movimiento. Estructura balanceada ultraligera para llevar todo el día sin molestias.',
    craftDetails: [
      'Perno hipoalergénico en plata de ley con baño protector',
      'Cierre de mariposa reforzada de alta seguridad',
      'Soldaduras invisibles con pulido manual espejo',
    ],
    variants: [
      {
        name: 'Gold plated brass',
        priceBs: 1120,
        priceUsd: 160,
        note: 'Made to order · Baño de oro 14K cálido',
      },
      {
        name: 'Sterling silver',
        priceBs: 1680,
        priceUsd: 240,
        note: 'Made to order · Plata esterlina maciza 925',
      },
    ],
    sizes: ['Talla Única (Largo total 3.2 cm)'],
  },
  {
    id: 'linear-chain-drop',
    name: 'Linear Drop Chain Earrings',
    subtitle: 'Aretes de cadena lineal fina con esfera pulida en terminal',
    category: 'Aretes',
    basePriceBs: 980,
    basePriceUsd: 140,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1000&auto=format&fit=crop&q=80',
    wornImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&auto=format&fit=crop&q=80',
    detailImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1000&auto=format&fit=crop&q=80',
    badge: 'Minimalist Line',
    refCode: 'REF-SAS-LC06',
    leadTime: 'Manufactura artesanal en 3 días hábiles',
    description:
      'Dos delicadas cadenas suspendidas que acarician la clavícula con sutileza. Un diseño minimalista y etéreo que captura la luz con destellos continuos.',
    craftDetails: [
      'Cadena veneciana extrafina con terminales sellados',
      'Postes de plata 925 antialérgicos garantizados',
      'Caída fluida de 7 cm de longitud regulable según postura',
    ],
    variants: [
      {
        name: 'Gold plated brass',
        priceBs: 980,
        priceUsd: 140,
        note: 'Made to order · Baño de oro amarillo satinado',
      },
      {
        name: 'Sterling silver',
        priceBs: 1470,
        priceUsd: 210,
        note: 'Made to order · Plata 925 de brillo cristalino',
      },
    ],
    sizes: ['Talla Única (Largo 7 cm)'],
  },
  {
    id: 'curb-chain-bracelet',
    name: 'Bold Curb Chain Bracelet',
    subtitle: 'Brazalete de eslabones grumetta pulidos de porte sólido',
    category: 'Pulseras',
    basePriceBs: 1540,
    basePriceUsd: 220,
    image: 'https://images.unsplash.com/photo-1611591475806-0361280058b8?w=1000&auto=format&fit=crop&q=80',
    wornImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1000&auto=format&fit=crop&q=80',
    detailImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1000&auto=format&fit=crop&q=80',
    badge: 'Statement Piece',
    refCode: 'REF-SAS-CB07',
    leadTime: 'Hecho a mano sobre pedido · 6 días hábiles',
    description:
      'La clásica cadena de eslabones aplanados reimaginada con proporciones audaces y bordes biselados. Su cierre oculto de seguridad se integra como parte integral del diseño escultórico.',
    craftDetails: [
      'Eslabones calibrados manualmente con encaje de precisión milimétrica',
      'Cierre de cajón con doble lengüeta de seguridad lateral',
      'Peso sustancial de 32 gramos con caída ergonómica natural',
    ],
    variants: [
      {
        name: 'Gold plated brass',
        priceBs: 1540,
        priceUsd: 220,
        note: 'Made to order · Oro 14K de alto espesor',
      },
      {
        name: 'Sterling silver',
        priceBs: 2940,
        priceUsd: 420,
        note: 'Made to order · Plata esterlina maciza 925',
      },
    ],
    sizes: ['S (16 cm)', 'M (18 cm)', 'L (20 cm)'],
  },
  {
    id: 'snake-chain-necklace',
    name: 'Snake Chain Choker Necklace',
    subtitle: 'Gargantilla de malla serpiente flexible de brillo espejo',
    category: 'Collares',
    basePriceBs: 1680,
    basePriceUsd: 240,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1000&auto=format&fit=crop&q=80',
    wornImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&auto=format&fit=crop&q=80',
    detailImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1000&auto=format&fit=crop&q=80',
    badge: 'Timeless Classic',
    refCode: 'REF-SAS-SN08',
    leadTime: 'Disponible para entrega inmediata',
    description:
      'Una silueta líquida de metal pulido que reposa con absoluta suavidad sobre la clavícula. Cada eslabón comprimido crea un efecto de cinta continua con brillo sutil y sofisticado.',
    craftDetails: [
      'Grosor de 4.5 mm con flexibilidad total sin pellizcar la piel',
      'Cierre de mosquetón italiano reforzado con contraste 925',
      'Tratamiento térmico especial que evita dobleces accidentales',
    ],
    variants: [
      {
        name: 'Gold plated brass',
        priceBs: 1680,
        priceUsd: 240,
        note: 'Made to order · Baño de oro amarillo satinado 14K',
      },
      {
        name: 'Sterling silver',
        priceBs: 3150,
        priceUsd: 450,
        note: 'Made to order · Plata 925 pura con baño protector de rodio',
      },
    ],
    sizes: ['Choker (38 cm)', 'Clásica (42 cm)', 'Larga (48 cm)'],
  },
];
