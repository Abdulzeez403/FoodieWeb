
"use client"
import { useGetUserQuery, useGetUsersQuery } from "@/lib/features/auth/authApi"
import HomePage from "./(modules)/home/detail"
export default function Home() {


    return (
        <div>
            <HomePage />

        </div>
    )
}
