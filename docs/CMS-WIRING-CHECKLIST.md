# CMS Wiring Checklist

Track progress as CMS-driven content is implemented across the web app.

## 1) Site Global Branding Model (Strapi)

- [x] Add `branding.logoDesktop` media field to `site-global`.
- [x] Add `branding.logoMobile` media field to `site-global`.
- [x] Add `branding.logoLoader` media field to `site-global`.
- [x] Add optional branding text fields (for example `branding.siteName`, `branding.logoAlt`).
- [x] Seed/publish default branding values in CMS.

## 2) Web CMS Mapping Layer

- [x] Create a normalized branding mapper in `apps/web/lib/cms` (for example `getSiteBrandingAsync`).
- [x] Return `desktopLogoUrl`, `mobileLogoUrl`, and `loaderLogoUrl` from mapper.
- [x] Ensure mapper uses `getStrapiMediaUrl(...)` for media URL normalization.
- [x] Add fallback behavior to existing local logo components when CMS values are missing.
- [x] Keep mapping in one place to avoid repeated raw Strapi parsing in UI components.

## 3) Header Logos (Desktop + Mobile)

- [x] Update `Header` to consume branding data via props/context/store.
- [x] Render CMS desktop logo at desktop breakpoints.
- [x] Render CMS mobile logo at mobile breakpoints.
- [x] Preserve existing spacing/sizing wrappers so layout does not shift.
- [x] Keep fallback to existing `LogoFull` when CMS logo is unavailable.

## 4) Loading Animation Logo

- [x] Update `LoadAnimationScreen` to use CMS loader logo.
- [x] Preserve loader animation behavior when switching from SVG component to image.
- [x] Keep fallback to existing `Logo` component when CMS loader logo is unavailable.
- [x] Validate logo visibility and animation timing on first load and cached load.

## 5) Data Plumbing From Root Layout

- [x] Extend `app/layout.tsx` global CMS fetch path to include branding payload for UI use.
- [x] Pass branding data into app UI via provider/store (recommended) or route props.
- [x] Ensure both `Header` and `LoadAnimationScreen` can access the same branding source.
- [x] Avoid duplicate fetches for the same global branding payload.

## 6) Wire Existing Site-Global Content Already Modeled in CMS

- [x] Move nav link source from `texts.ts` constants to CMS `site-global`.
- [x] Move footer contact rows source to CMS `site-global`.
- [x] Move social links source to CMS `site-global`.
- [x] Move contact information source to CMS `site-global`.
- [x] Keep hardcoded constants as fallback values.

## 7) Wire Page Single-Types Already Defined in CMS

- [x] Home page: wire hero and section summaries from `page-home`.
- [x] About page: wire biography, education, business, awards from `page-about`.
- [x] Contact page: wire hero and contact cards from `page-contact`.
- [x] Legislative listing page: wire committees, impact, categories, featured image from `page-legislative`.
- [x] Community listing page: wire achievements and upcoming events from `page-community`.

## 8) Fallback and Resilience Contract

- [x] Define a consistent fallback strategy for each CMS-backed section.
- [x] Render current local constants when CMS is empty/unpublished.
- [x] Render current local constants when CMS is unreachable.
- [x] Ensure app remains functional at build time and runtime if CMS is down.
- [x] Add lightweight logs/warnings for failed CMS reads (non-blocking).

## 9) QA and Verification

- [x] Verify behavior with CMS online and complete data.
- [x] Verify behavior with CMS online and partial/empty data.
- [x] Verify behavior with CMS offline/unreachable.
- [x] Verify logo rendering in desktop header.
- [x] Verify logo rendering in mobile header.
- [x] Verify logo rendering in loading animation screen.
- [x] Check image aspect ratio handling and no layout shift regressions.

## 10) Type Safety and Guardrails (Recommended)

- [x] Add TypeScript types for `site-global` branding/content shape.
- [x] Add runtime validation (for example Zod) for critical CMS payloads.
- [x] Add tests for mapper fallback behavior.
- [x] Add a dev-only indicator/toggle to show CMS vs fallback source per section.

## 11) Cross-Repo Upgrade Playbook (Portable)

Use this when upgrading another Strapi + Next.js repo from an older JSON-heavy CMS setup.

- [x] **API layer parity:** every content-type has `controllers`, `routes`, and `services` files using `factories.createCore*`.
- [x] **Schema modernization:** replace `type: "json"` object/array fields with Strapi components (`repeatable` where needed).
- [x] **JSON exception rule:** keep only `seo_structuredData` as `json` (and avoid generic JSON blobs elsewhere).
- [x] **Component library parity:** add shared primitives (`text-line`, `keyword`, `teaser`, `timeline-phase`, `link-line`, etc.) plus domain components (home/about/site/contact/blocks/community).
- [x] **Seed payload alignment:** convert seed arrays to component shapes (`{ text }`, `{ phrase }`) and map media fields to uploaded media IDs.
- [x] **Media seeding flow:** use `getOrUploadPublicFile(...)` for single-type media fields that used to be raw URL strings.
- [x] **Admin UX parity:** port custom field polish (for example icon picker button states/colors).
- [x] **SSR-first web behavior:** enforce live CMS reads with `dynamic = "force-dynamic"`, `fetchCache = "force-no-store"`, and no-store fetches.
- [x] **Populate precision:** replace broad `populate=*` with explicit deep `populate[...]` query strings for nested components/media.
- [x] **Mapper normalization:** flatten component payloads in one place (`{ phrase }[] -> string[]`, `{ text }[] -> string[]`) so UI code stays stable.
- [x] **Metadata compatibility:** SEO mappers/pages should accept both legacy string arrays and new component-shaped arrays.
- [x] **Loader reliability:** add initial paint shell + load-screen mount wrapper to guarantee visible startup animation before hydration.
- [x] **Contact schema consistency:** if legacy contact model stored JSON metadata, move to explicit scalar fields (for example `submissionSenderName`).

