import 'server-only';

import {
  STRAPI_POPULATE_PAGE_ABOUT,
  STRAPI_POPULATE_PAGE_COMMUNITY,
  STRAPI_POPULATE_PAGE_CONTACT,
  STRAPI_POPULATE_PAGE_HOME,
  STRAPI_POPULATE_PAGE_LEGISLATIVE,
  STRAPI_POPULATE_SITE_GLOBAL,
} from './strapi-populate';
import { getStrapiMediaUrl, getStrapiOrigin } from './strapi-media';

export { getStrapiMediaUrl };

const STRAPI_URL = getStrapiOrigin();
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
const STRAPI_WRITE_TOKEN = process.env.STRAPI_WRITE_API_TOKEN ?? STRAPI_TOKEN;

const STRAPI_USE_PUBLISHED_PARAM =
  process.env.STRAPI_USE_PUBLISHED_PARAM !== 'false' &&
  process.env.STRAPI_USE_PUBLISHED_PARAM !== '0';

const STRAPI_FETCH_CACHE_BUST =
  process.env.STRAPI_FETCH_CACHE_BUST === '1' || process.env.STRAPI_FETCH_CACHE_BUST === 'true';

type StrapiSingle<T> = { data: T | null };
type StrapiCollection<T> = { data: T[] };

const warnedMessages = new Set<string>();

function warnOnce(message: string, detail?: unknown) {
  if (warnedMessages.has(message)) return;
  warnedMessages.add(message);
  if (detail !== undefined) {
    console.warn(message, detail);
  } else {
    console.warn(message);
  }
}

function withPublishedQuery(path: string): string {
  if (!STRAPI_USE_PUBLISHED_PARAM || path.includes('status=')) return path;
  return path.includes('?') ? `${path}&status=published` : `${path}?status=published`;
}

function withCacheBust(path: string, skip: boolean): string {
  if (skip || !STRAPI_FETCH_CACHE_BUST) return path;
  const key = `_=${Date.now()}`;
  return path.includes('?') ? `${path}&${key}` : `${path}?${key}`;
}

export const STRAPI_SLUG_LIST_REVALIDATE = Math.max(
  60,
  Number(process.env.STRAPI_SLUG_LIST_REVALIDATE) || 3600
);

export type StrapiFetchOptions = {
  revalidate?: number;
};

async function strapiFetch<T>(path: string, options?: StrapiFetchOptions): Promise<T | null> {
  try {
    const revalidate = options?.revalidate ?? 0;
    const skipBust = revalidate > 0;
    const pathReady = withCacheBust(withPublishedQuery(path), skipBust);
    const url = `${STRAPI_URL.replace(/\/$/, '')}${pathReady}`;

    const res = await fetch(url, {
      headers: {
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      },
      ...(revalidate > 0
        ? { next: { revalidate } }
        : { cache: 'no-store', next: { revalidate: 0 } }),
    });
    if (!res.ok) {
      const bodyPreview = await res.text().catch(() => '');
      console.error(`[strapi] ${res.status} ${url}`, bodyPreview.slice(0, 400));
      return null;
    }
    const json = (await res.json()) as T;
    return json;
  } catch (e) {
    warnOnce('[strapi] fetch failed', e);
    return null;
  }
}

async function strapiWrite<T>(path: string, body: unknown): Promise<T | null> {
  try {
    if (!STRAPI_WRITE_TOKEN) {
      warnOnce('[strapi] write token is missing');
      return null;
    }

    const url = `${STRAPI_URL.replace(/\/$/, '')}${path}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${STRAPI_WRITE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });
    if (!res.ok) {
      warnOnce(`[strapi] write failed ${res.status} ${url}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (e) {
    warnOnce('[strapi] write failed', e);
    return null;
  }
}

export function unwrapData<T extends Record<string, unknown>>(raw: unknown): T | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as StrapiSingle<unknown>;
  let data: unknown = r.data;
  if (Array.isArray(data)) {
    if (data.length !== 1) return null;
    data = data[0];
  }
  if (data == null || typeof data !== 'object') return null;
  const row = data as Record<string, unknown>;
  const attrs = row.attributes;
  if (attrs && typeof attrs === 'object' && !Array.isArray(attrs)) {
    return { ...row, ...attrs } as T;
  }
  return row as T;
}

export function unwrapList<T extends Record<string, unknown>>(raw: unknown): T[] {
  if (!raw || typeof raw !== 'object') return [];
  const r = raw as StrapiCollection<Record<string, unknown>>;
  if (!Array.isArray(r.data)) return [];
  return r.data.map(item => {
    if (item == null || typeof item !== 'object') return item as T;
    const row = item as Record<string, unknown>;
    const attrs = row.attributes;
    if (attrs && typeof attrs === 'object' && !Array.isArray(attrs)) {
      return { ...row, ...attrs } as T;
    }
    return row as T;
  });
}

export async function fetchSiteGlobal() {
  return strapiFetch<unknown>(`/api/site-global?${STRAPI_POPULATE_SITE_GLOBAL}`);
}

export async function fetchPageHome() {
  return strapiFetch<unknown>(`/api/page-home?${STRAPI_POPULATE_PAGE_HOME}`);
}

export async function fetchPageAbout() {
  return strapiFetch<unknown>(`/api/page-about?${STRAPI_POPULATE_PAGE_ABOUT}`);
}

export async function fetchPageContact() {
  return strapiFetch<unknown>(`/api/page-contact?${STRAPI_POPULATE_PAGE_CONTACT}`);
}

export async function fetchPageLegislative() {
  return strapiFetch<unknown>(`/api/page-legislative?${STRAPI_POPULATE_PAGE_LEGISLATIVE}`);
}

export async function fetchPageCommunity() {
  return strapiFetch<unknown>(`/api/page-community?${STRAPI_POPULATE_PAGE_COMMUNITY}`);
}

export async function fetchLegislativeProjects(options?: StrapiFetchOptions) {
  return strapiFetch<unknown>(
    '/api/legislative-projects?pagination[pageSize]=100&populate=*&sort=order:asc',
    options
  );
}

export async function fetchCommunityInitiatives(options?: StrapiFetchOptions) {
  return strapiFetch<unknown>(
    '/api/community-initiatives?pagination[pageSize]=100&populate=*&sort=order:asc',
    options
  );
}

export async function fetchLegislativeProjectBySlug(slug: string) {
  const enc = encodeURIComponent(slug);
  return strapiFetch<unknown>(
    `/api/legislative-projects?filters[slug][$eq]=${enc}&pagination[pageSize]=1&populate=*`
  );
}

export async function fetchCommunityInitiativeBySlug(slug: string) {
  const enc = encodeURIComponent(slug);
  return strapiFetch<unknown>(
    `/api/community-initiatives?filters[slug][$eq]=${enc}&pagination[pageSize]=1&populate=*`
  );
}

type ContactSubmissionPayload = {
  formName: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  inquiryType?: string;
  message: string;
  submissionSource: string;
  submittedAt: string;
  submissionSenderName?: string;
};

export async function createContactSubmission(payload: ContactSubmissionPayload) {
  return strapiWrite<unknown>('/api/contact-submissions', { data: payload });
}
