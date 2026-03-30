import type { Core } from '@strapi/strapi';

function r2PublicOrigin(env: Core.Config.Shared.ConfigParams['env']): string | null {
  if (env('R2_UPLOAD_ENABLED') !== 'true') return null;
  const raw = env('R2_PUBLIC_URL', '');
  if (!raw) return null;
  try {
    return new URL(raw).origin;
  } catch {
    return null;
  }
}

/**
 * When using R2, allow the public asset origin in CSP so Media Library previews work in Admin.
 * @see https://docs.strapi.io/cms/configurations/media-library-providers/amazon-s3#security-middleware-configuration
 */
const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => {
  const r2Origin = r2PublicOrigin(env);

  const security =
    r2Origin != null
      ? ({
          name: 'strapi::security',
          config: {
            contentSecurityPolicy: {
              useDefaults: true,
              directives: {
                'connect-src': ["'self'", 'https:'],
                'img-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io', r2Origin],
                'media-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io', r2Origin],
                upgradeInsecureRequests: null,
              },
            },
          },
        } as const)
      : 'strapi::security';

  return [
    'strapi::logger',
    'strapi::errors',
    security,
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};

export default config;
