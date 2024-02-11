"use client"
import { useAppSelector } from "@/redux/hooks"
import { useParams } from "next/navigation";
import SearchCard from "./SearchCard";

const SearchPage = () => {
    const { query } = useParams();
    const products = useAppSelector(state => state.ecomm.products)
    console.log(products);

    return (
        <main className='flex flex-col gap-5 px-5 lg:px-20 md:px-10 py-5 '>
            {
                products.length > 0 ? <h1 className="text-3xl font-bold">Results</h1> : <h1>No results Found</h1>
            }
            {
                products && products.map((product) => (
                    <SearchCard product={product} />
                ))
            }
        </main>
    )
}

export default SearchPage