# Coolify deployment

Two services from this repository:

## Web (`Dockerfile.web`)

- **Build context:** repository root
- **Dockerfile:** `Dockerfile.web`
- **Port:** `3002` (override with `PORT` if needed)
- **Env:** set `NEXT_PUBLIC_STRAPI_URL` to your Strapi public URL, `NEXT_PUBLIC_SITE_URL` / `live_url` to the public site URL, and optional `STRAPI_API_TOKEN` if the API is not fully public.

## CMS (`Dockerfile.cms`)

- **Build context:** repository root
- **Dockerfile:** `Dockerfile.cms`
- **Port:** `1337`
- **Env:** copy from `apps/cms/.env.example` and set database, secrets, and optional `STRAPI_SEED=true` for first-time seed on bootstrap.

Enable **Public** `find` permissions in Strapi for the content types the website reads, or use a read-only API token on the web app.
