import ImageComponent from '@/app/components/images'
import StarIcon from '@/app/components/svg/svg/star'
import React from 'react'
import HeaderComponents from '@/app/components/header'
import { MenuComponent } from '../../../menu/_components/menuCard'
import { useGetMenusQuery } from '@/lib/features/menu/menuApi'




const MenusSection = () => {
    const { data: menus } = useGetMenusQuery({})
    return (
        <div className='w-[80%] mx-auto py-4'>
            <HeaderComponents title="New Recipes" description="Some of the best restaurant in town!" />

            <div className="w-70 overflow-auto">

                <div className=' 
            w-[90rem] overflow-auto flex py-4 gap-10
            lg:overflow-x-hidden
            xl:w-[90rem] xl:mx-auto xl:overflow-x-hidden'>
                    {
                        menus?.map((item: any) => (
                            <div key={item?._id}>
                                <MenuComponent img={item?.images?.[0]?.uri} title={item?.name} description={item.description} price={item.price}
                                />
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default MenusSection

