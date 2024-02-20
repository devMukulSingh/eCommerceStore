"use client"
import { Istore } from "@/lib/types"
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";

interface StoreProps {
    store: Istore
}

const Stores: React.FC<StoreProps> = ({
    store
}) => {

    const { userId } = useAuth();

    const { user } = useUser();

    const handleStore = async (storeId: string) => {
        //setting storeId in cookies
        await axios.post(`/api/storeId/${storeId}`);

        //setting storeId in localstorage
        if (typeof window !== "undefined") {
            localStorage.setItem('storeId', storeId);
            if (user?.primaryEmailAddress && userId) {
                const email = user.primaryEmailAddress || '';
                localStorage.setItem('userEmail', email.toString());
                localStorage.setItem('userId', userId);
            }
        }
    }
    return (
        <Link
            onClick={() => handleStore(store.id)}
            href={`/${store.id}`}
        >
            {store.name}
        </Link>
    )
}

export default Stores