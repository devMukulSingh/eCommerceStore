"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getBillboard } from "@/redux/reducers/getBillboard";
import { getProducts } from "@/redux/reducers/getProducts";
import Image from "next/image";
import { useEffect } from "react";
import ProductCard from "../commons/ProductCard";
import { Iproducts } from "@/types";
import Filters from "./Filters";

const HomePage = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBillboard("c7c4ce51-ca94-42fd-8c32-42a3531c647b"));
        dispatch(getProducts());
    }, [])
    const billboard = useAppSelector(state => state.ecomm.billboard);
    const products: Iproducts[] = useAppSelector(state => state.ecomm.products);

    console.log(products);

    return (
        //TODO: add carousel in home page
        <main className='py-4 space-y-10'>
            {
                billboard &&
                <>
                    <figure className="relative aspect-video w-full lg:h-[25rem] md:h-[30rem] sm:h-[35rem]">
                        <Image
                            className="object-cover  object-top"
                            src={billboard.imageUrl}
                            alt="billboardImage"
                            fill />
                    </figure>
                    <section className="flex gap-10 md:px-8 sm:px-5">
                        <Filters />
                        <div className="">
                            <h1 className="text-3xl font-bold underline text-center lg:text-left md:text-left ">
                                Featured Collection
                            </h1>
                            <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 sm:mx-auto sm:w-full ">

                                {
                                    products && products.map((product) => {
                                        if (product.isFeatured) return <ProductCard product={product} key={product.id} />
                                    })

                                }
                            </div>
                        </div>
                    </section>
                </>
            }
        </main>
    )
}

export default HomePage