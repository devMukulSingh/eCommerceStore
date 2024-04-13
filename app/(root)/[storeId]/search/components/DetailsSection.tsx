import React from "react";
import Ratings from "@/components/commons/Ratings";
import { Iproducts } from "@/lib/types";

interface DetailsSectionProps {
  product: Iproducts;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ product }) => {
  return (
    <main className="flex flex-col gap-3">
      <h1 className="text-xl">{product.name}</h1>
      <h1 className="text-3xl text-semi-bold">₹{product.price}</h1>
      <Ratings value={product.ratings} />
    </main>
  );
};

export default DetailsSection;
