import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: (userId) => `/orders/${userId}`,
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

export const { useGetOrderQuery, usePlaceOrderMutation } = orderApi;
