import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.CINECO_SERVERLES_URL_NEW!);

export const db = drizzle(sql)

