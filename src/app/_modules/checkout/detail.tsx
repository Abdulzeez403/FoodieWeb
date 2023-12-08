import ImageComponent from '@/app/_components/images'
import { ICart } from '@/lib/features/menu/model'
import React from 'react'

interface IProps {
    cart: ICart
}

const Checkoutdetail = ({ cart }: IProps) => {
    return (
        <div>
            <div>
                <ImageComponent src={cart?.image} alt="Image" />
                <h4>{cart?.title} </h4>
                <p>{cart?.price} </p>
                <p>{cart?.id} </p>
            </div>

        </div>
    )
}

export default Checkoutdetail
