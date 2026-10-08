import type { APIRoute } from 'astro';
import { projects } from '../data/site';

// Small hand-rolled sitemap: home + every case study
export const GET: APIRoute = ({ site }) => {
  const urls = ['/', ...projects.map((p) => `/work/${p.slug}/`)].map((path) => new URL(path, site).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
