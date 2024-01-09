import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NEXT_BACKEND_URL || "https://foodieserver.onrender.com/api/pay";

export const paymentApi = createApi({
  reducerPath: "Payment",
  baseQuery: fetchBaseQuery({ baseUrl }),
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
