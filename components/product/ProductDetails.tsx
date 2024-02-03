"use client"
import { setCartProduct } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Iproducts } from "@/types"
import Image from "next/image";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

interface ProductDetailsProps{
    product : Iproducts 
}

const ProductDetails : React.FC<ProductDetailsProps> = ({
    product
}) => {

    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector( state=> state.ecomm.cartProducts);
    console.log(cartProducts);
    
    const handleAddToCart = () => {
        if(!cartProducts?.find( item => item.id === product.id)){
            dispatch(setCartProduct(product));
            toast.success("Item added to Cart");
        }
        else{
            toast.error("Item already in Cart");
        }
    }
    
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
                <hr/>
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
                <hr/>
                <div className="flex gap-5 mt-auto">
                    <Button variant="outline" >Buy Now</Button>
                    <Button 
                        onClick={ handleAddToCart}
                        >Add to Cart
                    </Button>
                </div>
            </div>

    </section>

    </main>
  )
}

export default ProductDetails