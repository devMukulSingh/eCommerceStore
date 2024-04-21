import { getApiBaseUrl } from "@/lib/base_url_server";
import { API_BASE_URL_CLIENT } from "@/lib/base_url_client";

export const getCategories = async () => {
  try {
    const { API_BASE_URL } = (await getApiBaseUrl()) || API_BASE_URL_CLIENT;

    const res = await fetch(`${API_BASE_URL}/category`);
    return res.json();
  } catch (error) {
    console.log(error);
    console.log(`Error in getCategories ${error}`);
  }
};
