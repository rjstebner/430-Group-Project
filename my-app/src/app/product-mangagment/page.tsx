import Link from 'next/link'
import { getAllProducts } from '../db/queries'

export default async function ProductManagement() {
    const products = await getAllProducts();
  
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold mb-8">Product Management</h1>
        <div className="w-full max-w-4xl">
          {products.map((product) => (
            <div key={product.id} className="border p-4 mb-4 rounded">
              <h2 className="text-xl">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    )
  }