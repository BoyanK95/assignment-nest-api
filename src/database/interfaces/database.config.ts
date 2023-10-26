import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './dbConfig.interface';
import { newCredentials } from 'newCredentials';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: newCredentials.user,
        password: newCredentials.password,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: newCredentials.host,
        port: newCredentials.port,
        dialect: process.env.DB_DIALECT,
    },
    test: {
        username: newCredentials.user,
        password: newCredentials.password,
        database: process.env.DB_NAME_TEST,
        host: newCredentials.host,
        port: newCredentials.port,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        username: newCredentials.user,
        password: newCredentials.password,
        database: process.env.DB_NAME_PRODUCTION,
        host: newCredentials.host,
        dialect: process.env.DB_DIALECT,
    },
};