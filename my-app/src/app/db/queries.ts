import pool from './connection';
import { Product } from './types/index';


export default pool;
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

export const getProductById = async (id: number): Promise<Product | null> => {
    try {
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

export const createProduct = async (product: Product): Promise<Product | null> => {
    try {
        const result = await pool.query(
            'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
            [product.name, product.description, product.price]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error creating product:', error);
        return null;
    }
};

export const updateProduct = async (id: number, product: Product): Promise<Product | null> => {
    try {
        const result = await pool.query(
            'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
            [product.name, product.description, product.price, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
};

export const deleteProduct = async (id: number): Promise<boolean> => {
    try {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        return true;
    } catch (error) {
        console.error('Error deleting product:', error);
        return false;
    };
//the place to put actions for accessing the db

export async function fetchProducts() {
    try {
        const data = await pool.query(`
            SELECT *
            FROM products
        `);
        return data.rows
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch product data');
    }
}