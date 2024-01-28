"use client"
import { getCategories } from '@/api/getCategories';
import React from 'react'
import { useEffect } from "react";



const Navbar = () => {
    useEffect( () => {
        const categories = getCategories();
        console.log(categories);
    },[])
  return (
    <main className='w-full p-4 h-[10vh] border' >
        <h1 className='text-3xl font-bold'>
            Store
        </h1>
    </main>
  )
}

export default Navbar