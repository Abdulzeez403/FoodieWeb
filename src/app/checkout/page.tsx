"use client"

import React, { useEffect } from 'react'
import { useEmptyCartMutation, useGetCartQuery } from '@/lib/features/cart/cartApi';
import Cookies from 'universal-cookie';
import { ICart } from '@/lib/features/cart/model';
import { UserOutlined } from '@ant-design/icons';
import { Formik, FormikProps, Form } from 'formik';
import { useGetUserQuery, useUpdateUserMutation } from '@/lib/features/auth/authApi';
import { toast } from 'react-toastify';
import { IUser } from '@/lib/features/auth/model';
import { usePlaceOrderMutation } from '@/lib/features/order/orderApi';
import { useSelector } from 'react-redux';
import { useStartPaymentMutation } from '@/lib/features/payment/paymentApi';
import ButtonComponent from '../components/button';
import { ApTextInput } from '../components/input/TextInput';
import { CheckoutDetial } from './detail';


const CheckoutPage = () => {
    const cookies = new Cookies()
    const user = cookies.get("user");
    const userId = user && user?._id;
    const { data: carts, refetch: getCart } = useGetCartQuery(userId);
    const [updateUser, { isSuccess }] = useUpdateUserMutation();
    const { data: currentUser, refetch: getUser } = useGetUserQuery(userId)
    const [placeOrder, { isError }] = usePlaceOrderMutation()
    const [emptyCart] = useEmptyCartMutation()
    const [startPayment] = useStartPaymentMutation()
    const subTotal = carts?.data?.map((c: any) => parseFloat(c?.menu?.price) || 0)?.reduce((a: any, b: any) => a + b, 0);
    const totalPrice = useSelector((state: any) => state.cart?.total);



    useEffect(() => {
        getUser()
    }, [])


    const handlePayment = () => {
        const payloads = { full_name: currentUser?.name, email: currentUser?.email, amount: totalPrice }
        startPayment({ payloads }).then((data: any) => {
            if (!isError) {
                console.log(data)
            }
        })

    }
    const handlePlaceholder = async () => {
        try {
            const payload = { userId: user?._id, totalAmount: Number(subTotal) };
            await placeOrder({
                ...payload
            })
            if (!isError) {
                handlePayment()
                // emptyCart(user?._id)
                toast.success("Order Placed successfuly")
            }

        } catch (error) {
            toast.error("Order placed Unsuccessfull!")
        }


    }


    const handleSubmit = (payload: IUser) => {
        updateUser({ id: userId, initailUser: { address: currentUser?.address, ...payload } }).unwrap().then((data) => {
            if (isSuccess) {
                toast.success("Shippping info updated!")
            }
        })
    }

    return (
        <div className="flex justify-between m-auto  w-[90%]">
            <div className="w-[50rem] ">
                {carts?.data?.length === 0 ? (
                    <h4>Empty</h4>
                ) : (
                    carts?.data?.map((item: ICart) => (
                        <CheckoutDetial cart={item} key={item?._id} />
                    )))}
            </div>
            <div className="w-[30rem] p-4 shadown-md">

                <Formik
                    initialValues={{ address: user?.address || "", }}
                    // validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(props: FormikProps<any>) => (
                        <div>
                            <Form >
                                <div className=" ">
                                </div>
                                <ApTextInput
                                    type="text"
                                    label="Address"
                                    name="address"
                                    placeHolder="address"
                                    className=" p-2 rounded-md outline-0 border hover:bg-white hover:"
                                    icon={<UserOutlined />}
                                />

                                <ButtonComponent
                                    htmlType="submit"
                                    type="primary"
                                    size="large"
                                    className='bg-green-500 w-full text-white rounded-md '>
                                    shipping
                                </ButtonComponent>


                            </Form>
                        </div>
                    )}
                </Formik>

                <div className='my-6'>
                    <div>
                        <div className='font-semibold border-b-2'>Order Summary</div>
                        <div className="flex justify-between">
                            <div>
                                <h4>Total:</h4>
                                <h4>SubTotal:</h4>
                                <h4>Discount:</h4>
                            </div>
                            <div>
                                <h4>{subTotal}</h4>
                                <h4>{subTotal}</h4>
                                <h4>00</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ButtonComponent
                            htmlType="submit"
                            type="primary"
                            size="large"
                            className=' w-full  rounded-md py-4 '
                            onClick={() => {
                                handlePlaceholder(),
                                    emptyCart(userId)
                            }}>
                            <h4>Checkout: ({subTotal})</h4>

                        </ButtonComponent>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default CheckoutPage
