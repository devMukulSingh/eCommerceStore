import { BASE_URL } from '@/constants/base_url_client'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const userId = process.env.NEXT_PUBLIC_USER_ID

export const getStores = createAsyncThunk(
  'ecomm/getStores',

  async () => {
    const { data } = await axios.get(`${BASE_URL}/api/stores?userId=${userId}`)

    return data.stores
  }
)
