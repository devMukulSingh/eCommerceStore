import { useAppSelector } from '@/redux/hooks';
import { Icategory } from '@/types';
import Link from 'next/link';

const Sidebar = () => {
    const categories = useAppSelector(state => state.ecomm.categories);
    return (
        <main className='gap-5 flex flex-col fixed  border px-5 py-10 h-screen z-10 bg-white '>
            {
                categories && categories?.map((category: Icategory) => (
                    <Link
                        href={`/category/${category.id}`}
                        key={category.id}
                        className='transition hover:scale-110 text-nowrap hover:underline underline-offset-8'>
                        {category.name}
                    </Link>
                ))
            }
        </main>
    )
}

export default Sidebar
