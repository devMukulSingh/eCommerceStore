
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'

const SearchBar = () => {

    const [query, setQuery] = useState('second');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    return (
        <main className='flex sm:gap-5 rounded-full items-center border w-[30rem] sm:pl-10 sm:pr-5 px-3 py-2 min-w-0'>
            <input placeholder="Search..." type='text' onChange={(e) => onChange(e)} className='focus:outline-0 border-0 bg-inherit' />
            <Link href={{
                pathname: '/search',
                query: {query},
            }}
                className='ml-auto'
            >
                <Search />
            </Link>
        </main>
    )
}

export default SearchBar