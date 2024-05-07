"use client";
import { Istore } from "@/lib/types";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "@/components/commons/Spinner";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

interface StoreProps {
  store: Istore;
}
const Stores: React.FC<StoreProps> = ({ store }) => {
  const { user} = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {setInLocalStorage} = useLocalStorage();

  useEffect(() => {
    if (user) {
      const email = user?.primaryEmailAddress?.emailAddress || "";
      setInLocalStorage({
        key: "userEmail",
        item: email,
      });
      setInLocalStorage({
        key: "userId",
        item: user.id,
      });
    }
  }, [user]);
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
    setInLocalStorage({
      key: "storeId",
      item: storeId,
    });
    router.push(`/${storeId}`);
  };

  return (
    <Button
      disabled={loading}
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
