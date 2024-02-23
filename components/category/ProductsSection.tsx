import { getFilteredProducts } from "@/actions/getFilteredProducts";
import ProductCard from "../commons/ProductCard";
import { Iproducts } from "@/lib/types";
import NoResuts from "../commons/NoResuts";

interface ProductsSectionProps {
    categoryId: string,
    brandId: string
}

const ProductsSection: React.FC<ProductsSectionProps> = async ({
    categoryId,
    brandId
}) => {
    const filteredProducts: Iproducts[] = await getFilteredProducts({
        categoryId: categoryId.toString(),
        brandId,
    });
    return (
        <main>

            {filteredProducts.length === 0 && <NoResuts />}
            <div className='gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 '>
                {
                    filteredProducts.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </main>
    )
}

export default ProductsSection