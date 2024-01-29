"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getBillboard } from "@/redux/reducers/getBillboard";
import { getProducts } from "@/redux/reducers/getProducts";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductCard from "../commons/ProductCard";
import { Iproducts } from "@/types";

const HomePage = () => {

    const dispatch = useAppDispatch();
    useEffect( () => {
        dispatch(getBillboard("c7c4ce51-ca94-42fd-8c32-42a3531c647b"));
        dispatch(getProducts());
    },[])
    const billboard  = useAppSelector( state => state.ecomm.billboard);
    const products:Iproducts[] = useAppSelector( state => state.ecomm.products);

    console.log(billboard);
    
  return (
    //TODO: add carousel in home page
    <main className='p-4 space-y-10'>
        {
        billboard && 
            <figure className="relative aspect-video w-full lg:h-[25rem] md:h-[30rem] sm:h-[35rem]">
                <Image
                    className="object-cover  object-top" 
                    src={billboard.imageUrl} 
                    alt="billboardImage" 
                    fill />    
            </figure>
        }
        <section>
            <h1 className="text-3xl font-bold underline">
                Featured Collection
            </h1>
            {
                products && products.map( (product) => {
                    if(product.isFeatured) return <ProductCard product={product} key={product.id}/>
                })
                
            }
        </section>
    </main> 
  )
}

export default HomePage