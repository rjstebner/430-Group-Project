import pool from './connection';

async function seedDatabase() {
  try {
    // Insert Users
    await pool.query(`
      INSERT INTO users (username, email, password) VALUES 
      ($1, $2, $3),
      ($4, $5, $6)
    `, [
      'johndoe', 'john@example.com', 'hashedpassword123',
      'janesmith', 'jane@example.com', 'hashedpassword456'
    ]);

    // Insert Products
    const productResult = await pool.query(`
      INSERT INTO products (name, description, price, image) VALUES 
      ($1, $2, $3, $4),
      ($5, $6, $7, $8)
      RETURNING id
    `, [
      'Gaming Laptop', 'High-performance gaming laptop', 1299.99, 'laptop.jpg',
      'Wireless Mouse', 'Ergonomic wireless mouse', 49.99, 'mouse.jpg'
    ]);

    // Insert Reviews
    await pool.query(`
      INSERT INTO reviews (product_id, description, rating) VALUES 
      ($1, $2, $3),
      ($4, $5, $6)
    `, [
      productResult.rows[0].id, 'Great laptop!', 5,
      productResult.rows[1].id, 'Nice mouse', 4
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seedDatabase();