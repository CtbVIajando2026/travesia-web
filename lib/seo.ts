import type { Metadata } from 'next';

type Copy = { title: string; description: string };

/**
 * Metadatos por página con canonical y alternates hreflang (es/en).
 * `path` sin locale, p.ej. '/menu'. El título se completa con el template "%s | La Travesía".
 */
export function pageMetadata(locale: string, path: string, es: Copy, en: Copy): Metadata {
  const copy = locale === 'en' ? en : es;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { es: `/es${path}`, en: `/en${path}`, 'x-default': `/es${path}` },
    },
    openGraph: {
      title: `${copy.title} | La Travesía`,
      description: copy.description,
      url: `/${locale}${path}`,
    },
  };
}
