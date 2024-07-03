"use client";
import { getCategories } from "@/actions/getCategories";
import { API_BASE_URL_CLIENT } from "@/lib/base_url_client";
import { Icategory } from "@/lib/types";
import { fetcher } from "@/lib/utils";
import { setCategories } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

const Navlinks = () => {
  const dispatch = useAppDispatch();
  // const categories = useAppSelector((state) => state.ecomm.categories);
  const { data:categories } = useSWR(`${API_BASE_URL_CLIENT}/category`,fetcher,{
    revalidateOnFocus:false,
    onError(e){
      toast.error('Something went wrong, please try again later')
      console.log(`Error in get categories`,e);
    }
  });
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await getCategories();
  //     dispatch(setCategories(res));
  //   };
  //   getData();
  // }, []);

  const { storeId, categoryId } = useParams();

  return (
    <div className="gap-5 lg:flex md:flex xl:flex hidden ">
      {categories &&
        categories?.map((category: Icategory) => (
          <Link
            prefetch={true}
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
    </div>
  );
};

export default Navlinks;
