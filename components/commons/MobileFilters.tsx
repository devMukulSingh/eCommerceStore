import React from "react";
import Filter from "../../app/(root)/[storeId]/category/[categoryId]/components/Filter";
import { getBrands } from "@/actions/getBrands";

interface MobileFiltersProps {
}

const MobileFilters: React.FC<MobileFiltersProps> = async() => {
  const brands = await getBrands();


  return (
    <>
       
            <Filter
              heading="Brands"
              filter={brands}
              valueKey="brandId"
              className="top-[40px] sm:hidden block z-20 fixed bg-white dark:bg-black h-full"
            />
        

    </>
  );
};

export default MobileFilters;
