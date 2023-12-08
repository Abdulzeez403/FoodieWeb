import React from 'react'
import NavItem from './_components/navItem'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegUser, FaAngleRight } from 'react-icons/fa'
import { FaHeartPulse } from 'react-icons/fa6'
import { FiBox } from 'react-icons/fi'
import { IoKeyOutline } from 'react-icons/io5'
import ButtonComponent from '../_components/button'
interface IProps {
    children: React.ReactNode
}
const Userlayout = ({ children }: IProps) => {
    return (
        <div className="flex gap-4 mt-10">
            <div className='w-[22rem] ml-[10rem]  '>
                <div className='border-2 p-4 rounded-md shadow-md'>
                    <div className="text-green-500 text-lg font-semibold border-b-2 my-3">Account</div>
                    <NavItem
                        link="/user"
                        leftIcon={<FaRegUser color="green" size={30} />} name="Profile"
                        caption="This is the profile"
                        rightIcon={<FaAngleRight />}
                    />

                    <NavItem
                        link="/user/address"

                        leftIcon={<CiLocationOn color="green" size={30} />} name="Address"
                        caption="Eidt Addresss"
                        rightIcon={<FaAngleRight />}
                    />

                    <NavItem
                        link="/user/wishlist"

                        leftIcon={< FaHeartPulse color="green" size={30} />} name="Wishlist"
                        caption="View Wishlist items"
                        rightIcon={<FaAngleRight />}
                    />

                    <NavItem
                        link="/user/order"

                        leftIcon={<FiBox color="green" size={30} />} name="Order"
                        caption="Manage All Orders"
                        rightIcon={<FaAngleRight />}
                    />

                    <NavItem
                        link="user/password/"
                        leftIcon={<IoKeyOutline color="green" size={30} />} name="Password"
                        caption="Change Password"
                        rightIcon={<FaAngleRight />}
                    />

                    <div className='flex justify-center m-0'>
                        <ButtonComponent
                            shape="default"
                            size="large"
                            className='w-[18rem] p-10'>
                            Sign Out
                        </ButtonComponent>
                    </div>


                </div>

            </div>
            {children}
        </div>

    )
}

export default Userlayout
