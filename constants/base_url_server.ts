"use server";
import { cookies } from "next/headers";
import { BASE_URL } from "./base_url_client";

//for getting Base url at Server side or Server components
export const getApiBaseUrl = async () => {
  const cookieStore = cookies();

  const storeId = cookieStore.get("storeId")?.value;

  const API_BASE_URL = `${BASE_URL}/api/${storeId}`;

  return { API_BASE_URL };
};
