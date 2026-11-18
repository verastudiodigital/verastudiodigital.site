import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { createPageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = createPageMetadata({
  title: `Política de Privacidad | ${siteConfig.name}`,
  description: `Política de privacidad oficial del sitio web corporativo de ${siteConfig.name}.`,
  path: '/politica-de-privacidad',
});

export default function PoliticaDePrivacidadPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#172033]">
            Política de Privacidad
          </h1>
          <p className="mt-2 border-b border-[#E2E8F0] pb-4 text-sm text-[#64748B]">
            {siteConfig.name} · {siteConfig.city}, {siteConfig.country}
          </p>

          <div className="mt-6 space-y-6 text-sm leading-relaxed text-[#172033] sm:text-base">
            <p>
              En <strong>{siteConfig.name}</strong> (representado por{' '}
              {siteConfig.ownerName}), respetamos la privacidad de las personas y negocios
              que visitan nuestro sitio web <strong>{siteConfig.url}</strong>.
            </p>

            <div>
              <h2 className="text-lg font-bold text-[#172033]">
                1. Información proporcionada voluntariamente
              </h2>
              <p className="mt-2 text-[#64748B]">
                Al utilizar el formulario de contacto de este sitio web, los datos que
                ingresas (nombre, nombre del negocio, teléfono, servicio de interés y
                descripción de tu consulta) se utilizan exclusivamente en tu navegador para
                preparar el mensaje que decides enviarnos voluntariamente a través de
                WhatsApp. Este sitio web no almacena tus datos del formulario en una base
                de datos propia.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#172033]">
                2. Uso de analítica web (cuando esté habilitada)
              </h2>
              <p className="mt-2 text-[#64748B]">
                Este sitio web contempla la integración opcional de Google Analytics 4
                únicamente con fines estadísticos agregados (páginas visitadas y clics en
                canales de contacto) para mejorar la experiencia del sitio. Cuando esté
                activa, los datos se tratan bajo las políticas estándar de privacidad de
                Google.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#172033]">
                3. Enlaces externos y aplicaciones móviles
              </h2>
              <p className="mt-2 text-[#64748B]">
                Al hacer clic en botones de contacto hacia WhatsApp o en enlaces hacia
                plataformas externas (Google Play Store, Facebook, TikTok o YouTube),
                aplican las políticas de privacidad propias de cada servicio. Nuestras
                aplicaciones móviles publicadas mantienen sus políticas específicas en{' '}
                <a href="/listo/privacy.html" className="font-semibold text-[#0073F7] underline">
                  Política de privacidad de Listo
                </a>{' '}
                y{' '}
                <a href="/lukio/privacy.html" className="font-semibold text-[#0073F7] underline">
                  Política de privacidad de LUKIO
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#172033]">4. Contacto</h2>
              <p className="mt-2 text-[#64748B]">
                Para consultas relacionadas con esta política o tus datos de contacto,
                puedes escribirnos a{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-semibold text-[#0073F7] underline"
                >
                  {siteConfig.contact.email}
                </a>{' '}
                o mediante nuestra página de{' '}
                <Link href="/contacto" className="font-semibold text-[#0073F7] underline">
                  Contacto
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
