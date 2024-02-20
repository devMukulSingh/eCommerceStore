import ProductCard from '@/components/commons/ProductCard';
import Filter from '@/components/category/Filter';
import { Icategory, Iproducts } from '@/lib/types';
import NoResuts from '@/components/commons/NoResuts';
import { getBrands } from "@/actions/getBrands";
import { getFilteredProducts } from "@/actions/getFilteredProducts";
import MobileFilterButton from '@/components/commons/MobileFilterButton';
import { getCategories } from '@/actions/getCategories';

const CategoryPage = async (
  { params, searchParams }: {
    params: { categoryId: string }, searchParams: { brandId: string }
  }
) => {

  const { categoryId } = params;

  const { brandId } = searchParams;

  const brands = await getBrands();

  const categories:Icategory[] = await getCategories();

  const filteredProducts = await getFilteredProducts({
    categoryId: categoryId.toString(),
    brandId
  });

  const currCategory = categories.filter( category => category.id === categoryId ).map( c => c.name);

  return (
    <main className='flex flex-col gap-5 py-5 md:px-5 sm:px-2 px-5 sm:items-start sm:justify-start w-full'>

      <h1 className='sm:text-2xl text-xl font-semibold'>Explore {currCategory} Phones </h1>

      <MobileFilterButton />

      <section className='flex gap-5'>

        <Filter filter={brands} heading="Brands" valueKey='brandId' />

        {filteredProducts.length === 0 && <NoResuts />}
        <div className='gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 '>
          {
            filteredProducts.map((product: Iproducts) => (
              <ProductCard product={product} key={product.id} />
            ))
          }

        </div>
      </section>
    </main>
  )
}

export default CategoryPage