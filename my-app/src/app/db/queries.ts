import pool from './connection';
import { sql } from '@vercel/postgres';
import { User } from './types';

//the place to put actions for accessing the db
export const getUser = async (email: string) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE email=${email}`);
    console.log(result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
};

export async function insertUser(
  name: string,
  email: string,
  password: string,
  type: string,
  registration_dt: string
) {
  try {
    const { rows, fields } =
      await pool.query(`INSERT INTO users (username, email, password, type)
                VALUES(${name}, ${email}, ${password}, ${type} )`);
    console.log(`DB: user inserted succesfuly ${rows[0]}`);
  } catch (err) {
    console.error('Database failed to insert new user:', err);
  }
}

export async function insertSocialUser(
  name: string,
  email: string,
  type: string,
  registration_dt: string
) {
  try {
    const { rows } = await pool.query(`INSERT INTO users (username, email, type)
                VALUES(${name}, ${email} ${type} )`);
    console.log(`DB: user inserted succesfuly ${rows[0]}`);
  } catch (err) {
    console.error('Database failed to insert new user:', err);
  }
}

export const testConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Database connected! Current time:', result.rows[0].now);
  } catch (err) {
    console.error('Database connection failed:', err);
  }
};
