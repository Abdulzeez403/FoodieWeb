"use client"

import React from 'react'
import ButtonComponent from '@/app/_components/button'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { MenuComponent } from './_components/menuCard'
import Cookies from 'universal-cookie'
import { useGetMenusQuery } from '@/lib/features/menu/menuApi'


const MenusList = () => {
    const { data: menus } = useGetMenusQuery({})
    const filterText = ["Snack", "Bakery", "Chicken", "handBurger", "Rice", "Nigerian Jollof Rice", "Chicken Rick"]

    return (
        <div className='w-[90%] mx-auto py-4'>
            <div className='flex gap-10 py-4 shadow-sm'>
                {
                    filterText.map((item, index) => (
                        <div key={index}>
                            <ButtonComponent size="large" type="primary" htmlType='button'>
                                {item}
                            </ButtonComponent>
                        </div>

                    ))
                }
            </div>

            <div className=' grid grid-cols-5 gap-4 py-3 '>
                {
                    menus?.map((item: any) => (
                        <div key={item?._id}>
                            <MenuComponent img={item?.images?.[0]?.uri} title={item?.name} description={item.description} price={item.price}
                                _id={item?._id}
                            />
                        </div>

                    ))
                };

            </div>
        </div>
    )
}

export default MenusList