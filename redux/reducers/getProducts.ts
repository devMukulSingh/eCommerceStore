import { API_BASE_URL } from '@/constants/base_url_client'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk('ecomm/getProducts', async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/product`)
    return data.products
  } catch (error) {
    console.log(`Error in getProducts ${error}`)
  }
})
