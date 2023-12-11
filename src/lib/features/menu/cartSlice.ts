import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICart } from "./model";

interface CartItem {
  items: ICart[];
  loading: boolean;
  error: string | null;
  counter: number;
}

const initialState: CartItem = {
  items: [],
  loading: false,
  error: null,
  counter: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<any>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});
export const { addToCart, removeItem, clearCart, increment, decrement } =
  CartSlice.actions;
export default CartSlice.reducer;
