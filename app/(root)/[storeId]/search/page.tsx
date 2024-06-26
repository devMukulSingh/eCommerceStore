import { getSearchProducts } from "@/actions/getSearchProducts";
import SearchCard from "@/app/(root)/[storeId]/search/components/SearchCard";
import { Iproducts } from "@/lib/types";
import { Suspense } from "react";
import SearchCardSkeleton from "./components/SearchCardSkeleton";

const SearchPage = async ({
  searchParams,
  params,
}: {
  searchParams: { query: string };
  params: { storeId: string };
}) => {
  const { query } = searchParams;

  const { storeId } = params;

  const searchedProducts: Iproducts[] = await getSearchProducts(query);

  return (
    <>
      <Suspense fallback={<SearchCardSkeleton />}>
        <div className="flex flex-col gap-5 px-5 lg:px-20 md:px-10 py-5 ">
          {searchedProducts.length > 0 ? (
            <h1 className="text-3xl font-bold">Results</h1>
          ) : (
            <h1>No results Found</h1>
          )}
          {searchedProducts &&
            searchedProducts.map((product: Iproducts) => (
              <SearchCard
                product={product}
                storeId={storeId}
                key={product.id}
              />
            ))}
        </div>
      </Suspense>
    </>
  );
};

export default SearchPage;
