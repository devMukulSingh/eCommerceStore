import { getApiBaseUrl } from "@/constants/base_url_server";
import axios from "axios";

export const getBrands = async () => {
  try{

    const { API_BASE_URL } = await getApiBaseUrl();
    console.log(API_BASE_URL);
    
    const res = await fetch(`${API_BASE_URL}/brand`);
    
    return res.json();
  }
  catch(e){
    console.log(e);
    
  }
};
