"use client"
import { Iproducts } from '@/types'
import { Button } from '../ui/button'
import axios from 'axios'
import { BASE_URL } from '@/constants/constants'
import { useRouter } from 'next/navigation'

interface CartTotalProps{
    cartItems : Iproducts[],
}
const CartTotal:React.FC<CartTotalProps> = ({
    cartItems
}) => {

    const router = useRouter();
    const handleCheckout = async() => {
        const productIds = cartItems.map( item => item.id);
        console.log(productIds);
    
        try{
            const {data} = await axios.post(`${BASE_URL}/checkout`,productIds);
            router.push(data.url);
   
        }
        catch(e){
            console.log(`Error in handleCheckout ${e}`);
        }
    }
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
                <Button onClick={ handleCheckout }>
                    Proceed To Checkout
                </Button>
        </section>
    </main>
  )
}

export default CartTotal