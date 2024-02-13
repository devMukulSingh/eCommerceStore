import { BASE_URL } from "@/constants/base_url";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userId = 'user_2azTFG6cuqRyklNWlphZrKPdate';

export const getStores = createAsyncThunk( "ecomm/getStores", 

    async() => {
        const { data } = await axios.get(`${BASE_URL}/api/stores?userId=${userId}`);
        
        return data.stores;
    }

)