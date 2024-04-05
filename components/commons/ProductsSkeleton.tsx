import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProductsSkeleton = () => {
  return (
    <div className="w-full">
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 ">
        <div className="relative lg:m-0 md:m-0 mx-auto ">
          <section
            className="
          h-[25rem]
          md:w-auto
          w-[18rem]
          flex
          flex-col
          items-center
          gap-4
          border 
          mt-10 
          px-4
          py-5
          shadow-lg 
          rounded-md 
          cursor-pointer"
          >
            <Skeleton className="w-full sm:h-[70%] h-52" />

            <div className="flex flex-col gap-2 w-full mt-auto ">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-3/4 h-5" />
              <Skeleton className="w-1/2 h-5" />
            </div>
          </section>
        </div>
        <div className="relative lg:m-0 md:m-0 mx-auto ">
          <section
            className="
          h-[25rem]
          md:w-auto
          w-[18rem]
          flex
          flex-col
          items-center
          gap-4
          border 
          mt-10 
          px-4
          py-5
          shadow-lg 
          rounded-md 
          cursor-pointer"
          >
            <Skeleton className="w-full sm:h-[70%] h-52" />

            <div className="flex flex-col gap-2 w-full mt-auto ">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-3/4 h-5" />
              <Skeleton className="w-1/2 h-5" />
            </div>
          </section>
        </div>
        <div className="relative lg:m-0 md:m-0 mx-auto ">
          <section
            className="
          h-[25rem]
          md:w-auto
          w-[18rem]
          flex
          flex-col
          items-center
          gap-4
          border 
          mt-10 
          px-4
          py-5
          shadow-lg 
          rounded-md 
          cursor-pointer"
          >
            <Skeleton className="w-full sm:h-[70%] h-52" />

            <div className="flex flex-col gap-2 w-full mt-auto ">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-3/4 h-5" />
              <Skeleton className="w-1/2 h-5" />
            </div>
          </section>
        </div>
        <div className="relative lg:m-0 md:m-0 mx-auto ">
          <section
            className="
          h-[25rem]
          md:w-auto
          w-[18rem]
          flex
          flex-col
          items-center
          gap-4
          border 
          mt-10 
          px-4
          py-5
          shadow-lg 
          rounded-md 
          cursor-pointer"
          >
            <Skeleton className="w-full sm:h-[70%] h-52" />

            <div className="flex flex-col gap-2 w-full mt-auto ">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-3/4 h-5" />
              <Skeleton className="w-1/2 h-5" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductsSkeleton;
