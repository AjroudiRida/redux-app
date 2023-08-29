import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log(store.getState());
export default store;
