import ProductDetailsSkeleton from "@/app/(root)/[storeId]/product/[productId]/components/ProductDetailsSkeleton";
import RelatedProducts from "@/app/(root)/[storeId]/product/[productId]/components/RelatedProducts";
const ProductDetails = dynamic(
  () =>
    import(
      "@/app/(root)/[storeId]/product/[productId]/components/ProductDetails"
    ),
  {
    loading: () => <ProductDetailsSkeleton />,
  },
);

import dynamic from "next/dynamic";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  return (
    <div className="w-full flex flex-col gap-5 p-5 sm:px-10 sm:py-10 ">
      <ProductDetails productId={productId} />
      <hr className="" />
      <RelatedProducts productId={productId} />
    </div>
  );
};

export default ProductPage;
