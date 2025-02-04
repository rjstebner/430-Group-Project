import { Pool } from 'pg';
// import { sql } from '@vercel/postgres';
// import { Pool } from '@vercel/postgres';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;