import dynamic from "next/dynamic";
import FiltersSkeleton from "../../../../../components/commons/FiltersSkeleton";
import ProductsSkeleton from "@/components/commons/ProductsSkeleton";
const ProductsSection = dynamic(() => import("./ProductsSection"), {
  loading: () => <ProductsSkeleton />,
});
const FilterSection = dynamic(() => import("./FilterSection"), {
  loading: () => <FiltersSkeleton />,
});

export interface FeaturedSectionProps {
  brandId: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = async ({ brandId }) => {
  return (
    <main className="flex gap-10 md:px-8 sm:px-2 ">
      <FilterSection />
      <ProductsSection brandId={brandId} />
    </main>
  );
};

export default FeaturedSection;
