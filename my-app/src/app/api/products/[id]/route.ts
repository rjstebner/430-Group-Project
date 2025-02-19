import { NextRequest, NextResponse } from 'next/server';
import { deleteProduct, updateProduct, getProductById } from '@/app/db/queries';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  const params = await context.params;
  const product = await getProductById(parseInt(params.id));
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  const params = await context.params;
  const data = await request.json();
  const updated = await updateProduct(parseInt(params.id), data);
  return NextResponse.json(updated);
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  const params = await context.params;
  await deleteProduct(parseInt(params.id));
  return NextResponse.json({ success: true });
}