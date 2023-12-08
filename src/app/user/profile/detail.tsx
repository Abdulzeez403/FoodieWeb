"use client"

import AvatarComponents from '@/app/_components/images/avatar'
import { useGetUserQuery } from '@/lib/features/auth/authApi'
import React from 'react'
import Cookies from 'universal-cookie'
import SkeletenComponent from '../_components/skeleten'

const ProfileDetail = () => {
    const cookies = new Cookies();
    const { _id } = cookies.get("user")
    console.log(_id, "...value")
    const { data: user, isLoading } = useGetUserQuery("656aa375aac06f35a7201354")
    // console.log(data)
    return (
        <div className='bg-red-300'>
            <div>
                <AvatarComponents src="../../../../public/fast.jpg" shape="circle" size={100} />
                <div>
                    <h4>{user?.name}</h4>
                    <p>{user?.email}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail
