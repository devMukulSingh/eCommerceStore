"use client"
import { Iproducts } from '@/types'
import { Button } from '../ui/button'
import axios from 'axios'
import { BASE_URL } from '@/constants/base_url'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'
import { Loader } from 'lucide-react'

interface CartTotalProps {
    cartItems: Iproducts[],
}
const CartTotal: React.FC<CartTotalProps> = ({
    cartItems
}) => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const totalPrice = cartItems.map(item => item.price).reduce((prevPrice, currPrice) => prevPrice + currPrice)

    const handleCheckout = async () => {

        // const { data } = await axios.post(`${BASE_URL}/precheckout`,{cartItems,totalPrice})
        // let config = {
        //     "root": "",
        //     "flow": "DEFAULT",
        //     "data": {
        //     "orderId": "", /* update order id */
        //     "token": "", /* update token value */
        //     "tokenType": "TXN_TOKEN",
        //     "amount": "" /* update amount */
        //     },
        //     "handler": {
        //     "notifyMerchant": function(eventName,data){
        //     console.log("notifyMerchant handler function called");
        //     console.log("eventName => ",eventName);
        //     console.log("data => ",data);
        //     }
        //     }
        //     };

        //     // initialze configuration using init method
        //     window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
        //     // after successfully updating configuration, invoke JS Checkout
        //     window.Paytm.CheckoutJS.invoke();
        //     }).catch(function onError(error){
        //     console.log("error => ",error);
        //     });

        setLoading(true);
        const productIds = cartItems.map(item => item.id);
        try {
            const { data } = await axios.post(`${BASE_URL}/checkout`, { data: productIds });
            router.push(data.url);
        }
        catch (e) {
            console.log(`Error in handleCheckout ${e}`);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <>
            <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>
            <Script type="application/javascript" src="{HOST}/merchantpgpui/checkoutjs/merchants/{MID}.js" crossOrigin="anonymous"></Script>
            <main className='h-screen lg:ml-auto '>
                <section className='p-5 w-[25rem] border flex flex-col items-center gap-5'>
                    <h1 className='text-2xl font underline -semibold'>Subtotal</h1>
                    <div className='space-y-2'>
                        {
                            cartItems && cartItems.map((item) => (
                                <ul>
                                    <li>₹{item.price}</li>
                                </ul>
                            ))
                        }
                    </div>
                    <hr className='w-32' />
                    <h1 className='text-2xl font-semibold'>
                        ₹{totalPrice}
                    </h1>
                    <Button onClick={handleCheckout} disabled={loading}>
                        <Loader className={`${loading ? 'animate-spin mr-2' : 'hidden'} `} />
                        Proceed To Checkout
                    </Button>
                </section>
            </main>
        </>
    )
}

export default CartTotal