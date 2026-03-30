import type { Core } from '@strapi/strapi';

import { communityInitiativeSeeds } from './community-initiatives';
import { legislativeWorkSeeds } from './legislative-works';
import {
  pageAboutSeed,
  pageCommunitySeed,
  pageContactSeed,
  pageHomeSeed,
  pageLegislativeSeed,
  siteGlobalSeed,
} from './site-pages';
import { getOrUploadPublicFile } from './upload-from-public';

const SITE_GLOBAL_UID = 'api::site-global.site-global';
const PAGE_HOME_UID = 'api::page-home.page-home';
const PAGE_ABOUT_UID = 'api::page-about.page-about';
const PAGE_CONTACT_UID = 'api::page-contact.page-contact';
const PAGE_LEGISLATIVE_UID = 'api::page-legislative.page-legislative';
const PAGE_COMMUNITY_UID = 'api::page-community.page-community';
const LEGISLATIVE_PROJECT_UID = 'api::legislative-project.legislative-project';
const COMMUNITY_INITIATIVE_UID = 'api::community-initiative.community-initiative';

type SeedContentTypeUid =
  | typeof SITE_GLOBAL_UID
  | typeof PAGE_HOME_UID
  | typeof PAGE_ABOUT_UID
  | typeof PAGE_CONTACT_UID
  | typeof PAGE_LEGISLATIVE_UID
  | typeof PAGE_COMMUNITY_UID
  | typeof LEGISLATIVE_PROJECT_UID
  | typeof COMMUNITY_INITIATIVE_UID;

function envFlagTrue(name: string): boolean {
  return process.env[name] === 'true';
}

async function deleteAllForUid(strapi: Core.Strapi, uid: SeedContentTypeUid) {
  try {
    await strapi.db.query(uid).deleteMany({ where: {} });
  } catch {
    const docs = await strapi.documents(uid).findMany({ limit: 1000 });
    const seen = new Set<string>();
    for (const doc of docs) {
      const id = doc.documentId;
      if (!id || seen.has(id)) continue;
      seen.add(id);
      await strapi.documents(uid).delete({ documentId: id });
    }
  }
}

async function deleteSingleType(strapi: Core.Strapi, uid: SeedContentTypeUid) {
  const docs = await strapi.documents(uid).findMany({ limit: 100 });
  const seen = new Set<string>();
  for (const doc of docs) {
    const id = doc.documentId;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    await strapi.documents(uid).delete({ documentId: id });
  }
}

async function upsertSingle(
  strapi: Core.Strapi,
  uid: SeedContentTypeUid,
  data: Record<string, unknown>
) {
  const existing = await strapi.documents(uid).findMany({ limit: 1 });
  if (existing.length > 0 && existing[0].documentId) {
    await strapi.documents(uid).update({
      documentId: existing[0].documentId,
      data: data as never,
      status: 'published',
    });
  } else {
    await strapi.documents(uid).create({
      data: data as never,
      status: 'published',
    });
  }
}

async function clearSeedData(strapi: Core.Strapi) {
  strapi.log.info('[seed] STRAPI_SEED_RESET=true — clearing seeded documents');
  await deleteSingleType(strapi, SITE_GLOBAL_UID);
  await deleteSingleType(strapi, PAGE_HOME_UID);
  await deleteSingleType(strapi, PAGE_ABOUT_UID);
  await deleteSingleType(strapi, PAGE_CONTACT_UID);
  await deleteSingleType(strapi, PAGE_LEGISLATIVE_UID);
  await deleteSingleType(strapi, PAGE_COMMUNITY_UID);
  await deleteAllForUid(strapi, LEGISLATIVE_PROJECT_UID);
  await deleteAllForUid(strapi, COMMUNITY_INITIATIVE_UID);
  strapi.log.info('[seed] cleared singles + collections');
}

async function seedSingles(strapi: Core.Strapi) {
  const legislativeFeaturedId = await getOrUploadPublicFile(
    strapi,
    pageLegislativeSeed.featuredImageUrl
  );
  const pageLegislativePayload = {
    ...pageLegislativeSeed,
    featuredImageUrl: legislativeFeaturedId,
  };

  await upsertSingle(strapi, SITE_GLOBAL_UID, siteGlobalSeed as Record<string, unknown>);
  await upsertSingle(strapi, PAGE_HOME_UID, pageHomeSeed as Record<string, unknown>);
  await upsertSingle(strapi, PAGE_ABOUT_UID, pageAboutSeed as Record<string, unknown>);
  await upsertSingle(strapi, PAGE_CONTACT_UID, pageContactSeed as Record<string, unknown>);
  await upsertSingle(
    strapi,
    PAGE_LEGISLATIVE_UID,
    pageLegislativePayload as Record<string, unknown>
  );
  await upsertSingle(strapi, PAGE_COMMUNITY_UID, pageCommunitySeed as Record<string, unknown>);
  strapi.log.info('[seed] single types upserted');
}

