"use client"
import Cart from "@/components/cart/Cart";
import CartTotal from "@/components/cart/CartTotal";
import { useAppSelector } from "@/redux/hooks"


const CartPage = () => {

  const cartItems = useAppSelector( state => state.ecomm.cartProducts);
  console.log(cartItems);
  
  return (
    <main className="flex gap-10 px-5 lg:px-20 md:px-10 py-10">
      <Cart cartItems={cartItems}/>
      <CartTotal cartItems={cartItems}/>
    </main>
  )
}

export default CartPage