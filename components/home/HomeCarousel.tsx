"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from '../ui/carousel'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'

const HomeCarousel = () => {

  const images = useAppSelector(state => state.ecomm.billboard)?.images;

  return (
    <main className=' p-5 relative border'>
      <Carousel className='px-10 '>
        <CarouselContent>
          {
            images && images.map((image: { url:string}) => (
              <CarouselItem className='relative w-full h-[calc(100vh-10rem)] rounded-xl'>
                <Image src={image.url} fill alt='carouselImg' className='object-center object-cover' />
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <div className='absolute right-40 top-1/2'>
          <CarouselNext />
        </div>

      </Carousel>
    </main>
  )
}

export default HomeCarousel