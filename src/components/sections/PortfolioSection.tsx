import { portfolioProjects } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { Button } from '@/components/ui/Button';

export function PortfolioSection() {
  const featuredIds = [
    'listo-app',
    'misalon-platform',
    'panito-platform',
    'demo-catalogo-joyeria',
    'demo-pedidos-comida',
    'demo-catalogo-distribuidora',
  ];
  const featured = portfolioProjects.filter((project) =>
    featuredIds.includes(project.id)
  );

  return (
    <section className="border-t border-[#E2E8F0] bg-[#F5F8FC] py-16 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Proyectos y aplicaciones"
            title="Software publicado en Google Play y proyectos web activos."
            description="Explora aplicaciones reales creadas por nuestro estudio junto a demostraciones funcionales de los sistemas que implementamos."
          />
          <Button href="/portafolio" variant="outline" className="shrink-0 bg-white shadow-sm hover:border-[#0073F7]">
            Explorar portafolio completo
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
