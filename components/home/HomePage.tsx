"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getBillboard } from "@/redux/reducers/getBillboard";
import { useEffect } from "react";
import HomeCarousel from "./HomeCarousel";
import FeaturedSection from "./FeaturedSection";

const HomePage = () => {

    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch(getBillboard("17130cf5-0a55-4091-a16e-fc304b2e8790"));
    },[]);


    const billboard = useAppSelector(state => state.ecomm.billboard);

    return (
        <main className='py-4 space-y-10 lg:px-0 md:px-0 sm:px-0 px-10'>
            {
                billboard &&
                <>
                    <HomeCarousel/>
                    <FeaturedSection/>
                </>
            }
        </main>
    )
}

export default HomePage