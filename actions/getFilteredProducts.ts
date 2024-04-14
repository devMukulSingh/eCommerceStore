import { getApiBaseUrl } from "@/lib/base_url_server";
import { Iproducts } from "@/lib/types";

interface IgetFilteredArgs {
  categoryId?: string | null;
  brandId?: string | null;
}

export const getFilteredProducts = async ({
  categoryId,
  brandId,
}: IgetFilteredArgs) => {
  try {
    const { API_BASE_URL } = await getApiBaseUrl();
    console.log(API_BASE_URL);

    const res = await fetch(`${API_BASE_URL}/product`);
    const products = await res.json();

    const filteredProducts = products.filter((product: Iproducts) => {
      if (brandId && categoryId) {
        return categoryId === product.categoryId && brandId === product.brandId;
      }
      if (brandId) {
        return brandId === product.brandId;
      }
      if (categoryId) {
        return categoryId === product.categoryId;
      } else {
        return product.isFeatured === true;
      }
    });

    return filteredProducts;
  } catch (e) {
    console.log(e);
  }
};
