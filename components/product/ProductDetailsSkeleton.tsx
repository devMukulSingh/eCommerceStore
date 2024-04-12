import React from "react";
import { Skeleton } from "../ui/skeleton";
import ProductDetailsButtons from "./ProductDetailsButtons";

const ProductDetailsSkeleton = () => {
  return (
    <div className="flex gap-5 lg:flex-row flex-col ">
      <Skeleton className="sm:w-[30rem] sm:h-[35rem] w-[18rem] h-[20rem]" />
      <section className="flex w-full lg:w-[calc(100vw-35rem)] h-full">
        <div className="flex flex-col space-y-5 w-full md:max-w-[50rem] h-fit">

          <div className="space-y-5">
            <div className="space-y-3">
            <Skeleton className="w-auto h-[30px] rounded-full" />
            <Skeleton className="w-4/5 h-[30px] rounded-full" />
            </div>

            <div className="space-y-3">
            <Skeleton className="w-40 h-[25px] rounded-full mt-5" />
            <Skeleton className="w-60 h-[25px] rounded-full" />
            </div>
          </div>

          <hr />
          {/* <h1 className="font-semibold sm:text-xl ">Details</h1> */}
          <div className="space-y-5">
            <Skeleton className="w-auto h-[20px] rounded-3xl" />
            <Skeleton className="w-4/5 h-[20px] rounded-3xl" />
            <Skeleton className="w-5/6 h-[20px] rounded-3xl" />
            <Skeleton className="w-3/4 h-[20px] rounded-3xl" />
            <Skeleton className="w-1/2 h-[20px] rounded-3xl" />
          </div>

          <hr />
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsSkeleton;
