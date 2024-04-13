import dynamic from "next/dynamic";
import ProductsSkeleton from "@/components/commons/ProductsSkeleton";

const Products = dynamic(() => import("./Products"), {
  loading: () => <ProductsSkeleton />,
});

export interface RealtedProductsProps {
  productId: string;
}
const RelatedProducts: React.FC<RealtedProductsProps> = async ({
  productId,
}) => {
  return (
    <main className="px-5 lg:px-20 md:px-10">
      <h1 className="sm:text-3xl text-2xl font-semibold underline">
        Related Products
      </h1>
      <Products productId={productId} />
    </main>
  );
};

export default RelatedProducts;
