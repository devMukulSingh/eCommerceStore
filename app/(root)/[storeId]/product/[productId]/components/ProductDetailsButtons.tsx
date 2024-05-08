"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setCartProduct } from "@/redux";
import axios from "axios";
import { API_BASE_URL_CLIENT } from "@/lib/base_url_client";
import { Iproducts } from "@/lib/types";
import { Loader } from "lucide-react";
import { useUser } from "@clerk/nextjs";

interface ProductDetailsButtonsProps {
  product: Iproducts;
}

const ProductDetailsButtons: React.FC<ProductDetailsButtonsProps> = ({
  product,
}) => {
  const { isSignedIn } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleBuyNow = async () => {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE_URL_CLIENT}/checkout`, {
        productIds: [product.id],
      });
      router.push(data.url);
    } catch (e) {
      console.log(`Error in handleCheckout ${e}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex gap-5 mt-auto">
      <Button disabled={loading} variant="outline" onClick={handleBuyNow}>
        <Loader className={`${loading ? "animate-spin mr-2" : "hidden"} `} />
        Buy Now
      </Button>
      <Button
        onClick={() =>
          dispatch(
            setCartProduct({
              product,
              isSignedIn,
            }),
          )
        }
        disabled={loading}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductDetailsButtons;
