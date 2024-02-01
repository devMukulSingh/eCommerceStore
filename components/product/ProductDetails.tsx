"use client"
import { Iproducts } from "@/types"
import Image from "next/image";

interface ProductDetailsProps{
    product : Iproducts 
}

const ProductDetails : React.FC<ProductDetailsProps> = ({
    product
}) => {
    console.log(product);
    
  return (

    <main className="flex gap-5 lg:flex-row flex-col ">

      <figure className="relative w-[30rem] h-[40rem]">
        <Image 
            src={product?.images?.[0]?.url} 
            alt='productImage'
            fill
            className="object-contain object-top "
            />
      </figure>

        <section className="flex w-[calc(100vw-35rem)] ">
            <div className="flex flex-col space-y-3 max-w-[50rem] h-fit">
                <h1 className="text-2xl font-medium">{product?.name}</h1>
                <h1 className="text-xl font-semibold">₹{product?.price}</h1>

                <h1 className="font-semibold text-xl">Details</h1>
                <div className="space-y-2 ml-5 basis-1/2">
                    {
                        product?.description.map( (desc) => (
                            <ul className="list-disc">
                                <li className="">{desc}</li>
                            </ul>
                        ))
                    }
                </div>
                <div className="flex gap-5 mt-auto">
                    <button >Buy Now</button>
                    <button>Add to Cart</button>
                </div>
            </div>

    </section>

    </main>
  )
}

export default ProductDetails