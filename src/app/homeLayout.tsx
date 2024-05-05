
import { Badge } from "antd"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useGetCartQuery } from "@/lib/features/cart/cartApi"
import Cookies from "universal-cookie"
import { ICart } from "@/lib/features/cart/model"
import { setCarLength, setTotalPrice } from "@/lib/features/cart/cartSlice"
import { useDispatch } from "react-redux"
import { FaRegUser, FaAngleRight } from 'react-icons/fa'
import Image from "next/image"
import Cartdetail from "./cart/detail"
import MenuIcon from "./components/svg/svg/menu"
import SearchIcon from "./components/svg/svg/search"
import ButtonComponent from "./components/button"
import CartIcon from "./components/svg/svg/cart"
import ModalComponent1 from "./components/modals/centerModal"
import ModalComponent2 from "./components/modals/sideModal"
import SignInComponents from "./(modules)/auth/signIn"
import SignUpComponent from "./(modules)/auth/signUp"
import axios from "axios"



const HomeLayout = () => {
    const cookies = new Cookies()
    const user = cookies.get("user");
    const dispatch = useDispatch()
    const [carts, setCarts] = useState<any>()

    const getCartData = async (userId: any) => {

        try {
            const response = await axios.get(`https://foodieserver.onrender.com/api/cart/${userId}`);
            setCarts(response?.data)
            return response.data;
        } catch (error) {
            console.error('Error fetching cart data:', error);
            throw error;
        }
    };



    const subTotal = carts?.data?.map((c: any) => parseFloat(c?.menu?.price) || 0)?.reduce((a: any, b: any) => a + b, 0);
    const cartLengths = useSelector((state: any) => state?.cart?.cartlength)
    const totalPrice = useSelector((state: any) => state?.cart?.total)

    useEffect(() => {
        if (user) {
            getCartData(user?._id);
            dispatch(setCarLength(carts?.data?.length)) as any
            dispatch(setTotalPrice(subTotal))
        }

    }, [])


    const [modal, setModal] = useState<{ show: boolean, data?: any, }>({
        show: false
    })

    const [menu, setMenu] = useState<{ show: boolean, data?: any, }>({
        show: false
    })

    const [cartModal, setcartModal] = useState<{ show: boolean, data?: any, }>({
        show: false
    })

    const [logStyle, setLogStyle] = useState<{ show: boolean }>({
        show: true

    })



    const handleModal = () => {
        setModal({ show: true })
    }

    const handleCartModal = () => {
        setcartModal({ show: true })
    }

    const handleMenu = () => {
        setMenu({ show: true })
    }



    return (

        <>

            <div className=" py-2 bg-primaryBackgroundColor shadow-lg shadow-slate-100 ">
                <div className='flex justify-between items-center w-[90%] mx-auto'>

                    <div className="flex gap-4 items-center ">
                        <div className='flex-content'>
                            <div className="flex sm:flex md:hidden lg:hidden xl:hidden" onClick={() => handleMenu()}>
                                <MenuIcon color="green" stroke='green'
                                />
                            </div>
                            <Link href="/" className="font-bold text-[1.3rem]">Foodie</Link>


                        </div>
                        <nav className="hidden sm:hidden md:flex md:gap-4 lg:flex lg:gap-4">
                            <Link href="/"> <h3 className='link-style'>Home</h3></Link>
                            <Link href="/menu"> <h3 className='link-style'>Recommendation</h3></Link>
                        </nav>
                    </div>

                    <div className='flex-content'>

                        <div className='bg-green-100 p-2 rounded-full'>
                            <SearchIcon color="none" stroke='green' />

                        </div>

                        <div className='flex sm:flex md:flex lg:flex' >
                            {user?._id ?
                                (<Link href="/user">
                                    <ButtonComponent size="large" type="link" >
                                        <FaRegUser />
                                    </ButtonComponent>
                                </Link>) : (
                                    <ButtonComponent size="large" type="default"
                                        onClick={() => { handleModal() }}>
                                        Login/Sign Up
                                    </ButtonComponent>)}
                        </div>

                        <div onClick={handleCartModal} >
                            <Badge count={cartLengths}>
                                <CartIcon color="green" />
                            </Badge>
                        </div>

                    </div>
                </div>

            </div>
            <ModalComponent1
                title="SignIn"
                open={modal?.show}
                width={600}
                center={false}
                onDismiss={() => setModal({ show: false })}>
                <div className={logStyle.show ? "  block" : "hidden"}>
                    <SignInComponents
                        handleLoyStyle={() => setLogStyle({ show: false })}
                        onDismiss={() => setModal({ show: false })} />
                </div>

                <div className={logStyle.show ? " hidden " : "block"}>
                    <SignUpComponent
                        onDismiss={() => setModal({ show: false })}
                        handleLoyStyle={() => setLogStyle({ show: true })} />
                </div>

            </ModalComponent1>
            <ModalComponent2
                title="Cart"
                show={cartModal.show}
                width={500}
                onDismiss={() => setcartModal({ show: false })}>

                <div>
                    {carts?.data?.length === 0 ? (
                        <div className="flex justify-center m-0 align-center h-50">
                            <div className="">
                                <Image src="/emptyCart.svg" alt="image" width={200} height={200} />
                                <h3 className="text-center py-5 font-bold">No Items in Cart!</h3>
                            </div>

                        </div>
                    ) : (
                        <div>
                            {carts?.data?.map((item: ICart) => (
                                <Cartdetail cart={item} key={item?._id} />
                            ))}
                            <div className="flex justify-between mt-10">
                                <ButtonComponent
                                    onClick={() => setcartModal({ show: false })}
                                    size="large"
                                    type="primary"
                                    className="w-full"
                                >
                                    <Link href="/checkout">Continue:({subTotal})</Link>
                                </ButtonComponent>
                            </div>
                        </div>
                    )}

                </div>


            </ModalComponent2>

            <ModalComponent2
                title="Menu"
                show={menu.show}
                width={500}
                position="left"
                onDismiss={() => setMenu({ show: false })}>
                <h4>Menaing!</h4>
            </ModalComponent2>
        </>





    )
}

export default HomeLayout;