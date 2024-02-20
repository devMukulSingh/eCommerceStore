import { getFilteredProducts } from "@/actions/getFilteredProducts";
import ProductCard from "../commons/ProductCard";
import { Iproducts } from "@/lib/types";

interface RealtedProductsProps {
  categoryId: string,
  productId: string
}
const RelatedProducts: React.FC<RealtedProductsProps> = async (
  { categoryId, productId }
) => {

  const products = await getFilteredProducts({
    categoryId,
  });

  const relatedProducts: Iproducts[] = products.filter((product: Iproducts) => product.categoryId === categoryId && product.id !== productId);

  return (
    <main className="px-5 lg:px-20 md:px-10">
      <h1 className="sm:text-3xl text-2xl font-semibold underline">Related Products</h1>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {
          relatedProducts && relatedProducts.map(product => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </section>
    </main>
  )
}

export default RelatedProducts