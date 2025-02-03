import { sql } from '@vercel/postgres';
import { VercelPool } from '@vercel/postgres';

const pool = new VercelPool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
