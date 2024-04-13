import { getFilteredProducts } from "@/actions/getFilteredProducts";
import ProductCard from "@/components/commons/ProductCard";
import { Iproducts } from "@/lib/types";
import { getProduct } from "@/actions/getProduct";
import { FC } from "react";
import { RealtedProductsProps } from "./RelatedProducts";

const Products: FC<RealtedProductsProps> = async ({ productId }) => {
  const product = await getProduct(productId);
  const products = await getFilteredProducts({
    categoryId: product.categoryId,
  });

  const relatedProducts: Iproducts[] = products.filter(
    (product: Iproducts) =>
      product.categoryId === product.categoryId && product.id !== productId
  );
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {relatedProducts &&
          relatedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </section>
    </>
  );
};

export default Products;
