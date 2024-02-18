
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Iproducts } from "@/types";
import ProductCard from "../commons/ProductCard";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Filter from "../category/Filter";
import NoResuts from "../commons/NoResuts";
import { getBrands } from "@/actions/getBrands";
import { getFilteredProducts } from "@/actions/getFilteredProducts";

interface FeaturedSectionProps{
    brandId:string
}

const FeaturedSection:React.FC<FeaturedSectionProps> = async ({
    brandId
}) => {

    const brands = await getBrands();
    
    const products: Iproducts[] = await getFilteredProducts({
        brandId,
    });

    return (
        <main className="flex gap-10 md:px-8 sm:px-5">
            <Filter filter={brands} heading="Brands" valueKey="brandId" />
            <div className="">
                <h1 className="text-3xl font-bold underline text-center lg:text-left md:text-left ">
                    Featured Collection
                </h1>
                {products?.length == 0 && <NoResuts />}
                <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 sm:mx-auto sm:w-full ">

                    {
                        products && products.map((product) => {
                            if (product.isFeatured) return <ProductCard product={product} key={product.id} />
                        })

                    }
                </div>
            </div>
        </main>
    )
}

export default FeaturedSection