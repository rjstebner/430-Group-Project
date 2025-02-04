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
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </label>
      </div>
      {/* Add similar fields for description and price */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {mode === 'create' ? 'Create' : 'Update'} Product
      </button>
    </form>
  );
}