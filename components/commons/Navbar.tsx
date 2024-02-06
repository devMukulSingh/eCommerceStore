"use client"
import { Icategory } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react'
import { useEffect } from "react";
import { ShoppingBag } from "lucide-react"
import { getCategories } from '@/redux/reducers/getCategories';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ThemeToggle } from './ThemeToggle';
const Navbar = () => {

  const dispatch = useAppDispatch();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    dispatch(getCategories());
  }, []);

  const categories = useAppSelector(state => state.ecomm.categories);
  const cartProducts = useAppSelector(state => state.ecomm.cartProducts);
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <main className='p-4 h-20 border flex items-center gap-10 w-full'>
      <Link
        href={`/`}
        className='text-3xl font-bold'>
        Store
      </Link>
      <section className='flex gap-5'>
        {
          categories && categories?.map((category: Icategory) => (
            <Link
              href={`/category/${category.id}`}
              key={category.id}
              className='text-lg transition hover:scale-110  hover:underline underline-offset-8'>
              {category.name}
            </Link>
          ))
        }
      </section>
      <section className='flex items-center gap-5 ml-auto'>
        <ThemeToggle />
        <button
          onClick={() => router.push('/cart')}
          className="flex 
              p-3
              rounded-full 
              ml-auto 
              border">
          <ShoppingBag className='mr-2' />
          <h1 className='text-lg'>{cartProducts?.length}</h1>
        </button>
      </section>
    </main>
  )
}

export default Navbar