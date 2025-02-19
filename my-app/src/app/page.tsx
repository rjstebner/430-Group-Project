<<<<<<< HEAD
import React from "react";
=======
import { fetchProducts } from "./db/queries";
>>>>>>> bb85e4ef20d31c4308453e1bb1238e29a5e21bed
import { playwrite_vn } from "./fonts";
import CatalogCards from "./ui/catalog-cards";
import NavBar from "./ui/nav-bar";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div>
      <NavBar />
      <h1 className={`text-3xl m-5 ${playwrite_vn.className}`}>Catalog</h1>
      <CatalogCards products={products} />
    </div>
  );
}