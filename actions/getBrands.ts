import { getApiBaseUrl } from "@/constants/base_url_server"
import axios from "axios"


export const getBrands = async() => {

    const { API_BASE_URL } = await getApiBaseUrl();
    console.log(API_BASE_URL);
    
    const { data } = await axios.get(`${API_BASE_URL}/brand`)
    console.log(data
        );
    
    return data.brands

}