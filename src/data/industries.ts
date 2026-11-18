import type { IndustryItem, ProblemSolutionItem, ProcessStep } from '@/types/site';

export const problemsSolutionsData: ProblemSolutionItem[] = [
  {
    id: 'prob-presencia',
    problem: 'No tener una presencia profesional en internet',
    impact: 'Los clientes buscan tu empresa en Google y no encuentran información clara ni confiable.',
    solutionTitle: 'Página web profesional',
    solutionSummary: 'Sitio rápido, claro y optimizado para posicionarte en Cochabamba y Bolivia.',
    serviceSlug: 'diseno-web',
  },
  {
    id: 'prob-catalogo',
    problem: 'No contar con un catálogo organizado de productos',
    impact: 'Envías decenas de fotos sueltas y precios repetidos cada vez que alguien pregunta.',
    solutionTitle: 'Catálogo digital compartible',
    solutionSummary: 'Productos clasificados con precio y fotografía listos para enviar en un enlace.',
    serviceSlug: 'catalogos-digitales',
  },
  {
    id: 'prob-consultas',
    problem: 'Perder tiempo atendiendo consultas repetitivas',
    impact: 'Responder horarios, ubicación y precios uno por uno frena tus ventas diarias.',
    solutionTitle: 'WhatsApp Business ordenado',
    solutionSummary: 'Perfil comercial completo, respuestas rápidas, etiquetas y catálogo nativo.',
    serviceSlug: 'whatsapp-business',
  },
  {
    id: 'prob-gestion',
    problem: 'Dificultades para organizar ventas, gastos e inventarios',
    impact: 'Los apuntes en papel o archivos dispersos impiden saber cuánto ganas o qué falta en stock.',
    solutionTitle: 'Control administrativo práctico',
    solutionSummary: 'Herramientas claras para registrar ingresos, egresos, stock y reportes.',
    serviceSlug: 'automatizacion-administrativa',
  },
  {
    id: 'prob-herramientas',
    problem: 'Imagen inconsistente y falta de herramientas digitales',
    impact: 'Publicaciones desordenadas y procesos manuales frenan el crecimiento comercial.',
    solutionTitle: 'Diseño visual y tecnología aplicada',
    solutionSummary: 'Contenido gráfico mensual y soluciones pensadas para el día a día del negocio.',
    serviceSlug: 'redes-sociales',
  },
];

export const processStepsData: ProcessStep[] = [
  {
    step: '01',
    title: 'Conocemos tu negocio',
    description:
      'Conversamos sobre tu rubro, tus productos o servicios, tus clientes actuales y tus metas comerciales.',
  },
  {
    step: '02',
    title: 'Analizamos tus necesidades',
    description:
      'Identificamos los cuellos de botella reales y definimos qué solución digital te dará mayor impacto práctico.',
  },
  {
    step: '03',
    title: 'Diseñamos e implementamos la solución',
    description:
      'Construimos tu web, catálogo, diseño gráfico o herramienta administrativa con orden y claridad.',
  },
  {
    step: '04',
    title: 'Entregamos y acompañamos',
    description:
      'Revisamos contigo la puesta en marcha, te explicamos su manejo y quedamos disponibles para crecer por etapas.',
  },
];

export const industriesData: IndustryItem[] = [
  {
    id: 'ind-tiendas',
    name: 'Tiendas y comercios',
    description: 'Catálogos ordenados, atención ágil por WhatsApp y control diario de ventas.',
    iconName: 'Store',
  },
  {
    id: 'ind-restaurantes',
    name: 'Restaurantes y cafeterías',
    description: 'Menús digitales legibles en celular, contenido visual y pedidos organizados.',
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'ind-belleza',
    name: 'Peluquerías y salones de belleza',
    description: 'Presentación clara de servicios, horarios y captación de citas por WhatsApp.',
    iconName: 'Scissors',
  },
  {
    id: 'ind-profesionales',
    name: 'Profesionales independientes',
    description: 'Sitios web propios que generan confianza y facilitan el contacto directo.',
    iconName: 'Briefcase',
  },
  {
    id: 'ind-distribuidoras',
    name: 'Distribuidoras',
    description: 'Catálogos amplios por categorías, control de pedidos y gestión de inventario.',
    iconName: 'Truck',
  },
  {
    id: 'ind-productores',
    name: 'Pequeños productores',
    description: 'Visibilidad digital directa sin intermediarios y control sencillo de costos.',
    iconName: 'Sprout',
  },
  {
    id: 'ind-servicios',
    name: 'Empresas de servicios',
    description: 'Presencia corporativa en Google, formularios de cotización y procesos ordenados.',
    iconName: 'Building2',
  },
];
