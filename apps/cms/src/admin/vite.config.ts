type AdminViteConfig = {
  resolve?: {
    alias?: Record<string, string>;
  };
  assetsInclude?: string[] | string;
  [key: string]: unknown;
};

export default (config: AdminViteConfig): AdminViteConfig => {
  const existingAssets = Array.isArray(config.assetsInclude)
    ? config.assetsInclude
    : config.assetsInclude
      ? [config.assetsInclude]
      : [];

  return {
    ...config,
    resolve: {
      ...(config.resolve ?? {}),
      alias: {
        ...(config.resolve?.alias ?? {}),
        '@': '/src',
      },
    },
    assetsInclude: [...existingAssets, '**/*.svg'],
  };
};
