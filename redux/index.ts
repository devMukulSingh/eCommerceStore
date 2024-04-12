import { IinitialState } from "@/lib/types";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const userEmail =
  typeof window !== "undefined" ? localStorage.getItem("userEmail") : "";

const initialState: IinitialState = {
  openSidebar: false,
  cartProducts:
    (userEmail && JSON.parse(localStorage.getItem(userEmail) || "[]")) || [],
  loading: false,
  openFilters: false,
  categories: [],
};

const ecommSlice = createSlice({
  name: "ecomm",
  initialState,
  reducers: {
    setCartProduct: (state, action) => {
      if (
        userEmail &&
        !state.cartProducts.find((item) => item.id === action.payload.id)
      ) {
        console.log(action.payload, "in");
        state.cartProducts.push(action.payload);
        const products = JSON.stringify(state.cartProducts);
        localStorage.setItem(userEmail, products);
        toast.success("Item added to Cart");
      } else if (
        state.cartProducts.find((item) => item.id === action.payload.id)
      ) {
        console.log(action.payload, "else");
        toast.error("Item already in cart");
      }
    },
    removeCartProduct: (state, action) => {
      if (userEmail) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload,
        );
        localStorage.removeItem(userEmail);
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(state.cartProducts),
        );
      }
    },
    clearCartProducts: (state) => {
      if (userEmail) {
        state.cartProducts = [];
        localStorage.removeItem(userEmail);
      }
    },
    setOpenSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
    setOpenFilters: (state) => {
      state.openFilters = !state.openFilters;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    ecomm: ecommSlice.reducer,
  },
});

export const {
  setCartProduct,
  removeCartProduct,
  clearCartProducts,
  setOpenSidebar,
  setOpenFilters,
  setCategories,
} = ecommSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
