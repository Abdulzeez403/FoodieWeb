import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getMenus: builder.query({
      query: () => "/menuItems",
    }),
  }),
});

export const { useGetMenusQuery } = menuApi;
