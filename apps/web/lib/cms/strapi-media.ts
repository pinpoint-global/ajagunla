/**
 * Media URL normalization helpers extracted from `strapi.ts`.
 * This file intentionally avoids `server-only` so it can be used in simple
 * Node-based verification scripts.
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://127.0.0.1:1337';

function absolutizeMediaUrl(u: string): string {
  if (u.startsWith('http')) return u;
  const base = STRAPI_URL.replace(/\/$/, '');
  return `${base}${u.startsWith('/') ? u : `/${u}`}`;
}

export function getStrapiMediaUrl(media: unknown, fallback?: string): string | undefined {
  if (media == null) return fallback;
  if (typeof media === 'object' && media !== null) {
    const m = media as Record<string, unknown>;
    if (typeof m.url === 'string') return absolutizeMediaUrl(m.url);

    const data = m.data as Record<string, unknown> | null | undefined;
    if (data && typeof data === 'object') {
      const inner = data as Record<string, unknown>;
      const attrs = inner.attributes as Record<string, unknown> | undefined;
      const url = (attrs?.url as string | undefined) ?? (inner.url as string | undefined);
      if (typeof url === 'string') return absolutizeMediaUrl(url);
    }
  }

  return fallback;
}
