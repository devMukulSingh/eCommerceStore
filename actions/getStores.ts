import { BASE_URL } from "@/lib/base_url_client";

const userId = process.env.NEXT_PUBLIC_USER_ID;

export const getStores = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/stores?userId=${userId}`);
    return res.json();
  } catch (e) {
    console.log(e);
  }
};
