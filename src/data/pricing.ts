import type { ServicePlan } from '@/types/service';

/**
 * Fuente única de verdad para precios y planes de todos los servicios.
 * Cualquier cambio aquí se refleja automáticamente en Inicio, /servicios y /servicios/[slug].
 */
export const servicePlansBySlug: Record<string, ServicePlan[]> = {
  'whatsapp-business': [
    {
      id: 'wa-basico',
      name: 'Básico',
      priceLabel: 'Bs 150',
      priceAmount: 150,
      billingNote: 'Pago único',
      summary: 'Organiza el perfil comercial de tu negocio y mejora tu primera impresión.',
      deliverables: [
        'Configuración completa del perfil de empresa',
        'Horario de atención, ubicación y descripción comercial',
        'Mensaje de bienvenida y mensaje de ausencia nativos',
        'Hasta 5 respuestas rápidas para consultas frecuentes',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, me interesa el Plan Básico (Bs 150) de Configuración de WhatsApp Business.',
    },
    {
      id: 'wa-comercial',
      name: 'Comercial',
      priceLabel: 'Bs 250',
      priceAmount: 250,
      billingNote: 'Pago único',
      highlighted: true,
      summary: 'Estructura tus productos y atiende pedidos con orden desde el teléfono.',
      deliverables: [
        'Todo lo del Plan Básico',
        'Carga inicial de catálogo nativo (hasta 15 productos/servicios)',
        'Sistema de etiquetas para clasificar clientes y pedidos',
        'Hasta 10 respuestas rápidas comerciales listas para usar',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, me interesa el Plan Comercial (Bs 250) de Configuración de WhatsApp Business.',
    },
    {
      id: 'wa-completo',
      name: 'Completo',
      priceLabel: 'Bs 350',
      priceAmount: 350,
      billingNote: 'Pago único',
      summary: 'Configuración integral con enlace de acceso directo y capacitación de uso.',
      deliverables: [
        'Todo lo del Plan Comercial',
        'Carga inicial ampliada en catálogo nativo (hasta 30 ítems)',
        'Enlaces cortos wa.me y código QR imprimible para mostrador',
        'Guía práctica de operación y atención comercial por WhatsApp',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, me interesa el Plan Completo (Bs 350) de Configuración de WhatsApp Business.',
    },
  ],
  'catalogos-digitales': [
    {
      id: 'cat-15',
      name: 'Inicial (15 productos)',
      priceLabel: 'Bs 350',
      priceAmount: 350,
      billingNote: 'Pago único',
      summary: 'Ideal para emprendedores o líneas específicas con oferta acotada.',
      deliverables: [
        'Organización visual de hasta 15 productos',
        'Nombres, descripciones claras y precios en Bs',
        'Portada, datos comerciales y botón de pedido por WhatsApp',
        'Diseño adaptado para lectura cómoda en celular',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quiero cotizar el Catálogo Digital de hasta 15 productos (Bs 350).',
    },
    {
      id: 'cat-40',
      name: 'Comercial (40 productos)',
      priceLabel: 'Bs 500',
      priceAmount: 500,
      billingNote: 'Pago único',
      highlighted: true,
      summary: 'Presentación ordenada por categorías para tiendas y distribuidores.',
      deliverables: [
        'Organización por categorías de hasta 40 productos',
        'Optimización y encuadre de fotografías enviadas por el cliente',
        'Versión móvil web compartible por enlace y/o PDF interactivo',
        'Integración de contacto directo por WhatsApp',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quiero cotizar el Catálogo Digital de hasta 40 productos (Bs 500).',
    },
    {
      id: 'cat-80',
      name: 'Ampliado (80 productos)',
      priceLabel: 'Bs 750',
      priceAmount: 750,
      billingNote: 'Pago único',
      summary: 'Catálogo extenso con índice claro para comercios con amplio inventario.',
      deliverables: [
        'Hasta 80 productos organizados con índice por secciones',
        'Uniformidad visual acorde a la identidad de tu negocio',
        'Archivo optimizado para compartir rápido por WhatsApp',
        'Guía para futuras actualizaciones de precios',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quiero cotizar el Catálogo Digital de hasta 80 productos (Bs 750).',
    },
  ],
  'redes-sociales': [
    {
      id: 'rs-basico',
      name: 'Básico',
      priceLabel: 'Bs 350 / mes',
      priceAmount: 350,
      billingNote: 'Plan mensual',
      summary: 'Presencia visual constante para mantener activo tu negocio cada semana.',
      deliverables: [
        '8 diseños gráficos mensuales para feed (2 por semana)',
        'Redacción de textos base (copy) para cada pieza',
        'Adaptación a la identidad visual de tu negocio',
        'Entrega organizada lista para publicar',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, me interesa el Plan Básico de Diseño para Redes Sociales (Bs 350/mes).',
    },
    {
      id: 'rs-comercial',
      name: 'Comercial',
      priceLabel: 'Bs 500 / mes',
      priceAmount: 500,
      billingNote: 'Plan mensual',
      highlighted: true,
      summary: 'Equilibrio entre publicaciones informativas, promociones e historias.',
      deliverables: [
        '12 diseños mensuales para feed',
        'Historias complementarias en formato vertical',
        'Línea gráfica coherente para productos y promociones',
        'Textos orientados a generar consultas por WhatsApp',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, me interesa el Plan Comercial de Diseño para Redes Sociales (Bs 500/mes).',
    },
    {
      id: 'rs-completo',
      name: 'Completo',
      priceLabel: 'Bs 700 / mes',
      priceAmount: 700,
      billingNote: 'Plan mensual',
      summary: 'Mayor frecuencia visual con planificación mensual estructurada.',
      deliverables: [
        '16 diseños mensuales para feed',
        'Paquete de historias promocionales e informativas',
        'Calendario mensual de contenido organizado por objetivos',
        'Prioridad en ajustes y coordinación comercial',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, me interesa el Plan Completo de Diseño para Redes Sociales (Bs 700/mes).',
    },
  ],
  'automatizacion-administrativa': [
    {
      id: 'auto-ventas',
      name: 'Ventas y Gastos',
      priceLabel: 'Bs 250',
      priceAmount: 250,
      billingNote: 'Implementación inicial',
      summary: 'Ordena tus ingresos y egresos diarios sin depender de cuadernos dispersos.',
      deliverables: [
        'Plantilla o herramienta estructurada de registro de ventas',
        'Control ordenado de gastos operativos y compras',
        'Resumen diario y mensual automático de resultados',
        'Capacitación breve para su uso inmediato',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quiero información sobre el plan de Registro de Ventas y Gastos (Bs 250).',
    },
    {
      id: 'auto-inventario',
      name: 'Ventas, Gastos e Inventario',
      priceLabel: 'Bs 450',
      priceAmount: 450,
      billingNote: 'Implementación inicial',
      highlighted: true,
      summary: 'Controla qué se vende, cuánto ganas y qué stock queda disponible.',
      deliverables: [
        'Módulo de ventas y control de egresos vinculados',
        'Control de entradas, salidas y stock mínimo de inventario',
        'Reportes claros por producto o categoría',
        'Ajuste inicial a la forma de trabajo de tu negocio',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quiero información sobre el plan de Ventas, Gastos e Inventario (Bs 450).',
    },
    {
      id: 'auto-sistema',
      name: 'Sistema y Panel de Control',
      priceLabel: 'Desde Bs 700',
      priceAmount: 700,
      billingNote: 'Según alcance',
      summary: 'Solución web o administrativa a medida con indicadores y reportes de gestión.',
      deliverables: [
        'Panel de control (dashboard) con métricas clave del negocio',
        'Control de pedidos, ventas, gastos e inventario integrado',
        'Exportación de reportes administrativos',
        'Alcance y funcionalidades definidas previa evaluación técnica',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quisiera cotizar un Sistema Integrado y Panel de Control (desde Bs 700).',
    },
  ],
  'diseno-web': [
    {
      id: 'web-landing',
      name: 'Landing Page',
      priceLabel: 'Bs 700',
      priceAmount: 700,
      billingNote: 'Pago único de desarrollo',
      summary: 'Página enfocada en presentar tu oferta principal y captar contactos por WhatsApp.',
      deliverables: [
        'Diseño responsive profesional (móvil, tablet y escritorio)',
        'Estructura persuasiva en una sola página de alta conversión',
        'Integración directa con WhatsApp y formulario de consulta',
        'Optimización SEO básica y publicación acordada',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quisiera cotizar el desarrollo de una Landing Page (Bs 700).',
    },
    {
      id: 'web-corporativa',
      name: 'Web hasta 5 secciones + galería',
      priceLabel: 'Bs 1.000',
      priceAmount: 1000,
      billingNote: 'Pago único de desarrollo',
      highlighted: true,
      summary: 'Presencia empresarial sólida para mostrar servicios, empresa, galería y contacto.',
      deliverables: [
        'Hasta 5 secciones o páginas informativas bien estructuradas',
        'Galería de productos, trabajos o soluciones',
        'Integración con WhatsApp, redes sociales y mapa de referencia',
        'SEO técnico inicial, metadatos y velocidad optimizada',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quisiera cotizar el Sitio Web de hasta 5 secciones y galería (Bs 1.000).',
    },
    {
      id: 'web-multipagina',
      name: 'Multipágina / A medida',
      priceLabel: 'Desde Bs 1.500',
      priceAmount: 1500,
      billingNote: 'Según alcance',
      summary: 'Sitios web escalables con múltiples páginas, catálogos web o funciones específicas.',
      deliverables: [
        'Arquitectura multipágina escalable y moderna',
        'Componentes personalizados y catálogo o fichas detalladas',
        'Formularios avanzados con validación y analítica preparada',
        'Configuración técnica, SEO estructurado y puesta en marcha',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quisiera cotizar un Sitio Web Multipágina o a medida (desde Bs 1.500).',
    },
  ],
  'software-y-apps': [
    {
      id: 'app-mvp',
      name: 'App Móvil Android / MVP',
      priceLabel: 'Bajo cotización',
      priceAmount: 0,
      billingNote: 'Según alcance del proyecto',
      summary: 'Aplicación Android a medida con interfaz moderna, almacenamiento local o en la nube.',
      deliverables: [
        'Arquitectura y diseño de interfaz UX/UI para celular',
        'Desarrollo de lógica funcional y componentes nativos',
        'Soporte para notificaciones, pagos QR o lectura de datos',
        'Generación de APK/AAB y preparación para Google Play Store',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quisiera cotizar el desarrollo de una Aplicación Móvil Android para mi negocio.',
    },
    {
      id: 'saas-web',
      name: 'Plataforma Web SaaS',
      priceLabel: 'Bajo cotización',
      priceAmount: 0,
      billingNote: 'Según alcance del proyecto',
      highlighted: true,
      summary: 'Sistema web con panel administrativo, gestión de usuarios, reservas o inventario.',
      deliverables: [
        'Desarrollo web moderno con Next.js, React y base de datos',
        'Panel de administración con roles y métricas en vivo',
        'Módulos a medida (reservas, pedidos, clientes o catálogo dinámico)',
        'Despliegue en la nube con dominio y seguridad HTTPS',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quisiera cotizar una Plataforma Web SaaS similar a MiSalón o Panito.',
    },
    {
      id: 'solucion-integral',
      name: 'Solución Integral a Medida',
      priceLabel: 'Bajo cotización',
      priceAmount: 0,
      billingNote: 'Según alcance del proyecto',
      summary: 'Ecosistema completo que combina aplicación móvil, plataforma web y sincronización en tiempo real.',
      deliverables: [
        'Arquitectura de software escalable y base de datos centralizada',
        'Aplicación móvil para clientes/operadores + Panel web administrativo',
        'Integración de APIs, notificaciones push y tracking con GPS',
        'Capacitación técnica, documentación de código y soporte continuo',
      ],
      whatsappMessage:
        'Hola Vera Studio Digital, quisiera una cotización personalizada para una Solución Integral de Software y Apps.',
    },
  ],
};

export const startingPriceBySlug: Record<string, string> = {
  'whatsapp-business': 'Desde Bs 150',
  'catalogos-digitales': 'Desde Bs 350',
  'redes-sociales': 'Desde Bs 350/mes',
  'automatizacion-administrativa': 'Desde Bs 250',
  'diseno-web': 'Desde Bs 700',
  'software-y-apps': 'Bajo cotización',
};
