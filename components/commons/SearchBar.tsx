
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SearchBar = () => {
    const router = useRouter();
    const [query, setQuery] = useState('second');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    return (
        <main className='flex gap-5 rounded-full items-center border pl-10 pr-5 py-2 '>
            <input placeholder="Search..." type='text' onChange={(e) => onChange(e)} className='focus:outline-0 border-0 bg-inherit' />
            <Link href={{
                pathname: '/search',
                query: query,
            }}>
                <Search />
            </Link>
        </main>
    )
}

export default SearchBar