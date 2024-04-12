import { getFilteredProducts } from "@/actions/getFilteredProducts";
import { Iproducts } from "@/lib/types";
import NoResuts from "@/components/commons/NoResuts";
import dynamic from "next/dynamic";
import ProductSkeleton from "@/components/commons/ProductsSkeleton";
import ProductCard from "@/components/commons/ProductCard";

interface ProductsSectionProps {
  categoryId: string;
  brandId: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = async ({
  categoryId,
  brandId,
}) => {
  const filteredProducts: Iproducts[] = await getFilteredProducts({
    categoryId: categoryId.toString(),
    brandId,
  });
  return (
    <div className="w-full">
      {filteredProducts.length === 0 && <NoResuts />}
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 ">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
