import React from 'react'
import { ISingelOrder } from '../model'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Moment from 'react-moment';
import { LoadingComponent } from '@/app/components/loading';


interface IProps {
    orderId: any,
    isLoading: boolean
}



const OrderDetail = ({ orderId, isLoading }: IProps) => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Order Info',
            children: <div >
                <div className='border-b-2'>
                    <h4 className='font-semibold'>Overview</h4>
                    <div>OrderId:{orderId?._id}</div>
                    <div>status:{orderId?.status}</div>
                    <div>Order placed Date:{orderId?.created} </div>
                </div>
                <div className='border-b-2'>
                    <h4 className='font-semibold'>Payment Info</h4>
                    <div>Payment method: Paystack</div>
                    <div>subtotal:{orderId?.totaolAmount}</div>
                    <div>Discount:000</div>
                    <div>Delivery fee:000</div>
                    <div>Total Price:{orderId?.totaolAmount}</div>
                </div>
                <div className='border-b-2'>
                    <h4 className='font-semibold'>Shipping</h4>
                    <div>Shipping Method: Self-delivery</div>
                    <div>Address: No</div>
                </div>
            </div>,

        },
        {
            key: '2',
            label: 'Order Item',
            children: <h4>Coming soon</h4>
        },
        {
            key: '3',
            label: 'Order Log',
            children: <h4>Coming soon</h4>,
        },
    ];
    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <div className="w-[54rem]">
            {isLoading ?
                (<div className='text-center justify-center items-center'>
                    <LoadingComponent />
                </div>) :
                (

                    <Tabs defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                        size="large"
                        style={{ marginBottom: 32 }}
                        indicatorSize={100} />
                )}
        </div>

    )
}

export default OrderDetail
