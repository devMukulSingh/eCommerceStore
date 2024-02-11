"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {  useSearchParams } from "next/navigation";
import SearchCard from "./SearchCard";
import { getSearchProducts } from "@/redux/reducers/getSearchProducts";
import { useEffect } from "react";

const SearchPage = () => {

    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if(query){
            dispatch(getSearchProducts(query));
        }
    }, [query]);

    const searchedProducts = useAppSelector(state => state.ecomm.searchProducts);
    console.log(searchedProducts);

    return (
        <main className='flex flex-col gap-5 px-5 lg:px-20 md:px-10 py-5 '>
            {
                searchedProducts.length > 0 ? <h1 className="text-3xl font-bold">Results</h1> : <h1>No results Found</h1>
            }
            {
                searchedProducts && searchedProducts.map((product) => (
                    <SearchCard product={product} />
                ))
            }
        </main>
    )
}

export default SearchPage