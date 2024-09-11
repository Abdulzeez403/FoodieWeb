import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://foodieserver.onrender.com/api/";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const cookie = new Cookies();
      const token = cookie.get("jwt");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMenus: builder.query({
      query: () => "/menuItems",
    }),

    getMenu: builder.query({
      query: (menuId) => `/menuItems/${menuId}`,
    }),
  }),
});

export const { useGetMenuQuery, useGetMenusQuery } = menuApi;
