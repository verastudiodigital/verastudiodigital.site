import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { portfolioCategories, portfolioProjects } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ProjectGallery } from '@/components/portfolio/ProjectGallery';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = createPageMetadata({
  title: 'Portafolio y Demostraciones | Vera Studio Digital',
  description:
    'Explora las aplicaciones propias de Vera Studio Digital y demostraciones conceptuales de diseño web, catálogos digitales, redes sociales y sistemas administrativos.',
  path: '/portafolio',
});

export default function PortafolioPage() {
  return (
    <>
      <section className="bg-[#0073F7] py-14 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="white">Portafolio y demostraciones</Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Soluciones reales y demostraciones prácticas.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Aquí puedes revisar tanto las aplicaciones propias desarrolladas por Vera
              Studio Digital como ejemplos conceptuales que muestran cómo implementamos
              nuestros servicios para distintos tipos de negocios.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <ProjectGallery
            categories={portfolioCategories}
            projects={portfolioProjects}
          />
        </Container>
      </section>

      <CTASection
        title="¿Quieres una solución similar adaptada a tu negocio?"
        description="Cuéntanos qué ejemplo llamó tu atención y te ayudamos a definir la versión ideal para tu empresa."
      />
    </>
  );
}
