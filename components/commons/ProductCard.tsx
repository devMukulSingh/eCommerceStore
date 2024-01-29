import { Iproducts } from "@/types"
import Image from "next/image"

interface ProductsPageProps {
    product: Iproducts,
}

const ProductCard:React.FC<ProductsPageProps> = ({
    product
}) => {
  return (
    <main>
      <figure className="relative w-20 h-44 aspect-[4/3]">
        <Image src={ product.imageUrl} alt="productImg" fill /> 
      </figure>
    </main>
  )
}

export default ProductCard