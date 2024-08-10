import { defineConfig } from 'drizzle-kit';
import * as dotenv from "dotenv";
dotenv.config({
    path: ".env"
});

export default defineConfig({
    schema: './src/drizzle/schemas/*',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.CINECO_SERVERLES_URL_NEW,

    },
});