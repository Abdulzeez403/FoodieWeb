"use client"

import React from 'react'
import ButtonComponent from '@/app/components/button'
import { useGetMenusQuery } from '@/lib/features/menu/menuApi'
import { MenuComponent } from './_components/menuCard'
import { Spin } from 'antd';



const MenusList = () => {
    const { data: menus, isLoading } = useGetMenusQuery({})
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

            {isLoading && (
                <div className='flex justify-center m-0 align-center'>
                    <Spin />
                </div>)}


            <div className=' block sm:block md:flex lg:flex  py-3 '>
                {menus?.map((item: any) => (
                    <div key={item?._id} className="px-3 py-2">
                        <MenuComponent img={item?.images?.[0]?.uri} title={item?.name} description={item.description} price={item.price}
                            _id={item?._id}
                        />
                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default MenusList