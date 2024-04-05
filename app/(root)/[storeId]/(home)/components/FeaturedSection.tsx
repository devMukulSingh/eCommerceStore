import dynamic from "next/dynamic";
import FiltersSkeleton from "./FiltersSkeleton";
import ProductsSection from "./ProductsSection";
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
