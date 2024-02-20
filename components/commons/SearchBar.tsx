
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation';

const SearchBar = () => {

    const [query, setQuery] = useState('second');
    const { storeId } = useParams();
    const router = useRouter();

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.length > 0) {
            router.push(`/${storeId}/search?query=${query}`);
        }
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    return (
        <main className='flex sm:gap-5 rounded-full items-center border w-[30rem] sm:pl-10 sm:pr-5 px-3 py-2 min-w-0 '>
            <input
                placeholder="Search..."
                type='text'
                onKeyUp={(e) => handleKeyUp(e)}
                onChange={(e) => onChange(e)}
                className='focus:outline-0 border-0 bg-inherit w-full' />
            <Link href={{
                pathname: `/${storeId}/search`,
                query: { query },
            }}
                className='ml-auto'
            >
                <Search />
            </Link>
        </main>
    )
}

export default SearchBar