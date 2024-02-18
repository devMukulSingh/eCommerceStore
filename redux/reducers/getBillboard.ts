import { API_BASE_URL } from '@/constants/base_url_client'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getBillboard = createAsyncThunk(
  'ecommApp/getBillboard',

  async (billboardId: string) => {
    const { data } = await axios.get(`${API_BASE_URL}/billboard/${billboardId}`)
    return data.billboard
  }
)
