// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/auth/authApi";
import { AuthSlice } from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import { cartApi } from "./features/cart/cartApi";
import { menuApi } from "./features/menu/menuApi";
import { orderApi } from "./features/order/orderApi";
import { paymentApi } from "./features/payment/paymentApi";

const rootReducer = combineReducers({
  user: AuthSlice.reducer,
  cart: cartReducer,
  [authApi.reducerPath]: authApi.reducer,
  [menuApi.reducerPath]: menuApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [paymentApi.reducerPath]: paymentApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      menuApi.middleware,
      cartApi.middleware,
      orderApi.middleware,
      paymentApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
