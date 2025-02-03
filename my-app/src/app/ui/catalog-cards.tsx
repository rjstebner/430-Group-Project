import Image from "next/image";
import { fetchProducts } from "../db/queries"

export default async function CatalogCards() {
    const products = await fetchProducts();
    console.log(products);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <Image 
                        src={product.image}
                        alt={`${product.name} image`}
                        width={100}
                        height={100}
                    />
                </div>
            ))}
        </div>
    )
}