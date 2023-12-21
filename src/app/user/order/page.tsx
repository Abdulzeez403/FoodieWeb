"use client"

import { useGetOrderQuery } from '@/lib/features/order/orderApi'
import React from 'react'
import Cookies from 'universal-cookie';

const OrderPage = () => {
    const cookies = new Cookies()
    const user = cookies.get("user");
    const { data: order } = useGetOrderQuery(user?._id);
    console.log(order)
    return (
        <div>
            <div>Ordering</div>

        </div>
    )
}
export default OrderPage