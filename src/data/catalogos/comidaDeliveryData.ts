export interface FoodOption {
  name: string;
  priceBs: number;
}

export interface FoodSauce {
  id: string;
  name: string;
}

export interface FoodExtra {
  id: string;
  name: string;
  priceBs: number;
}

export interface FoodProduct {
  id: string;
  name: string;
  category: 'Hamburguesas' | 'Pizzas' | 'Alitas & Snacks' | 'Combos' | 'Bebidas & Postres';
  priceBs: number;
  description: string;
  image: string;
  badge?: string;
  prepTimeMinutes?: number;
  hasSizes?: boolean;
  sizes?: FoodOption[];
  availableSauces?: FoodSauce[];
  availableExtras?: FoodExtra[];
}

export const foodAvailableSauces: FoodSauce[] = [
  { id: 's-mayo-ajo', name: 'Mayonesa de ajo ahumado' },
  { id: 's-bbq', name: 'Salsa BBQ casera' },
  { id: 's-golf', name: 'Salsa Golf especial' },
  { id: 's-llajwa', name: 'Llajwa boliviana tradicional' },
  { id: 's-ketchup', name: 'Kétchup clásico' },
  { id: 's-mostaza-miel', name: 'Mostaza dulce a la miel' },
];

export const foodAvailableExtras: FoodExtra[] = [
  { id: 'e-carne-extra', name: 'Medallón extra de res Angus (120g)', priceBs: 14 },
  { id: 'e-tocino', name: 'Tiras de tocineta crocante', priceBs: 8 },
  { id: 'e-cheddar', name: 'Queso cheddar americano fundido', priceBs: 6 },
  { id: 'e-huevo', name: 'Huevo frito a la plancha', priceBs: 4 },
  { id: 'e-papas-grandes', name: 'Porción extra de papas rústicas', priceBs: 10 },
  { id: 'e-cebolla-crispy', name: 'Cebolla frita crocante crispy', priceBs: 5 },
];

