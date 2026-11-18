import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATALOGS_REGISTRY, resolveCatalogSlug } from '@/data/catalogos';
import { NadirJoyeriaView } from '@/components/catalogos/NadirJoyeriaView';
import { ComidaDeliveryView } from '@/components/catalogos/ComidaDeliveryView';
import { DistribuidoraAbarrotesView } from '@/components/catalogos/DistribuidoraAbarrotesView';
import { PasteleriaView } from '@/components/catalogos/PasteleriaView';
import { BoutiqueView } from '@/components/catalogos/BoutiqueView';
import { createPageMetadata } from '@/lib/seo';

interface CatalogPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const staticParams: { slug: string }[] = [];
  Object.values(CATALOGS_REGISTRY).forEach((item) => {
    staticParams.push({ slug: item.slug });
    item.aliases.forEach((alias) => {
      staticParams.push({ slug: alias });
    });
  });
  return staticParams;
}

export async function generateMetadata({ params }: CatalogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const catalog = resolveCatalogSlug(slug);

  if (!catalog) {
    return createPageMetadata({
      title: 'Catálogo no encontrado | Vera Studio Digital',
      description: 'El catálogo solicitado no existe o fue trasladado.',
      path: `/c/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: catalog.seoTitle,
    description: catalog.seoDescription,
    path: `/c/${catalog.slug}`,
  });
}

export default async function CatalogStandalonePage({ params }: CatalogPageProps) {
  const { slug } = await params;
  const catalog = resolveCatalogSlug(slug);

  if (!catalog) {
    notFound();
  }

  switch (catalog.slug) {
    case 'nadir-joyeria':
    case 'joyeria-sasai':
      return <NadirJoyeriaView />;

    case 'pedidos-comida':
      return <ComidaDeliveryView />;

    case 'distribuidora-abarrotes':
      return <DistribuidoraAbarrotesView />;

    case 'pasteleria-lepetit':
      return <PasteleriaView />;

    case 'boutique-moda':
      return <BoutiqueView />;

    default:
      notFound();
  }
}
