import { Iproducts } from '@/types'
import CartItem from "@/components/cart/CartItem";
import EmptyCart from './EmptyCart';

interface CartProps {
  cartProducts: Iproducts[]
}

const Cart: React.FC<CartProps> = ({
  cartProducts
}) => {

  return (
    <main className='flex flex-col gap-5 min-h-[calc(90vh-27rem)] w-full'>
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      <hr />
      {
        cartProducts && cartProducts.length > 0 ?
          cartProducts && cartProducts.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))
          :
          <EmptyCart />
      }
    </main >
  )
}

export default Cart