export const foodProductsData: FoodProduct[] = [
  // 1. HAMBURGUESAS
  {
    id: 'burger-doble-bacon',
    name: 'Doble Bacon Cheddar Burger',
    category: 'Hamburguesas',
    priceBs: 46,
    badge: 'Más Vendida',
    prepTimeMinutes: 20,
    description:
      'Doble medallón de res Angus seleccionada (240g en total), abundante queso cheddar fundido, doble tocineta ahumada crujiente, cebolla confitada al caramelo y salsa especial en pan brioche artesanal tostado a la mantequilla. Acompañada de papas fritas rústicas.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
    availableExtras: foodAvailableExtras,
  },
  {
    id: 'burger-smash-clasica',
    name: 'Clásica Smash Americana',
    category: 'Hamburguesas',
    priceBs: 36,
    badge: 'Favorita',
    prepTimeMinutes: 18,
    description:
      'Medallón de res prensado en plancha ultra caliente con bordes crocantes caramelizados, queso americano derretido, lechuga fresca, rodajas de tomate, pepinillos encurtidos y salsa de la casa. Incluye porción de papas fritas.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
    availableExtras: foodAvailableExtras,
  },
  {
    id: 'burger-crispy-chicken',
    name: 'Crispy Chicken BBQ Master',
    category: 'Hamburguesas',
    priceBs: 38,
    badge: 'Crujiente',
    prepTimeMinutes: 22,
    description:
      'Suprema de pechuga de pollo marinada 12 horas en suero de leche, empanizada en especias secretas con fritura dorada extra crocante, ensalada coleslaw fresca con aderezo cremoso, pepinillos y toque de salsa BBQ ahumada.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
    availableExtras: foodAvailableExtras,
  },
  {
    id: 'burger-pampa-criolla',
    name: 'Pampa Criolla Grill Burger',
    category: 'Hamburguesas',
    priceBs: 48,
    badge: 'Receta de la Casa',
    prepTimeMinutes: 22,
    description:
      'Carne de res parrillera a las brasas (180g), rodajas de chorizo parrillero artesanal, queso criollo fundido, huevo a caballo a la plancha, cebolla morada fresca y toque de llajwa casera suave.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
    availableExtras: foodAvailableExtras,
  },

  // 2. PIZZAS
  {
    id: 'pizza-cuatro-quesos',
    name: 'Pizza Cuatro Quesos Fontana',
    category: 'Pizzas',
    priceBs: 65,
    badge: 'Artesanal',
    prepTimeMinutes: 25,
    description:
      'Masa madre fermentada 48 horas horneada a la piedra. Salsa de tomates perita especiada, mozzarella cremosa en hebras, provolone ahumado, queso gorgonzola suave y lluvia de parmesano gratinado.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80',
    hasSizes: true,
    sizes: [
      { name: 'Mediana (6 porciones - 30cm)', priceBs: 48 },
      { name: 'Familiar (8 porciones - 38cm)', priceBs: 65 },
      { name: 'Gigante Fiesta (12 porciones - 45cm)', priceBs: 85 },
    ],
    availableExtras: [
      { id: 'e-borde-queso', name: 'Borde relleno de queso mozzarella', priceBs: 12 },
      { id: 'e-champis', name: 'Champiñones salteados extra', priceBs: 8 },
    ],
  },
  {
    id: 'pizza-pepperoni-suprema',
    name: 'Pizza Pepperoni Suprema',
    category: 'Pizzas',
    priceBs: 68,
    badge: 'Top Pedidos',
    prepTimeMinutes: 25,
    description:
      'Doble porción de auténtico pepperoni curado en rodajas doradas crujientes, abundante mozzarella derretida, orégano del valle y finas gotas de aceite de oliva extravirgen al salir del horno.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=900&auto=format&fit=crop&q=80',
    hasSizes: true,
    sizes: [
      { name: 'Mediana (6 porciones - 30cm)', priceBs: 50 },
      { name: 'Familiar (8 porciones - 38cm)', priceBs: 68 },
      { name: 'Gigante Fiesta (12 porciones - 45cm)', priceBs: 88 },
    ],
    availableExtras: [
      { id: 'e-borde-queso', name: 'Borde relleno de queso mozzarella', priceBs: 12 },
      { id: 'e-extra-pepperoni', name: 'Doble pepperoni curado', priceBs: 10 },
    ],
  },
  {
    id: 'pizza-napolitana-pesto',
    name: 'Pizza Napolitana & Pesto Fresco',
    category: 'Pizzas',
    priceBs: 62,
    prepTimeMinutes: 25,
    description:
      'Salsa pomodoro tradicional, queso mozzarella de leche entera, rodajas de tomate confitado, ajo en láminas salteado en oliva, hojas de albahaca fresca y gotas de pesto genovés.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&auto=format&fit=crop&q=80',
    hasSizes: true,
    sizes: [
      { name: 'Mediana (6 porciones - 30cm)', priceBs: 44 },
      { name: 'Familiar (8 porciones - 38cm)', priceBs: 62 },
      { name: 'Gigante Fiesta (12 porciones - 45cm)', priceBs: 80 },
    ],
  },

  // 3. ALITAS & SNACKS
  {
    id: 'alitas-bbq-ahumadas',
    name: 'Alitas Glaseadas BBQ (10 unidades)',
    category: 'Alitas & Snacks',
    priceBs: 38,
    badge: 'Para Compartir',
    prepTimeMinutes: 20,
    description:
      '10 alitas y alones de pollo crocantes caramelizados al sartén con nuestra salsa barbacoa ahumada casera. Incluye bastones de apio fresco y dip de salsa golf o mayonesa de ajo.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
  },
  {
    id: 'alitas-picantes-miel',
    name: 'Alitas Picantes Agridulces (10 unidades)',
    category: 'Alitas & Snacks',
    priceBs: 40,
    badge: 'Picante Sabroso',
    prepTimeMinutes: 20,
    description:
      '10 piezas doradas con cobertura crujiente marinadas en una reducción picante de ají rojo, miel pura de abeja y semillas de sésamo tostadas.',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
  },
  {
    id: 'papas-rusticas-cheddar-bacon',
    name: 'Papas Rústicas Cheddar & Tocineta',
    category: 'Alitas & Snacks',
    priceBs: 26,
    badge: 'Snack Estrella',
    prepTimeMinutes: 15,
    description:
      'Generosa canasta de papas con corte rústico y piel dorada, bañadas en abundante salsa tibia de queso cheddar y trozos crujientes de tocineta frita al momento.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
  },
  {
    id: 'tequenos-queso-criollo',
    name: 'Tequeños de Queso Criollo (6 unidades)',
    category: 'Alitas & Snacks',
    priceBs: 24,
    prepTimeMinutes: 15,
    description:
      'Palitos de masa suave hojaldrada rellenos de abundante queso blanco fundente, fritos al momento. Se sirven con dip de palta y salsa tártara casera.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
  },

  // 4. COMBOS & PROMOS
  {
    id: 'combo-pareja-burger',
    name: 'Combo Pareja: 2 Burgers + Papas + 2 Bebidas',
    category: 'Combos',
    priceBs: 85,
    badge: 'Ahorro Bs 17',
    prepTimeMinutes: 25,
    description:
      'Incluye: 2 Hamburguesas Clásicas Smash con queso americano + 1 Porción grande de papas rústicas con salsa a elección + 2 Bebidas frías a elección (Coca-Cola o Sprite 500ml).',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
  },
  {
    id: 'combo-familiar-pizza-alitas',
    name: 'Combo Familiar: Pizza Gigante + Alitas + Gaseosa 2L',
    category: 'Combos',
    priceBs: 115,
    badge: 'Súper Promo',
    prepTimeMinutes: 30,
    description:
      'Incluye: 1 Pizza Familiar (8 porciones) a elección + 10 Alitas BBQ ahumadas con dip + 1 Gaseosa Coca-Cola de 2 Litros bien fría.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=900&auto=format&fit=crop&q=80',
    availableSauces: foodAvailableSauces,
  },

  // 5. BEBIDAS & POSTRES
  {
    id: 'coca-cola-2l',
    name: 'Coca-Cola Sabor Original 2 Litros',
    category: 'Bebidas & Postres',
    priceBs: 15,
    description: 'Botella de 2 litros sellada, servida bien fría para acompañar tu comida.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 'coca-cola-zero-2l',
    name: 'Coca-Cola Sin Azúcar (Zero) 2 Litros',
    category: 'Bebidas & Postres',
    priceBs: 15,
    description: 'Botella de 2 litros bien helada, sin azúcar y con el sabor refrescante de siempre.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 'cerveza-pacena-620',
    name: 'Cerveza Paceña Pilsener 620ml',
    category: 'Bebidas & Postres',
    priceBs: 18,
    badge: '18+ Adultos',
    description: 'Cerveza tradicional boliviana helada en botella de vidrio 620ml.',
    image: 'https://images.unsplash.com/photo-1608270119864-a03fb409549f?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 'brownie-tibio-chocolate',
    name: 'Brownie Tibio de Chocolate con Nueces',
    category: 'Bebidas & Postres',
    priceBs: 18,
    badge: 'Postre',
    prepTimeMinutes: 5,
    description:
      'Porción de brownie de chocolate semiamargo con centro húmedo, nueces tostadas y fudge de chocolate tibio.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&auto=format&fit=crop&q=80',
  },
];
