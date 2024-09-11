import ButtonComponent from "@/app/components/button";
import ImageComponent from "@/app/components/images";
import ModalComponent1 from "@/app/components/modals/centerModal";
import StarIcon from "@/app/components/svg/svg/star";
import { useAddToCartMutation } from "@/lib/features/cart/cartApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useGetMenuQuery } from "@/lib/features/menu/menuApi";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

interface IMenuProps {
  _id?: any;
  images: any;
  name: string;
  description: string;
  price: string;
}
interface MenuData {
  item: IMenuProps;
}

export const MenuComponent = ({ item }: MenuData) => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  const userId = user && user?._id;

  const [addToCartMutation, { isSuccess }] = useAddToCartMutation();
  // const { data: menu, isLoading } = useGetMenuQuery(item?._id);
  const [modal, setModal] = useState<{ show: boolean; data?: any }>({
    show: false,
  });

  const handleAddToCart = async () => {
    try {
      if (userId) {
        const payload = { userId: userId, quantity: 1, _id: item?._id };
        await addToCartMutation(payload);
        // dispatch(setCarLength(carts?.data?.length)) as any
        toast.success("Cart added!");
      } else {
        toast.error("Have you to signIn/Login first!");
      }
    } catch (error) {
      toast.error("Cant add to cart!");
    }
  };

  return (
    <div>
      <div className=" card  w-[20rem]  shadow-lg rounded-md border-2 pb-5  ">
        <div className="relative overflow-hidden ">
          <ImageComponent
            src={item?.images?.[0]?.uri}
            alt="RestaurantImages"
            className=" rounded-full w-[23rem] h-[15rem] p-3"
          />
          <div className="p-[3.2rem] rounded-full bg-green-500 absolute  top-[-3rem] right-[-3rem]  "></div>

          <div
            className="absolute z-10 top-[0.6rem] right-[0.7rem]
                 "
          >
            <StarIcon color="white" stroke="black" />
          </div>
        </div>

        <div className="py-3 p-3">
          <div>
            <h4 className="font-bold text-[18px]">{item?.name}</h4>
          </div>
          <div>{item?.description?.slice(0, 20)}...</div>
          <div className="flex justify-between items-center py-2">
            <p className="font-semibold text-[1.5rem]">$ {item?.price}</p>
            {/* <ButtonComponent
              type="primary"
              className=""
              icon={<FaCartArrowDown />}
              size="large"
              htmlType="button"
              onClick={handleAddToCart}
            >
              Add
            </ButtonComponent> */}

            <ButtonComponent
              type="primary"
              className=""
              icon={<MdOutlineRemoveRedEye />}
              size="large"
              htmlType="button"
              onClick={() => setModal({ show: true })}
            >
              View
            </ButtonComponent>
          </div>
        </div>
      </div>
      <ModalComponent1
        title={"Product Information"}
        open={modal?.show}
        width={400}
        center={false}
        onDismiss={() => setModal({ show: false })}
      >
        <ImageComponent
          src={item?.images?.[0]?.uri}
          alt="RestaurantImages"
          className=" rounded-full w-[23rem] h-[15rem] p-3"
        />
        <h4 className="font-bold text-[18px]">{item?.name}</h4>

        <div className="flex gap-6 items-center">
          <p className="font-semibold text-[1.5rem]">$ {item?.price}</p>
          <div>
            <div className="flex items-center justify-center gap-4 p-2 ">
              <CiSquareMinus
                size={28}
                className="cursor-pointer text-red-500 hover:text-red-700"
                // onClick={handleDecrement}
              />
              <h5 className="text-xl font-bold text-gray-800">20</h5>
              <CiSquarePlus
                size={28}
                className="cursor-pointer text-green-500 hover:text-green-700"
                // onClick={handleIncrement}
              />
            </div>
          </div>
        </div>
        <div>{item?.description}</div>
        <ButtonComponent
          type="primary"
          className="w-full"
          icon={<FaCartArrowDown />}
          size="large"
          htmlType="button"
          onClick={handleAddToCart}
        >
          Add
        </ButtonComponent>
      </ModalComponent1>
    </div>
  );
};
