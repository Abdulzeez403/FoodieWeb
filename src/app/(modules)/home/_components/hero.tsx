import LocationInput from '@/app/components/input/locate'
import React from 'react'
import Image from "next/image"
import food1 from "../../../../../public/food1.png"
import food2 from "../../../../../public/food2.png"
import ImageComponent from '@/app/components/images'

const HeroSection = () => {
    return (
        <div>
            <div className='relative overflow-hidden w-[90%] mx-auto h-[400px] bg-green-400 rounded-md my-10'>
                <div className='w-[90%] mx-auto 
                sm:w-[80%]  
                md:w-[60%]
                 lg:w-[40%] ' >
                    <div className='text-center pt-[60px]'>
                        <h2 className=' py-2  font-bold text-white
                        sm:text-[20px]
                         md:text-[20px]
                          lg:text-[28px]  '>Elevate Your Taste, Elevate Your Day</h2>
                        <p className='text-[12px] py-2 md:text-[14px] lg:text-[17px] text-white '>Transform mundane meals into memorable experiences. Elevate your taste buds, and watch as your day ascends to a new level of culinary delight</p>
                    </div>

                    <div>
                        <LocationInput />
                    </div>
                </div>

                <div className="">

                    <ImageComponent src={food1} alt="food" width={400}
                        height={400} className='
                        absolute 
                        sm:w-96 sm:top-10  sm:left-[-300px] sm:bottom-[-30px]
                        md:w-96 md:top-10  md:left-[-250px] lg:bottom-[-30px]
                        lg:w-80  lg:top-20 lg:left-[-80px] lg:botton-[-60px] 
                         xl:w-96'  />



                    <ImageComponent src={food2} alt="food" width={400}
                        height={400} className='
                            absolute hidden
                             sm:flex sm:w-45 sm:top-0 sm:right-[-100px] sm:buttom-[-30px] sm:opacity-10
                            md:flex md:w-45 md:top-0 md:right-[-80px] md:buttom-[-30px] md:opacity-10
                           lg:flex lg:w-80 lg:top-[-70px]  lg:right-[-90px] lg:bottom-[-60px] lg:opacity-80
                           xl:flex xl:w-96' />



                </div>



            </div>
        </div>
    )
}

export default HeroSection