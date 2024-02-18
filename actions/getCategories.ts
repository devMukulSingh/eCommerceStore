import { API_BASE_URL } from '@/constants/base_url_client'
import axios from 'axios'

export const getCategories = async () => {
    try {

      const { data } = await axios.get(`${API_BASE_URL}/category`)

      return data.categories

    } catch (error) {
      console.log(`Error in getCategories ${error}`)
    }
  }

