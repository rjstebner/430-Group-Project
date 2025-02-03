import Image from "next/image";
import { fetchProducts } from "../db/queries"

export default async function CatalogCards() {
    const products = await fetchProducts();

    return (
        <div className="md:grid grid-cols-3">
            {products.map(product => (
                <div key={product.id} className="border border-solid bg-gray-100 p-5 m-4">
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