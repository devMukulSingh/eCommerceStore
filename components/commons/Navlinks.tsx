"use client";
import { getCategories } from "@/actions/getCategories";
import { Icategory } from "@/lib/types";
import { setCategories } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Navlinks = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector( state => state.ecomm.categories);
  useEffect(() => {
    const getData = async () => {
      const res = await getCategories();
      dispatch(setCategories(res))
    };
    getData();
  }, []);

  const { storeId, categoryId } = useParams();

  return (
    <main className="gap-5 lg:flex md:flex xl:flex hidden ">
      {categories &&
        categories?.map((category: Icategory) => (
          <Link
            href={`/${storeId}/category/${category.id}`}
            key={category.id}
            className={`
            ${categoryId == category.id ? "underline scale-100" : ""} 
            text-lg 
            transition 
            hover:scale-110  
            hover:underline 
            underline-offset-8 
            whitespace-nowrap`}
          >
            {category.name}
          </Link>
        ))}
    </main>
  );
};

export default Navlinks;
