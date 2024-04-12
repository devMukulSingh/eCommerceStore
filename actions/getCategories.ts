import { getApiBaseUrl } from "@/constants/base_url_server";
import { API_BASE_URL_CLIENT } from "@/constants/base_url_client";
import axios from "axios";

export const getCategories = async () => {
  try {
    const { API_BASE_URL } = (await getApiBaseUrl()) || API_BASE_URL_CLIENT;

    const { data } = await axios.get(`${API_BASE_URL}/category`);

    return data;
  } catch (error) {
    console.log(`Error in getCategories ${error}`);
  }
};
