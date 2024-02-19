import { cookies } from "next/headers";

export const getStoreId = async() => {

    const cookieStore = cookies();

    const storeId = cookieStore.get('storeId')?.value;

    return {storeId};
}