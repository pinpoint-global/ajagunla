import type { StrapiApp } from '@strapi/strapi/admin';
import { Sparkles } from 'lucide-react';

import logo from './assets/logo-icon.svg';
const Logo = () => (
  <img src={logo} alt="Prognera" style={{ display: 'block', maxWidth: 140, height: 'auto' }} />
);

type ContentTypeSchema = {
  info?: { singularName?: string };
  attributes?: Record<string, unknown>;
};

const ACRONYMS = new Map([
  ['id', 'ID'],
  ['og', 'OG'],
  ['seo', 'SEO'],
  ['url', 'URL'],
]);

function toTitleCaseWord(word: string) {
  return `${word[0]?.toUpperCase() ?? ''}${word.slice(1).toLowerCase()}`;
}

function humanizeAttributeName(attributeName: string) {
  return attributeName
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/\s+/)
    .filter(Boolean)
    .map(token => ACRONYMS.get(token.toLowerCase()) ?? toTitleCaseWord(token))
    .join(' ');
}

function buildFieldLabelTranslations() {
  const translations: Record<string, string> = {};
  const schemaModules = (import.meta as any).glob(
    '../api/**/content-types/**/schema.json',
    { eager: true }
  ) as Record<string, any>;

  for (const [path, moduleData] of Object.entries(schemaModules)) {
    const schema = (moduleData?.default ?? moduleData) as ContentTypeSchema | undefined;
    if (!schema) continue;

    const singularName = schema.info?.singularName;
    const attributes = schema.attributes;

    if (!singularName || !attributes) continue;

    const apiMatch = path.match(/\.\.\/api\/([^/]+)\//);
    const apiName = apiMatch?.[1];
    if (!apiName) continue;

    const uid = `api::${apiName}.${singularName}`;

    for (const key of Object.keys(attributes)) {
      translations[`content-manager.content-types.${uid}.${key}`] = humanizeAttributeName(key);
    }
  }

  return translations;
}

export default {
  register(app: StrapiApp) {
    app.customFields.register({
      name: 'lucide-icon-name',
      type: 'string',
      intlLabel: {
        id: 'ajagunla.lucide-icon.label',
        defaultMessage: 'Lucide icon',
      },
      intlDescription: {
        id: 'ajagunla.lucide-icon.description',
        defaultMessage: 'Pick an icon from the curated Lucide set (modal with preview).',
      },
      icon: Sparkles,
      components: {
        Input: async () => {
          const m = await import('./components/LucideIconField');
          return { default: m.LucideIconField as any };
        },
      },
    });
  },
  config: {
    locales: ['en'],
    translations: {
      en: buildFieldLabelTranslations(),
    },
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    theme: {
      light: {
        colors: {
          primary600: '#072AAC',
        },
      },
      dark: {
        colors: {
          primary600: '#5a7ef0',
        },
      },
    },
  },
  bootstrap(_app: StrapiApp) {},
};
