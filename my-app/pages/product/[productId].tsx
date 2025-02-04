import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductDetails from "../../components/ProductDetails";
import Reviews from "../../components/Reviews";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  console.log("Fetching product with ID:", productId);


  const product = {
    name: "Handmade Wooden Bowl",
    description: "A beautifully handcrafted wooden bowl made by local artisans.",
    price: 39.99,
    imageUrl: "/images/product-placeholder.jpg",
  };

  return (
    <>
      <Head>
        <title>{product.name} | Handcrafted Haven</title>
        <meta name="description" content="Discover unique handcrafted items on Handcrafted Haven. Support local artisans and explore our curated selection of handmade treasures." />
      </Head>

      <Header />
      <main className="container mx-auto p-6">
        <ProductDetails 
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
        <Reviews />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
