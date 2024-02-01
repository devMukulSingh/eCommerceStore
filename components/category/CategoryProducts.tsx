"use client"
import React from 'react';
import { getProducts } from "@/redux/reducers/getProducts"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useParams } from 'next/navigation';
import ProductCard from '../commons/ProductCard';

const CategoryProducts = () => {

    const dispatch = useAppDispatch();

    const { categoryId } = useParams();

useEffect( () => {
    dispatch(getProducts());
});

const products = useAppSelector( state => state.ecomm.products);
const filteredProducts = products.filter( item => item.categoryId === categoryId);

  return (
    <main className='lg:px-20 md:px-10 sm:px-5 gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 '>
        {
            filteredProducts.map( (product) => (
                <ProductCard product={product} key={product.id}/>
            ))
        }
    </main>
  )
}

export default CategoryProducts