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

        <div className="w-70 overflow-auto">

            <div className="w-70 overflow-auto">

                <div className=' 
            w-[90rem] overflow-auto flex py-4 gap-10
            lg:overflow-x-hidden
            xl:w-[90rem] xl:mx-auto xl:overflow-x-hidden'>

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
            </div>

            {isLoading && (
                <div className='flex justify-center m-0 align-center'>
                    <Spin />
                </div>)}


            <div className='  block sm:block md:flex lg:flex'>
                {menus?.map((item: any) => (
                    <div key={item?._id}
                        className=" justify-center align-center m-0 py-2">
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