import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentApi = createApi({
  reducerPath: "Payment",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/pay" }),
  endpoints: (builder) => ({
    getPayment: builder.query({
      query: () => "/getPayment",
    }),

    createPayment: builder.mutation({
      query: (initailOrder) => ({
        url: "/createPayment",
        method: "post",
        body: initailOrder,
      }),
    }),

    startPayment: builder.mutation({
      query: (initailOrder) => ({
        url: "/",
        method: "post",
        body: initailOrder,
      }),
    }),
  }),
});

export const {
  useGetPaymentQuery,
  useCreatePaymentMutation,
  useStartPaymentMutation,
} = paymentApi;
