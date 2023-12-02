import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),

    getUser: builder.query<any, Object>({
      query: (userId) => `/users/${userId}`,
    }),

    addNewUser: builder.mutation({
      query: (initailUser) => ({
        url: "/users",
        method: "post",
        body: initailUser,
      }),
    }),

    logUserIn: builder.mutation({
      query: (initailUser) => ({
        url: "/user",
        method: "post",
        body: initailUser,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddNewUserMutation,
  useLogUserInMutation,
} = authApi;
