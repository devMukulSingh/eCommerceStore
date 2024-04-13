import { Iproducts } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import DetailsSection from "./DetailsSection";

interface SearchCardProps {
  product: Iproducts;
  storeId: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ product, storeId }) => {
  return (
    <Link href={`/${storeId}/product/${product.id}`}>
      <main className="flex gap-5 p-5 border ">
        <figure className="relative w-52 h-52">
          <Image
            src={product.images[0].url}
            alt="productImg"
            fill
            className="object-contain object-center"
          />
        </figure>

        <DetailsSection product={product} />
      </main>
    </Link>
  );
};

export default SearchCard;
