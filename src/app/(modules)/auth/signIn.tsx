import ButtonComponent from "@/app/components/button";
import { ApTextInput } from "@/app/components/input/TextInput";
import CheckBoxComponent from "@/app/components/input/checkbox";
import {
  GoogleCircleFilled,
  LockOutlined,
  TwitterCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Form, Formik, FormikProps } from "formik";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { IUserSignIn } from "@/lib/features/auth/model";
import { toast } from "react-toastify";
import axios from "axios";
import { UseSetCookie } from "@/app/components/hooks/cookie";
import { Spin } from "antd";

interface IProps {
  handleLoyStyle: () => void;
  onDismiss: () => void;
}

const SignInComponents = ({ handleLoyStyle, onDismiss }: IProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (payload: IUserSignIn) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/user`,
        payload
      );
      if (res) {
        toast.success("Logged In");
        setLoading(false);

        onDismiss();
        window.location.reload();
        UseSetCookie("user", res.data);
      }
    } catch {
      toast.error("Invalid Email or Password");
      setLoading(false);
    }
  };

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
            <Form>
              <div className="py-5">
                <ButtonComponent
                  icon={<FcGoogle />}
                  htmlType="button"
                  type="primary"
                  size="large"
                  className="bg-slate-200 w-full text-slate-600 py-4 rounded-md my-2"
                >
                  Sign with Google
                </ButtonComponent>
                <ButtonComponent
                  icon={<TwitterCircleFilled />}
                  htmlType="button"
                  type="primary"
                  size="large"
                  className="bg-slate-200 w-full text-slate-600 py-4 rounded-md my-2"
                >
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
                <ButtonComponent type="link" className="bg-white">
                  Forget Password
                </ButtonComponent>
              </div>

              <ButtonComponent
                htmlType="submit"
                type="primary"
                size="large"
                className="bg-green-500 w-full text-white rounded-md"
                disabled={loading}
              >
                {loading ? <Spin /> : "Sign In"}
              </ButtonComponent>

              <div className="text-center py-6 font-semibold">
                Dont have an account
                <span
                  className="text-green-500  px-2 font-bold cursor-context-menu;"
                  onClick={handleLoyStyle}
                >
                  SignUp
                </span>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignInComponents;
