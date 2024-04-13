"use client";
import { Istore } from "@/lib/types";
import { useAuth, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "@/components/commons/Spinner";

interface StoreProps {
  store: Istore;
}

const Stores: React.FC<StoreProps> = ({ store }) => {
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleStore = async (storeId: string) => {
    //setting storeId in cookies
    try {
      setLoading(true);
      await fetch(`/api/storeId/${storeId}`, {
        method: "POST",
      });
    } catch (e) {
      console.log(e);
      console.log(`Error in setting storeId in cookies`);
      toast.error(`Something went wrong`);
      return;
    } finally {
      setLoading(false);
    }
    //setting storeId in localstorage
    if (typeof window !== "undefined") {
      localStorage.setItem("storeId", storeId);
      if (user?.primaryEmailAddress && userId) {
        const email = user.primaryEmailAddress || "";
        localStorage.setItem("userEmail", email.toString());
        localStorage.setItem("userId", userId);
      }
    }
    router.push(`/${storeId}`);
  };
  useEffect(() => {
    router.prefetch(`/${store.id}`);
  }, []);
  return (
    <Button
      variant="ghost"
      className="hover:underline flex gap-2 transition hover:scale-110"
      onClick={() => handleStore(store.id)}
    >
      {store.name}
      {loading && <Spinner />}
    </Button>
  );
};

export default Stores;
