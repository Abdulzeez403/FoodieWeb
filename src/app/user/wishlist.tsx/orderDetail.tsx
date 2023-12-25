import React from 'react'
interface IProps {
    orderId: any
}
const OrderDetail = ({ orderId }: IProps) => {
    return (
        <div>
            <div>{orderId?.status}</div>
        </div>
    )
}

export default OrderDetail;