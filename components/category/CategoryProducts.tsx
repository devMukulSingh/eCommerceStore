"use client"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useParams, useSearchParams } from 'next/navigation';
import ProductCard from '../commons/ProductCard';
import { getBrands } from '@/redux/reducers/getBrands';
import Filter from './Filter';
import { getFilteredProducts } from '@/redux/reducers/getFilteredProducts';
import { Iproducts } from '@/types';
import NoResuts from '../commons/NoResuts';

const CategoryProducts = () => {

    const dispatch = useAppDispatch();
    const { categoryId } = useParams();
    const searchParams = useSearchParams();
    const brandId = searchParams.get('brandId');

    useEffect(() => {
        dispatch(getBrands());
    }, []);
    useEffect(() => {
        dispatch(getFilteredProducts({
            categoryId: categoryId.toString(),
            brandId
        }
        ));
    }, [brandId]);

    // const products = useAppSelector( state => state.ecomm.products);
    // const filteredProducts = products.filter( item => item.categoryId === categoryId);
    const brands = useAppSelector(state => state.ecomm.brands);
    const filteredProducts = useAppSelector(state => state.ecomm.filteredProducts);
    console.log(filteredProducts);


    return (
        <main className='flex gap-5 md:px-5 sm:px-2'>
            <Filter filter={brands} heading="Brands" valueKey='brandId' />
            {filteredProducts.length === 0 && <NoResuts />}
            <div className='gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 '>
                {
                    filteredProducts.map((product: Iproducts) => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }

            </div>
        </main>
    )
}

export default CategoryProducts