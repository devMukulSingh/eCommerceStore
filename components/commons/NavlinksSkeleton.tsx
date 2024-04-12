import React from 'react'
import { Skeleton } from '../ui/skeleton'

const NavlinksSkeleton = () => {
  return (
    <div className="gap-5 lg:flex md:flex xl:flex hidden ">
      <Skeleton className="w-32 h-[20px] rounded-3xl" />
      <Skeleton className="w-32 h-[20px] rounded-3xl" />
      <Skeleton className="w-32 h-[20px] rounded-3xl" />
    </div>
  );
}

export default NavlinksSkeleton