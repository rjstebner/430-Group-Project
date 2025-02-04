import { getProductById } from '@/app/db/queries';
import ProductForm from '@/app/components/ProductForm';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold mb-8">Edit Product</h1>
      <ProductForm mode="edit" product={product} />
    </main>
  );
}