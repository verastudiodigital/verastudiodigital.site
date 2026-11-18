import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="text-center">
        <span className="inline-block rounded-full bg-[#0073F7]/10 px-4 py-1.5 text-sm font-bold text-[#0073F7]">
          Error 404
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#172033] sm:text-4xl">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-[#64748B]">
          La ruta que estás buscando no existe o fue movida. Puedes volver al inicio o
          explorar nuestros servicios.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary">
            Volver al inicio
          </Button>
          <Button href="/servicios" variant="outline">
            Ver servicios
          </Button>
        </div>
      </Container>
    </section>
  );
}
