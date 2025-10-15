interface IEnvironment {
  APP: {
    NAME: string;
    ENV?: string;
    APP_URL: string;
  };
  DB: {
    URL: string;
  };
  // GOOGLE: {
  //   CLIENT_ID: string;
  //   CLIENT_SECRET: string;
  // };
  // REDIS: {
  //   URL: string;
  //   CACHE_EXPIRY: number;
  // };
  EMAIL: {
    FROM: string;
    PASSWORD: string;
    HOST: string;
    PORT: number;
    TO: string;
  };
  TOKEN_NAMES: {
    // HEADERS: {
    //   ACCESS: string;
    //   REFRESH: string;
    // };
    COOKIES: {
      ACCESS: string;
      REFRESH: string;
    };
  };
  JWT: {
    ACCESS_TOKEN_SECRET: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_SECRET: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
  };
  COOKIE: {
    ACCESS_COOKIE_EXPIRES_IN: number;
    REFRESH_COOKIE_EXPIRES_IN: number;
  };
  // R2: {
  //   ACCOUNT_ID: string;
  //   REGION: string;
  //   ACCESS_KEY_ID: string;
  //   SECRET_ACCESS_KEY: string;
  //   BUCKET_NAME: string;
  //   CDN_URL: string;
  // };
}

export const ENVIRONMENT: IEnvironment = {
  APP: {
    NAME: process.env.APP_NAME!,
    ENV: process.env.NODE_ENV,
    APP_URL: process.env.APP_URL ?? '',
  },
  DB: {
    URL: process.env.DB_URL!,
  },
  // GOOGLE: {
  //   CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  //   CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
  // },
  // REDIS: {
  //   URL: process.env.REDIS_URL!,
  //   CACHE_EXPIRY: Number(process.env.CACHE_EXPIRY!),
  // },
  EMAIL: {
    FROM: process.env.FROM_EMAIL!,
    TO: process.env.TO_EMAIL!,
    PASSWORD: process.env.MAIL_PASSWORD!,
    HOST: process.env.MAIL_HOST!,
    PORT: parseInt(process.env.MAIL_PORT!),
  },
  // TWOFA: {
  //   ENCRYPTION_KEY: process.env.TWOFA_ENCRYPTION_KEY!
  // },
  TOKEN_NAMES: {
    COOKIES: {
      ACCESS: 'klef-acc-token',
      REFRESH: 'klef-ref-token',
    },
    // HEADERS: {
    //   ACCESS: 'ihp-acc-token',
    //   REFRESH: 'ihp-ref-token',
    // },
  },
  JWT: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET!,
    ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN!,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET!,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN!,
  },
  COOKIE: {
    ACCESS_COOKIE_EXPIRES_IN: parseInt(process.env.ACCESS_COOKIE_EXPIRES_IN!),
    REFRESH_COOKIE_EXPIRES_IN: parseInt(process.env.REFRESH_COOKIE_EXPIRES_IN!),
  },
  // R2: {
  //   ACCOUNT_ID: process.env.R2_ACCOUNT_ID!,
  //   REGION: process.env.R2_REGION!,
  //   ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID!,
  //   SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY!,
  //   BUCKET_NAME: process.env.R2_BUCKET_NAME!,
  //   CDN_URL: process.env.R2_CDN_URL!
  // },
};
