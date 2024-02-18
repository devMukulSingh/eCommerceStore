import { API_BASE_URL } from '@/constants/base_url_client'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getBrands = createAsyncThunk('ecomm/getBrands', async () => {
  const { data } = await axios.get(`${API_BASE_URL}/brand`)
  return data.brands
})
