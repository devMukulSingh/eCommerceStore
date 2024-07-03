import dynamic from "next/dynamic";
import FiltersSkeleton from "@/components/commons/FiltersSkeleton";
import ProductsSkeleton from "@/components/commons/ProductsSkeleton";
import Filter from "../../category/[categoryId]/components/Filter";


const ProductsSection = dynamic(() => import("./ProductsSection"), {
  loading: () => <ProductsSkeleton />,
});


export interface FeaturedSectionProps {
  brandId: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = async ({ brandId }) => {
  return (
    <div className="flex gap-2 sm:gap-10 md:px-8 sm:px-2 ">
      <Filter heading="Brands" valueKey="brandId" />
      <ProductsSection brandId={brandId} />
    </div>
  );
};

export default FeaturedSection;
