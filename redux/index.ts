import { IinitialState } from "@/lib/types";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const userEmail = typeof window !=="undefined" ? JSON.parse(localStorage.getItem('userEmail') || "{}") : ""

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
      const { product,isSignedIn } = action.payload;
      if (
        !state.cartProducts.find((item) => item.id === product.id)
      ) {
        state.cartProducts.push(product);
        const products = JSON.stringify(state.cartProducts);
        if(isSignedIn)
        localStorage.setItem(userEmail, products);
        else localStorage.setItem('cartProducts',products)
        toast.success("Item added to Cart");
      } else if (
        state.cartProducts.find((item) => item.id === product.id)
      ) toast.error("Item already in cart");

    },
    removeCartProduct: (state, action) => {
      const { productId,isSignedIn  } = action.payload;
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== productId,
        );
      if (isSignedIn){
        localStorage.removeItem(userEmail);
        localStorage.setItem(
          userEmail,
          JSON.stringify(state.cartProducts),
        );
      }
        else{
          localStorage.removeItem("cartProducts");
          localStorage.setItem(
            "cartProducts",
            JSON.stringify(state.cartProducts),
          )
          }
      },
    clearCartProducts: (state) => {
        state.cartProducts = [];
        localStorage.removeItem(userEmail);
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
