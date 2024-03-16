"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from '../ui/carousel'
import { Ibillboard } from '@/lib/types'
import Image from 'next/image'

interface HomeCarouselProps {
  billboard: Ibillboard
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({
  billboard
}) => {

  return (
    <main className='relative'>
      <Carousel className='sm:px-10 p-0'>
        <CarouselContent>
          {
            billboard?.images && billboard.images.map((image: { url: string }, index) => (
              <CarouselItem
                key={index}
                className='relative sm:w-full w-[20rem] h-[18rem] sm:h-[calc(100vh-10rem)] rounded-xl'
              >
                <Image src={image.url} fill alt='carouselImg' className='object-center object-contain md:object-cover' />
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <div className='absolute right-[160px] sm:block hidden top-1/2'>
          <CarouselNext />
        </div>

      </Carousel>
    </main>
  )
}

export default HomeCarousel