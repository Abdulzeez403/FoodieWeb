import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./model";

export const authApi = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),

    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
    }),

    addNewUser: builder.mutation({
      query: (initailUser) => ({
        url: "/users",
        method: "post",
        body: initailUser,
      }),
    }),

    UpdateUser: builder.mutation<IUser, { id: string; initailUser: IUser }>({
      query({ id, initailUser }) {
        return {
          url: `/users/${id}`,
          method: "put",
          credential: "include",
          body: initailUser,
        };
      },
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
  useUpdateUserMutation,
} = authApi;
