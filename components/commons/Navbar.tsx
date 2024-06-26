"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useParams, useRouter } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { setOpenSidebar } from "@/redux";
import SearchBar from "./SearchBar";
import { UserButton, useUser } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import NavlinksSkeleton from "./NavlinksSkeleton";
const Navlinks = dynamic(() => import("./Navlinks"), {
  loading: () => <NavlinksSkeleton />,
});

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useAppDispatch();
  const { storeId } = useParams();
  const router = useRouter();
  const cartProducts = useAppSelector((state) => state.ecomm.cartProducts);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="p-4 h-20 border flex items-center  w-full justify-between gap-5 overflow-hidden">
      <Link href={`/${storeId}`} className="text-3xl font-bold hidden sm:block">
        mStore
      </Link>

      <Navlinks />
      <SearchBar />

      <section className="flex items-center gap-2 sm:gap-5">
        <Menu
          className="xl:hidden lg:hidden md:hidden block ml-auto"
          onClick={() => dispatch(setOpenSidebar())}
        />

        <div className="sm:block hidden">
          <ThemeToggle />
        </div>

        <button
          onClick={() => router.push(`/${storeId}/cart`)}
          className=" 
                px-2
                py-1
                rounded-sm 
                border
                ml-auto
                hidden
                sm:flex 
                "
        >
          <ShoppingBag className="mr-1" />
          <h1 className="text-lg">{cartProducts?.length}</h1>
        </button>
        <Link className={`${isSignedIn ? "hidden" : ""}`} href={"/sign-in"}>
          Sign In
        </Link>
        <UserButton afterSignOutUrl={`/${storeId}`} />
      </section>
    </main>
  );
};

export default Navbar;
