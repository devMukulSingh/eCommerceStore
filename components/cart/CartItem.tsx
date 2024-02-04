"use client"
import { Iproducts } from "@/types"
import Image from "next/image"
import { Button } from "../ui/button"
import { Trash } from "lucide-react"
import { useAppDispatch } from "@/redux/hooks"
import { removeCartProduct } from "@/redux"

interface CartItemProps{
    cartItem : Iproducts
}
const CartItem:React.FC<CartItemProps> = ({
    cartItem
}) => {

    const dispatch = useAppDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeCartProduct(cartItem.id));
    }
  return (
    <>
    <main className="flex items-center">
        <figure className="relative h-[10rem] min-w-[15rem]">
            <Image
                className="rounded-md object-contain object-top" 
                src={cartItem.images[0].url} 
                fill 
                alt="cartProductImg"/>
        </figure>
        <section className="flex flex-col gap-2 ">
            <h1 className="text-xl font-semibold line-clamp-2">{cartItem.name}</h1>
            <h1 className="text-lg text-neutral-400">₹{cartItem.price}</h1>
            <Button
                onClick={ handleRemoveFromCart }
                size="icon"
                variant="ghost"
                className="mt-auto"
                >
                <Trash className=""/>
            </Button>
        </section>
    </main>
        <hr/>
    </>
  )
}

export default CartItem