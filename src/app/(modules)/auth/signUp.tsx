import ButtonComponent from '@/app/components/button';
import { ApTextInput } from '@/app/components/input/TextInput';
import { useAddNewUserMutation } from '@/lib/features/auth/authApi';
import { IUser } from '@/lib/features/auth/model';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { toast } from 'react-toastify';

interface IProps {
    handleLoyStyle: () => void;
    onDismiss: () => void;
}

const SignUpComponent = ({ handleLoyStyle, onDismiss }: IProps) => {

    const [addNewUser, { isLoading }] = useAddNewUserMutation()



    const handleSubmit = (payload: IUser) => {
        addNewUser({ ...payload }).then((data) => {
            if (data) {
                toast.success("Account Created!")
                onDismiss()

            } else {
                toast.error("Error Occurred!")
            }
        })

    }

    return (
        <>
            <Formik
                initialValues={{ name: "", email: "", phoneNumber: "", address: "", password: "" }}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(props: FormikProps<any>) => (
                    <div>
                        <Form >
                            <div className=" ">
                                {/* <h4 className=" font-semibold text-lg">Log In</h4> */}

                            </div>
                            <ApTextInput
                                type="text"
                                label="Name"
                                name="name"
                                placeHolder="Name"
                                className=" p-2 rounded-md outline-0 border hover:bg-white hover:"
                                icon={<UserOutlined />}
                            />
                            <ApTextInput
                                type="text"
                                label="Email"
                                name="email"
                                placeHolder="Email"
                                className=" p-2 rounded-md outline-0 border hover:bg-white hover:"
                                icon={<UserOutlined />}
                            />
                            <ApTextInput
                                type="text"
                                label="Address"
                                name="address"
                                placeHolder="address"
                                className=" p-2 rounded-md outline-0 border hover:bg-white hover:"
                                icon={<UserOutlined />}
                            />

                            <ApTextInput
                                type="text"
                                label="PhoneNumber"
                                name="phoneNumber"
                                placeHolder="PhoneNumber"
                                className=" p-2 rounded-md outline-0 border hover:bg-white hover:"
                                icon={<UserOutlined />}
                            />


                            <ApTextInput
                                type="password"
                                label="password"
                                name="password"
                                className=" p-2 rounded-md outline-0 border hover:bg-white"
                                placeHolder="password"
                                icon={<LockOutlined />}
                            />



                            <ButtonComponent
                                htmlType="submit"
                                type="primary"
                                size="large"
                                className='bg-green-500 w-full text-white rounded-md '>
                                {isLoading ? <Spin className='text-white' /> : 'Sign Up'}
                            </ButtonComponent>

                            <div className="text-center py-6 font-semibold">
                                Dont have an account
                                <span className="text-green-500  px-2 font-bold cursor-context-menu;" onClick={handleLoyStyle}>
                                    SignIn
                                </span>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default SignUpComponent
