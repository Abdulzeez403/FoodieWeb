"use client"
import { useGetOrderQuery } from '@/lib/features/order/orderApi';
import React from 'react'
import Cookies from 'universal-cookie';
import Image from "next/image"
import Moment from 'react-moment';
import Link from 'next/link';

const OrderPage = () => {
    const cookies = new Cookies()
    const user = cookies.get("user");
    const { data: orders } = useGetOrderQuery(user?._id);
    console.log(orders)
    return (
        <div className="w-[54rem]  border-2 rounded-md">
            {
                orders?.map((order: any) => (
                    <Link href={`/user/order/${order?._id}`} key={order?._id} className=' mb-2 p-3 border-b-2'>
                        <div className='flex justify-between mb-3'>
                            <div>
                                <h4 className='text-md'>{order?._id}</h4>
                                <Moment>{order?.created || "N/L"}</Moment>
                            </div>

                            <h4 className='font-semibold text-yellow-300 text-md'>{order?.status}</h4>
                        </div>
                        <div className='flex justify-between'>
                            <div className='bg-red-300'>
                                <Image src={order?.cart?.menu?.images?.uri} width={70} height={70} alt="image" />
                            </div>
                            <div className="flex gap-x-5">
                                <div>
                                    <h4 className="textStyle">Order Price:</h4>
                                    <h4 className="textStyle">Quantity:</h4>
                                </div>
                                <div>
                                    <h4 className="textStyle">{order?.totalAmount}</h4>
                                    <h4 className="textStyle">{order?.cart?.length}</h4>
                                </div>

                            </div>
                        </div>

                    </Link>

                ))
            }

        </div>
    )
}
export default OrderPage