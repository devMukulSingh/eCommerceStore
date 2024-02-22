
import { Ibrand, Iproducts } from "@/lib/types";
import ProductCard from "../commons/ProductCard";
import Filter from "../category/Filter";
import NoResuts from "../commons/NoResuts";
import { getBrands } from "@/actions/getBrands";
import { getFilteredProducts } from "@/actions/getFilteredProducts";

interface FeaturedSectionProps {
    brands: Ibrand[],
    products : Iproducts[]
}

const FeaturedSection: React.FC<FeaturedSectionProps> = async ({
    brands,
    products
}) => {


    // const products: Iproducts[] = await getFilteredProducts({
    //     brandId,
    // });

    return (
        <>
            {
                
                <main className="flex gap-10 md:px-8 sm:px-2 ">

                    <Filter filter={brands} heading="Brands" valueKey="brandId" />
                    <div className="flex flex-col w-full">
                        <h1 className="sm:text-3xl text-2xl text-nowrap font-bold underline text-center lg:text-left md:text-left ">
                            Featured Collection
                        </h1>
                        {products?.length == 0 && <NoResuts />}
                        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 sm:mx-auto sm:w-full ">

                            {
                                products.map((product) => {
                                    if (product.isFeatured) return <ProductCard product={product} key={product.id} />
                                })

                            }
                        </div>
                    </div>
                </main>
            }
        </>
    )
}

export default FeaturedSection