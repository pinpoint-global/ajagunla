/**
 * Normalize Strapi repeatable components (and legacy JSON shapes) for mappers.
 */

export function flattenTextLines(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const out: string[] = [];
  for (const item of value) {
    if (typeof item === 'string') {
      const t = item.trim();
      if (t) out.push(t);
      continue;
    }
    if (item && typeof item === 'object') {
      const text = (item as Record<string, unknown>).text;
      if (typeof text === 'string') {
        const t = text.trim();
        if (t) out.push(t);
      }
    }
  }
  return out.length > 0 ? out : null;
}

export function flattenSeoKeywords(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const out: string[] = [];
  for (const item of value) {
    if (typeof item === 'string') {
      const t = item.trim();
      if (t) out.push(t);
      continue;
    }
    if (item && typeof item === 'object') {
      const phrase = (item as Record<string, unknown>).phrase;
      if (typeof phrase === 'string') {
        const t = phrase.trim();
        if (t) out.push(t);
      }
    }
  }
  return out.length > 0 ? out : null;
}
