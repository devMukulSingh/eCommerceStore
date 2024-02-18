"use client"
import { Istore } from "@/types"
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import { Link } from "lucide-react";

interface StoreProps{
    store:Istore
}

const Stores:React.FC<StoreProps> = ({
    store
}) => {

    const { userId } = useAuth();

    const {user } = useUser();

    const handleStore = async(storeId:string) => {

        await axios.post(`/api/${storeId}`);
        
        if(typeof window !=="undefined"){
            localStorage.setItem('storeId',storeId);
            if(user?.primaryEmailAddress && userId){
                const email = user.primaryEmailAddress || '';
                 localStorage.setItem('userEmail',email.toString() );
                localStorage.setItem('userId',userId);
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