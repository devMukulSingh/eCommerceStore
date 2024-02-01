"use client"
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ProductDetails from './ProductDetails';
import { getProduct } from '@/redux/reducers/getProduct';
import RelatedProducts from './RelatedProducts';

const ProductPage = () => {

  const dispatch = useAppDispatch();
  const params:{ productId : string} = useParams();
  const { productId } = params; 

  useEffect ( () => {
    dispatch( getProduct(productId));
  },[productId]);
  
  const product = useAppSelector( state => state.ecomm.product);

  return (

    product && (
      <div className='w-full flex  px-10 py-10'>
        <ProductDetails product = {product} />
        <RelatedProducts/>
    </div>
      )
  )
}

export default ProductPage