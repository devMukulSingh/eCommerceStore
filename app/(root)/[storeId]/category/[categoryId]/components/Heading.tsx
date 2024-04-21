"use client";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "next/navigation";
import React from "react";

const Heading = () => {
  const { categoryId } = useParams();
  const currCategory = useAppSelector((state) => state.ecomm.categories).find(
    (item) => item.id === categoryId,
  );

  return (
    <h1 className="sm:text-3xl text-2xl font-semibold">
      Explore {currCategory?.name} Phones{" "}
    </h1>
  );
};

export default Heading;
