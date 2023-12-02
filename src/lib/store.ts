import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/auth/authApi";
import { AuthSlice } from "./features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: AuthSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([authApi.middleware]),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
