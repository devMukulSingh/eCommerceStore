import ProductDetails from '@/components/product/ProductDetails';
import RelatedProducts from '@/components/product/RelatedProducts';
import { getProduct } from '@/actions/getProduct';

const ProductPage = async (
  { params }: { params: { productId: string } }
) => {

  const { productId } = params;

  const product = await getProduct(productId);

  return (

    <div className='w-full flex flex-col gap-5 p-5 sm:px-10 sm:py-10'>
      <ProductDetails product={product} />
      <hr className='' />
      <RelatedProducts productId={productId} categoryId={product.categoryId} />
    </div>

  )
}

export default ProductPage