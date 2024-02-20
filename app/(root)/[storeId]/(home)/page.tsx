import { getBillboard } from "@/actions/getBillboard";
import FeaturedSection from "@/components/home/FeaturedSection";
import HomeCarousel from "@/components/home/HomeCarousel";


const HomePage = async({
    searchParams
} : {searchParams : {brandId: string}}) => {

  const billboard = await getBillboard("17130cf5-0a55-4091-a16e-fc304b2e8790");
 const {brandId} = searchParams;
  return (
      <main className='py-4 space-y-10 lg:px-0 md:px-0 sm:px-0 px-5'>
          {
              billboard &&
              <>
                  <HomeCarousel billboard={billboard}/>
                  <FeaturedSection brandId={brandId}/>
              </>
          }
      </main>
  )
}

export default HomePage;
