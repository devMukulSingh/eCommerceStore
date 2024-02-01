import ProductPage from "@/components/product/ProductPage";


const ProductDetails = (
    {params} : { params: { productId : string}}
) => {
    
  return (
    <main>
        <ProductPage/>
    </main>
  )
}

export default ProductDetails