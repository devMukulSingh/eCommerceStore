import { getBillboard } from "@/actions/getBillboard";
import { getBrands } from "@/actions/getBrands";
import { getFilteredProducts } from "@/actions/getFilteredProducts";
import FeaturedSection from "@/components/home/FeaturedSection";
import HomeCarousel from "@/components/home/HomeCarousel";
import { Ibrand, Iproducts } from "@/lib/types";
import { Suspense } from "react";


const HomePage = async ({
    searchParams
}: { searchParams: { brandId: string } }) => {

    const { brandId } = searchParams;

    const billboard = await getBillboard("25628a9a-b840-4ba0-8690-2e3bde751d2a");
    
    const brands:Ibrand[] = await getBrands();

    const products: Iproducts[] = await getFilteredProducts({
        brandId,
    });
    return (

        <main className='py-4 space-y-10 lg:px-0 md:px-0 sm:px-0 px-5'>
            <Suspense fallback={<h1>loading billboard</h1>}>
                <HomeCarousel billboard={billboard} />
            </Suspense>
            <Suspense fallback={<h1>loading featured products</h1>}>
                <FeaturedSection brands={brands} products={products}/>
            </Suspense>

        </main >

    )
}

export default HomePage;
