import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getBrands = createAsyncThunk("ecomm/getBrands",
    async() => {
        const { data } = await axios.get(`${BASE_URL}/brand`);
        return data.brands;
    }

)