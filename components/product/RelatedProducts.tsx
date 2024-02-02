"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/reducers/getProducts";
import { useEffect } from "react";
import ProductCard from "../commons/ProductCard";
import { useParams } from "next/navigation";

interface RealtedProductsProps{
  categoryId : string
}
const RelatedProducts:React.FC<RealtedProductsProps> = (
  { categoryId}
) => {
  
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  useEffect( () => {
    dispatch(getProducts());
  },[categoryId]);

  const products = useAppSelector( state => state.ecomm.products);
  const relatedProducts = products.filter(product => product.categoryId === categoryId && product.id !== productId );

  return (
    <main className="px-5 lg:px-20 md:px-10">
      <h1 className="text-3xl font-semibold underline">Related Products</h1>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5">
      {
        relatedProducts && relatedProducts.map(  product => (
          <ProductCard product={product} key={product.id}/>
          ))
        }
        </section>
    </main>
  )
}

export default RelatedProducts