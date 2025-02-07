import { playwrite_vn } from "./fonts";
import CatalogCards from "./ui/catalog-cards";
import NavBar from "./ui/nav-bar";

export default function Home() {
  let items = ["Home","Items","Account"];
  return (
    <div>
      <NavBar 
      navItems={items}
      />
      <h1 className={`text-3xl m-5 ${playwrite_vn.className}`}>Catalog</h1>
      <CatalogCards />
    </div>
  )
}
