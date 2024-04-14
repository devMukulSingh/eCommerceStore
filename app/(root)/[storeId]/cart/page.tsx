"use client";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
const Cart = dynamic(
  () => import("@/app/(root)/[storeId]/cart/components/Cart"),
  {
    ssr: false,
  },
);
const CartTotal = dynamic(
  () => import("@/app/(root)/[storeId]/cart/components/CartTotal"),
  { ssr: false },
);

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const cartProducts = useAppSelector((state) => state.ecomm.cartProducts);
  if (!isMounted) return null;
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10 px-5 lg:px-15 md:px-10 py-10 ">
      <Cart cartProducts={cartProducts} />
      {cartProducts?.length > 0 && <CartTotal cartProducts={cartProducts} />}
    </div>
  );
};

export default CartPage;
