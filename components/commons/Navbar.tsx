"use client"
import { Icategory } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react'
import { useEffect } from "react";
import { Menu, ShoppingBag } from "lucide-react"
import { getCategories } from '@/redux/reducers/getCategories';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ThemeToggle } from './ThemeToggle';
import Navlinks from './Navlinks';
import { setOpenSidebar } from '@/redux';
import SearchBar from './SearchBar';
const Navbar = () => {

  const dispatch = useAppDispatch();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    dispatch(getCategories());
  }, []);


  const cartProducts = useAppSelector(state => state.ecomm.cartProducts);
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <main className='p-4 h-20 border flex items-center gap-10 w-full'>
      <Link
        href={`/`}
        className='text-3xl font-bold'>
        mStore
      </Link>
      <Navlinks />
      <SearchBar/>
      <section className='flex items-center gap-5 ml-auto'>
        <Menu
          className='xl:hidden lg:hidden md:hidden block ml-auto'
          onClick={() => dispatch(setOpenSidebar())}
        />
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