import { getApiBaseUrl } from "@/constants/base_url_server"
import axios from "axios"


export const getBrands = async() => {

    const { API_BASE_URL } = await getApiBaseUrl();

    const { data } = await axios.get(`${API_BASE_URL}/brand`)
    
    return data.brands

}