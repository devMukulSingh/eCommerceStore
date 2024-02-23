import Filter from '@/components/category/Filter';
import { Icategory } from '@/lib/types';
import { getBrands } from "@/actions/getBrands";
import MobileFilterButton from '@/components/commons/MobileFilterButton';
import { getCategories } from '@/actions/getCategories';
import ProductsSection from '@/components/category/ProductsSection';

const CategoryPage = async (
  { params, searchParams }: {
    params: { categoryId: string }, searchParams: { brandId: string }
  }
) => {

  const { categoryId } = params;

  const { brandId } = searchParams;

  const brands = await getBrands();

  const categories:Icategory[] = await getCategories();

  const currCategory = categories.filter( category => category.id === categoryId ).map( c => c.name);

  return (
    <main className='flex flex-col gap-5 py-5 md:px-5 sm:px-2 px-5 sm:items-start sm:justify-start w-full'>

      <h1 className='sm:text-2xl text-xl font-semibold'>Explore {currCategory} Phones </h1>

      <MobileFilterButton />

      <section className='flex gap-5'>

        <Filter filter={brands} heading="Brands" valueKey='brandId' />

        <ProductsSection categoryId={categoryId} brandId={brandId} />

      </section>
    </main>
  )
}

export default CategoryPage