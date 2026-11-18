# Vera Studio Digital — Sitio Web Corporativo

Sitio web corporativo de **Vera Studio Digital** (`https://verastudiodigital.site`), desarrollado con **Next.js (App Router)**, **React**, **TypeScript** y **Tailwind CSS**, optimizado para posicionamiento local en Cochabamba y Bolivia, conversión por WhatsApp y despliegue en **Vercel**.

---

## 1. Requisitos previos

- **Node.js:** v20 LTS o superior (verificado con `v22.14.0`).
- **pnpm:** v9 o superior (verificado con `10.6.4`).

## 2. Instalación de dependencias

```bash
pnpm install
```

## 3. Configuración de variables de entorno

Copia el archivo `.env.example` a `.env.local` para trabajar localmente:

```bash
cp .env.example .env.local
```

Variables disponibles:

| Variable | Obligatoria | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No (default: `https://verastudiodigital.site`) | URL canónica pública sin barra final. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | ID de medición de Google Analytics 4 (`G-XXXXXXXXXX`). Si está vacío, el script de analítica no se carga. |

## 4. Ejecución local

```bash
# Modo desarrollo
pnpm dev

# Verificación de tipos TypeScript
pnpm typecheck

# Linter ESLint
pnpm lint

# Compilación de producción
pnpm build

# Servidor de producción local
pnpm start
```

## 5. Estructura del proyecto

```text
verastudiodigital_web/
├── public/
│   ├── app-ads.txt               # Verificación oficial de Google AdMob (no eliminar)
│   ├── brand/                    # Logotipos oficiales de Vera Studio Digital
│   ├── images/portfolio/         # Imágenes de productos propios del portafolio
│   ├── listo/                    # Ficha y política de privacidad de Listo (Google Play)
│   └── lukio/                    # Ficha y política de privacidad de LUKIO (Google Play)
├── src/
│   ├── app/                      # Rutas App Router (Inicio, Servicios, Portafolio, Nosotros, Contacto, Privacidad, sitemap, robots)
│   ├── components/
│   │   ├── analytics/            # Integración condicional de Google Analytics 4
│   │   ├── contact/              # Formulario validado con Zod + envío estructurado a WhatsApp
│   │   ├── layout/               # Header, MobileMenu, Footer y botón flotante WhatsApp
│   │   ├── portfolio/            # Tarjetas, mockups y galería filtrable
│   │   ├── sections/             # Secciones de la página principal
│   │   ├── services/             # Componentes de ficha y planes de servicio
│   │   └── ui/                   # Componentes base reutilizables (Button, Container, Accordion, etc.)
│   ├── config/
│   │   └── site.ts               # Configuración centralizada de marca, contacto, dominio y redes
│   ├── data/
│   │   ├── faqs.ts               # Preguntas frecuentes generales
│   │   ├── industries.ts         # Problemas/soluciones, proceso de trabajo y sectores
│   │   ├── navigation.ts         # Menús de navegación principal y legal
│   │   ├── portfolio.ts          # Productos reales y demostraciones conceptuales
│   │   ├── pricing.ts            # Planes y precios centralizados en bolivianos (Bs)
│   │   └── services.ts           # Definición completa de los 5 servicios y sus páginas
│   ├── lib/
│   │   ├── seo.ts                # Generador de metadatos y Open Graph
│   │   ├── structured-data.ts    # JSON-LD ProfessionalService para SEO local
│   │   ├── utils.ts              # Helper de clases Tailwind (cn)
│   │   └── whatsapp.ts           # Generador seguro de enlaces wa.me y mensajes
│   └── types/                    # Definiciones estrictas de TypeScript
├── .env.example
├── next.config.ts
└── tsconfig.json
```

## 6. Cómo modificar servicios

1. Abre `src/data/services.ts`.
2. Edita el objeto del servicio deseado (descripción, problemas que resuelve, beneficios, qué incluye / no incluye o preguntas frecuentes).
3. Para agregar un nuevo servicio, añade un nuevo elemento al arreglo `servicesData` siguiendo el tipo `ServiceItem` (su ruta `/servicios/[slug]` y su entrada en `/sitemap.xml` se generan automáticamente).

## 7. Cómo actualizar precios

1. Abre `src/data/pricing.ts`.
2. Modifica `priceLabel` y `priceAmount` dentro de `servicePlansBySlug` o los textos de referencia en `startingPriceBySlug`.
3. Al guardar, los cambios se reflejan automáticamente en la página de inicio, `/servicios` y la página individual del servicio.

## 8. Cómo cambiar el número de WhatsApp, correo o redes

1. Abre `src/config/site.ts`.
2. Actualiza `contact.whatsappNumber` (solo dígitos con código de país, ej. `59176406512`), `contact.whatsappDisplay`, `contact.email` o el arreglo `socials`.
3. Todos los enlaces `wa.me`, el botón flotante, el encabezado, el pie de página y el formulario de `/contacto` leen este único archivo.

> **Nota sobre el formulario de `/contacto`:** Actualmente valida los datos con `zod` y abre WhatsApp con el mensaje estructurado. Si en el futuro deseas envío directo por correo electrónico sin abrir WhatsApp, agrega una Route Handler en `src/app/api/contact/route.ts` conectada a un proveedor como **Resend** o **SMTP** con su API key en `.env.local`.

## 9. Cómo cambiar imágenes y logotipo

- Reemplaza los archivos en `public/brand/logo-horizontal.png`, `public/brand/logo-square.png` y `src/app/icon.png` manteniendo sus nombres o actualizando las rutas en `src/config/site.ts`.
- Las imágenes de proyectos reales del portafolio se encuentran en `public/images/portfolio/`.

## 10. Cómo publicar en Vercel

1. Sube o fusiona la rama del proyecto a tu repositorio en GitHub.
2. En [Vercel](https://vercel.com/), importa el repositorio `verastudiodigital.site`.
3. Framework Preset: **Next.js** (detección automática; gestor `pnpm`).
4. Configura en **Environment Variables** (opcional):
   - `NEXT_PUBLIC_SITE_URL` = `https://verastudiodigital.site`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = tu ID de GA4 cuando lo crees.
5. Haz clic en **Deploy**.
6. Verifica en la URL temporal `.vercel.app` que `/`, `/servicios`, `/portafolio`, `/app-ads.txt`, `/listo` y `/lukio/privacy.html` funcionen correctamente antes de cambiar el dominio.

## 11. Cómo configurar dominio, SEO y Google Analytics

### Dominio (`verastudiodigital.site`)
1. En Vercel → **Project Settings → Domains**, agrega `verastudiodigital.site` y `www.verastudiodigital.site`.
2. En tu proveedor de DNS, actualiza los registros A / CNAME según las instrucciones exactas que te muestre Vercel (reemplazando los registros previos de GitHub Pages).

### Google Search Console
1. Ingresa a [Google Search Console](https://search.google.com/search-console) y verifica la propiedad de `https://verastudiodigital.site` (mediante registro DNS TXT en tu dominio).
2. Envía el mapa del sitio: `https://verastudiodigital.site/sitemap.xml`.

### Google Analytics 4 (GA4)
1. Crea una propiedad web en [Google Analytics](https://analytics.google.com/) para `https://verastudiodigital.site`.
2. Copia el ID de medición (`G-XXXXXXXXXX`).
3. Agrégalo como `NEXT_PUBLIC_GA_MEASUREMENT_ID` en las variables de entorno de Vercel y vuelve a desplegar. Los eventos `whatsapp_click` y `contact_form_whatsapp` comenzarán a registrarse automáticamente.
