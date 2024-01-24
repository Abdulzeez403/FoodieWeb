import ButtonComponent from '@/app/components/button';
import { ApTextInput } from '@/app/components/input/TextInput';
import CheckBoxComponent from '@/app/components/input/checkbox';
import { GoogleCircleFilled, LockOutlined, TwitterCircleFilled, UserOutlined } from '@ant-design/icons';
import { Form, Formik, FormikProps } from 'formik'
import { FcGoogle } from "react-icons/fc";
import React from 'react'
import { IUserSignIn } from '@/lib/features/auth/model';
import { toast } from 'react-toastify';
import axios from 'axios';
import { UseSetCookie } from '@/app/components/hooks/cookie';

interface IProps {
    handleLoyStyle: () => void;
    onDismiss: () => void;
}

const SignInComponents = ({ handleLoyStyle, onDismiss }: IProps) => {

    const handleSubmit = async (payload: IUserSignIn) => {

        try {
            const res = await axios.post(`https://foodieserver.onrender.com/api/auth/user`, payload)
            if (res) {
                toast.success("Logged In")
                onDismiss()
                window.location.reload();
                UseSetCookie("user", res.data)
            }
        } catch {
            toast.error("Invalid Emaail or Password")
        }
    }


    // const handleSubmit = (val: any) => {
    //     signIn('credentials',
    //         {
    //             email: val.email,
    //             password: val.password,
    //             callbackUrl: `${window.location.origin}/`
    //         }
    //     )
    // }



    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(props: FormikProps<any>) => (
                    <div>
                        <Form >
                            <div className=" ">
                                <h4 className=" font-semibold text-lg">Log In</h4>

                            </div>

                            <div className='py-5'>
                                <ButtonComponent
                                    icon={<FcGoogle />}
                                    htmlType='button'
                                    type="primary"
                                    size='large'
                                    className='bg-slate-200 w-full text-slate-600 py-4 rounded-md my-2'>
                                    Sign with Google
                                </ButtonComponent>
                                <ButtonComponent
                                    icon={<TwitterCircleFilled />}
                                    htmlType='button'
                                    type="primary"
                                    size='large'
                                    className='bg-slate-200 w-full text-slate-600 py-4 rounded-md my-2'>
                                    Sign with Twitter
                                </ButtonComponent>
                            </div>
                            <ApTextInput
                                type="text"
                                label="Email"
                                name="email"
                                placeHolder="Email"
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

                            <div className="flex justify-between py-5">
                                <CheckBoxComponent title="Stay logged In" />
                                <ButtonComponent
                                    type="link"
                                    className='bg-white' >
                                    Forget Password
                                </ButtonComponent>
                            </div>

                            <ButtonComponent
                                htmlType="submit"
                                type="primary"
                                size="large"
                                className='bg-green-500 w-full text-white rounded-md'>
                                Submit
                            </ButtonComponent>

                            <div className="text-center py-6 font-semibold">
                                Dont have an account
                                <span className="text-green-500  px-2 font-bold cursor-context-menu;" onClick={handleLoyStyle}>
                                    SignUp
                                </span>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default SignInComponents
