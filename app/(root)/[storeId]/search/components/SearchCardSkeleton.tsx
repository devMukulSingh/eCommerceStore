import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SearchCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 px-5 lg:px-20 md:px-10 py-5 ">
      <h1 className="text-3xl font-bold">Results</h1>
      <div className="flex gap-5 p-5 border ">
        <Skeleton className="w-52 h-52 rounded-md" />

        <div className="flex flex-col gap-5 w-full">
            <div className="space-y-3">
          <Skeleton className="w-3/4 h-[25px] rounded-3xl" />
          <Skeleton className="w-1/2 h-[25px] rounded-3xl" />
            </div>
            <div className="space-y-5">
          <Skeleton className="w-40 h-[35px] rounded-full" />
          <Skeleton className="w-52 h-[25px] rounded-3xl" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardSkeleton;
