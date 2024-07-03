"use client";
import { setOpenSidebar } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Icategory } from "@/lib/types";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, ShoppingBag } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import useSWR from "swr";
import { API_BASE_URL_CLIENT } from "@/lib/base_url_client";
import { fetcher } from "@/lib/utils";
import { Button } from "../ui/button";

const Sidebar = () => {
  const { storeId } = useParams();
  const { data: categories, isLoading } = useSWR(
    `${API_BASE_URL_CLIENT}/category`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const router = useRouter();
  const cartProducts = useAppSelector((state) => state.ecomm.cartProducts);
  const dispatch = useAppDispatch();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          size={20}
          className="flex-shrink-0 xl:hidden lg:hidden md:hidden block ml-auto"
        />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-5 w-[15rem]">
        <Link
          onClick={() => dispatch(setOpenSidebar())}
          href={`/${storeId}`}
          className="text-3xl font-bold mb-2"
        >
          mStore
        </Link>
        <Button
          variant={"ghost"}
          size="icon"
          onClick={() => router.push("/cart")}
          className=" 
          w-fit
          p-2
                            rounded-sm 
                            border
                            flex
                            sm:hidden 
                            "
        >
          <ShoppingBag className="mr-1" />
          <h1 className="text-lg">{cartProducts?.length}</h1>
        </Button>
        <ThemeToggle />
        {categories?.map((category: Icategory) => (
          <Link
            onClick={() => dispatch(setOpenSidebar())}
            href={`/${storeId}/category/${category.id}`}
            key={category.id}
            className="transition hover:scale-110 text-nowrap hover:underline underline-offset-8"
          >
            {category.name}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
