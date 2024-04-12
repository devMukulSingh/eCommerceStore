import { getApiBaseUrl } from '@/constants/base_url_server';
import axios from 'axios'

export const getBillboard = async (billboardId: string) => {
  const { API_BASE_URL } = await getApiBaseUrl();
  const { data } = await axios.get(`${API_BASE_URL}/billboard/${billboardId}`)
  return data
}
