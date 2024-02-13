import { API_BASE_URL } from '@/constants/base_url';

import { Iproducts } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSearchProducts = createAsyncThunk(
  'ecomm/getSearchProducts',

  async (query: string) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/product`)

      const searchProducts = data.products.filter((product: Iproducts) => {
        //converting both query and productName to lowercase, so that includes method can work
        const lowerCasedName = product.name.toLowerCase()
        if (lowerCasedName.includes(query.toLowerCase())) {
          return product
        }
      })
      return searchProducts
    } catch (e) {
      console.log(`Error in getSearchProducts ${e}`)
    }
  }
)
