import { IinitialState } from '@/types'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { getCategories } from './reducers/getCategories'
import { getBillboard } from './reducers/getBillboard'
import { getProducts } from './reducers/getProducts'
import { getProduct } from './reducers/getProduct'
import toast from 'react-hot-toast'
import { getSearchProducts } from './reducers/getSearchProducts'
import { getBrands } from './reducers/getBrands'
import { getStores } from './reducers/getStores'


const userEmail = typeof window !=="undefined" && localStorage.getItem('userEmail');

const initialState: IinitialState = {
  categories: [],
  billboard: null,
  products: [],
  product: null,
  openSidebar: false,
  searchProducts: [],
  brands: [],
  filteredProducts: [],
  stores: [],
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
  extraReducers: builder => {

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    });

    builder.addCase(getBillboard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBillboard.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getBillboard.fulfilled, (state, action) => {
      state.loading = false;
      state.billboard = action.payload
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
    });

    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getSearchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.searchProducts = action.payload;
    });
    builder.addCase(getSearchProducts.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload
    });



    builder.addCase(getStores.fulfilled, (state, action) => {
      state.stores = action.payload
    })
  }
})
// const persistConfig = {
//     key:'root',
//     version:1,
//     storage
// };
// const reducer = combineReducers({
//     cart:cart,
// })
// const persistedReducer = persistReducer(persistConfig,reducer);

export const store = configureStore({
  reducer: {
    // persistedReducer,
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
