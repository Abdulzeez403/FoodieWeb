import ImageComponent from '@/app/_components/images'
import { Space } from 'antd'
import React from 'react'
import order from "../../../../../public/order.png";
import search from "../../../../../public/search.png";
import delivery from "../../../../../public/delivery.png";
import HeaderComponents from '@/app/_components/header';


interface IProps {
    id?: number,
    title: string,
    subtitle: string,
    img: any,
}


const CardSections = () => {
    const cartData: IProps[] = [
        {
            id: 1,
            title: "Search",
            subtitle: "Explore restaurants and various cuisines effortlessly using the automatic location detection search feature",
            img: `${order}`
        },
        {
            id: 2,
            title: "Order & Pay ",
            subtitle: "Enjoy a delightful meal and make secure payments using your card or through bank transfer via our reliable Payment Gateway.",
            img: `${order}`
        },
        {
            id: 3,
            title: "Delivery or Pick-up",
            subtitle: "Receive your meal promptly and piping hot through delivery or opt for self - pickup.Indulge in your dining experience!",
            img: `${order}`
        }
    ]
    return (
        <Space direction="vertical" className='py-4' >
            <HeaderComponents title="How It Works" description="Some of the best restaurant in town!" />

            <Space className='
            w-[90%] mx-auto block py-2
            sm:block sm:justify-between
            md:flex  md:justify-center md:items-center 
            lg:flex  lg:justify-center lg:items-center '>
                {/* {cartData.map((card, index) => (
                    <Space key={card?.id}>
                        <Cards title={card.title}
                            subtitle={card.subtitle}
                            img={card?.img} />
                    </Space>
                ))
                } */}

                <Cards title="Search"
                    subtitle=" Explore restaurants and various cuisines effortlessly using the automatic location detection search feature"
                    img={search} />

                <Cards title="Order & Pay"
                    subtitle="Enjoy a delightful meal and make secure payments using your card or through bank transfer via our reliable Payment Gateway."
                    img={order} />


                <Cards title="Delivery or Pick-up"
                    subtitle="Receive your meal promptly and piping hot through delivery or opt for self - pickup.Indulge in your dining experience!"
                    img={delivery} />


            </Space>

        </Space>
    )
}

export default CardSections


const Cards = ({ img, title, subtitle }: IProps) => {
    return (
        <div className=' 
        shadow-style
        p-2
        sm:p-5
        md:p-4 
        lg:p-8
         xl:px-4 xl:py-8'>
            <div className='
            block justify-between
            sm:flex sm:justify-between
            md:block md:justify-normal
            lg:flex lg:justify-between
            xl:flex xl:gap-4 '>
                <ImageComponent
                    src={img}
                    alt="cardImage"
                    width={150}
                    height={150}
                    className="
                    w-[12%] mx-auto
                    sm:w-[16%] sm:mx-0
                    md:w-[20%] md:mx-auto
                    lg:w-[23%] lg:mx-0
                    xl:w-[18%] xl:mx-0" />


                <div className='
                w-[80%] mx-auto
                sm:w-[70%] sm:mx-auto
                md:w-[80%] md:mx-auto
                 lg:w-[72%] lg:mx-0 
                 xl:w-[80%] xl:mx-0'>
                    <div className='
                    py-2  font-semibold text-center
                    sm:text-left sm:text-[18px]
                    md:text-center md:text-[14px]
                    lg:text-left lg:text-[16px]'>{title}</div>
                    <div className='py-1
                    text-center
                    sm:text-left
                      md:text-center md:text-[12px]
                    lg:text-left lg:text-[14px]
                    '>{subtitle}</div>
                </div>

            </div>

        </div>
    )
}
