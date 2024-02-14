import { useAppSelector } from '@/redux/hooks';
import { Icategory } from '@/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Navlinks = () => {
  const categories = useAppSelector(state => state.ecomm.categories);
  const { storeId } = useParams();
  return (
    <main className='gap-5 lg:flex md:flex xl:flex hidden '>
      {
        categories && categories?.map((category: Icategory) => (
          <Link
            href={`/${storeId}/category/${category.id}`}
            key={category.id}
            className='text-lg transition hover:scale-110  hover:underline underline-offset-8 whitespace-nowrap'>
            {category.name}
          </Link>
        ))
      }
    </main>
  )
}

export default Navlinks