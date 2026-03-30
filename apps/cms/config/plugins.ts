import type { Core } from '@strapi/strapi';

/**
 * When `R2_UPLOAD_ENABLED=true` and bucket credentials are set, media use Cloudflare R2 (S3 API).
 * Otherwise the default local upload provider is used.
 * @see https://docs.strapi.io/cms/configurations/media-library-providers/amazon-s3
 */
const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  const base: Core.Config.Plugin = {
    i18n: {
      enabled: true,
      config: {
        defaultLocale: env('STRAPI_DEFAULT_LOCALE', 'en'),
        locales: ['en'],
      },
    },
  };

  const r2Enabled = env('R2_UPLOAD_ENABLED') === 'true';
  const bucket = env('R2_BUCKET');
  const endpoint = env('R2_ENDPOINT');

  if (!r2Enabled || !bucket || !endpoint) {
    return base;
  }

  return {
    ...base,
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          /** Public URL for assets (custom domain or *.r2.dev). Stored with media records. */
          baseUrl: env('R2_PUBLIC_URL', ''),
          rootPath: env('R2_ROOT_PATH', ''),
          s3Options: {
            credentials: {
              accessKeyId: env('R2_ACCESS_KEY_ID'),
              secretAccessKey: env('R2_ACCESS_SECRET'),
            },
            region: env('R2_REGION', 'auto'),
            endpoint,
            params: {
              Bucket: bucket,
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};

export default config;
