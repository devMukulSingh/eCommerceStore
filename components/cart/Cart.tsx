import { Iproducts } from '@/types'
import CartItem from "@/components/cart/CartItem";
import EmptyCart from './EmptyCart';

interface CartProps{
    cartItems:Iproducts[]
}

const Cart:React.FC<CartProps> = ({
    cartItems
}) => {

  return (
    <main className='flex flex-col gap-5 '>
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      <hr/>
      {
        cartItems && cartItems.length > 0 ?
          cartItems && cartItems.map( (cartItem) => (
            <CartItem cartItem = {cartItem}/>
            ))
            :
            <EmptyCart/>
      }
    </main >
  )
}

export default Cart