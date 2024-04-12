"use client";
import { Istore } from "@/lib/types";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";

interface StoreProps {
  store: Istore;
}

const Stores: React.FC<StoreProps> = ({ store }) => {
  const { userId } = useAuth();

  const { user } = useUser();

  const handleStore = async (storeId: string) => {
    //setting storeId in cookies
    await fetch(`/api/storeId/${storeId}`,{
      method:"POST",
      
    });

    //setting storeId in localstorage
    if (typeof window !== "undefined") {
      localStorage.setItem("storeId", storeId);
      if (user?.primaryEmailAddress && userId) {
        const email = user.primaryEmailAddress || "";
        localStorage.setItem("userEmail", email.toString());
        localStorage.setItem("userId", userId);
      }
    }
  };
  return (
    <Link
      className="hover:underline transition hover:scale-110"
      prefetch={false}
      onClick={() => handleStore(store.id)}
      href={`/${store.id}`}
    >
      {store.name}
    </Link>
  );
};

export default Stores;
