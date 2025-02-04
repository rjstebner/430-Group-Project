import ProductForm from '@/app/components/ProductForm';

export default function NewProductPage() {
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold mb-8">Add New Product</h1>
      <ProductForm mode="create" />
    </main>
  );
}