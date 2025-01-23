import { User, Product, Review } from './data-definitions';

export const users: User[] = [
  {
    id: "u1",
    name: "John Smith",
    email: "john@email.com",
    password: "password123",
    role: "user"
  },
  {
    id: "u2",
    name: "Admin User",
    email: "admin@email.com",
    password: "admin123",
    role: "admin"
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Gaming Laptop",
    catagory: "electronics",
    price: 999.99,
    description: "High performance gaming laptop",
    image: "/images/laptop.jpg",
    reviews: []
  },
  {
    id: "p2",
    name: "Running Shoes",
    catagory: "sports",
    price: 79.99,
    description: "Comfortable running shoes",
    image: "/images/shoes.jpg",
    reviews: []
  }
];

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "p1",
    userId: "u1",
    rating: 5,
    comment: "Great laptop for gaming!",
    created: new Date("2024-03-15")
  },
  {
    id: "r2",
    productId: "p2",
    userId: "u2",
    rating: 4,
    comment: "Good shoes but runs small",
    created: new Date("2024-03-14")
  }
];

// Link reviews to products
products[0].reviews = [reviews[0]];
products[1].reviews = [reviews[1]];