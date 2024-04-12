import { getApiBaseUrl } from "@/constants/base_url_server";
import axios from "axios";

export const getProduct = async (productId: string) => {
  const { API_BASE_URL } = await getApiBaseUrl();

  const res = await fetch(`${API_BASE_URL}/product/${productId}`);

  return res.json();
};
