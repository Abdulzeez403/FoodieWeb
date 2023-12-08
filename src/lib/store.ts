// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/auth/authApi";
import { AuthSlice } from "./features/auth/authSlice";
import cartReducer from "./features/menu/cartSlice";
import { menuApi } from "./features/menu/cartApi";

const rootReducer = combineReducers({
  user: AuthSlice.reducer,
  cart: cartReducer,
  [authApi.reducerPath]: authApi.reducer,
  [menuApi.reducerPath]: menuApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware, menuApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
