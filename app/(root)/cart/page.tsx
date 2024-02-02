"use client"
import CartItem from "@/components/cart/CartItem";
import { useAppSelector } from "@/redux/hooks"


const Cart = () => {

  const cartItems = useAppSelector( state => state.ecomm.cartProducts);
  console.log(cartItems);
  
  return (
    <main className="px-5 lg:px-20 md:px-10 py-5">
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
        {
          cartItems && cartItems.map( (cartItem) => (
            <CartItem cartItem = {cartItem}/>
          ))
        }
    </main>
  )
}

export default Cart