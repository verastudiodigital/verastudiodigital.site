export interface PasteleriaSizeOption {
  label: string;
  priceBs: number;
  portion: string;
}

export interface PasteleriaProduct {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  priceBs: number;
  image: string;
  description: string;
  portion: string;
  leadTime: string;
  isSpecialty?: boolean;
  sizes: PasteleriaSizeOption[];
  fillings?: string[];
  allergens: string[];
}

export const pasteleriaProductsData: PasteleriaProduct[] = [
  {
    id: 'p-1',
    name: 'Shu "Exotic" de Maracuyá',
    subtitle: 'Pasta choux crujiente con diplomática de fruta de la pasión y merengue tostado',
    category: 'Individuales',
    priceBs: 25,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&auto=format&fit=crop&q=80',
    description:
      'Pasta choux francesa recién horneada con craquelin crocante de azúcar morena, rellena de crema diplomática infusionada con pulpa fresca de maracuyá y corona de merengue flameado.',
    portion: 'Porción individual 120g',
    leadTime: 'Elaboración fresca del día (listo en 2 horas)',
    sizes: [
      { label: 'Unidad Individual (120g)', priceBs: 25, portion: '1 persona' },
      { label: 'Caja Degustación x4 Shoux', priceBs: 90, portion: '2-4 personas' },
      { label: 'Torre Croquembouche Mini x16', priceBs: 320, portion: '8-12 personas' },
    ],
    fillings: ['Maracuyá & Vainilla Bourbon', 'Frambuesa & Pistacho', 'Caramelo Salado con Flor de Sal'],
    allergens: ['Harina de trigo (Gluten)', 'Huevos de campo', 'Mantequilla y leche (Lácteos)'],
  },
  {
    id: 'p-2',
    name: 'Cake "Napoleon" Hojaldrado',
    subtitle: 'Milhojas de masa hojaldrada artesanal y crema diplomática a la vainilla de Madagascar',
    category: 'Tortas',
    priceBs: 35,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&auto=format&fit=crop&q=80',
    description:
      'La joya de la repostería clásica europea. Capas ultrafinas de hojaldre caramelizado horneadas pacientemente, intercaladas con crema ligera de vainilla natural y lluvia de migas crocantes.',
    portion: 'Desde 1 porción hasta familiar',
    leadTime: 'Requiere pedido con 24 horas de anticipación',
    isSpecialty: true,
    sizes: [
      { label: 'Porción Individual de Mesa', priceBs: 35, portion: '1 persona' },
      { label: 'Torta Mediana 18 cm', priceBs: 180, portion: '8 a 10 personas' },
      { label: 'Torta Celebración 26 cm', priceBs: 290, portion: '16 a 20 personas' },
    ],
    fillings: [
      'Crema Diplomática Clásica Vainilla',
      'Diplomática con Frutillas Silvestres',
      'Dulce de Leche Repostero y Nueces',
    ],
    allergens: ['Gluten', 'Lácteos', 'Huevos'],
  },
  {
    id: 'p-3',
    name: 'Lemon Croissant Merengado',
    subtitle: 'Croissant hojaldrado con mantequilla francesa, curd cítrico y merengue suizo dorado',
    category: 'Bollería',
    priceBs: 22,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000&auto=format&fit=crop&q=80',
    description:
      'Croissant laminado a mano con mantequilla 82% materia grasa. En su interior alberga un sedoso relleno de cuajada de limón eureka y se corona con merengue flameado con soplete.',
    portion: 'Pieza individual 150g',
    leadTime: 'Horneado dos veces al día: 08:30 y 15:30',
    sizes: [
      { label: 'Unidad Artesanal', priceBs: 22, portion: '1 persona' },
      { label: 'Caja x4 Croissants Merengados', priceBs: 80, portion: 'Desayuno familiar' },
    ],
    fillings: ['Curd de Limón Eureka', 'Crema Frangipane de Almendras & Limón'],
    allergens: ['Gluten', 'Lácteos', 'Huevos'],
  },
  {
    id: 'p-4',
    name: 'Plombir Wild Berries',
    subtitle: 'Copa helada de nata montada artesanal con coulis de frutos del bosque y bizcocho',
    category: 'Postres Fríos',
    priceBs: 35,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=1000&auto=format&fit=crop&q=80',
    description:
      'Elaborado según la receta tradicional con nata fresca reducida, corazón de compota casera de moras y arándanos del valle, sobre una base esponjosa humedecida en licor de cereza.',
    portion: 'Postre en vaso 180g',
    leadTime: 'Disponible de inmediato para retiro en local',
    sizes: [
      { label: 'Copa Individual 180g', priceBs: 35, portion: '1 persona' },
      { label: 'Dúo para Parejas (2 copas)', priceBs: 65, portion: '2 personas' },
    ],
    fillings: ['Coulis de Moras y Arándanos', 'Cerezas Amarenas maceradas'],
    allergens: ['Lácteos', 'Huevos'],
  },
  {
    id: 'p-5',
    name: 'Brownie Pie con Frutillas',
    subtitle: 'Base densa de chocolate amargo 70%, dulce de leche casero, chantilly y fruta fresca',
    category: 'Tortas',
    priceBs: 120,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1000&auto=format&fit=crop&q=80',
    description:
      'Tarta contundente y chocolatosa con centro meloso de brownie de cacao puro, abundante dulce de leche al estilo artesanal, copos de crema chantilly fresca y coronación de frutillas seleccionadas.',
    portion: 'Rinde 12 a 14 porciones',
    leadTime: 'Encargo con 24 horas de antelación',
    sizes: [
      { label: 'Torta Mediana 20 cm', priceBs: 120, portion: '8 a 10 personas' },
      { label: 'Torta Grande Familiar 26 cm', priceBs: 195, portion: '14 a 16 personas' },
    ],
    fillings: ['Dulce de Leche & Frutillas Frescas', 'Ganache Chocolate Belga & Nueces Pecanas'],
    allergens: ['Gluten', 'Lácteos', 'Huevos', 'Trazas de frutos secos'],
  },
  {
    id: 'p-6',
    name: 'Caja 6 Mini Cheesecakes Surtidos',
    subtitle: 'Surtido gourmet de mini cheesecakes horneados al estilo New York en estuche de regalo',
    category: 'Boxes & Regalos',
    priceBs: 85,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1000&auto=format&fit=crop&q=80',
    description:
      'Seis piezas individuales sobre base crujiente de galletas de canela y queso crema Philadelphia: 2 de maracuyá tropical, 2 de frutos rojos silvestres y 2 de caramelo toffee salado.',
    portion: 'Caja x6 mini postres',
    leadTime: 'Listos para regalo con lazo de raso y tarjeta',
    sizes: [
      { label: 'Caja Degustación x6 Piezas', priceBs: 85, portion: 'Ideal para compartir o regalo' },
      { label: 'Caja Fiesta x12 Piezas', priceBs: 160, portion: 'Mesa dulce 6-8 personas' },
    ],
    allergens: ['Gluten', 'Lácteos', 'Huevos'],
  },
];
