//for getting Base url at Client side or Client components

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://cmsecomm.vercel.app"
    : "http://localhost:3000";

let storeId;
if (typeof window !== "undefined") {
  storeId = localStorage.getItem("storeId");
}

export const API_BASE_URL_CLIENT = `${BASE_URL}/api/${storeId}`;
