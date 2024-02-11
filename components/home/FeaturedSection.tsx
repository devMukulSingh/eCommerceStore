import { useAppSelector } from "@/redux/hooks";
import { Iproducts } from "@/types";
import Filters from "./Filters";
import ProductCard from "../commons/ProductCard";


const FeaturedSection = () => {
    const products: Iproducts[] = useAppSelector(state => state.ecomm.products);
    return (
        <main className="flex gap-10 md:px-8 sm:px-5">
            <Filters />
            <div className="">
                <h1 className="text-3xl font-bold underline text-center lg:text-left md:text-left ">
                    Featured Collection
                </h1>
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