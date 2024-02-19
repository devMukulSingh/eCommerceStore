import { getApiBaseUrl } from '@/constants/base_url_server'
import { Iproducts } from '@/types'
import axios from 'axios'

interface IgetFilteredArgs {
  categoryId?: string | null
  brandId?: string | null
}

export const getFilteredProducts = async ({
  categoryId,
  brandId
}: IgetFilteredArgs) => {
  try {

    const {API_BASE_URL} = await getApiBaseUrl();

    const { data } = await axios.get(`${API_BASE_URL}/product`);
    
    const filteredProducts = data.products.filter((product: Iproducts) => {
      if (brandId && categoryId) {
        return categoryId === product.categoryId && brandId === product.brandId
      }
      if (brandId) {
        return brandId === product.brandId
      }
      if (categoryId) {
        return categoryId === product.categoryId
      } else {
        return product.isFeatured === true
      }
    })

    return filteredProducts
  } catch (e) {
    console.log(e);
  }
}
