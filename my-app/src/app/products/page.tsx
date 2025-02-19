import { getProductsByUserId } from '@/app/db/queries';
import Link from 'next/link';
import DeleteButton from '../components/DeleteButton';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import NavBar from '@/app/ui/nav-bar';

interface Params {
  // Define the expected structure of params here
}

export default async function ProductsPage({ params }: { params: Params }) {
  // Get the session using getServerSession
  const session = await getServerSession(authOptions);
  
  // Check if the session is null or undefined
  if (!session) {
    // Redirect to the home page if not logged in
    redirect('/');
    return null; // Ensure the component does not render
  }

  // Additional type check for creator
  if (typeof session.user.type !== 'string' || session.user.type !== 'creator') {
    // Redirect to the home page if the user is not a creator
    redirect('/');
    return null; // Ensure the component does not render
  }

  const userId = session.user.id;
  if (typeof userId !== 'string') {
    throw new Error('User ID is not a string');
  }
  const products = await getProductsByUserId(userId);
  
  return (
    <>
      <NavBar />
      <main className="p-24 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Products</h1>
            <Link href="/products/new" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Add New Product
            </Link>
          </div>
          <div className="grid gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded flex justify-between bg-white shadow-md">
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
        </div>
      </main>
    </>
  );
}