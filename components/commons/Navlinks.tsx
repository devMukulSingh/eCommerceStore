import { useAppSelector } from '@/redux/hooks';
import { Icategory } from '@/types';
import Link from 'next/link';

const Navlinks = () => {
    const categories = useAppSelector(state => state.ecomm.categories);
  return (
    <main className='gap-5 lg:flex md:flex xl:flex hidden '>
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
      </main>
  )
}

export default Navlinks