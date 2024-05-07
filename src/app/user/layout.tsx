"use client"
import React, { useState } from 'react'
import NavItem from './_components/navItem'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegUser, FaAngleRight } from 'react-icons/fa'
import { FaHeartPulse } from 'react-icons/fa6'
import { FiBox } from 'react-icons/fi'
import { IoKeyOutline } from 'react-icons/io5'
import ButtonComponent from '../components/button'
import ModalComponent2 from '../components/modals/sideModal'
import Link from 'next/link'
import MenuIcon from '../components/svg/svg/menu'
import { CiAlignRight } from "react-icons/ci";
interface IProps {
    children: React.ReactNode
}
const Userlayout = ({ children }: IProps) => {

    const [menu, setMenu] = useState<{ show: boolean, data?: any, }>({
        show: false
    })


    const handleMenu = () => {
        setMenu({ show: true })
    }

    return (
        <div className="block w-[89%]  lg:w-[89%] lg:flex xl:w-[89%] xl:flex mx-auto">
            <div className="flex gap-10 mt-5">
                <div>

                    <div className='hidden md:flex lg:flex xl:flex'>
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
                                    className='w-[18rem] px-10'>
                                    Sign Out
                                </ButtonComponent>
                            </div>


                        </div>
                    </div>

                    <div className="flex pl-5 py-4
                    sm:flex md:hidden lg:hidden xl:hidden
                    " onClick={() => handleMenu()}>

                        <CiAlignRight color={"green"} />

                    </div>




                    <ModalComponent2
                        // title="Menu"
                        show={menu.show}
                        width={500}
                        position="left"
                        onDismiss={() => setMenu({ show: false })}>
                        <div className="text-center"
                            onClick={() => setMenu({ show: false })}>

                            <NavItem
                                link="/user"
                                leftIcon={<FaRegUser color="green" size={30} />} name="Profile"
                                // caption="This is the profile"
                                rightIcon={<FaAngleRight />}
                            />

                            <NavItem
                                link="/user/address"

                                leftIcon={<CiLocationOn color="green" size={30} />} name="Address"
                                // caption="Eidt Addresss"
                                rightIcon={<FaAngleRight />}
                            />

                            <NavItem
                                link="/user/wishlist"
                                leftIcon={< FaHeartPulse color="green" size={30} />} name="Wishlist"
                                // caption="View Wishlist items"
                                rightIcon={<FaAngleRight />}
                            />

                            <NavItem
                                link="/user/order"

                                leftIcon={<FiBox color="green" size={30} />} name="Order"
                                // caption="Manage All Orders"
                                rightIcon={<FaAngleRight />}
                            />

                            <NavItem
                                link="user/password/"
                                leftIcon={<IoKeyOutline color="green" size={30} />} name="Password"
                                // caption="Change Password"
                                rightIcon={<FaAngleRight />}
                            />
                        </div>
                    </ModalComponent2>
                </div>

                <div className='flex justify-center w-[15rem] lg:w-[55rem] xl:w-[55rem]'>
                    {children}
                </div>
            </div>

        </div>

    )
}

export default Userlayout
