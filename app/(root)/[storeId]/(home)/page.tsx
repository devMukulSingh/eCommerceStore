import { getBillboard } from "@/actions/getBillboard";
import { getBrands } from "@/actions/getBrands";
import { getFilteredProducts } from "@/actions/getFilteredProducts";
import FeaturedSection from "@/components/home/FeaturedSection";
import HomeCarousel from "@/components/home/HomeCarousel";
import { Iproducts } from "@/lib/types";


const HomePage = async ({
    searchParams
}: { searchParams: { brandId: string } }) => {

    const { brandId } = searchParams;

    const billboard = await getBillboard("17130cf5-0a55-4091-a16e-fc304b2e8790");

    const brands = await getBrands();

    const products: Iproducts[] = await getFilteredProducts({
        brandId,
    });

    return (

        <main className='py-4 space-y-10 lg:px-0 md:px-0 sm:px-0 px-5'>

            <HomeCarousel billboard={billboard} />
            <FeaturedSection brands={brands} products={products} />

        </main>
        
    )
}

export default HomePage;
