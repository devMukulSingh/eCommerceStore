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
    <main className="flex gap-10 items-center">
        <figure className="relative h-[10rem] w-[15rem]">
            <Image
                className="rounded-md object-contain object-top" 
                src={cartItem.images[0].url} 
                fill 
                alt="cartProductImg"/>
        </figure>
        <section className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold">{cartItem.name}</h1>
            <h1 className="">₹{cartItem.price}</h1>
            <Button
                onClick={ handleRemoveFromCart }
                variant="ghost"
                size="icon">
                <Trash className="w-4 h-4"/>
            </Button>
        </section>
    </main>
  )
}

export default CartItem