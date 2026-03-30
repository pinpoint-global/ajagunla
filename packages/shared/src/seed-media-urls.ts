/**
 * Optional CDN overrides for seed uploads (local path under `apps/web/public` → absolute URL).
 * Extend when assets are hosted remotely instead of local filesystem.
 */
export const seedImageUrlByLocalPath: Record<string, string> = {
  'images/senator-fadeyi.webp': 'https://static.ajagunla1.com/images/senator-fadeyi.webp',
};

export const SEED_IMAGE_LOCAL_PATHS: readonly string[] = Object.keys(seedImageUrlByLocalPath).sort();

export function normalizeSeedMediaPath(p: string): string {
  return p.trim().replace(/^\/+/, '').replace(/\\/g, '/');
}
