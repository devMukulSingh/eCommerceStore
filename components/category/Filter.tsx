"use client"
import qs from "query-string";
import { Ibrand } from "@/types"
import { useRouter, useSearchParams } from "next/navigation"

export interface FilterProps {
    filter: Ibrand[] | null,
    heading: string,
    valueKey: string ,
}

const Filter: React.FC<FilterProps> = ({
    filter,
    heading,
    valueKey
}) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const currentParams = searchParams.get(valueKey);
    
    
    const handleFilter = (id: string) => {
        let query = {
            [valueKey] : id
        }
        if( id === currentParams){
            //@ts-ignore
            query[valueKey] = null;
        }
                    
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
            }, { skipNull:true});
        router.push(url,{ scroll:false});
    }
    return (
        <main className="flex flex-col gap-3 py-5 pl-5 pr-15 xl:pr-20 border h-fit mt-10">
            <h1 className="text-2xl font-semibold">{heading}</h1>
            <section className="flex flex-col gap-2">
                {
                    filter && filter.map((f) => (
                        <ul key={f.id}>
                            <li
                                className="cursor-pointer hover:underline"
                                onClick={() => handleFilter(f.id)}>
                                {f.name}
                            </li>
                        </ul>
                    ))
                }
            </section>
        </main>
    )
}

export default Filter