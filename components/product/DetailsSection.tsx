"use client";
import { Iproducts } from "@/lib/types";

interface DetailsSectionProps {
  product: Iproducts;
}
const DetailsSection: React.FC<DetailsSectionProps> = ({ product }) => {
  return (
    <main>
      <h1 className="font-semibold sm:text-xl ">Details</h1>
      <div className="space-y-2 ml-5 basis-1/2">
        {product?.description.map((desc, index) => (
          <ul className="list-disc" key={index}>
            <li className="sm:text-md text-sm">{desc}</li>
          </ul>
        ))}
      </div>
    </main>
  );
};

export default DetailsSection;
