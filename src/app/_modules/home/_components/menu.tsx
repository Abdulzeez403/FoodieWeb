import ImageComponent from '@/app/_components/images'
import StarIcon from '@/app/_components/svg/svg/star'
import React from 'react'
import HeaderComponents from '@/app/_components/header'
import ButtonComponent from '@/app/_components/button'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/lib/features/cart/cartSlice'
import { MenuComponent } from '../../menus/_components/menuCard'
import { useGetMenusQuery } from '@/lib/features/menu/menuApi'




const MenusSection = () => {
    const { data: menus } = useGetMenusQuery({})


    return (
        <div className='w-[80%] mx-auto py-4'>
            <HeaderComponents title="New Recipes" description="Some of the best restaurant in town!" />

            <div className=' 
            w-[90rem] overflow-auto flex py-4 gap-10
            lg:overflow-x-hidden
            xl:w-[90rem] xl:mx-auto xl:overflow-x-hidden'>

                {
                    menus?.map((item: any) => (
                        <div key={item?._id}>
                            <MenuComponent img={item.image} title={item?.name} description={item.description} price={item.price}
                            />
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default MenusSection

