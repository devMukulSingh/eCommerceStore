import { getApiBaseUrl } from "@/lib/base_url_server";

export const getBrands = async () => {
  try {
    const { API_BASE_URL } = await getApiBaseUrl();

    const res = await fetch(`${API_BASE_URL}/brand`);

    return res.json();
  } catch (e) {
    console.log(e);
  }
};
