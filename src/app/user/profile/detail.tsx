"use client"

import ButtonComponent from '@/app/_components/button'
import AvatarComponents from '@/app/_components/images/avatar'
import { useGetUserQuery } from '@/lib/features/auth/authApi'
import React from 'react'
import Cookies from 'universal-cookie'

const ProfileDetail = () => {
    const cookies = new Cookies();
    const userId = cookies.get("user")
    const { data: user, isLoading } = useGetUserQuery(userId?._id)
    return (
        <div className='flex justify-center'>
            <div className=''>
                <div className="mt-5 flex justify-center">
                    <AvatarComponents src="../../../../public/fast.jpg" shape="circle" size={100} />
                </div>


                <div className='text-center'>
                    <h4 className="my-3 font-semibold">{user?.name}</h4>
                    <p>{user?.email}</p>
                </div>
                <div className='flex justify-center my-6'>
                    <ButtonComponent>
                        Edit Profile
                    </ButtonComponent>
                </div>

            </div>
        </div>
    )
}

export default ProfileDetail
