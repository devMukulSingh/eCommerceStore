"use client"
import Cart from "@/components/cart/Cart";
import CartTotal from "@/components/cart/CartTotal";
import { useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react";


const CartPage = () => {

  const [isMounted, setIsMounted] = useState(false);
  const cartItems = useAppSelector( state => state.ecomm.cartProducts);
  // console.log(cartItems);

  useEffect( () => {
    setIsMounted(true);
  },[]);
  if( !isMounted) return null;

  return (
    <main className="flex flex-col items-center lg:flex-row lg:items-start gap-10 px-5 lg:px-15 md:px-10 py-10 ">
      <Cart cartItems={cartItems}/>
      {
        cartItems.length > 0 &&
        <CartTotal cartItems={cartItems}/>
      }
    </main>
  )
}

export default CartPage