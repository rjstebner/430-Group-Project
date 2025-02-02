import { fetchProducts } from "../db/queries"

export default async function CatalogCard() {
    const products = await fetchProducts();
    console.log(products);

    return (
        <div>
            <h2>Card Title</h2>
            <p>Card Description</p>
            <p>ect</p>
        </div>
    )
}