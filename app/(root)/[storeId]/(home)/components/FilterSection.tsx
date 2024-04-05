import { getBrands } from "@/actions/getBrands";
import Filter from "@/components/category/Filter";
import { Ibrand } from "@/lib/types";

const FilterSection = async() => {
  const brands: Ibrand[] = await getBrands();
  return (
    <div>
      <Filter filter={brands} heading="Brands" valueKey="brandId" />
    </div>
  );
};

export default FilterSection;
