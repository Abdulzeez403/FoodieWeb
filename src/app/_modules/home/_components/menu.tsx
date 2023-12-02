import ImageComponent from '@/app/_components/images'
import StarIcon from '@/app/_components/svg/svg/star'
import React from 'react'
import HeaderComponents from '@/app/_components/header'
import bakery from "../../../../../public/food1.png"
import ButtonComponent from '@/app/_components/button'




const MenusSection = () => {
    const data = [
        {
            id: 1,
            image: "/food1.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        },

        {
            id: 2,
            image: "/food2.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        },
        {
            id: 3,
            image: "/food2.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        },
        {
            id: 4,
            image: "/food2.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        }
    ]
    return (
        <div className='w-[80%] mx-auto py-4'>
            <HeaderComponents title="New Recipes" description="Some of the best restaurant in town!" />

            <div className=' 
            w-[90rem] overflow-auto flex py-4 gap-10
            lg:overflow-x-hidden
            xl:w-[90rem] xl:mx-auto xl:overflow-x-hidden'>

                {
                    data.map((item) => (
                        <div key={item.id}>
                            <MenuComponent img={item.image} title='Chicken' description={item.description} price={item.price} />
                        </div>

                    ))
                };

            </div>
        </div>
    )
}

export default MenusSection

interface IProps {
    img: any
    title: string,
    description: string,
    price: string
}

export const MenuComponent = ({ img, title, description, price }: IProps) => {
    return (

        <div className=' card  w-[20rem]  shadow-lg rounded-md border-2 pb-5  '>
            <div className='relative overflow-hidden '>
                <ImageComponent
                    src={img}
                    alt="RestaurantImages"
                    className=' rounded-full w-[23rem] h-[15rem] p-3'
                />
                <div className='p-[3.2rem] rounded-full bg-green-500 absolute  top-[-3rem] right-[-3rem]  '>
                </div>

                <div className='absolute z-10 top-[0.6rem] right-[0.7rem]
                 '>
                    <StarIcon color="white" stroke="black" />

                </div>

            </div>

            <div className='py-3 p-3'>
                <div><h4 className='font-bold text-[18px]'>{title}</h4></div>
                <div>{description}</div>
                <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold text-[1.5rem]'>$ {price}</p>
                    <ButtonComponent type="link" className='' icon="+" size="large">
                        Add
                    </ButtonComponent>
                </div>

            </div>
        </div>


    )
}