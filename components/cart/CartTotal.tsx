import { Iproducts } from '@/types'
import React from 'react'
import { Button } from '../ui/button'

interface CartTotalProps{
    cartItems : Iproducts[],
}
const CartTotal:React.FC<CartTotalProps> = ({
    cartItems
}) => {
  return (
    <main className='h-screen lg:ml-auto '>
        <section className='p-5 w-[25rem] border flex flex-col items-center gap-5'>
            <h1 className='text-2xl font underline -semibold'>Subtotal</h1>
                <div className='space-y-2'>
                    {
                        cartItems && cartItems.map( (item) => (
                            <ul>
                                <li>₹{item.price}</li>
                            </ul>
                        ))
                    }
                </div>
                <hr className='w-32'/>
                <h1 className='text-2xl font-semibold'>
                    ₹{cartItems.map(item => item.price).reduce( (prevPrice,currPrice) => prevPrice+currPrice)}
                </h1>
                <Button>
                    Proceed To Checkout
                </Button>
        </section>
    </main>
  )
}

export default CartTotal