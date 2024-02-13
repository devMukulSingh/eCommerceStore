import { API_BASE_URL } from '@/constants/base_url';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Iproducts } from '@/types'

export interface Ifilters {
  categoryId?: string | null
  brandId: string | null
}

export const getFilteredProducts = createAsyncThunk(
  'ecomm/getFilteredProducts',

  async ({ categoryId, brandId }: Ifilters) => {
    const { data } = await axios.get(`${API_BASE_URL}/product`)
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
  }
)
