import type { ServiceItem } from '@/types/service';
import { servicePlansBySlug, startingPriceBySlug } from './pricing';

export const servicesData: ServiceItem[] = [
  {
    slug: 'whatsapp-business',
    order: 1,
    name: 'Configuración de WhatsApp Business',
    shortName: 'WhatsApp Business',
    tagline: 'Atención comercial ordenada y profesional desde tu teléfono.',
    shortDescription:
      'Configuramos tu cuenta comercial con catálogo, etiquetas, respuestas rápidas y mensajes automáticos nativos.',
    fullDescription:
      'Configuramos WhatsApp Business para que tu negocio pueda presentar mejor sus productos y servicios, organizar la atención al cliente y responder consultas de manera más eficiente.',
    mainBenefit: 'Responde más rápido, proyecta seriedad y ordena tus pedidos sin perder conversaciones.',
    startingPrice: startingPriceBySlug['whatsapp-business'] ?? 'Desde Bs 150',
    iconName: 'MessageSquareText',
    problemsSolved: [
      'Perfil comercial incompleto o usando cuenta personal.',
      'Información de horarios, precios y ubicación desorganizada.',
      'Pérdida de tiempo escribiendo manualmente las mismas respuestas.',
      'Falta de seguimiento y clasificación de clientes o pedidos pendientes.',
      'Presentación poco profesional frente a nuevos compradores.',
    ],
    benefits: [
      'Imagen empresarial confiable desde el primer mensaje.',
      'Menor tiempo de respuesta ante consultas frecuentes.',
      'Seguimiento claro de clientes con etiquetas de estado.',
      'Acceso directo a tus productos dentro del mismo chat.',
    ],
    features: [
      'Optimización del perfil comercial, categoría y horarios',
      'Mensajes de bienvenida y ausencia con funciones nativas',
      'Biblioteca de respuestas rápidas para preguntas repetitivas',
      'Organización de catálogo nativo y etiquetas de clientes',
      'Enlace directo y código QR para compartir en tienda o redes',
    ],
    included: [
      'Configuración integral de herramientas nativas de WhatsApp Business',
      'Carga inicial de productos o servicios según el plan elegido',
      'Redacción ordenada de mensajes base y respuestas rápidas',
      'Breve guía de uso práctico para tu equipo o atención diaria',
    ],
    notIncluded: [
      'Chatbot con inteligencia artificial ni respuestas conversacionales complejas',
      'Integración con la API oficial de WhatsApp Business ni software externo de terceros',
      'Atención diaria de clientes ni gestión de ventas en nombre del negocio',
      'Compra de línea telefónica o dispositivo móvil',
    ],
    clarificationNote:
      'Este servicio utiliza exclusivamente las funciones nativas oficiales de la aplicación WhatsApp Business. Si tu empresa necesita flujos automatizados mediante API oficial o integraciones con sistemas externos, se cotiza como desarrollo adicional.',
    plans: servicePlansBySlug['whatsapp-business'] ?? [],
    faqs: [
      {
        id: 'wa-faq-1',
        question: '¿Incluye un bot con inteligencia artificial?',
        answer:
          'No. Configuramos las herramientas nativas reales de WhatsApp Business (bienvenida, ausencia, respuestas rápidas, etiquetas y catálogo). Los chatbots con IA o integraciones con API requieren un desarrollo y suscripción aparte.',
      },
      {
        id: 'wa-faq-2',
        question: '¿Pierdo mis chats anteriores al configurar WhatsApp Business?',
        answer:
          'Si ya utilizas WhatsApp, realizamos el respaldo previo antes de migrar o configurar la cuenta comercial para conservar tu historial siguiendo el procedimiento estándar.',
      },
      {
        id: 'wa-faq-3',
        question: '¿Puedo agregar o editar productos después?',
        answer:
          'Sí. Te dejamos el catálogo estructurado y te explicamos cómo actualizar precios, disponibilidad o nuevos ítems desde tu propio celular.',
      },
    ],
    seo: {
      title: 'Configuración de WhatsApp Business en Cochabamba | Vera Studio Digital',
      description:
        'Organiza tu atención comercial con WhatsApp Business: perfil de empresa, catálogo, etiquetas y respuestas rápidas desde Bs 150 en Cochabamba y Bolivia.',
      keywords: [
        'configuración de WhatsApp Business',
        'WhatsApp Business Cochabamba',
        'catálogo WhatsApp empresas Bolivia',
      ],
    },
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera información sobre la Configuración de WhatsApp Business para mi negocio.',
  },
  {
    slug: 'catalogos-digitales',
    order: 2,
    name: 'Catálogos Digitales',
    shortName: 'Catálogos Digitales',
    tagline: 'Muestra todos tus productos con orden, claridad y precio visible.',
    shortDescription:
      'Organizamos tus productos en un catálogo visual adaptado a celular para compartir en segundos por WhatsApp o redes.',
    fullDescription:
      'Diseñamos catálogos digitales profesionales para que los negocios puedan presentar sus productos y compartirlos fácilmente con sus clientes.',
    mainBenefit: 'Evita enviar fotos sueltas y facilita que tus clientes elijan y compren más rápido.',
    startingPrice: startingPriceBySlug['catalogos-digitales'] ?? 'Desde Bs 350',
    iconName: 'BookOpenCheck',
    problemsSolved: [
      'Productos sin una presentación organizada ni categorías claras.',
      'Fotografías, descripciones y precios dispersos en el chat.',
      'Dificultad para compartir la oferta completa a clientes nuevos.',
      'Falta de uniformidad visual que resta valor al negocio.',
    ],
    benefits: [
      'Presentación profesional que transmite confianza al comprador.',
      'Fácil de abrir y navegar desde cualquier teléfono móvil.',
      'Ahorro de tiempo al compartir un solo enlace o archivo ordenado.',
      'Facilita que el cliente consulte directamente por el producto elegido.',
    ],
    features: [
      'Diseño visual alineado a los colores y marca de tu negocio',
      'Organización lógica por categorías o líneas de producto',
      'Fichas claras con fotografía, nombre, descripción y precio',
      'Información comercial de contacto y formas de pedido',
      'Versión optimizada para pantallas móviles y envío rápido',
    ],
    included: [
      'Maquetación y diseño visual completo del catálogo',
      'Organización de nombres, descripciones, precios e información comercial',
      'Integración de fotografías proporcionadas por el cliente',
      'Archivo final y/o enlace compartible optimizado para dispositivos móviles',
    ],
    notIncluded: [
      'Sesión fotográfica profesional ni toma de fotos de productos (salvo contratación específica)',
      'Pasarela de pagos en línea o tienda e-commerce con carrito transaccional',
      'Impresión física en papel',
    ],
    clarificationNote:
      'El cliente proporciona las fotografías e información base (precios y nombres) de sus productos. Si necesitas toma o producción fotográfica profesional, debe cotizarse aparte.',
    plans: servicePlansBySlug['catalogos-digitales'] ?? [],
    faqs: [
      {
        id: 'cat-faq-1',
        question: '¿Ustedes sacan las fotos de mis productos?',
        answer:
          'No está incluido en los paquetes base. Trabajamos con las fotografías que nos envías, optimizando su recorte y presentación dentro del catálogo.',
      },
      {
        id: 'cat-faq-2',
        question: '¿Cómo lo ven mis clientes?',
        answer:
          'Entregamos una versión optimizada para celular (enlace web o PDF interactivo ligero según el formato acordado) que se abre al instante al compartirlo por WhatsApp.',
      },
      {
        id: 'cat-faq-3',
        question: '¿Qué pasa si mis precios cambian después?',
        answer:
          'Puedes solicitarnos actualizaciones puntuales o, en el formato web editable, te explicamos cómo mantener tus precios al día.',
      },
    ],
    seo: {
      title: 'Diseño de Catálogos Digitales en Bolivia | Vera Studio Digital',
      description:
        'Catálogos digitales profesionales adaptados para celular desde Bs 350. Presenta tus productos de forma ordenada y compártelos por WhatsApp.',
      keywords: [
        'diseño de catálogos digitales',
        'catálogo digital WhatsApp Bolivia',
        'catálogo de productos Cochabamba',
      ],
    },
    whatsappMessage:
      'Hola Vera Studio Digital, estoy interesado en un Catálogo Digital para mostrar mis productos.',
  },
  {
    slug: 'redes-sociales',
    order: 3,
    name: 'Diseño de Contenido para Redes Sociales',
    shortName: 'Contenido Redes Sociales',
    tagline: 'Piezas visuales profesionales que comunican el valor de tu negocio.',
    shortDescription:
      'Creamos diseños mensuales coherentes con tu marca para comunicar productos, promociones y novedades.',
    fullDescription:
      'Creamos contenido visual profesional para ayudar a los negocios a comunicar sus productos, servicios, promociones y novedades.',
    mainBenefit: 'Proyecta una imagen activa, ordenada y coherente sin improvisar publicaciones.',
    startingPrice: startingPriceBySlug['redes-sociales'] ?? 'Desde Bs 350/mes',
    iconName: 'Palette',
    problemsSolved: [
      'Publicaciones improvisadas con estilos distintos cada semana.',
      'Poca claridad al comunicar promociones, horarios o beneficios.',
      'Falta de tiempo del dueño del negocio para diseñar material gráfico.',
      'Baja diferenciación frente a la competencia local.',
    ],
    benefits: [
      'Identidad visual uniforme en Facebook, Instagram o TikTok.',
      'Piezas claras orientadas a generar consultas reales.',
      'Planificación ordenada de promociones y fechas comerciales.',
      'Ahorro de horas de trabajo operativo cada mes.',
    ],
    features: [
      'Diseños adaptados al formato de feed e historias según plan',
      'Línea gráfica consistente con tu logotipo y colores',
      'Redacción de textos acompañantes para las piezas entregadas',
      'Calendario mensual de contenido en el plan Completo',
    ],
    included: [
      'Cantidad mensual de diseños gráficos definida en el paquete',
      'Historias promocionales en los planes Comercial y Completo',
      'Calendario de contenido en el plan Completo',
      'Revisiones puntuales acordadas antes de la entrega final',
    ],
    notIncluded: [
      'Gestión diaria de mensajes, comentarios o inbox (community management)',
      'Publicación permanente o programación diaria en cuentas del cliente',
      'Inversión publicitaria en Meta Ads / TikTok Ads ni pauta paga',
      'Producción presencial de fotografías o videos profesionales',
    ],
    clarificationNote:
      'Los planes mensuales cubren el diseño gráfico y la estructura comunicacional del contenido. La gestión diaria de mensajes, pauta publicitaria o producción audiovisual en sitio se cotizan por separado.',
    plans: servicePlansBySlug['redes-sociales'] ?? [],
    faqs: [
      {
        id: 'rs-faq-1',
        question: '¿Incluye responder mensajes de mis clientes en Facebook o Instagram?',
        answer:
          'No. El servicio cubre el diseño profesional de las piezas gráficas y textos base. La atención diaria de mensajes o pauta pagada no está incluida en estos paquetes.',
      },
      {
        id: 'rs-faq-2',
        question: '¿El costo incluye publicidad pagada en Facebook Ads?',
        answer:
          'No. Cualquier presupuesto de anuncios pagados se abona directamente a la plataforma o se gestiona bajo un acuerdo específico aparte.',
      },
      {
        id: 'rs-faq-3',
        question: '¿Puedo contratar solo por un mes para probar?',
        answer:
          'Sí, nuestros planes mensuales permiten evaluar el ritmo de trabajo y la respuesta de tus clientes sin compromisos forzosos a largo plazo.',
      },
    ],
    seo: {
      title: 'Diseño de Contenido para Redes Sociales | Vera Studio Digital',
      description:
        'Paquetes mensuales de diseño gráfico para redes sociales desde Bs 350/mes en Cochabamba y Bolivia. Comunica tus productos y promociones con orden.',
      keywords: [
        'diseño de contenido para redes sociales',
        'diseño gráfico redes Cochabamba',
        'marketing digital Cochabamba',
      ],
    },
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera información sobre los planes de Diseño de Contenido para Redes Sociales.',
  },
  {
    slug: 'automatizacion-administrativa',
    order: 4,
    name: 'Automatización Administrativa y Control Empresarial',
    shortName: 'Automatización Administrativa',
    tagline: 'Herramientas prácticas para controlar ventas, gastos e inventario.',
    shortDescription:
      'Desarrollamos soluciones digitales para organizar operaciones diarias, generar reportes y visualizar indicadores claros.',
    fullDescription:
      'Desarrollamos herramientas digitales para ayudar a los negocios a organizar sus ventas, gastos, inventarios y operaciones administrativas.',
    mainBenefit: 'Deja atrás los registros manuales dispersos y toma decisiones con números reales.',
    startingPrice: startingPriceBySlug['automatizacion-administrativa'] ?? 'Desde Bs 250',
    iconName: 'BarChart3',
    problemsSolved: [
      'Registros manuales desorganizados en cuadernos o archivos sueltos.',
      'Falta de visibilidad sobre las ventas reales del día o del mes.',
      'Dificultad para identificar gastos operativos y márgenes.',
      'Desconocimiento del stock disponible o quiebres de inventario.',
      'Pérdida de tiempo consolidando reportes administrativos.',
    ],
    benefits: [
      'Control claro de ingresos, egresos y ganancias en un solo lugar.',
      'Visibilidad actualizada del inventario y pedidos.',
      'Reportes ordenados listos para revisar o exportar.',
      'Herramientas adaptadas al tamaño real de tu operación.',
    ],
    features: [
      'Registro ágil de ventas diarias y egresos',
      'Control de stock, entradas y salidas de mercadería',
      'Consolidación automática de reportes administrativos',
      'Paneles de control con indicadores clave de gestión',
    ],
    practicalExamples: [
      'Control comercial diario para tiendas y comercios',
      'Registro ordenado de ingresos y egresos',
      'Gestión básica y seguimiento de inventario',
      'Control de pedidos para distribuidoras o emprendimientos',
      'Reportes administrativos periódicos',
      'Indicadores de gestión y dashboards de operación',
    ],
    included: [
      'Diseño e implementación de la herramienta según el plan elegido',
      'Adaptación de categorías, productos o rubros de tu negocio',
      'Pruebas de cálculo y verificación de reportes',
      'Explicación práctica para el uso diario del responsable',
    ],
    notIncluded: [
      'Facturación electrónica conectada a impuestos nacionales salvo cotización específica',
      'Equipamiento físico (lectores, impresoras térmicas o computadoras)',
      'Desarrollos complejos multi-sucursal fuera del alcance cotizado inicialmente',
    ],
    clarificationNote:
      'Las soluciones personalizadas o sistemas web multiusuario se cotizan de forma transparente según las funcionalidades y módulos específicos que necesite tu operación.',
    plans: servicePlansBySlug['automatizacion-administrativa'] ?? [],
    faqs: [
      {
        id: 'auto-faq-1',
        question: '¿Necesito saber programación o contabilidad avanzada para usarlo?',
        answer:
          'No. Diseñamos herramientas prácticas y claras pensadas para dueños de negocios, vendedores o administradores con uso cotidiano.',
      },
      {
        id: 'auto-faq-2',
        question: '¿Pueden adaptar los campos a mi rubro específico?',
        answer:
          'Sí. Antes de implementar revisamos cómo vendes, qué gastos manejas y cómo controlas tu mercadería para que la herramienta se ajuste a tu negocio.',
      },
      {
        id: 'auto-faq-3',
        question: '¿Si luego necesito más funciones, se puede ampliar?',
        answer:
          'Sí, puedes empezar con un control básico de ventas y gastos y luego escalar hacia inventario o un panel web integrado.',
      },
    ],
    seo: {
      title: 'Automatización Administrativa para Negocios | Vera Studio Digital',
      description:
        'Control de ventas, gastos, inventarios y paneles administrativos desde Bs 250 en Cochabamba y Bolivia. Organiza la gestión de tu empresa.',
      keywords: [
        'automatización administrativa para negocios',
        'control de ventas e inventario Bolivia',
        'sistema administrativo Cochabamba',
      ],
    },
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera asesoramiento sobre Automatización Administrativa y control para mi negocio.',
  },
  {
    slug: 'diseno-web',
    order: 5,
    name: 'Diseño y Desarrollo de Páginas Web',
    shortName: 'Páginas Web',
    tagline: 'Sitios web rápidos, modernos y orientados a conseguir clientes.',
    shortDescription:
      'Desarrollamos páginas web responsive, optimizadas para Google y conectadas directamente con tu WhatsApp.',
    fullDescription:
      'Desarrollamos sitios web profesionales, rápidos y adaptables a computadoras, tabletas y teléfonos móviles para mejorar la presencia digital de empresas y negocios.',
    mainBenefit: 'Consolida tu presencia profesional en Google y convierte visitas en cotizaciones.',
    startingPrice: startingPriceBySlug['diseno-web'] ?? 'Desde Bs 700',
    iconName: 'Globe',
    problemsSolved: [
      'Depender únicamente de redes sociales sin un espacio propio en Google.',
      'No aparecer en búsquedas locales de Cochabamba o Bolivia.',
      'Webs antiguas, lentas o difíciles de leer desde teléfonos móviles.',
      'Falta de claridad sobre los servicios y cómo solicitar cotización.',
    ],
    benefits: [
      'Presencia profesional disponible las 24 horas en internet.',
      'Carga rápida y visualización óptima en celulares y computadoras.',
      'Estructura enfocada en explicar servicios y derivar a WhatsApp.',
      'Base técnica preparada para posicionamiento en Google (SEO).',
    ],
    features: [
      'Diseño responsive Mobile First adaptado a todo dispositivo',
      'Estructura de navegación clara y jerarquía visual cuidada',
      'Diseño visual personalizado acorde a la identidad de tu empresa',
      'Secciones informativas, galería o catálogo según paquete',
      'Formularios validados e integración directa con WhatsApp',
      'Optimización básica de SEO técnico y metadatos',
      'Configuración técnica y publicación acordada',
    ],
    included: [
      'Diseño y desarrollo frontend completo según el plan contratado',
      'Integración de botones contextuales a WhatsApp y datos de contacto',
      'Optimización de imágenes, metadatos y estructura semántica SEO',
      'Publicación técnica acordada y entrega operativa',
    ],
    notIncluded: [
      'Costo anual de registro de dominio (.com, .site, .bo, etc.)',
      'Planes de hosting pagado o servicios externos de pago mensual',
      'Funcionalidades especiales como pasarelas de pago o sistemas complejos no cotizados',
    ],
    clarificationNote:
      'El dominio propio, alojamiento web pagado (hosting), herramientas externas de terceros y funcionalidades especiales pueden generar costos adicionales independientes del desarrollo.',
    plans: servicePlansBySlug['diseno-web'] ?? [],
    faqs: [
      {
        id: 'web-faq-1',
        question: '¿Los precios incluyen dominio y hosting?',
        answer:
          'Los precios mostrados corresponden al diseño y desarrollo del sitio web. El registro de dominio y servicios de alojamiento web pueden implicar costos adicionales que te detallamos con total transparencia según tu caso.',
      },
      {
        id: 'web-faq-2',
        question: '¿Mi página se verá bien en celulares?',
        answer:
          'Sí. Todos nuestros desarrollos siguen un enfoque Mobile First, asegurando lectura cómoda, botones accesibles y carga veloz en teléfonos móviles.',
      },
      {
        id: 'web-faq-3',
        question: '¿Cuánto tiempo tarda crear una página web?',
        answer:
          'Depende del paquete y de la entrega de tu información base (logo, textos, fotos). Una landing page suele tomar menos tiempo que un sitio multipágina, y definimos el cronograma exacto antes de iniciar.',
      },
    ],
    seo: {
      title: 'Diseño de Páginas Web en Cochabamba y Bolivia | Vera Studio Digital',
      description:
        'Desarrollo de páginas web rápidas, responsive y optimizadas para Google desde Bs 700 en Cochabamba y Bolivia. Solicita tu cotización.',
      keywords: [
        'diseño de páginas web en Cochabamba',
        'desarrollo web Bolivia',
        'landing page para negocios Cochabamba',
      ],
    },
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera una cotización para el desarrollo de una página web.',
  },
  {
    slug: 'software-y-apps',
    order: 6,
    name: 'Plataformas SaaS y Aplicaciones',
    shortName: 'Software y Apps',
    tagline: 'Plataformas web modernas y aplicaciones móviles con casos de éxito activos.',
    shortDescription:
      'Creamos sistemas web y aplicaciones a medida. Conoce nuestras soluciones activas: Listo, MiSalón y Panito.',
    fullDescription:
      'Desarrollamos soluciones de software avanzadas y plataformas SaaS a medida: paneles administrativos, sistemas de reservas, gestión logística con GPS y aplicaciones Android publicadas en Google Play Store.',
    mainBenefit:
      'Digitaliza y automatiza tu modelo de negocio con tecnología propia escalable, rápida y probada en producción.',
    startingPrice: startingPriceBySlug['software-y-apps'] ?? 'Bajo cotización',
    iconName: 'Smartphone',
    problemsSolved: [
      'Procesos comerciales lentos que dependen de planillas Excel o cuadernos manuales.',
      'Sistemas enlatados extranjeros que cobran mensualidades en dólares y no se adaptan a Bolivia.',
      'Necesidad de una app Android propia para control de cobros QR, pedidos o notificaciones.',
      'Falta de visibilidad en tiempo real sobre rutas de entrega, producción o reservas.',
    ],
    benefits: [
      'Propiedad absoluta de tu software y base de datos sin ataduras.',
      'Aplicaciones móviles Android publicadas oficialmente en Google Play Store.',
      'Plataformas web modernas accesibles desde cualquier teléfono o computadora.',
      'Casos de éxito reales ya operando en el mercado: Listo, MiSalón y Panito.',
    ],
    features: [
      'Listo (Google Play): Alerta de cobros QR por voz y control diario',
      'MiSalón.lat: Plataforma SaaS de reservas para salones y spas',
      'Panito.lat: Gestión de pedidos, producción, inventario y rutas GPS',
      'Desarrollo a medida con Next.js, React, Node.js y Android',
      'Bases de datos en la nube, pasarelas y control de usuarios',
    ],
    included: [
      'Levantamiento de requerimientos y diseño de arquitectura técnica',
      'Diseño de interfaz UX/UI Mobile First intuitiva y profesional',
      'Desarrollo integral de frontend, backend, base de datos y paneles de control',
      'Publicación técnica en la nube o en Google Play Store',
      'Garantía técnica y capacitación de uso para tu equipo',
    ],
    notIncluded: [
      'Costos de infraestructura en la nube de alta demanda (AWS/GCP) más allá del plan acordado',
      'Tarifa única de registro de cuenta de desarrollador en Google Play ($25 USD cobrado por Google)',
      'Operación diaria de ventas o atención al cliente del negocio',
    ],
    clarificationNote:
      'El desarrollo de software a medida se planifica por hitos claros con entregas probadas, garantizando total transparencia en plazos y alcances.',
    plans: servicePlansBySlug['software-y-apps'] ?? [],
    faqs: [
      {
        id: 'app-faq-1',
        question: '¿Pueden desarrollar una app móvil como Listo para mi empresa?',
        answer:
          'Sí. Desarrollamos aplicaciones Android nativas y multiplataforma orientadas a resolver necesidades operativas reales de comercios y empresas en Bolivia.',
      },
      {
        id: 'app-faq-2',
        question: '¿Qué tipo de plataformas web SaaS pueden construir?',
        answer:
          'Diseñamos y programamos sistemas completos tipo SaaS como MiSalón.lat (reservas y agenda online) o Panito.lat (control de producción, pedidos, inventario y rutas con GPS).',
      },
      {
        id: 'app-faq-3',
        question: '¿Quién es el dueño del software y los datos?',
        answer:
          'Tú eres el dueño total del código desarrollado y de tu base de datos al finalizar el proyecto. No cobramos comisiones sobre tus ventas ni forzamos permanencias.',
      },
    ],
    seo: {
      title: 'Desarrollo de Software y Aplicaciones Móviles en Bolivia | Vera Studio Digital',
      description:
        'Desarrollo de plataformas SaaS web y aplicaciones Android en Google Play en Cochabamba y Bolivia. Conoce Listo, MiSalón y Panito.',
      keywords: [
        'desarrollo de software Bolivia',
        'aplicaciones móviles Cochabamba',
        'plataformas SaaS Bolivia',
        'apps Android Google Play',
      ],
    },
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera consultar sobre el desarrollo de una plataforma o aplicación móvil a medida para mi negocio.',
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}
