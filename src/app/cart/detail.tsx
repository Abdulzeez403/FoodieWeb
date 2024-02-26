import React, { useEffect, useState } from 'react'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setCart, setTotalPrice } from '@/lib/features/cart/cartSlice'
import { RootState } from '@/lib/store'
import { useDeleteCartMutation, useGetCartQuery, useGetCartsQuery } from '@/lib/features/cart/cartApi'
import Cookies from 'universal-cookie'
import ImageComponent from '@/app/components/images'
import axios from 'axios'

interface IProps {
    cart: any,
}

const Cartdetail: React.FC<IProps> = ({ cart }) => {
    const [cartData, setCartData] = useState<any>()

    const getCartData = async (userId: any) => {
        try {
            const response = await axios.get(`https://foodieserver.onrender.com/api/cart/${userId}`);
            setCartData(response?.data)
            return response.data;
        } catch (error) {
            console.error('Error fetching cart data:', error);
            throw error;
        }
    };

    const cookies = new Cookies()
    const user = cookies.get("user");
    const carts = cart?.menu;
    const dispatch = useDispatch()
    const { _id: cartId, quantity } = cart;
    const [qnt, setQnt] = useState(quantity)
    const [deleteCart, { isSuccess }] = useDeleteCartMutation();
    // const { refetch: getCart } = useGetCartQuery(user?._id);
    const cartss = useSelector((state: RootState) => state.cart.carts)
    const total = useSelector((state: RootState) => state.cart.total)

    const handleRemoveCart = async () => {
        try {
            await deleteCart(cartId)
            getCartData(user?._id)
            toast.success("Cart Removed!!")
        } catch (error) {
            console.error('Error removing cart:', error);
            toast.error('Failed to remove cart');
        }


    }

    const handleIncrement = () => {
        const newCart = cartss?.map((item: any) => {
            if (item?._id === cartId) {
                if (item?.cartId?.quantity > item?.quantity) {
                    return {
                        ...item,
                        quantity: Number(item?.quantity) + 1,
                    }
                } else {
                    toast.error('Product Quantity is not available')
                    return {
                        ...item,
                        quantity: Number(item?.cartId?.quantity),
                    }
                }
            }
            return item
        })
        if (qnt > 0) {
            let quantity = qnt + 1
            setQnt(quantity)
            dispatch(setTotalPrice(quantity * total))
            dispatch(setCart(newCart))
        }
        else {
            setQnt(quantity)
            dispatch(setTotalPrice(quantity * total))
            dispatch(setCart(newCart))
        }
    }

    const handleDecrement = () => {
        const newCart = cartss?.map((item: any) => {
            if (item?._id === cartId) {
                if (item?.quantity > 1) {
                    return {
                        ...item,
                        quantity: Number(item?.quantity) - 1,
                    }
                }
            }
            return item
        })
        if (qnt > 0) {
            let quantity = qnt - 1
            setQnt(quantity)
            dispatch(setCart(newCart))
        }
        else {
            setQnt(quantity)
            dispatch(setCart(newCart))
        }
    }




    return (
        <>
            <div className="flex justify-between items-center m-0" >
                <div className="flex gap-5">
                    <ImageComponent src={carts?.images?.[0]?.uri} alt="image" width={50} height={50} className='rounded-full w-[50px] min-w-min' />
                    <div>
                        <h4 className="font-semibold text-lg">{carts?.name} </h4>
                        <p className="text-lg">{carts?.price * qnt} </p>
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

            <div>
                <h4 onClick={handleRemoveCart}>X</h4>
            </div>

        </>
    )
}

export default Cartdetail
