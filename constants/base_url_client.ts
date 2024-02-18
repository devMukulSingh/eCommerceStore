
export const BASE_URL = 'http://localhost:3000';
let storeId;
if(typeof window !=="undefined"){
    storeId = localStorage.getItem('storeId');
}

export const API_BASE_URL = `${BASE_URL}/api/${storeId}`;

