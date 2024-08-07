import React, { FC } from "react";
import { FeaturedSectionProps } from "./FeaturedSection";
import { getFilteredProducts } from "@/actions/getFilteredProducts";
import { Iproducts } from "@/lib/types";
import NoResuts from "@/components/commons/NoResuts";
import ProductCard from "@/components/commons/ProductCard";
import MobileFilters from "@/components/commons/MobileFilters";

const ProductsSection: FC<FeaturedSectionProps> = async ({ brandId }) => {
  const products: Iproducts[] = await getFilteredProducts({
    brandId,
  });
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-5 md:gap-10 items-center  w-full">
        <MobileFilters />
        <h1
          className="
          sm:text-3xl 
          text-2xl 
          text-nowrap 
          font-semibold 
          underline 
          text-center 
          lg:text-left 
          md:text-left 
          "
        >
          Featured Collection
        </h1>
      </div>
      {products?.length == 0 && <NoResuts />}
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 sm:mx-auto sm:w-full ">
        {products?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsSection;
