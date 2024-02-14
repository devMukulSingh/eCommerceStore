"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getStores } from "@/redux/reducers/getStores";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";


export default function RootPage() {
    const dispatch = useAppDispatch();  
    const { userId } = useAuth();
    const {user } = useUser();

    useEffect(() => {
        dispatch(getStores());
    }, []);

    const stores = useAppSelector(state => state.ecomm.stores);
    const handleStore = async(storeId:string) => {
        await axios.post(`/api/${storeId}`);
        localStorage.setItem('storeId',storeId);
        if(user?.primaryEmailAddress && userId){
            const email = user.primaryEmailAddress || '';
             localStorage.setItem('userEmail',email.toString() );
            localStorage.setItem('userId',userId);
        }
    }
    return (
        <>
            <main className="flex justify-center items-center w-screen h-screen">
                <section className="flex flex-col gap-5 py-5 px-5 pr-10 min-h-[20rem] border">
                    <h1 className="text-2xl font-semibold">Select Store</h1>
                    <div className="flex flex-col gap-3">

                        {
                            stores && stores.map((store) => (
                                <Link
                                    onClick={ () => handleStore(store.id) }
                                    href={`/${store.id}`}
                                >
                                    {store.name}
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}