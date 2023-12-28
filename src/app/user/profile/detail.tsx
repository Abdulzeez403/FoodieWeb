"use client"

import ButtonComponent from '@/app/_components/button'
import AvatarComponents from '@/app/_components/images/avatar'
import ModalComponent1 from '@/app/_components/modals/centerModal'
import { useGetUserQuery } from '@/lib/features/auth/authApi'
import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import UpdateUser from './update'

const ProfileDetail = () => {
    const cookies = new Cookies();
    const userId = cookies.get("user")
    const { data: user, refetch: getUser } = useGetUserQuery(userId?._id)
    const [modal, setModal] = useState<{ show: boolean, data?: any, }>({
        show: false,
    })

    const handleModal = () => {
        setModal({ show: true })
    }
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
                    <ButtonComponent onClick={handleModal}>
                        Edit Profile
                    </ButtonComponent>
                </div>

                <ModalComponent1
                    title="Update User"
                    open={modal?.show}
                    // data={modal?.data}
                    width={600}
                    center={false}
                    onDismiss={() => setModal({ show: false })}>
                    <UpdateUser onDismiss={() => setModal({ show: false })} user={user} getUser={() => getUser()} userId={userId?._id} />
                </ModalComponent1>

            </div>
        </div>
    )
}

export default ProfileDetail
