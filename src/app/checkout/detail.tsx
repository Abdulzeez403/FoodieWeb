
import React, { useEffect, useState } from 'react'
import Images from "../../../../public/koreans.jpeg"
import AvatarComponents from '@/app/_components/images/avatar'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setCarLength, setCart, setTotalPrice } from '@/lib/features/cart/cartSlice'
import { RootState } from '@/lib/store'
import { useDeleteCartMutation, useEmptyCartMutation, useGetCartQuery, useGetCartsQuery } from '@/lib/features/cart/cartApi'
import Cookies from 'universal-cookie'
import { usePlaceOrderMutation } from '@/lib/features/order/orderApi'
import CartCard from '../cart/cartCard'

interface IProps {
    cart: any
}

const CheckoutPage: React.FC<IProps> = ({ cart }) => {
    const cookies = new Cookies()
    const user = cookies.get("user");
    const carts = cart?.menu;
    const dispatch = useDispatch()
    const { _id: cartId, quantity } = cart;
    const [qnt, setQnt] = useState(quantity)
    const [deleteCart, { isSuccess }] = useDeleteCartMutation();
    const { refetch: getCart } = useGetCartQuery(user?._id);
    const cartss = useSelector((state: RootState) => state.cart.carts)
    const total = useSelector((state: RootState) => state.cart.total)
    const subTotal = carts?.data?.map((c: any) => parseFloat(c?.menu?.price) || 0)?.reduce((a: any, b: any) => a + b, 0);
    // const cartLengths = useSelector((state: any) => state.cart?.cartlength)

    useEffect(() => {
        dispatch(setCarLength(carts?.data?.length)) as any
        dispatch(setTotalPrice(subTotal))
    }, [dispatch, carts, subTotal])





    const handleRemoveCart = async () => {
        try {
            await deleteCart(cartId)
            getCart()
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
            <CartCard
                carts={carts}
                qnt={qnt}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleRemoveCart={handleRemoveCart}

            />

        </>
    )
}

export default CheckoutPage;
