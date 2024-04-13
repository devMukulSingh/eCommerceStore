import { getApiBaseUrl } from "@/lib/base_url_server";
import { Iproducts } from "@/lib/types";

export const getSearchProducts = async (query: string) => {
  try {
    const { API_BASE_URL } = await getApiBaseUrl();

    const res = await fetch(`${API_BASE_URL}/product`);
    const products = await res.json();

    const searchProducts = products.filter((product: Iproducts) => {
      //converting both query and productName to lowercase, so that includes method can work
      const lowerCasedName = product.name.toLowerCase();
      if (lowerCasedName.includes(query.toLowerCase())) {
        return product;
      }
    });
    return searchProducts;
  } catch (e) {
    console.log(`Error in getSearchProducts ${e}`);
  }
};
