import AvatarComponents from '@/app/_components/images/avatar'
import { ICart } from '@/lib/features/cart/model';
import React from 'react'
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci'
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from "next/image"
import ImageComponent from '@/app/_components/images';

interface IProps {
    carts: ICart,
    qnt: number,
    handleIncrement: () => void;
    handleDecrement: () => void
    handleRemoveCart: () => void

}

const CartCard: React.FC<IProps> = ({ carts, qnt, handleDecrement, handleIncrement, handleRemoveCart }) => {

    return (
        <div className='relative my-6'>
            <div className="shadow-style flex justify-between items-center m-0 border-2 rounded-md p-6" >
                <div className="flex gap-5">
                    <ImageComponent src={carts?.images?.[0]?.uri} alt="image" width={50} height={50} className='rounded-full w-[50px] min-w-min' />
                    <div>
                        <h4 className="font-semibold text-lg">{carts?.name} </h4>
                        <p className="text-lg">{carts?.price as any * qnt} </p>
                    </div>
                </div>

                <div className='block items-center gap-3'>
                    <CiSquarePlus size={26} onClick={handleIncrement} />
                    <h5 className="text-lg font-semibold text-center">
                        {qnt}
                    </h5>
                    <CiSquareMinus size={26} onClick={handleDecrement} />

                </div>
            </div>

            <div className="absolute top-[-10rem] z-1000 hidden group">
                <RiDeleteBin5Fill onClick={handleRemoveCart} className="text-red-500 text-lg cursor-pointer" />
            </div>

        </div>
    )
}

export default CartCard
