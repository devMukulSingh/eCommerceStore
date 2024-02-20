"use client"
import { setOpenSidebar } from '@/redux';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Icategory } from '@/lib/types';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { ShoppingBag } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCategories } from '@/actions/getCategories';

const Sidebar = () => {

    const [categories, setCategories] = useState([]);
    const { storeId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getCategories();
            setCategories(res);
        }
        fetchData();
    }, []);

    const openSidebar = useAppSelector(state => state.ecomm.openSidebar);
    const router = useRouter();
    const cartProducts = useAppSelector(state => state.ecomm.cartProducts);
    const dispatch = useAppDispatch();
    return (
        <>
            {
                openSidebar &&
                <main className='gap-5 flex items-center flex-col fixed  border px-5 py-5 h-screen z-20 dark:bg-black bg-white'>
                    <Link
                        onClick={() => dispatch(setOpenSidebar())}
                        href={`/${storeId}`}
                        className='text-3xl font-bold mb-2'>
                        mStore
                    </Link>

                    <button
                        onClick={() => router.push('/cart')}
                        className=" 
                            px-2
                            py-1
                            rounded-sm 
                            border
                            flex
                            sm:hidden 
                            ">
                        <ShoppingBag className='mr-1' />
                        <h1 className='text-lg'>{cartProducts?.length}</h1>
                    </button>

                    <ThemeToggle />
                    {
                        categories && categories?.map((category: Icategory) => (
                            <Link
                                onClick={() => dispatch(setOpenSidebar())}
                                href={`/${storeId}/category/${category.id}`}
                                key={category.id}
                                className='transition hover:scale-110 text-nowrap hover:underline underline-offset-8'>
                                {category.name}
                            </Link>
                        ))
                    }

                </main>
            }
        </>
    )
}

export default Sidebar
