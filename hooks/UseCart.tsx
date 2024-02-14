"use client"
import { Iproducts } from "@/types";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const setProduct = (product:Iproducts,userId:string) => {
  if(userId ){
        let previousProducts = [];
        let finalProducts;
        if(localStorage.length){
         previousProducts = JSON.parse(localStorage.getItem(userId) || '[]');
        }
        if(previousProducts){
          
          if(previousProducts.find( (p:Iproducts) => p.id === product.id)){
              toast.error('Item already in cart');
              return;          
          }
          finalProducts = [...previousProducts,product];
        }
        else{
          finalProducts = [product];
        }
        localStorage.setItem(userId,JSON.stringify(finalProducts));
      toast.success('Item added to cart');
      }
}

export const removeProduct = (productId:string,userId:string ) => {
    const cartProducts = JSON.parse(localStorage.getItem(userId) || '[]');
    const filteredPoducts = cartProducts.filter( (cartProduct:Iproducts) => cartProduct.id !== productId );
    localStorage.setItem(userId,JSON.stringify(filteredPoducts));
}

export const getProducts = (userId:string) => {
    const cartProducts = JSON.parse(localStorage.getItem(userId) || '[]');
    return cartProducts;

}