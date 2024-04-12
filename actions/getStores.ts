import { BASE_URL } from '@/constants/base_url_client'
import axios from 'axios'

const userId = process.env.NEXT_PUBLIC_USER_ID

export const getStores = async () => {
  try{
    
    const { data } = await axios.get(`${BASE_URL}/api/stores?userId=${userId}`);
    return data;
  
  }
  catch(e){
    console.log(e);
    
  }

  }

