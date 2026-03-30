# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### Bootstrap seed (Prognera)

Set `STRAPI_SEED=true` in `.env` (see `.env.example`). On startup, `src/seed/run.ts` fills **contact-info**, **projects**, and **divisions** (English `en` and French `fr`) when those types are still empty.

- **`STRAPI_SEED_RESET=true`** (optional): before seeding, deletes existing **projects**, **services**, and **contact-info** rows so the next run re-inserts from seed files. Destructive; use for local resets, not on production unless you intend to wipe that content.
- Project copy mirrors `apps/web/lib/data/projects` (see `src/seed/projects-*.ts`). Division copy mirrors `apps/web/lib/data/divisions` (see `src/seed/divisions-*.ts`). Images are uploaded from `apps/web/public` into the Media Library during seed (`src/seed/upload-from-public.ts`).

### Cloudflare R2 uploads

The CMS includes `@strapi/provider-upload-aws-s3` and enables it when `R2_UPLOAD_ENABLED=true` plus bucket settings in `.env` (see `.env.example`). R2 does not support S3 ACLs; do not set `ACL` in provider options. Configure the bucket **CORS** in Cloudflare for your Strapi admin origin so thumbnails load in the Media Library ([docs](https://docs.strapi.io/cms/configurations/media-library-providers/amazon-s3)). Image variants are still produced at **upload** time when Strapi’s pipeline runs; **on-the-fly** transforms on fetch are a CDN concern (e.g. Cloudflare Images), not Strapi core.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
