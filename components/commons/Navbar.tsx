"use client"
import { Icategory } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react'
import { useEffect } from "react";
import { ShoppingBag } from "lucide-react"
import { getCategories } from '@/redux/reducers/getCategories';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
const Navbar = () => {

    const dispatch = useAppDispatch();

    useEffect( () => {
      dispatch(getCategories());
    },[]);

    const categories = useAppSelector( state => state.ecomm.categories);    

  return (
    <main className='p-4 h-20 border flex items-center gap-10 w-full'>
        <Link
            href={`/`} 
            className='text-3xl font-bold'>
            Store
        </Link>
        <section className='flex gap-5'>
        {
          categories && categories?.map( (category:Icategory) => (
            <Link 
              href={`/category/${category.id}`}
              key={category.id}
              className='text-lg transition hover:scale-110  hover:underline underline-offset-8'>
              {category.name}
            </Link>
          ))
        }
        </section>
          <button 
          className="flex 
            gap-3 
            p-3 
            rounded-full 
            ml-auto 
            border">
            <ShoppingBag/>
              <h1 className='text-lg'>1</h1>
          </button>
    </main>
  )
}

export default Navbar