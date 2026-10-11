import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://latravesiacuenca.com';
const PATHS = ['', '/nosotros', '/restaurante', '/menu', '/granja', '/hospedaje', '/galeria', '/contacto'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${SITE_URL}/es${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/menu' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
    alternates: {
      languages: { es: `${SITE_URL}/es${path}`, en: `${SITE_URL}/en${path}` },
    },
  }));
}
