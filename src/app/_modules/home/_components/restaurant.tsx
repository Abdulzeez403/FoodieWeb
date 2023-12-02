import ImageComponent from '@/app/_components/images';
import React from 'react'
import Restaurant1 from "../../../../../public/fast.jpg"
import LocationIcon from '@/app/_components/svg/svg/locate';
import StarIcon from '@/app/_components/svg/svg/star';
import HeaderComponents from '@/app/_components/header';

const RestaurantSection = () => {
    return (
        <div className='w-[80%] mx-auto py-4 '>
            <HeaderComponents title="Top Restaurnt" description="Some of the best restaurant in town!" />

            <div className="w-70 overflow-auto">

                <div className=' 
            w-[90rem] overflow-auto flex py-4 gap-10
            lg:overflow-x-hidden
            xl:w-[90rem] xl:mx-auto xl:overflow-x-hidden'>
                    <Restaurant
                        img={Restaurant1}
                        title="MC Donald"
                        rating="4.5"
                        km="2.45k"
                    />
                    <Restaurant
                        img={Restaurant1}
                        title="MC Donald"
                        rating="4.5"
                        km="2.45k"
                    />
                    <Restaurant
                        img={Restaurant1}
                        title="MC Donald"
                        rating="4.5"
                        km="2.45k"
                    />
                    <Restaurant
                        img={Restaurant1}
                        title="MC Donald"
                        rating="4.5"
                        km="2.45k"
                    />
                </div>
            </div>

        </div>
    )
}

export default RestaurantSection;


interface IProps {
    img: any,
    title: string,
    foods?: string[],
    rating: string;
    km: string

}

export const Restaurant = ({ img, title, foods, rating, km }: IProps) => {
    return (
        <div className=' card w-[20rem] shadow-lg rounded-md border-2 pb-5 p-3'>
            <div className='relative'>

                <ImageComponent
                    src={img}
                    alt="RestaurantImages"
                    className=' rounded-md w-[23rem] h-[15rem]'
                />
                <div className='flex gap-1 items-center p-2 rounded-xl bg-white absolute right-4 top-[12rem]'>
                    <StarIcon color="yellow" stroke="black" />
                    <p className='text-sm font-medium'>4.5k</p>
                </div>
            </div>

            <div className='py-3'>
                <div><h4 className='font-bold text-[16px]'>{title}</h4></div>
                <div className='flex gap-3 py-2 '>
                    <h4 className='text-sm' >Rice</h4>
                    <h4 className='text-sm' >Fast Food</h4>
                    <h4 className='text-sm' >Snack</h4>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className='flex gap-1 items-center'>
                        <LocationIcon color="red" stroke='white' />
                        <p className='font-semibold text-slate-500 text-sm'>{km}</p>

                    </div>
                    <p className='font-semibold text-sm'>$$$$</p>
                </div>

            </div>
        </div>
    )
}