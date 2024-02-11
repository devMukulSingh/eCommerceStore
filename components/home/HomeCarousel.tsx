"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from '../ui/carousel'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'

const HomeCarousel = () => {

  const images = useAppSelector(state => state.ecomm.billboard)?.images;

  return (
    <main className='relative'>
      <Carousel className='sm:px-10 p-0'>
        <CarouselContent>
          {
            images && images.map((image: { url: string }) => (
              <CarouselItem className='relative w-full h-[15rem] sm:h-[calc(100vh-10rem)] rounded-xl'>
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