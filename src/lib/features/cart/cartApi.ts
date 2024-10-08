import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => "/cart",
    }),

    getCart: builder.query({
      query: (userId) => `/cart/${userId}`,
    }),

    addToCart: builder.mutation({
      query: (initialCart) => ({
        url: "/cart",
        method: "post",
        body: initialCart,
      }),
    }),

    updateCart: builder.mutation({
      query: (cartId) => ({
        url: `cart/${cartId}`,
        method: "put",
      }),
    }),

    deleteCart: builder.mutation({
      query: (cartId) => ({
        url: `cart/${cartId}`,
        method: "delete",
      }),
    }),

    emptyCart: builder.mutation({
      query: (userId) => ({
        url: `cart/delete/${userId}`,
        method: "delete",
      }),
    }),
  }),
});

export const {
  useGetCartsQuery,
  useGetCartQuery,
  useAddToCartMutation,
  useDeleteCartMutation,
  useUpdateCartMutation,
  useEmptyCartMutation,
} = cartApi;
