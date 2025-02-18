import { getProductsByUserId } from '@/app/db/queries';
import ProductForm from '@/app/components/ProductForm';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Get the session using getServerSession
  const session = await getServerSession(authOptions);
  
  // Check if the session is null or undefined
  if (!session) {
    // Redirect to the home page if not logged in
    redirect('/');
    return null; // Ensure the component does not render
  }

  // Additional type check for creator
  if (session.user.type !== 'creator') {
    // Redirect to the home page if the user is not a creator
    redirect('/');
    return null; // Ensure the component does not render
  }

  // Extract the product ID from the params
  const { id } = await params;
  // Fetch the product by user ID
  const userId = session.user.id;
  if (!userId) {
    return <div>User ID is not available</div>;
  }
  const products = await getProductsByUserId(userId);
  const product = products.find((p) => p.id === Number(id));

  // Check if the product exists and if the user has permission to edit it
  if (!product) {
    return <div>Product not found or you don't have permission to edit it</div>;
  }

  // Render the edit product page
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold mb-8">Edit Product</h1>
      <ProductForm mode="edit" product={product} />
    </main>
  );
}