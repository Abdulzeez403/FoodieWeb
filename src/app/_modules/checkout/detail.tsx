import ImageComponent from '@/app/_components/images'
import { ICart } from '@/lib/features/menu/model'
import React, { useState } from 'react'
import Images from "../../../../public/koreans.jpeg"
import AvatarComponents from '@/app/_components/images/avatar'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@/lib/features/menu/cartSlice'
import { RootState } from '@reduxjs/toolkit/query'

interface IProps {
    cart: ICart
}

const Checkoutdetail = ({ cart }: IProps) => {
    const dispatch = useDispatch()
    const count = useSelector((state: any) => state.cart.counter);

    const handleIncrement = () => {
        dispatch(increment())
    }


    return (
        <>
            <div className="flex justify-between items-center m-0">
                <div className="flex gap-5">
                    {/* <ImageComponent src={Images} alt="image" width={50} height={50} className='rounded-full w-[50px] min-w-min' /> */}
                    <AvatarComponents src={Images} />
                    <div>
                        <h4 className="font-semibold text-lg">{cart?.title} </h4>
                        <p className="text-lg">{cart?.price} </p>
                    </div>
                </div>

                <div className='block items-center gap-3'>
                    <CiSquarePlus size={26}
                        onClick={handleIncrement} />
                    <h5 className="text-lg font-semibold text-center">
                        {count}
                    </h5>
                    <CiSquareMinus size={26} onClick={dispatch(decrement())} />

                </div>
            </div>

        </>
    )
}

export default Checkoutdetail
