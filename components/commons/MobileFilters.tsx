"use client";
import React from "react";
import Filter from "../../app/(root)/[storeId]/category/[categoryId]/components/Filter";
import { Ibrand } from "@/lib/types";
import { useAppSelector } from "@/redux/hooks";
import { Cross } from "lucide-react";

interface MobileFiltersProps {
  brands: Ibrand[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ brands }) => {
  const openFilters = useAppSelector((state) => state.ecomm.openFilters);

  return (
    <>
      {
        openFilters && (
          // <main className='sm:hidden absolute bg-white dark:bg-black h-full w-[15rem]'>
          <>
            <Filter
              heading="Brands"
              filter={brands}
              valueKey="brandId"
              className="top-[40px] sm:hidden block z-20 fixed bg-white dark:bg-black h-full"
            />
          </>
        )
        // </main>
      }
    </>
  );
};

export default MobileFilters;
