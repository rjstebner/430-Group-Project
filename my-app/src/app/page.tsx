import { fetchProducts } from "./db/queries";
import { playwrite_vn } from "./fonts";
import CatalogCards from "./ui/catalog-cards";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div>
      <h1 className={`text-3xl m-5 ${playwrite_vn.className}`}>Catalog</h1>
      <CatalogCards products={products} />
    </div>
  );
}