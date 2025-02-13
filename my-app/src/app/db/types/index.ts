export interface User {
  _id: string;  // Changed from number to string for MongoDB ObjectId
  username: string;
  email: string;
  password: string;
  type: string;
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
  created_at: Date;
  owner_id: number;
}