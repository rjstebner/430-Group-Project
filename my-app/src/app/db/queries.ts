import pool from './connection';
import { Product } from './types/index';

// Get all products query
export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
        return result.rows;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};