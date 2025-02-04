'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '../db/types';

type ProductFormProps = {
  product?: Product;
  mode: 'create' | 'edit';
}

export default function ProductForm({ product, mode }: ProductFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price?.toString() || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = mode === 'create' ? '/api/products' : `/api/products/${product?.id}`;
    const method = mode === 'create' ? 'POST' : 'PUT';
    
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price),
      }),
    });
    
    router.push('/products');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price
          <input
            type="text"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </label>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        {mode === 'create' ? 'Create' : 'Update'} Product
      </button>
    </form>
  );
}