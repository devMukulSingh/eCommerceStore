import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getBillboard = createAsyncThunk( "ecommApp/getBillboard", 

    async(billboardId: string) => {
        const { data } = await axios.get(`${BASE_URL}/billboard/${billboardId}`);
        return data.billboard;
    })