import { Iproducts } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { setCartProduct } from "@/redux"
import { useAppDispatch } from "@/redux/hooks"
//@ts-ignore
import ReactStars from "react-rating-stars-component";


interface ProductsPageProps {
  product: Iproducts,
}

const ProductCard: React.FC<ProductsPageProps> = ({
  product
}) => {

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(setCartProduct(product));
  }

  return (
    <main className="relative lg:m-0 md:m-0 mx-auto ">
      <Link href={`/product/${product.id}`}>
        <section
          className="
          h-[28rem]
          flex
          flex-col
          items-center
          gap-4
          border 
          mt-10 
          px-4
          py-5
          shadow-lg 
          rounded-md 
          transition 
          ease-in-out 
          hover:scale-110 
          hover:shadow-slate-700
          cursor-pointer">
          <figure className="relative w-full h-60 overflow-hidden">
            <Image
              className="object-contain overflow-hidden"
              src={product.images[0].url}
              alt="productImg" fill />
          </figure>
          <div className="flex flex-col gap-1 mt-auto">
            <h1 className="text-lg font-medium line-clamp-2">{product.name}</h1>
            <h1 className="text-neutral-400 ">₹{product.price}</h1>
            <div className="">
              <ReactStars
                count={5}
                value={product.ratings}
                edit={false}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </section>
      </Link>
      <Button
        onClick={handleAddToCart}
        size="icon"
        variant="outline"
        className="absolute top-14 lg:right-14 md:right-10 left-2 z-10 rounded-full ">
        <ShoppingCart className="w-6 h-6" />
      </Button>
    </main>

  )
}

export default ProductCard