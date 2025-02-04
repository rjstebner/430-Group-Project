export async function fetchProductDetails(productId: string) {
    const response = await fetch(`/api/products/${productId}`);
    return response.json();
  }
  
  export async function fetchReviews(productId: string) {
    const response = await fetch(`/api/products/${productId}/reviews`);
    return response.json();
  }
  