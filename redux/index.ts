import { IinitialState } from "@/types";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./reducers/getCategories";
import { getBillboard } from "./reducers/getBillboard";
import { getProducts } from "./reducers/getProducts";
import { getProduct } from "./reducers/getProduct";

const initialState:IinitialState = {
    categories:[],
    billboard : null,
    products : [],
    product : null,
}

const ecommSlice = createSlice({
    name:'ecomm',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state,action) => {
            state.categories = action.payload;
        });
        builder.addCase( getBillboard.fulfilled, (state,action) => {
            state.billboard = action.payload;
        });
        builder.addCase( getProducts.fulfilled, ( state,action) => {
            state.products = action.payload;
        });
        builder.addCase( getProduct.fulfilled, ( state,action) => {
            state.product = action.payload;
        });
    },
    
})

export const store = configureStore({
    reducer:{
        ecomm : ecommSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

