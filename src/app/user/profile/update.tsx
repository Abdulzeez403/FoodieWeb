import ButtonComponent from '@/app/components/button';
import { ApTextInput } from '@/app/components/input/TextInput';
import { useUpdateUserMutation } from '@/lib/features/auth/authApi';
import { IUser } from '@/lib/features/auth/model';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { toast } from 'react-toastify';

interface IProps {
    onDismiss: () => void;
    user: IUser;
    getUser: () => void;
    userId: any
}

const UpdateUser = ({ onDismiss, user, getUser, userId }: IProps) => {
    const [UpdateUser, { isLoading, isSuccess }] = useUpdateUserMutation()
    const handleSubmit = (payload: IUser) => {
        try {
            UpdateUser({ id: userId, initailUser: { ...payload } }).then((data) => {
                if (isSuccess) {
                    toast.success("User Updated!")
                    onDismiss()
                    // getUser()

                } else {
                    toast.error("Error Occurred!")
                }
            })

        }
        catch (error) {
            console.log(error)

        }
    }


    return (
        <>
            <Formik
                initialValues={{ name: user?.name || "", email: user?.email || "", phoneNumber: user?.phoneNumber || "", address: user?.address || "", }}
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



                            <ButtonComponent
                                htmlType="submit"
                                type="primary"
                                size="large"
                                className='bg-green-500 w-full text-white rounded-md '>
                                {isLoading ? "Updating" : "Updated!"}
                            </ButtonComponent>


                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default UpdateUser
