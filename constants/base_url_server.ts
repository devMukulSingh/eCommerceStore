"use server";
import { cookies } from "next/headers";
import { BASE_URL } from "./base_url_client";

export const getApiBaseUrl = async () => {
  const cookieStore = cookies();

  const storeId = cookieStore.get("storeId")?.value;

  const API_BASE_URL = `${BASE_URL}/api/${storeId}`;

  return { API_BASE_URL };
};
