"use strict";

import dotenv from "dotenv";
dotenv.config();

interface EnvironmentConfig {
  app: {
    port: number;
  };
  db: {
    host: string;
    port: number;
    name: string;
  };
}

const development: EnvironmentConfig = {
  app: {
    port: Number(process.env.DEV_APP_PORT) || 4000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: Number(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME ? process.env.DEV_DB_NAME : "Todolist_dev",
  },
};

const production: EnvironmentConfig = {
  app: {
    port: Number(process.env.PRODUCT_APP_PORT) || 4000,
  },
  db: {
    host: process.env.PRODUCT_DB_HOST || "localhost",
    port: Number(process.env.PRODUCT_DB_PORT) || 27017,
    name: process.env.PRODUCT_DB_NAME || "Todolist_pro",
  },
};

const config: Record<string, EnvironmentConfig> = { development, production };
const env: string = process.env.NODE_ENV || "development";

export default config[env];
