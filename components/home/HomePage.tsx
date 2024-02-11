"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getBillboard } from "@/redux/reducers/getBillboard";
import { getProducts } from "@/redux/reducers/getProducts";
import Image from "next/image";
import { useEffect } from "react";
import ProductCard from "../commons/ProductCard";
import { Iproducts } from "@/types";
import Filters from "./Filters";
import HomeCarousel from "./HomeCarousel";

const HomePage = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBillboard("17130cf5-0a55-4091-a16e-fc304b2e8790"));
        dispatch(getProducts());
    }, [])
    const billboard = useAppSelector(state => state.ecomm.billboard);
    console.log(billboard);

    const products: Iproducts[] = useAppSelector(state => state.ecomm.products);


    return (
        //TODO: add carousel in home page
        <main className='py-4 space-y-10 lg:px-0 md:px-0 sm:px-0 px-10'>
            {
                billboard &&
                <>
                    <HomeCarousel/>
                    {/* <figure className="relative aspect-video w-full lg:h-[25rem] md:h-[30rem] sm:h-[35rem]">
                        <Image
                            className="object-cover  object-top"
                            src={billboard.imageUrl}
                            alt="billboardImage"
                            fill />
                    </figure> */}
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