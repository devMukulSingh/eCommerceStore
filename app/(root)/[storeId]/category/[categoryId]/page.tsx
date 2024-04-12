import MobileFilterButton from "@/components/commons/MobileFilterButton";
import dynamic from "next/dynamic";
import FiltersSkeleton from "../../../../../components/commons/FiltersSkeleton";
import Heading from "./components/Heading";
import ProductsSkeleton from "@/components/commons/ProductsSkeleton";
const ProductsSection = dynamic(
  () =>
    import(
      "@/app/(root)/[storeId]/category/[categoryId]/components/ProductsSection"
    ),
  {
    loading: () => <ProductsSkeleton />,
  },
);
const FilterSection = dynamic(() => import("./components/FilterSection"), {
  loading: () => <FiltersSkeleton />,
});

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { brandId: string };
}) => {
  const { categoryId } = params;

  const { brandId } = searchParams;

  return (
    <main className="flex flex-col gap-5 py-5 md:px-5 sm:px-2 px-5 sm:items-start sm:justify-start w-full">
      <Heading />

      <MobileFilterButton />

      <section className="flex gap-5 w-full">
        <FilterSection />
        <ProductsSection categoryId={categoryId} brandId={brandId} />
      </section>
    </main>
  );
};

export default CategoryPage;
