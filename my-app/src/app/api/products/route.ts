import { NextResponse } from 'next/server';
import { createProduct, getAllProducts } from '@/app/db/queries';

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newProduct = await createProduct(data);
  return NextResponse.json(newProduct);
}