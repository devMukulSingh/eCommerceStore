import { Iproducts } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { setCartProduct } from "@/redux"
import { useAppDispatch } from "@/redux/hooks"

interface ProductsPageProps {
    product: Iproducts,
}

const ProductCard:React.FC<ProductsPageProps> = ({
    product
}) => {
  
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(setCartProduct(product));
  }

  return (
    <main className="relative">
      <Link href={`/product/${product.id}`}>
        <section 
          className="
          max-w-[20rem]
          flex
          flex-col
          items-center
          gap-4
          border 
          mt-10 
          h-[25rem]
          px-4
          py-10
          shadow-lg 
          rounded-md 
          transition 
          ease-in-out 
          hover:scale-110 
          hover:shadow-slate-700
          cursor-pointer">
          <figure className="relative w-64 h-60 ">
            <Image 
              className="object-contain"
              src={ product.images[0].url} 
              alt="productImg" fill /> 
          </figure>
          <h1 className="text-lg font-medium self-start line-clamp-2">{product.name}</h1>
          <h1 className="text-neutral-400 self-start">₹{product.price}</h1>
      </section>
      </Link>
          <Button 
            onClick={ handleAddToCart }
            size="icon"
            variant="outline"
            className="absolute top-14 right-14 z-10 rounded-full ">
            <ShoppingCart className="w-6 h-6"/>
          </Button>
      </main>

  )
}

export default ProductCard