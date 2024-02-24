import ButtonComponent from "@/app/components/button";
import ImageComponent from "@/app/components/images";
import StarIcon from "@/app/components/svg/svg/star";
import { useAddToCartMutation, useGetCartQuery } from "@/lib/features/cart/cartApi";
import { setCarLength } from "@/lib/features/cart/cartSlice";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

interface IMenuProps {
    _id?: any,
    img: any,
    title: string,
    description: string,
    price: string,
}

export const MenuComponent = ({ _id, img, title, description, price, }: IMenuProps) => {

    const cookies = new Cookies();
    const user = cookies.get("user")
    const userId = user && user?._id;

    const [addToCartMutation, { isSuccess }] = useAddToCartMutation()
    const { data: carts } = useGetCartQuery(_id)
    const dispatch = useDispatch()


    const handleAddToCart = async () => {
        try {
            const payload = { userId: userId, quantity: 1, _id }
            await addToCartMutation(payload);
            dispatch(setCarLength(carts?.data?.length)) as any
            toast.success("Cart added!")


        }
        catch (error) {
            toast.error("Cant add to cart!")
        }
    }
    return (
        <div className=' card  w-[20rem]  shadow-lg rounded-md border-2 pb-5  '>
            <div className='relative overflow-hidden '>
                <ImageComponent
                    src={img}
                    alt="RestaurantImages"
                    className=' rounded-full w-[23rem] h-[15rem] p-3'
                />
                <div className='p-[3.2rem] rounded-full bg-green-500 absolute  top-[-3rem] right-[-3rem]  '>
                </div>

                <div className='absolute z-10 top-[0.6rem] right-[0.7rem]
                 '>
                    <StarIcon color="white" stroke="black" />

                </div>

            </div>

            <div className='py-3 p-3'>
                <div><h4 className='font-bold text-[18px]'>{title}</h4></div>
                <div>{description.slice(0, 20)}...</div>
                <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold text-[1.5rem]'>$ {price}</p>
                    <ButtonComponent type="primary" className='' icon="+" size="large" htmlType="button" onClick={handleAddToCart} >
                        Add
                    </ButtonComponent>
                </div>

            </div>
        </div>


    )
}