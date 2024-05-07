"use client";
import { Iproducts } from "@/lib/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { useParams } from "next/navigation";
import { setCartProduct } from "@/redux";
import Ratings from "./Ratings";
import { useUser } from "@clerk/nextjs";

interface ProductsPageProps {
  product: Iproducts;
}

const ProductCard: React.FC<ProductsPageProps> = ({ product }) => {
  const { isSignedIn } = useUser();
  const { storeId } = useParams();
  const dispatch = useAppDispatch();


  return (
    <div className="relative lg:m-0 md:m-0 mx-auto ">
      <Link prefetch={true} href={`/${storeId}/product/${product.id}`}>
        <section
          className="
          h-[25rem]
          md:w-auto
          w-[18rem]
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
          cursor-pointer"
        >
          <figure className="relative w-full sm:h-60 h-52 overflow-hidden">
            <Image
              className="object-contain overflow-hidden"
              src={product.images[0].url}
              alt="productImg"
              fill
            />
          </figure>
          <div className="flex flex-col gap-1 mt-auto">
            <h1 className="text-lg font-medium line-clamp-2">{product.name}</h1>
            <h1 className="text-neutral-400 ">₹{product.price}</h1>
            <Ratings value={product.ratings} />
          </div>
        </section>
      </Link>
      <Button
        onClick={() =>
          dispatch(
            setCartProduct({
              product,
              isSignedIn,
            })
          )
        }
        size="icon"
        variant="outline"
        className="absolute top-14 lg:right-14 md:right-10 left-2 z-10 rounded-full "
      >
        <ShoppingCart className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ProductCard;
