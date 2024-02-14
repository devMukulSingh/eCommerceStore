import axios from 'axios'
import { API_BASE_URL } from '@/constants/base_url';
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCategories = createAsyncThunk(
  'ecommApp/getCategories',
  async () => {

    try {
      const { data } = await axios.get(`${API_BASE_URL}/category`)
      return data.categories
    } catch (error) {
      console.log(`Error in getCategories ${error}`)
    }
  }
)