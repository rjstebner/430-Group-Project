import { playfair } from "./fonts";
import CatalogCards from "./ui/catalog-cards";

export default function Home() {
  return (
    <div>
      <h1 className={`text-3xl m-5 ${playfair.className}`}>Catalog</h1>
      <CatalogCards />
    </div>
  )
}
