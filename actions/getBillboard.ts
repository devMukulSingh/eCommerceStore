import { getApiBaseUrl } from "@/lib/base_url_server";

export const getBillboard = async (billboardId: string) => {
  const { API_BASE_URL } = await getApiBaseUrl();
  const res = await fetch(`${API_BASE_URL}/billboard/${billboardId}`);
  return res.json();
};
