"use client";
import { Istore } from "@/lib/types";
import { useAuth, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface StoreProps {
  store: Istore;
}

const Stores: React.FC<StoreProps> = ({ store }) => {
  const { userId } = useAuth();

  const { user } = useUser();
  const router = useRouter();

  const handleStore = async (storeId: string) => {
    //setting storeId in cookies
    await fetch(`/api/storeId/${storeId}`, {
      method: "POST",
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
    router.push(`/${storeId}`);
  };

  return (
    <Button
      variant="ghost"
      className="hover:underline transition hover:scale-110"
      onClick={() => handleStore(store.id)}
    >
      {store.name}
    </Button>
  );
};

export default Stores;
