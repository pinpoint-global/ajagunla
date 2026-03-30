interface IEnvironment {
  APP: {
    NAME: string;
    ENV?: string;
    APP_URL: string;
  };
  DB: {
    URL: string;
  };
  EMAIL: {
    FROM: string;
    PASSWORD: string;
    HOST: string;
    PORT: number;
    TO: string;
  };
  TOKEN_NAMES: {
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
  EMAIL: {
    FROM: process.env.FROM_EMAIL!,
    TO: process.env.TO_EMAIL!,
    PASSWORD: process.env.MAIL_PASSWORD!,
    HOST: process.env.MAIL_HOST!,
    PORT: parseInt(process.env.MAIL_PORT!),
  },
  TOKEN_NAMES: {
    COOKIES: {
      ACCESS: 'klef-acc-token',
      REFRESH: 'klef-ref-token',
    },
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
};
