import ImageComponent from '@/app/components/images'
import React from 'react'

import Bread from "../../../../../public/food2.png"
import africa from "../../../../../public/african food.jpg"
import bakery from "../../../../../public/food1.png"
import india from "../../../../../public/india_food.jpg"
import fast_food from "../../../../../public/fast.jpg"
import korean from "../../../../../public/koreanss.jpg"
import HeaderComponents from '@/app/components/header'

const CategoriesSection = () => {

    return (
        <div className='py-4'>
            <HeaderComponents title="Top Categories" description="Some of the best restaurant in town!" />

            <div className="w-70 overflow-auto">

                <div className='
            w-[100rem] overflow-auto flex 
        sm:w-[100rem]  sm:overflow-auto sm:flex sm:justify-center sm:items-center
           md:w-[100rem] md:overflow-auto md:flex md:justify-center md:items-center
        lg:mx-auto lg:flex lg:justify-center lg:items-center lg:m-0 
            xl:w-[90%] xl:mx-auto xl:flex xl:justfiy-center xl:items-center xl:m-0'>
                    <CategoryCard img={Bread} title="Bakery" />
                    <CategoryCard img={africa} title="Africans" />
                    <CategoryCard img={bakery} title="Bakery" />
                    <CategoryCard img={india} title="India" />
                    <CategoryCard img={fast_food} title="Snack" />
                    <CategoryCard img={korean} title="Korean" />
                    <CategoryCard img={korean} title="Korean" />

                </div>
            </div>

        </div>
    )
}

export default CategoriesSection

interface IProps {
    img: any,
    title: string
    className?: string,
}
const CategoryCard = ({ img, title, className }: IProps) => {
    return (
        <div className='mx-10 py-4'>
            <ImageComponent src={img} alt="categoryImage"
                width={300} height={300}
                className='rounded-full border-2 border-green-300 
                md:bg-red-300 '
                sizes="" />

            <div>
                <h4 className="text-center font-semibold pt-2">{title}</h4>
            </div>
        </div>
    )
}






