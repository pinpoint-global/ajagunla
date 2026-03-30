import fs from 'fs';
import os from 'os';
import path from 'path';

import type { Core } from '@strapi/strapi';

import { normalizeSeedMediaPath, seedImageUrlByLocalPath } from '@ajagunla/shared';

/** Relative path under `apps/web/public`, `https://` URL, or catalog override — see `getOrUploadPublicFile`. */
const cache = new Map<string, number>();

export function clearUploadCache(): void {
  cache.clear();
}

function resolveWebPublicRoot(): string {
  const cwd = process.cwd();
  const base = path.basename(cwd);
  if (base === 'cms') {
    return path.resolve(cwd, '..', 'web', 'public');
  }
  return path.resolve(cwd, 'apps', 'web', 'public');
}

async function uploadFromRemoteUrl(
  strapi: Core.Strapi,
  url: string,
  cacheKey: string
): Promise<number> {
  const hit = cache.get(cacheKey);
  if (hit !== undefined) return hit;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`[seed] failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const pathname = new URL(url).pathname;
  const originalFilename = path.basename(pathname) || 'image.jpg';
  const tmp = path.join(os.tmpdir(), `strapi-seed-${Date.now()}-${originalFilename.replace(/[^\w.-]/g, '_')}`);
  fs.writeFileSync(tmp, buffer);
  try {
    const stat = fs.statSync(tmp);
    const contentType = res.headers.get('content-type')?.split(';')[0]?.trim();
    const mimetype = contentType && contentType !== 'application/octet-stream' ? contentType : guessMime(originalFilename);
    const uploadService = strapi.plugin('upload').service('upload');
    const uploaded = await uploadService.upload(
      {
        data: {},
        files: {
          filepath: tmp,
          originalFilename,
          mimetype,
          size: stat.size,
        },
      },
      {}
    );
    const file = Array.isArray(uploaded) ? uploaded[0] : uploaded;
    const id = file?.id;
    if (typeof id !== 'number') {
      throw new Error(`[seed] upload failed for remote ${url}`);
    }
    cache.set(cacheKey, id);
    return id;
  } finally {
    try {
      fs.unlinkSync(tmp);
    } catch {
      /* ignore */
    }
  }
}

/**
 * Upload into Strapi Media Library from:
 * - `https://…` / `http://…` (fetch + upload),
 * - a local path under `apps/web/public` (after `seed-media-catalog` optional URL override),
 * - or a relative path like `images/projects/photo.jpg` (leading slashes optional).
 */
export async function getOrUploadPublicFile(
  strapi: Core.Strapi,
  webPublicRelativeOrUrl: string
): Promise<number> {
  const trimmed = webPublicRelativeOrUrl.trim();
  if (/^https?:\/\//i.test(trimmed)) {
    return uploadFromRemoteUrl(strapi, trimmed, `url:${trimmed}`);
  }

  const key = normalizeSeedMediaPath(trimmed);
  const override = seedImageUrlByLocalPath[key];
  if (override && /^https?:\/\//i.test(override.trim())) {
    return uploadFromRemoteUrl(strapi, override.trim(), `catalog:${key}`);
  }

  const hit = cache.get(key);
  if (hit !== undefined) return hit;

  const abs = path.join(resolveWebPublicRoot(), key);
  if (!fs.existsSync(abs)) {
    throw new Error(`[seed] missing public file: ${abs}`);
  }

  const stat = fs.statSync(abs);
  const originalFilename = path.basename(abs);
  const uploadService = strapi.plugin('upload').service('upload');

  const uploaded = await uploadService.upload(
    {
      data: {},
      files: {
        filepath: abs,
        originalFilename,
        mimetype: guessMime(originalFilename),
        size: stat.size,
      },
    },
    {}
  );

  const file = Array.isArray(uploaded) ? uploaded[0] : uploaded;
  const id = file?.id;
  if (typeof id !== 'number') {
    throw new Error(`[seed] upload failed for ${key}`);
  }
  cache.set(key, id);
  return id;
}

function guessMime(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.png') return 'image/png';
  if (ext === '.webp') return 'image/webp';
  if (ext === '.gif') return 'image/gif';
  return 'application/octet-stream';
}
