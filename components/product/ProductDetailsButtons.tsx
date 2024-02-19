"use client"
import { useState } from 'react';
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setCartProduct } from '@/redux';
import axios from 'axios';
import { API_BASE_URL_CLIENT } from '@/constants/base_url_client';
import { Iproducts } from '@/types';
import { Loader } from 'lucide-react';

interface ProductDetailsButtonsProps{
    product:Iproducts
}

const ProductDetailsButtons:React.FC<ProductDetailsButtonsProps> = ({
    product
}) => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(setCartProduct(product));
    }
    const handleBuyNow = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post(`${API_BASE_URL_CLIENT}/checkout`, { data: [product.id] });
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
        <main className="flex gap-5 mt-auto">
            <Button
                variant="outline"
                onClick={handleBuyNow}
            >
                <Loader className={`${loading ? 'animate-spin mr-2' : 'hidden'} `} />
                Buy Now
            </Button>
            <Button
                onClick={handleAddToCart}
                disabled={loading}
            >Add to Cart
            </Button>
        </main>
    )
}

export default ProductDetailsButtons