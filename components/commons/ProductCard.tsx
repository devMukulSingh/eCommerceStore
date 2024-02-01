import { Iproducts } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface ProductsPageProps {
    product: Iproducts,
}

const ProductCard:React.FC<ProductsPageProps> = ({
    product
}) => {
  return (
    <Link 
      href={`/product/${product.id}`}
      
    >
      <main 
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
        <h1 className="text-lg font-medium self-start">{product.name}</h1>
        <h1 className="text-neutral-400 self-start">₹{product.price}</h1>
      </main>
    </Link>

  )
}

export default ProductCard