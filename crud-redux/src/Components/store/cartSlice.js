import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
      }
    },
    removeItemFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )
      state.cartItems = nextCartItems
    },
    subtractQuantityToItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )
      console.log("iteminsex",itemIndex)
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )
        state.cartItems = nextCartItems
      }
    },
    clearCart: (state, action) => {
      state.cartItems = []
    },
    totalCart: (state, action) => {
      let { total, quanity } = state.cartItems.reduce(
        (cartTotal,cartItem) => {
          const { price, cartQuantity } = cartItem
          const itemTotal = price * cartQuantity
          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity
          return cartTotal
        },
        { total: 0, quantity: 0 }
      )
      state.cartTotalQuantity = quanity
      state.cartTotalAmount = total
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  totalCart,
  subtractQuantityToItem,
} = cartSlice.actions
export default cartSlice.reducer
