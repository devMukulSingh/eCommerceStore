"use client"
import { setCartProduct } from "@/redux";
import { useAppDispatch } from "@/redux/hooks";
import { Iproducts } from "@/types"
import Image from "next/image";
import { Button } from "../ui/button";
//@ts-ignore
import  ReactStars  from "react-rating-stars-component";
import { Loader } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "@/constants/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface ProductDetailsProps{
    product : Iproducts 
}

const ProductDetails : React.FC<ProductDetailsProps> = ({
    product
}) => {

    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();
    
    const handleAddToCart = () => {
        dispatch(setCartProduct(product));
    }
    const handleBuyNow = async() => {
        setLoading(true);
        try{
            const {data} = await axios.post(`${BASE_URL}/checkout`, { data : [product.id] } ); 
            router.push(data.url);
        }
        catch(e){
            console.log(`Error in handleCheckout ${e}`);
        }
        finally{
            setLoading(false);
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
                <div className="flex items-center gap-2">
                    <h1 className="font-semibold text-neutral-400">Ratings</h1>
                    <ReactStars 
                        count={5}
                        value={product.ratings}
                        edit={false}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />  
                </div>

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
                    <Button 
                        variant="outline"
                        onClick={ handleBuyNow }
                        >
                        <Loader className={`${loading ? 'animate-spin mr-2' : 'hidden'} `}/>
                        Buy Now
                    </Button>
                    <Button 
                        onClick={ handleAddToCart}
                        disabled={loading}
                        >Add to Cart
                    </Button>
                </div>
            </div>

    </section>

    </main>
  )
}

export default ProductDetails