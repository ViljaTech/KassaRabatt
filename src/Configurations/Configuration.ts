import {environment} from '../../app.json';

export enum Environment {
  PROD = 'PROD',
  STAGE = 'STAGE',
  DEV = 'DEV',
}

export type ConfigType = {
  hostUrl: string;
};

const DevConfig: ConfigType = {
  hostUrl: 'https://prizbee-mvp-staging.herokuapp.com/api',
};

const ProdConfig: ConfigType = {
  hostUrl: 'https://prizbee-mvp-prod.prizbee.io/api',
};

const StageConfig: ConfigType = {
  hostUrl: 'https://prizbee-mvp-staging.prizbee.io/api',
};

const selectedConfig =
  environment === Environment.PROD
    ? ProdConfig
    : environment === Environment.STAGE
    ? StageConfig
    : DevConfig;

const getConfigData = (env: Environment) => {
  return env === Environment.PROD
    ? ProdConfig
    : env === Environment.STAGE
    ? StageConfig
    : DevConfig;
};

const getHostUrl = (env: Environment) => {
  return (
    env === Environment.PROD
      ? ProdConfig
      : env === Environment.STAGE
      ? StageConfig
      : DevConfig
  ).hostUrl;
};

export const endPoints = {
  // login: '/endpoint',
  // parent signup and signin
};

export const AppConfigData = {
  ...selectedConfig,
  getHostUrl,
  getConfigData,
  defaultLanguage: 'en',
  defaultTheme: 'light',
  acceptedLanguage: ['en', 'sv'],
};
