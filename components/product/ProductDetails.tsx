import { Iproducts } from "@/lib/types"
import Image from "next/image";

import ProductDetailsButtons from "./ProductDetailsButtons";
import Ratings from "@/components/commons/Ratings";
import DetailsSection from "./DetailsSection";

interface ProductDetailsProps {
    product: Iproducts
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    product
}) => {

    return (

        <main className="flex gap-5 lg:flex-row flex-col ">

            <figure className="relative sm:w-[30rem] sm:h-[35rem] w-[18rem] h-[20rem] ">
                <Image
                    src={product?.images?.[0]?.url}
                    alt='productImage'
                    fill
                    className="object-contain object-top "
                />
            </figure>

            <section className="flex w-full lg:w-[calc(100vw-35rem)] h-full">
                <div className="flex flex-col space-y-3 w-full md:max-w-[50rem] h-fit">
                    <h1 className="sm:text-2xl text-xl font-medium">{product?.name}</h1>
                    <h1 className="text-xl font-semibold">₹{product?.price}</h1>

                    <Ratings value={product.ratings} />

                    <hr />
                    <DetailsSection product={product} />
                    <hr />

                    <ProductDetailsButtons product={product} />

                </div>

            </section>

        </main>
    )
}

export default ProductDetails