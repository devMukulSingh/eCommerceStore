"use client"
import { getCategories } from '@/actions/getCategories';
import { Icategory } from '@/lib/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navlinks = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getCategories();
      setCategories(res);
    }
    getData();
  }, []);

  const { storeId } = useParams();
  return (
    <main className='gap-5 lg:flex md:flex xl:flex hidden '>
      {
        categories && categories?.map((category: Icategory) => (
          <Link
            href={`/${storeId}/category/${category.id}`}
            key={category.id}
            className='text-lg transition hover:scale-110  hover:underline underline-offset-8 whitespace-nowrap'>
            {category.name}
          </Link>
        ))
      }
    </main>
  )
}

export default Navlinks