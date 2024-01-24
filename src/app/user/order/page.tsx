"use client"
import { useGetOrderQuery } from '@/lib/features/order/orderApi';
import React from 'react'
import Cookies from 'universal-cookie';
import Image from "next/image"
import Moment from 'react-moment';
import Link from 'next/link';
import { LoadingComponent } from '@/app/components/loading';

const OrderPage = () => {
    const cookies = new Cookies()
    const user = cookies.get("user");
    const { data: orders, isLoading } = useGetOrderQuery(user?._id);
    return (
        <div>
            {isLoading ?
                (<div className='text-center justify-center items-center'>
                    <LoadingComponent />
                </div>) :
                (
                    <div className="w-[54rem]  border-2 rounded-md">
                        {
                            orders?.map((order: any) => (
                                <div className=' mb-2 p-3 border-b-2' key={order?._id}>

                                    <Link href={`/user/order/${order?._id}`}  >
                                        <div className='flex justify-between mb-3'>
                                            <div>
                                                <h4 className='text-md'>{order?.name}</h4>
                                                <Moment>{order?.created || "N/L"}</Moment>
                                            </div>

                                            <h4 className='font-semibold text-yellow-300 text-md'>{order?.status}</h4>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div >
                                                <Image src={order?.cart?.[0]?.menu?.images?.[0]?.uri} alt="image" width={50} height={50} />
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
                                </div>

                            ))
                        }

                    </div>
                )}
        </div>

    )
}
export default OrderPage