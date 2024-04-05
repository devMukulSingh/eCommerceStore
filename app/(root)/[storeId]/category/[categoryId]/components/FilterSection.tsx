import { getBrands } from "@/actions/getBrands";
import FiltersSkeleton from "@/components/commons/FiltersSkeleton";
import Filter from "./Filter";


const FilterSection = async() => {
  const brands = await getBrands();

  return (
    <>
      <Filter filter={brands} heading="Brands" valueKey="brandId" />
    </>
  );
}

export default FilterSection