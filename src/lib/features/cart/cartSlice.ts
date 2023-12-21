import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICart } from "./model";

interface CartItem {
  carts: ICart[];
  loading: boolean;
  error: string | null;
  total: number;
  cartlength: number;
}

const initialState: CartItem = {
  carts: [],
  loading: false,
  error: null,
  total: 0,
  cartlength: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<any>) => {
      state.carts = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<any>) => {
      state.total = action.payload;
    },

    setCarLength: (state, action: PayloadAction<any>) => {
      state.cartlength = action.payload;
    },
  },
});
export const { setCart, setTotalPrice, setCarLength } = CartSlice.actions;
export default CartSlice.reducer;
