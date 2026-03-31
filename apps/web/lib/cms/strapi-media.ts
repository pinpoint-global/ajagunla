/**
 * Media URL normalization helpers extracted from `strapi.ts`.
 * This file intentionally avoids `server-only` so it can be used in simple
 * Node-based verification scripts.
 */

/**
 * Strapi API origin (no trailing slash handling here — callers strip as needed).
 * Docker often sets `ENV NEXT_PUBLIC_STRAPI_URL=` from an unset ARG, which is ""
 * and must not win over the dev fallback (`??` only treats null/undefined).
 */
export function getStrapiOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_STRAPI_URL;
  const trimmed = typeof raw === 'string' ? raw.trim() : '';
  return trimmed.length > 0 ? trimmed : 'http://127.0.0.1:1338';
}

const STRAPI_URL = getStrapiOrigin();

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
