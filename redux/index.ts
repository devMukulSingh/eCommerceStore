import { IinitialState } from '@/types'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
 
const userEmail = typeof window !=="undefined" && localStorage.getItem('userEmail');

const initialState: IinitialState = {
  openSidebar: false,
  cartProducts : userEmail && JSON.parse(localStorage.getItem(userEmail) || "[]") || [] ,
  loading:false,
}

const ecommSlice = createSlice({
  name: 'ecomm',
  initialState,
  reducers: {
    setCartProduct: (state, action) => {
        if (state.cartProducts && userEmail && !state.cartProducts.find(item => item.id === action.payload.id)) {
            state.cartProducts.push(action.payload)
            const products = JSON.stringify(state.cartProducts)
            localStorage.setItem(userEmail, products)
            toast.success('Item added to Cart');
      } else if(state.cartProducts.find(item => item.id === action.payload.id)) {
        toast.error('Item already in cart')
      }
    },
    removeCartProduct: (state, action) => {
        if(userEmail){
                state.cartProducts = state.cartProducts.filter(
                item => item.id !== action.payload
                )
                localStorage.removeItem(userEmail);
                localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
            }
    },
    clearCartProducts: state => {
        if(userEmail){
            state.cartProducts = []
            localStorage.removeItem(userEmail)
        }
    },
    setOpenSidebar: state => {
      state.openSidebar = !state.openSidebar
    },
  },

})


export const store = configureStore({
  reducer: {
    ecomm: ecommSlice.reducer
  }
})

export const {
  setCartProduct,
  removeCartProduct,
  clearCartProducts,
  setOpenSidebar
} = ecommSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
