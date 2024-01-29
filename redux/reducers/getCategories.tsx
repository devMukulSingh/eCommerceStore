import axios from "axios";
import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk( "ecommApp/getCategories", 
    async() => {
    try {
            const { data } = await axios.get(`${BASE_URL}/category`);
            return data.categories;
        }    
        catch (error) {
            console.log(`Error in getCategories ${error}`);
        } 
})