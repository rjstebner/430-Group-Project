export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  type: string;
  registration_dt: string;
}
export interface Review {
  id: number;
  product_id: number;
  description: string;
  rating: number;
  created_at: Date;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  reviews: Review[];
  created_at: Date;
}
