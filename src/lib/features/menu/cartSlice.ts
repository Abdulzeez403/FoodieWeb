import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICart } from "./model";

interface CartItem {
  items: ICart[];
  loading: boolean;
  error: string | null;
}

const initialState: CartItem = {
  items: [],
  loading: false,
  error: null,
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
  },
});
export const { addToCart, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
