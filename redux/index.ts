import { IinitialState } from "@/types";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./reducers/getCategories";   
import { getBillboard } from "./reducers/getBillboard";
import { getProducts } from "./reducers/getProducts";
import { getProduct } from "./reducers/getProduct";
import toast from "react-hot-toast";

const initialState:IinitialState = {
    categories:[],
    billboard : null,
    products : [],
    product : null,
    cartProducts : (typeof window!=='undefined' && localStorage.length > 0) ? JSON.parse(localStorage.getItem('cartProducts')) : [] ,
}

const ecommSlice = createSlice({
    name:'ecomm',
    initialState,
    reducers:{

        setCartProduct : (state,action) => {
            if(state.cartProducts && !state.cartProducts.find( item => item.id === action.payload.id )){
                state.cartProducts.push(action.payload);
                const products = JSON.stringify(state.cartProducts);
                localStorage.setItem('cartProducts', products);
                toast.success('Item added to Cart');
            }
            else{
                toast.error('Item already in cart');
            }
        },
        removeCartProduct : (state,action) => {
            state.cartProducts = state.cartProducts.filter( item => item.id !== action.payload);
            localStorage.clear();
            localStorage.setItem('cartProducts',JSON.stringify(state.cartProducts));
        },
        clearCartProducts : (state) => {
            state.cartProducts = [];
            localStorage.clear();
        }
        
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

export const{ setCartProduct,removeCartProduct,clearCartProducts } = ecommSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

