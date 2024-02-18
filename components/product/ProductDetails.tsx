import { Iproducts } from "@/types"
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

            <figure className="relative w-[30rem] h-[35rem]">
                <Image
                    src={product?.images?.[0]?.url}
                    alt='productImage'
                    fill
                    className="object-contain object-top "
                />
            </figure>

            <section className="flex w-[calc(100vw-35rem)] h-full">
                <div className="flex flex-col space-y-3 max-w-[50rem] h-fit">
                    <h1 className="text-2xl font-medium">{product?.name}</h1>
                    <h1 className="text-xl font-semibold">₹{product?.price}</h1>
                
                    <Ratings value={product.ratings}/>

                    <hr />
                    <DetailsSection product={product}/>
                    <hr />

                    <ProductDetailsButtons product={product}/> 

                </div>

            </section>

        </main>
    )
}

export default ProductDetails