"use client";
import { Iproducts } from "@/lib/types";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { API_BASE_URL_CLIENT } from "@/lib/base_url_client";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { Loader } from "lucide-react";
import { storeId } from "@/lib/constants";

interface CartTotalProps {
  cartProducts: Iproducts[];
}
const CartTotal: React.FC<CartTotalProps> = ({ cartProducts }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const totalPrice = cartProducts
    .map((item) => item.price)
    .reduce((prevPrice, currPrice) => prevPrice + currPrice);

  const handleCheckout = async () => {
    // const { data } = await axios.post(`${BASE_URL}/precheckout`,{cartProducts,totalPrice})
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
    const productIds = cartProducts.map((item) => item.id);

    try {
      const { data } = await axios.post(`${API_BASE_URL_CLIENT}/checkout`, {
        productIds,
        storeId,
      });
      router.push(data.url);
    } catch (e) {
      console.log(`Error in handleCheckout ${e}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        src="{HOST}/merchantpgpui/checkoutjs/merchants/{MID}.js"
        crossOrigin="anonymous"
      ></Script>
      <div className=" lg:ml-auto ">
        <section className="p-5 shadow-neutral-400 shadow-inner w-[25rem] border flex flex-col items-center gap-5">
          <h1 className="text-2xl font underline -semibold">Subtotal</h1>
          <div className="space-y-2">
            {cartProducts &&
              cartProducts.map((item) => (
                <ul key={item.id}>
                  <li>₹{item.price}</li>
                </ul>
              ))}
          </div>
          <hr className="w-32" />
          <h1 className="text-2xl font-semibold">₹{totalPrice}</h1>
          <Button onClick={handleCheckout} disabled={loading}>
            <Loader
              className={`${loading ? "animate-spin mr-2" : "hidden"} `}
            />
            Proceed To Checkout
          </Button>
        </section>
      </div>
    </>
  );
};

export default CartTotal;
