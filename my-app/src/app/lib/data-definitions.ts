// This file defines the Data Definitions for the application

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
  };
  

export type Product = {
    id: string;
    name: string;
    catagory: string;
    price: number;
    description: string;
    image: string;
    reviews?: Review[];

  };

  export type Review = {
    id: string;
    productId: string;
    userId: string;
    rating: number;
    comment: string;
    created: Date;
  };