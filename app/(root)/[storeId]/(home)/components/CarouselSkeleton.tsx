import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const CarouselSkeleton = () => {
  return (
    <>
      <Skeleton className="sm:w-full w-[20rem] h-[18rem] sm:h-[calc(100vh-10rem)] rounded-md" />
    </>
  );
}

export default CarouselSkeleton