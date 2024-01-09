import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl =
  process.env.NEXT_BACKEND_URL || "https://foodieserver.onrender.com/api/";
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: (userId) => `/orders/${userId}`,
    }),
    getOrders: builder.query({
      query: () => `/orders/`,
    }),

    placeOrder: builder.mutation({
      query: (initailOrder) => ({
        url: "/orders",
        method: "post",
        body: initailOrder,
      }),
    }),
  }),
});

export const { useGetOrderQuery, usePlaceOrderMutation, useGetOrdersQuery } =
  orderApi;
