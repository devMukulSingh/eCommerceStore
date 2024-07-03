'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import useSWR from "swr";
import { API_BASE_URL_CLIENT } from "@/lib/base_url_client";
import toast from "react-hot-toast";
import { fetcher } from "@/lib/utils";

interface HomeCarouselProps {}

const HomeCarousel: React.FC<HomeCarouselProps> = async () => {
  const { data:billboard,isLoading} = useSWR(
    `${API_BASE_URL_CLIENT}/billboard/25628a9a-b840-4ba0-8690-2e3bde751d2a`,fetcher,{
      onError(e){
        toast.error(`Something went wrong ,please try again later`)
        console.log(`Error in get Billboards`,e);
      }
    }
  );
  return (
    <div className="relative">
      <Carousel className="sm:px-10 p-0">
        <CarouselContent>
          {billboard?.images &&
            billboard.images.map((image: { url: string }, index: number) => (
              <CarouselItem
                key={index}
                className="relative sm:w-full w-[20rem] h-[18rem] sm:h-[calc(100vh-10rem)] rounded-xl"
              >
                <Image
                  loading="lazy"
                  src={image.url}
                  fill
                  alt="carouselImg"
                  className="object-center object-contain md:object-cover"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="absolute right-[160px] sm:block hidden top-1/2">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
