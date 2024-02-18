import ProductCard from '@/components/commons/ProductCard';
import Filter from '@/components/category/Filter';
import { Iproducts } from '@/types';
import NoResuts from '@/components/commons/NoResuts';
import { getBrands } from "@/actions/getBrands";
import { getFilteredProducts } from "@/actions/getFilteredProducts";

const CategoryPage = async(
  {params,searchParams} : {
    params: { categoryId:string},searchParams:{ brandId:string}
  }
) => {

  const {categoryId} = params;
  const { brandId } = searchParams;

  const brands = await getBrands();

  const filteredProducts = await getFilteredProducts({
    categoryId: categoryId.toString(),
    brandId
  })

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

export default CategoryPage