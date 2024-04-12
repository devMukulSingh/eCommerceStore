import { getBrands } from "@/actions/getBrands";
import Filter from "@/app/(root)/[storeId]/category/[categoryId]/components/Filter";
import { Ibrand } from "@/lib/types";

const FilterSection = async () => {
  const brands: Ibrand[] = await getBrands();
  return (
    <>
      <Filter filter={brands} heading="Brands" valueKey="brandId" />
    </>
  );
};

export default FilterSection;
