import { API_BASE_URL } from '@/constants/base_url_client'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'ecomm/getProduct',

  async (productId: string) => {
    const { data } = await axios.get(`${API_BASE_URL}/product/${productId}`)
    return data.product
  }
)
