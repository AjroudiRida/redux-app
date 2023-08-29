import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  carteItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.carteItems = [];
    },
    removeItem: (state, { payload }) => {
      const id = payload;
      state.carteItems = [...state.carteItems.filter((item) => item.id !== id)];
    },
    increaseAmount: (state, { payload }) => {
      console.log(payload);
      const id = payload;
      const itemCart = state.carteItems.find((item) => item.id === id);
      itemCart.amount = itemCart.amount + 1;
    },
    decreaseAmount: (state, { payload }) => {
      const id = payload;
      const itemCart = state.carteItems.find((item) => item.id === id);
      itemCart.amount = itemCart.amount - 1;
    },
    totalAmount: (state, { payload }) => {
      let total = 0;
      let amount = 0;
      state.carteItems.forEach((item) => {
        total = item.price * item.amount + total;
        state.total = total;
        amount = item.amount + amount;
      });

      state.amount = amount;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  totalAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
