"use client"
import Cart from "@/components/cart/Cart";
import CartTotal from "@/components/cart/CartTotal";
import {  useAppSelector } from "@/redux/hooks";


const CartPage = () => {

  const cartProducts = useAppSelector( state => state.ecomm.cartProducts);

  return (
    <main className="flex flex-col items-center lg:flex-row lg:items-start gap-10 px-5 lg:px-15 md:px-10 py-10 ">
      <Cart cartProducts={cartProducts}/>
      {
        cartProducts?.length > 0 &&
        <CartTotal cartProducts={cartProducts}/>
      }
    </main>
  )
}

export default CartPage