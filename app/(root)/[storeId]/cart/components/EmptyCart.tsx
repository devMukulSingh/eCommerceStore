import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const EmptyCart = () => {
  const router = useRouter();
  const { storeId } = useParams();

  return (
    <main className="flex flex-col items-center gap-5 justify-center w-full">
      <h1 className="text-lg font-semibold">No items in Cart </h1>
      <Button onClick={() => router.push(`/${storeId}`)}>Add Now!</Button>
    </main>
  );
};

export default EmptyCart;
