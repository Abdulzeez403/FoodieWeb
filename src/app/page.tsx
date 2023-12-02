
"use client"
import { useGetUserQuery, useGetUsersQuery } from "@/lib/features/auth/authApi"
import HomePage from "./_modules/home/detail"
export default function Home() {


  return (
    <div>
      <HomePage />

    </div>
  )
}
