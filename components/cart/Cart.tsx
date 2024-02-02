import { Iproducts } from '@/types'
import CartItem from "@/components/cart/CartItem";

interface CartProps{
    cartItems:Iproducts[]
}

const Cart:React.FC<CartProps> = ({
    cartItems
}) => {

  return (
    <main className='space-y-5 '>
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      <hr/>
        {
          cartItems && cartItems.map( (cartItem) => (
            <CartItem cartItem = {cartItem}/>
          ))
        }
    </main >
  )
}

export default Cart