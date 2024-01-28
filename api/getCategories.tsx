
import axios from "axios";
import { BASE_URL } from "@/constants/constants";

export const getCategories = async() => {
    try {
        const { data } = await axios.get(`${BASE_URL}/category`);
        console.log(data);
        return data;
    } catch (error) {
    console.log(`Error in getCategories ${error}`);
    }
}