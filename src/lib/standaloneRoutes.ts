/**
 * Helper que detecta si la ruta actual corresponde a una demostración
 * o catálogo independiente de cliente para no mostrar el encabezado institucional,
 * el pie de página ni el botón flotante general de Vera Studio Digital.
 */
export function isStandaloneCatalogRoute(pathname?: string | null): boolean {
  if (!pathname) return false;

  if (pathname.startsWith('/demos')) return true;
  if (pathname.startsWith('/c/')) return true;

  const standaloneSlugs = [
    '/nadir-joyeria',
    '/nadir',
    '/joyeria-sasai',
    '/sasai',
    '/pedidos-comida',
    '/comida',
    '/distribuidora-abarrotes',
    '/distribuidora',
    '/pasteleria-lepetit',
    '/pasteleria',
    '/boutique-moda',
    '/boutique',
  ];

  return standaloneSlugs.includes(pathname.toLowerCase());
}
