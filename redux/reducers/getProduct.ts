import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProduct = createAsyncThunk( "ecomm/getProduct", 

    async( productId : string) => {
        const { data } = await axios.get(`${BASE_URL}/product/${productId}`);
        return data.product;
    }
    
)