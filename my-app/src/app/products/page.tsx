import { getAllProducts } from '../db/queries';
import Link from 'next/link';
import DeleteButton from '../components/DeleteButton';

export default async function ProductsPage() {
  const products = await getAllProducts();
  
  return (
    <main className="p-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Products</h1>
        <Link href="/products/new" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Add New Product
        </Link>
      </div>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded flex justify-between">
            <div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold">${product.price}</p>
            </div>
            <div className="flex gap-2">
              <Link href={`/products/${product.id}/edit`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Edit
              </Link>
              <DeleteButton productId={product.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}