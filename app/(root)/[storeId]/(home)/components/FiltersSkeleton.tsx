import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const FiltersSkeleton = () => {
  return (
    <div className="hidden sm:flex sm:flex-col gap-3 py-5 px-3 border h-[15rem] w-[12rem] mt-10">
      <Skeleton className="rounded-xl h-4 w-full" />
      <Skeleton className="rounded-xl h-4 w-3/4" />
      <Skeleton className="rounded-xl h-4 w-4/5" />
      <Skeleton className="rounded-xl h-4 w-3/5" />
      <Skeleton className="rounded-xl h-4 w-4/5" />
      <Skeleton className="rounded-xl h-4 w-5/6" />
      <Skeleton className="rounded-xl h-4 w-3/4" />
      <Skeleton className="rounded-xl h-4 w-full" />
    </div>
  );
};

export default FiltersSkeleton;