async function seedLegislativeProjects(strapi: Core.Strapi) {
  let created = 0;
  let updated = 0;
  let order = 0;
  for (const row of legislativeWorkSeeds) {
    const data = {
      stableId: row.stableId,
      slug: row.slug,
      category: row.category,
      iconName: row.iconName,
      title: row.title,
      description: row.description,
      status: row.status,
      impact: row.impact,
      keywords: row.keywords.map(phrase => ({ phrase })),
      fullDescription: row.fullDescription,
      objectives: row.objectives.map(text => ({ text })),
      timeline: row.timeline,
      beneficiaries: row.beneficiaries,
      location: row.location,
      order,
      seo_metaTitle: row.title,
      seo_metaDescription: row.description,
      seo_keywords: row.keywords.map(phrase => ({ phrase })),
      seo_robots: 'index_follow',
      seo_ogType: 'article',
      seo_articlePublishedAt: new Date().toISOString(),
    };
    order += 1;

    const byStable = await strapi.documents(LEGISLATIVE_PROJECT_UID).findMany({
      filters: { stableId: { $eq: row.stableId } } as never,
      fields: ['documentId'],
      limit: 1,
    });
    const existingDocId = byStable[0]?.documentId;

    if (existingDocId) {
      await strapi.documents(LEGISLATIVE_PROJECT_UID).update({
        documentId: existingDocId,
        data: data as never,
        status: 'published',
      });
      updated++;
    } else {
      await strapi.documents(LEGISLATIVE_PROJECT_UID).create({
        data: data as never,
        status: 'published',
      });
      created++;
    }
  }
  strapi.log.info(`[seed] legislative projects: ${created} created, ${updated} updated`);
}

async function seedCommunityInitiatives(strapi: Core.Strapi) {
  let created = 0;
  let updated = 0;
  let order = 0;
  for (const row of communityInitiativeSeeds) {
    const data = {
      stableId: row.stableId,
      slug: row.slug,
      iconName: row.iconName,
      title: row.title,
      description: row.description,
      fullDescription: row.fullDescription,
      impact: row.impact,
      objectives: row.objectives.map(text => ({ text })),
      achievements: row.achievements.map(text => ({ text })),
      beneficiaries: row.beneficiaries,
      location: row.location,
      howToParticipate: row.howToParticipate,
      keywords: row.keywords.map(phrase => ({ phrase })),
      order,
      seo_metaTitle: row.title,
      seo_metaDescription: row.description,
      seo_keywords: row.keywords.map(phrase => ({ phrase })),
      seo_robots: 'index_follow',
      seo_ogType: 'article',
      seo_articlePublishedAt: new Date().toISOString(),
    };
    order += 1;

    const byStable = await strapi.documents(COMMUNITY_INITIATIVE_UID).findMany({
      filters: { stableId: { $eq: row.stableId } } as never,
      fields: ['documentId'],
      limit: 1,
    });
    const existingDocId = byStable[0]?.documentId;

    if (existingDocId) {
      await strapi.documents(COMMUNITY_INITIATIVE_UID).update({
        documentId: existingDocId,
        data: data as never,
        status: 'published',
      });
      updated++;
    } else {
      await strapi.documents(COMMUNITY_INITIATIVE_UID).create({
        data: data as never,
        status: 'published',
      });
      created++;
    }
  }
  strapi.log.info(`[seed] community initiatives: ${created} created, ${updated} updated`);
}

export async function runSeed(strapi: Core.Strapi) {
  if (process.env.STRAPI_SEED !== 'true') {
    return;
  }

  strapi.log.info('[seed] STRAPI_SEED=true — running bootstrap seed');

  try {
    if (envFlagTrue('STRAPI_SEED_RESET')) {
      await clearSeedData(strapi);
    }

    await seedSingles(strapi);
    await seedLegislativeProjects(strapi);
    await seedCommunityInitiatives(strapi);
  } catch (err) {
    strapi.log.error('[seed] failed', err);
  }
}
