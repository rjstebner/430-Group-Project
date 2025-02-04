interface ProductProps {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  const ProductDetails: React.FC<ProductProps> = ({ name, description, price, imageUrl }) => {
    return (
      <section className="flex flex-col md:flex-row gap-8 p-6">
        <div className="w-full md:w-1/2">
          <img src={imageUrl} alt={name} className="w-full rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-600">{description}</p>
          <p className="text-2xl font-semibold text-green-600">${price.toFixed(2)}</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      </section>
    );
  };
  
  export default ProductDetails;
  