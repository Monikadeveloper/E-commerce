import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import categorySlice from './categorySlice'
import electronicSlice from './electronicSlice'
import mensSlice from './mensSlice'
import specialSlice from './specialSlice'
import cartSlice from './cartSlice'
// import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

const store = configureStore({
  reducer: {
    productSlice,
    categorySlice,
    electronicSlice,
    mensSlice,
    specialSlice,
    cartSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(cartSlice.middleware),
})

export default store
