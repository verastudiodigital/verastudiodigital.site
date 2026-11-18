import type { PortfolioCategoryOption, PortfolioProject } from '@/types/portfolio';

export const portfolioCategories: PortfolioCategoryOption[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'soluciones-comerciales', label: 'Soluciones comerciales' },
  { id: 'diseno-web', label: 'Diseño web' },
  { id: 'catalogos-digitales', label: 'Catálogos digitales' },
  { id: 'redes-sociales', label: 'Diseño para redes sociales' },
  { id: 'automatizacion-administrativa', label: 'Automatización administrativa' },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'listo-app',
    title: 'Listo – Aviso de Pagos QR',
    category: 'soluciones-comerciales',
    categoryLabel: 'Solución Comercial Real',
    solutionType: 'Aplicación Android publicada en Google Play',
    kind: 'producto-propio',
    badgeText: 'Producto real de Vera Studio Digital',
    description:
      'Herramienta utilitaria diseñada para comercios en Bolivia que anuncia pagos QR recibidos por voz en tiempo real con totalizador diario y exportación CSV.',
    objective:
      'Evitar pérdida de tiempo en mostrador y prevenir comprobantes falsos en tiendas, restaurantes y ferias.',
    solutionSummary:
      'Lectura local inmediata de notificaciones de Yape, Yastá y bancos de Bolivia sin almacenar datos bancarios en la nube.',
    highlights: [
      'Publicado oficialmente en Google Play Store',
      'Procesamiento 100% local en el dispositivo',
      'Totalizador diario y exportación contable a Excel (CSV)',
    ],
    image: '/images/portfolio/listo-logo.png',
    imageAlt: 'Logotipo oficial de Listo – Aviso de Pagos QR',
    mockupVariant: 'listo-app',
    externalUrl: 'https://play.google.com/store/apps/details?id=com.verastudio.listo&pli=1',
    externalLabel: 'Ver en Google Play Store',
  },
  {
    id: 'misalon-platform',
    title: 'MiSalón – Plataforma de Reservas para Belleza y Spas',
    category: 'soluciones-comerciales',
    categoryLabel: 'Plataforma Web SaaS',
    solutionType: 'Marketplace y sistema de gestión de citas',
    kind: 'producto-propio',
    badgeText: 'Plataforma SaaS en producción',
    description:
      'Descubre y reserva en los mejores salones de belleza y spas. Sistema completo con agenda de turnos 24/7, catálogo de servicios y panel administrativo.',
    objective:
      'Digitalizar el proceso de reserva y evitar horarios desordenados en centros de estética, peluquerías y spas.',
    solutionSummary:
      'Plataforma web moderna con catálogo interactivo de tratamientos, confirmación inmediata de citas y gestión de profesionales.',
    highlights: [
      'Plataforma SaaS activa y desplegada en producción',
      'Agenda automatizada con disponibilidad de horarios en tiempo real',
      'Desarrollo integral de Vera Studio Digital accesible en la web',
    ],
    mockupVariant: 'misalon-platform',
    externalUrl: 'https://misalon.lat/',
    externalLabel: 'Visitar MiSalón.lat',
    relatedServiceSlug: 'software-y-apps',
  },
  {
    id: 'panito-platform',
    title: 'Panito – SaaS de Pedidos, Producción y Rutas con GPS',
    category: 'soluciones-comerciales',
    categoryLabel: 'Plataforma Web SaaS',
    solutionType: 'Sistema ERP y logística para panificadoras',
    kind: 'producto-propio',
    badgeText: 'Plataforma SaaS en producción',
    description:
      'Gestión de pedidos, producción diaria, rutas de distribución con GPS, clientes de barrio y control de inventario en una sola plataforma SaaS moderna.',
    objective:
      'Resolver la complejidad operativa de panaderías y distribuidoras: sincronizar horneado, ventas a crédito/contado y reparto.',
    solutionSummary:
      'Panel centralizado con cálculo de materia prima, ruteo geolocalizado para repartidores y liquidación diaria de cobros.',
    highlights: [
      'Módulos de producción, inventario y rutas con mapas GPS',
      'Gestión de clientes de barrio, cuentas corrientes y cobranza',
      'Arquitectura robusta creada por Vera Studio Digital',
    ],
    mockupVariant: 'panito-platform',
    externalUrl: 'https://panito.lat/',
    externalLabel: 'Visitar Panito.lat',
    relatedServiceSlug: 'software-y-apps',
  },
  {
    id: 'lukio-app',
    title: 'LUKIO: Gimnasia Mental',
    category: 'soluciones-comerciales',
    categoryLabel: 'Desarrollo de Software',
    solutionType: 'Aplicación móvil educativa y cognitiva',
    kind: 'producto-propio',
    badgeText: 'Producto real de Vera Studio Digital',
    description:
      'Aplicación de entrenamiento cognitivo con más de 10 disciplinas de cálculo mental, memoria de trabajo, lectura rápida e inglés americano.',
    objective:
      'Demostrar capacidad técnica en desarrollo móvil, interfaz limpia y experiencia de usuario fluida.',
    solutionSummary:
      'Arquitectura modular con rutinas diarias rápidas, métricas locales y diseño enfocado en agilidad visual.',
    highlights: [
      'Más de 10 módulos interactivos integrados',
      'Interfaz enfocada en rapidez y legibilidad',
      'Desarrollo propio integral de Vera Studio Digital',
    ],
    image: '/images/portfolio/lukio-logo.png',
    imageAlt: 'Logotipo oficial de LUKIO: Gimnasia Mental',
    mockupVariant: 'lukio-app',
    externalUrl: '/lukio/',
    externalLabel: 'Ver ficha de LUKIO',
  },
  {
    id: 'demo-web-empresarial',
    title: 'Sitio Web Corporativo',
    category: 'diseno-web',
    categoryLabel: 'Diseño web',
    solutionType: 'Página web empresarial responsive',
    kind: 'demostracion',
    badgeText: 'Demo en vivo',
    description:
      'Sitio web corporativo moderno para empresas y consultores con secciones comerciales, mapa, servicios y contacto directo a WhatsApp.',
    objective:
      'Mostrar cómo una empresa local en Cochabamba puede estructurar su oferta de forma clara y posicionable en Google.',
    solutionSummary:
      'Portada enfocada en beneficios, tarjetas de planes transparentes, sección de preguntas frecuentes y botones directos a WhatsApp.',
    highlights: [
      'Diseño Mobile First con carga veloz',
      'Estructura preparada para SEO local',
      'Conversión directa a WhatsApp Business',
    ],
    mockupVariant: 'web-corporativa',
    externalUrl: '/demos/sitio-web',
    externalLabel: 'Abrir demo de sitio web',
    relatedServiceSlug: 'diseno-web',
  },
  {
    id: 'demo-catalogo-joyeria',
    title: 'Nadir Joyería – Alta Orfebrería',
    category: 'catalogos-digitales',
    categoryLabel: 'Catálogos digitales',
    solutionType: 'Catálogo editorial de lujo con fotos al borde',
    kind: 'demostracion',
    badgeText: 'Demo en vivo',
    description:
      'Catálogo editorial de alta orfebrería con estética pura y sofisticada: fotos limpias al borde, cambio de imagen al posar el cursor, detalle de metales nobles y solicitud directa por WhatsApp.',
    objective:
      'Transmitir el máximo nivel de exclusividad y sofisticación para marcas de joyería, orfebrería y accesorios de lujo.',
    solutionSummary:
      'Experiencia inmersiva limpia sin elementos distractores con navegación editorial y cotización de piezas por WhatsApp.',
    highlights: [
      'Página de detalle con flechas de navegación e interacción táctil',
      'Selector de metales nobles (14K Gold Plated Brass, Sterling Silver)',
      'Atención personalizada vía WhatsApp directo',
    ],
    mockupVariant: 'catalogo-joyeria',
    externalUrl: '/c/nadir-joyeria',
    externalLabel: 'Abrir catálogo Nadir Joyería',
    relatedServiceSlug: 'catalogos-digitales',
  },
  {
    id: 'demo-pedidos-comida',
    title: 'Fuego & Brasa – Menú & Delivery',
    category: 'catalogos-digitales',
    categoryLabel: 'Catálogos digitales',
    solutionType: 'Hamburguesería, combos y checkout directo a WhatsApp',
    kind: 'demostracion',
    badgeText: 'Demo en vivo',
    description:
      'Menú digital interactivo para restaurantes, hamburgueserías y pizzerías: selección de salsas caseras, extras opcionales, notas para cocina, métodos de pago (QR / Efectivo) y pedido directo a WhatsApp.',
    objective:
      'Automatizar la recepción de pedidos delivery sin pagar comisiones abusivas a apps intermediarias.',
    solutionSummary:
      'Catálogo gastronómico optimizado para celulares con cálculo automático de totales y dirección de entrega.',
    highlights: [
      'Selector de extras (doble carne, tocineta, queso cheddar)',
      'Elección de salsas incluidas y notas para cocina',
      'Checkout con QR o efectivo y envío formateado a WhatsApp',
    ],
    mockupVariant: 'pedidos-comida',
    externalUrl: '/c/pedidos-comida',
    externalLabel: 'Abrir menú Fuego & Brasa Delivery',
    relatedServiceSlug: 'catalogos-digitales',
  },
  {
    id: 'demo-catalogo-distribuidora',
    title: 'Distribuidora Los Andes – Abarrotes',
    category: 'catalogos-digitales',
    categoryLabel: 'Catálogos digitales',
    solutionType: 'Provisión mayorista por bultos para tiendas de barrio',
    kind: 'demostracion',
    badgeText: 'Demo en vivo',
    description:
      'Plataforma de provisión mayorista para que dueños de tiendas de barrio y minimarkets hagan sus pedidos de papel higiénico, galletas Mabel’s, aceites Fino, detergentes OMO y dulces con despacho en camión.',
    objective:
      'Facilitar que las tiendas de barrio se reabastezcan en 30 segundos desde su celular sin llamadas confusas ni fotos sueltas.',
    solutionSummary:
      'Selector rápido de fardos y cajas con cálculo de bultos totales, pedido mínimo en camión y nota de remisión para WhatsApp.',
    highlights: [
      'Controles numéricos rápidos [-] [cant] [+] por fardo y caja',
      'Indicador de pedido mínimo (Bs 250) con envío en camión',
      'Desglose para almacén con datos de tienda y turno de reparto',
    ],
    mockupVariant: 'distribuidora-abarrotes',
    externalUrl: '/c/distribuidora-abarrotes',
    externalLabel: 'Abrir catálogo Distribuidora Los Andes',
    relatedServiceSlug: 'catalogos-digitales',
  },
  {
    id: 'demo-catalogo-pasteleria',
    title: 'Le Petit Atelier – Pastelería Fina',
    category: 'catalogos-digitales',
    categoryLabel: 'Catálogos digitales',
    solutionType: 'Catálogo boutique con selector de porciones y dedicatorias',
    kind: 'demostracion',
    badgeText: 'Demo en vivo',
    description:
      'Catálogo boutique estilo Le Petit Atelier para pastelerías y reposterías con fotos tentadoras, selector de porciones y encargo personalizado por WhatsApp.',
    objective:
      'Permitir que cafeterías y pastelerías reciban pedidos organizados por WhatsApp sin errores en mostrador.',
    solutionSummary:
      'Menú digital con selector de unidades y botón de compra directa a WhatsApp.',
    highlights: [
      'Selector de porciones individuales o familiares',
      'Campo para fecha de evento y dedicatoria en tarjeta',
      'Pedido automático a WhatsApp',
    ],
    mockupVariant: 'catalogo-pasteleria',
    externalUrl: '/c/pasteleria-lepetit',
    externalLabel: 'Abrir catálogo Le Petit Atelier',
    relatedServiceSlug: 'catalogos-digitales',
  },
  {
    id: 'demo-sistema-admin',
    title: 'Control Diario de Caja y Cobros QR',
    category: 'automatizacion-administrativa',
    categoryLabel: 'Automatización administrativa',
    solutionType: 'Simulador de ventas y totalizador',
    kind: 'demostracion',
    badgeText: 'Demo en vivo',
    description:
      'Simulador interactivo en tiempo real para registrar cobros QR y efectivo, monitorear ventas del día y exportar reportes a Excel (CSV).',
    objective:
      'Brindar visibilidad real del estado financiero y operativo del negocio sin depender de cuadernos sueltos.',
    solutionSummary:
      'Vista centralizada de ingresos, gastos, alertas de inventario bajo y reportes por periodo.',
    highlights: [
      'Indicadores diarios y mensuales claros',
      'Seguimiento de stock disponible',
      'Base escalable según necesidades del negocio',
    ],
    mockupVariant: 'sistema-admin',
    externalUrl: '/demos/control-caja',
    externalLabel: 'Abrir simulador de caja',
    relatedServiceSlug: 'automatizacion-administrativa',
  },
  {
    id: 'demo-whatsapp-business',
    title: 'Ecosistema de Atención en WhatsApp Business',
    category: 'soluciones-comerciales',
    categoryLabel: 'Soluciones comerciales',
    solutionType: 'Configuración de WhatsApp Business',
    kind: 'demostracion',
    badgeText: 'Demostración conceptual',
    description:
      'Modelo de organización comercial con perfil verificado de negocio, etiquetas de seguimiento, respuestas rápidas y catálogo nativo.',
    objective:
      'Ordenar conversaciones repetitivas y acelerar el cierre de pedidos desde el primer contacto.',
    solutionSummary:
      'Flujo práctico basado 100% en las funciones oficiales de la aplicación WhatsApp Business.',
    highlights: [
      'Etiquetas de Nuevo, Cotizado y Pagado',
      'Respuestas rápidas para horarios y envíos',
      'Código QR listo para imprimir en local',
    ],
    mockupVariant: 'whatsapp-business',
    relatedServiceSlug: 'whatsapp-business',
  },
];
